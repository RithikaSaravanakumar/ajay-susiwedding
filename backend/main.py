from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import gspread
import os
import sqlite3
from typing import Optional
from datetime import datetime

app = FastAPI(title="Ajay & Susindra Wedding RSVP API")

# Allow CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for local dev and hosting
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# SQLite Database Initialization
DB_FILE = os.path.join(os.path.dirname(__file__), "rsvps.db")

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS rsvps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT NOT NULL,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            guests INTEGER NOT NULL,
            event TEXT NOT NULL,
            message TEXT
        )
    ''')
    conn.commit()
    conn.close()

init_db()

class RSVPRequest(BaseModel):
    name: str = Field(..., min_length=2)
    phone: str = Field(..., min_length=5)
    guests: int = Field(1, ge=1, le=20)
    event: str
    message: Optional[str] = ""

# Scope for Google Sheets API
CREDENTIALS_FILE = os.path.join(os.path.dirname(__file__), "credentials.json")
SHEET_NAME = "Ajay Susindra Wedding RSVP"

def append_to_google_sheets(rsvp: RSVPRequest, timestamp_str: str):
    if not os.path.exists(CREDENTIALS_FILE):
        print("Notice: credentials.json not found. Skipping Google Sheets export.")
        return False
    
    try:
        scope = [
            'https://spreadsheets.google.com/feeds',
            'https://www.googleapis.com/auth/drive'
        ]
        client = gspread.service_account(filename=CREDENTIALS_FILE)
        
        # Try to open existing sheet, or log warning if missing
        try:
            sheet = client.open(SHEET_NAME).sheet1
        except Exception:
            # Try opening first available spreadsheet
            spreadsheets = client.openall()
            if spreadsheets:
                sheet = spreadsheets[0].sheet1
            else:
                raise Exception("No accessible Google Sheets found.")
        
        row = [
            timestamp_str,
            rsvp.name,
            rsvp.phone,
            rsvp.guests,
            rsvp.event,
            rsvp.message or ""
        ]
        sheet.append_row(row)
        return True
    except Exception as e:
        print(f"Google Sheets Sync Warning: {e}")
        return False

@app.get("/")
def read_root():
    return {"message": "Ajay & Susindra Wedding RSVP Backend API is running."}

@app.post("/api/rsvp")
async def submit_rsvp(rsvp: RSVPRequest):
    timestamp_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # 1. Always save to local SQLite DB first
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO rsvps (timestamp, name, phone, guests, event, message) VALUES (?, ?, ?, ?, ?, ?)",
            (timestamp_str, rsvp.name, rsvp.phone, rsvp.guests, rsvp.event, rsvp.message)
        )
        conn.commit()
        conn.close()
    except Exception as db_err:
        print(f"Database insertion error: {db_err}")
        raise HTTPException(status_code=500, detail="Database Error: Unable to save RSVP locally.")

    # 2. Attempt Google Sheets Sync
    sheets_synced = append_to_google_sheets(rsvp, timestamp_str)

    return {
        "status": "success",
        "message": "RSVP submitted successfully",
        "saved_locally": True,
        "sheets_synced": sheets_synced
    }

@app.get("/api/rsvps")
async def get_rsvps():
    try:
        conn = sqlite3.connect(DB_FILE)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM rsvps ORDER BY id DESC")
        rows = cursor.fetchall()
        rsvps = [dict(row) for row in rows]
        conn.close()
        return {"status": "success", "count": len(rsvps), "data": rsvps}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
