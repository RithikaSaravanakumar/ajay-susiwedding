import React from 'react';
import { siteData } from '../config/data';
import { GopuramDivider, DeepamVilakku, VazhaiMaramSide } from './Motifs';
import { Calendar, Clock, MapPin, CalendarPlus, Sparkles, Navigation } from 'lucide-react';

const Events = ({ lang }) => {
  const isTa = lang === 'ta';
  const content = siteData[lang].events;

  const downloadICS = (eventObj) => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ajay & Susindra Wedding//EN
BEGIN:VEVENT
SUMMARY:${eventObj.title}
DESCRIPTION:${eventObj.description}
LOCATION:${eventObj.location}
DTSTART:${eventObj.startTime.replace(/[-:]/g, '')}
DTEND:${eventObj.endTime.replace(/[-:]/g, '')}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${eventObj.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="events" style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <div style={styles.headerBox}>
          <h2 style={styles.title}>{content.title}</h2>
          <p style={styles.subtitle}>{content.subtitle}</p>
          <GopuramDivider />
        </div>

        <div style={styles.eventsWrapper}>
          {/* UNIFIED MUHURTHAM EVENT & VENUE LOCATION CARD */}
          <div style={styles.unifiedEventCard} className="reveal-scale delay-1">
            <VazhaiMaramSide side="left" height={100} />
            <VazhaiMaramSide side="right" height={100} />

            <div style={styles.badge}>{content.wedding.badge}</div>

            {/* Top Ceremony Header */}
            <div style={styles.topCeremonyHeader}>
              <DeepamVilakku size={30} />
              <h3 style={styles.cardTitle}>{content.wedding.title}</h3>
              <p style={styles.ceremonySub}>
                {isTa ? 'நாட்றம்பள்ளி திருமுருகன் ஆலயம் சுபமுகூர்த்த நன்னாள்' : 'Sacred Ceremony at Natrampalli Thirumurugan Alayam'}
              </p>
            </div>

            {/* Auspicious Date & Time Group */}
            <div style={styles.dateTimeContainer}>
              <div style={styles.infoRow}>
                <Calendar size={18} color="var(--color-maroon)" />
                <span style={styles.infoTextBold}>{content.wedding.date}</span>
              </div>
              <div style={styles.infoRow}>
                <Clock size={18} color="var(--color-maroon)" />
                <span style={styles.infoTextBold}>{content.wedding.time}</span>
              </div>
              <button
                onClick={() => downloadICS(content.wedding.calendarEvent)}
                style={styles.inlineCalBtn}
                className="btn-outline-gold"
              >
                <CalendarPlus size={15} />
                <span>{content.addToCalendar}</span>
              </button>
            </div>

            {/* Visually Connected Kolam & Thoranam Separator */}
            <div style={styles.connectedDivider}>
              <div style={styles.divLine} />
              <span style={styles.divText}>
                {isTa ? '📍 திருமண நிகழ்விடம் & வழிகாட்டி' : '📍 WEDDING VENUE & DIRECTIONS'}
              </span>
              <div style={styles.divLine} />
            </div>

            {/* Connected Venue Location Details */}
            <div style={styles.venueLocationSection}>
              <div style={styles.venueHeaderRow}>
                <MapPin size={20} color="var(--color-maroon)" />
                <h4 style={styles.venueName}>{content.wedding.venue}</h4>
              </div>
              <p style={styles.venueAddress}>{content.wedding.address}</p>

              {/* Compact Google Map Preview Embed for Natrampalli Thirumurugan Alayam */}
              <div style={styles.mapContainer}>
                <iframe
                  title="Natrampalli Thirumurugan Alayam Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(content.wedding.searchQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  style={styles.iframe}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Get Directions Button */}
              <a
                href={content.wedding.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.directionsBtn}
                className="btn-maroon"
              >
                <Navigation size={16} />
                <span>{isTa ? 'வழிகாட்டி (Get Directions)' : 'Get Directions'}</span>
              </a>
            </div>
          </div>

          {/* UNIFIED RECEPTION EVENT & VENUE LOCATION CARD */}
          <div style={styles.unifiedEventCard} className="reveal-scale delay-2">
            <div style={styles.badge}>{content.reception.badge}</div>

            {/* Top Ceremony Header */}
            <div style={styles.topCeremonyHeader}>
              <Sparkles size={26} color="var(--color-gold-dark)" />
              <h3 style={styles.cardTitle}>{content.reception.title}</h3>
              <p style={styles.ceremonySub}>
                {isTa ? 'மணீஷ் மஹால் கோலாகல மாலை வரவேற்பு விழா' : 'Grand Festive Evening at Manish Mahal'}
              </p>
            </div>

            {/* Date & Time Group */}
            <div style={styles.dateTimeContainer}>
              <div style={styles.infoRow}>
                <Calendar size={18} color="var(--color-maroon)" />
                <span style={styles.infoTextBold}>{content.reception.date}</span>
              </div>
              <div style={styles.infoRow}>
                <Clock size={18} color="var(--color-maroon)" />
                <span style={styles.infoTextBold}>{content.reception.time}</span>
              </div>
              <button
                onClick={() => downloadICS(content.reception.calendarEvent)}
                style={styles.inlineCalBtn}
                className="btn-outline-gold"
              >
                <CalendarPlus size={15} />
                <span>{content.addToCalendar}</span>
              </button>
            </div>

            {/* Visually Connected Kolam Separator */}
            <div style={styles.connectedDivider}>
              <div style={styles.divLine} />
              <span style={styles.divText}>
                {isTa ? '📍 வரவேற்பு நிகழ்விடம் & வழிகாட்டி' : '📍 RECEPTION VENUE & DIRECTIONS'}
              </span>
              <div style={styles.divLine} />
            </div>

            {/* Connected Reception Location Details */}
            <div style={styles.venueLocationSection}>
              <div style={styles.venueHeaderRow}>
                <MapPin size={20} color="var(--color-maroon)" />
                <h4 style={styles.venueName}>{content.reception.venue}</h4>
              </div>
              <p style={styles.venueAddress}>{content.reception.address}</p>

              {/* Compact Google Map Preview Embed for Manish Mahal */}
              <div style={styles.mapContainer}>
                <iframe
                  title="Manish Mahal Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(content.reception.searchQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  style={styles.iframe}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Get Directions Button */}
              <a
                href={content.reception.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.directionsBtn}
                className="btn-maroon"
              >
                <Navigation size={16} />
                <span>{isTa ? 'வழிகாட்டி (Get Directions)' : 'Get Directions'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '2.5rem 1rem',
    backgroundColor: '#FAF6EE'
  },
  container: {
    maxWidth: '750px',
    margin: '0 auto',
    textAlign: 'center'
  },
  headerBox: {
    marginBottom: '1.5rem'
  },
  title: {
    fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  subtitle: {
    fontSize: '0.88rem',
    color: 'var(--color-brown)',
    opacity: 0.85,
    marginTop: '0.2rem'
  },
  eventsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center'
  },
  unifiedEventCard: {
    width: '100%',
    maxWidth: '380px',
    backgroundColor: '#FCFBF5',
    border: '1.5px dashed var(--color-maroon)',
    borderRadius: '16px',
    padding: '1.1rem 0.85rem 0.9rem',
    boxShadow: 'var(--shadow-md)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  badge: {
    position: 'absolute',
    top: '-11px',
    backgroundColor: 'var(--color-maroon)',
    color: 'var(--color-cream)',
    padding: '0.18rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.68rem',
    fontWeight: '700',
    letterSpacing: '0.6px',
    border: '1px solid var(--color-gold)'
  },
  topCeremonyHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.2rem',
    marginBottom: '0.5rem'
  },
  cardTitle: {
    fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  ceremonySub: {
    fontSize: '0.78rem',
    color: 'var(--color-gold-dark)',
    fontStyle: 'italic'
  },
  dateTimeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    width: '100%',
    maxWidth: '380px',
    margin: '0 auto 0.6rem'
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.35rem 0.6rem',
    backgroundColor: 'var(--color-white)',
    borderRadius: '8px',
    borderLeft: '3px solid var(--color-gold)',
    boxShadow: 'var(--shadow-sm)'
  },
  infoTextBold: {
    fontSize: '0.82rem',
    fontWeight: '600',
    color: 'var(--color-brown)'
  },
  inlineCalBtn: {
    marginTop: '0.2rem',
    padding: '0.25rem 0.65rem',
    fontSize: '0.72rem'
  },
  connectedDivider: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    width: '100%',
    maxWidth: '400px',
    margin: '0.4rem 0 0.8rem'
  },
  divLine: {
    height: '1px',
    flex: 1,
    background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)'
  },
  divText: {
    fontSize: '0.68rem',
    fontWeight: '700',
    color: 'var(--color-gold-dark)',
    letterSpacing: '0.8px',
    textTransform: 'uppercase'
  },
  venueLocationSection: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: 'var(--color-white)',
    border: '1px dashed var(--color-gold-light)',
    borderRadius: '12px',
    padding: '0.75rem 0.6rem',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.4rem'
  },
  venueHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem'
  },
  venueName: {
    fontSize: '0.98rem',
    color: 'var(--color-maroon)',
    margin: 0
  },
  venueAddress: {
    fontSize: '0.78rem',
    color: 'var(--color-brown)',
    opacity: 0.9,
    maxWidth: '380px'
  },
  mapContainer: {
    width: '100%',
    height: '90px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid var(--color-gold)',
    boxShadow: 'var(--shadow-sm)',
    margin: '0.2rem 0'
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 0
  },
  directionsBtn: {
    marginTop: '0.2rem',
    width: '100%',
    maxWidth: '200px',
    height: '28px',
    fontSize: '0.72rem'
  }
};

export default Events;
