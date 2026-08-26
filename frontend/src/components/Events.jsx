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
            <VazhaiMaramSide side="left" height={220} />
            <VazhaiMaramSide side="right" height={220} />

            <div style={styles.badge}>{content.wedding.badge}</div>

            {/* Top Ceremony Header */}
            <div style={styles.topCeremonyHeader}>
              <DeepamVilakku size={40} />
              <h3 style={styles.cardTitle}>{content.wedding.title}</h3>
              <p style={styles.ceremonySub}>
                {isTa ? 'நாட்றம்பள்ளி திருமுருகன் ஆலயம் சுபமுகூர்த்த நன்னாள்' : 'Sacred Ceremony at Natrampalli Thirumurugan Alayam'}
              </p>
            </div>

            {/* Auspicious Date & Time Group */}
            <div style={styles.dateTimeContainer}>
              <div style={styles.infoRow}>
                <Calendar size={22} color="var(--color-maroon)" />
                <span style={styles.infoTextBold}>{content.wedding.date}</span>
              </div>
              <div style={styles.infoRow}>
                <Clock size={22} color="var(--color-maroon)" />
                <span style={styles.infoTextBold}>{content.wedding.time}</span>
              </div>
              <button
                onClick={() => downloadICS(content.wedding.calendarEvent)}
                style={styles.inlineCalBtn}
                className="btn-outline-gold"
              >
                <CalendarPlus size={18} />
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
                <MapPin size={24} color="var(--color-maroon)" />
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
                <Navigation size={18} />
                <span>{isTa ? 'வழிகாட்டி (Get Directions)' : 'Get Directions'}</span>
              </a>
            </div>
          </div>

          {/* UNIFIED RECEPTION EVENT & VENUE LOCATION CARD */}
          <div style={styles.unifiedEventCard} className="reveal-scale delay-2">
            <div style={styles.badge}>{content.reception.badge}</div>

            {/* Top Ceremony Header */}
            <div style={styles.topCeremonyHeader}>
              <Sparkles size={36} color="var(--color-gold-dark)" />
              <h3 style={styles.cardTitle}>{content.reception.title}</h3>
              <p style={styles.ceremonySub}>
                {isTa ? 'மணீஷ் மஹால் கோலாகல மாலை வரவேற்பு விழா' : 'Grand Festive Evening at Manish Mahal'}
              </p>
            </div>

            {/* Date & Time Group */}
            <div style={styles.dateTimeContainer}>
              <div style={styles.infoRow}>
                <Calendar size={22} color="var(--color-maroon)" />
                <span style={styles.infoTextBold}>{content.reception.date}</span>
              </div>
              <div style={styles.infoRow}>
                <Clock size={22} color="var(--color-maroon)" />
                <span style={styles.infoTextBold}>{content.reception.time}</span>
              </div>
              <button
                onClick={() => downloadICS(content.reception.calendarEvent)}
                style={styles.inlineCalBtn}
                className="btn-outline-gold"
              >
                <CalendarPlus size={18} />
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
                <MapPin size={24} color="var(--color-maroon)" />
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
                <Navigation size={18} />
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
    padding: '5.5rem 1.5rem',
    backgroundColor: '#FAF6EE'
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center'
  },
  headerBox: {
    marginBottom: '3rem'
  },
  title: {
    fontSize: 'clamp(2.4rem, 4.8vw, 3.4rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--color-brown)',
    opacity: 0.85,
    marginTop: '0.4rem'
  },
  eventsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
    alignItems: 'center'
  },
  unifiedEventCard: {
    width: '100%',
    maxWidth: '850px',
    backgroundColor: '#FCFBF5',
    border: '2px solid var(--color-gold)',
    borderRadius: '24px',
    padding: '3rem 2rem 2.5rem',
    boxShadow: 'var(--shadow-lg)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  badge: {
    position: 'absolute',
    top: '-14px',
    backgroundColor: 'var(--color-maroon)',
    color: 'var(--color-cream)',
    padding: '0.35rem 1.25rem',
    borderRadius: '20px',
    fontSize: '0.82rem',
    fontWeight: '700',
    letterSpacing: '1px',
    border: '1px solid var(--color-gold)'
  },
  topCeremonyHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  },
  cardTitle: {
    fontSize: 'clamp(1.8rem, 3.8vw, 2.5rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  ceremonySub: {
    fontSize: '1rem',
    color: 'var(--color-gold-dark)',
    fontStyle: 'italic'
  },
  dateTimeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    maxWidth: '560px',
    margin: '0 auto 1.5rem'
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.85rem',
    padding: '0.85rem 1.25rem',
    backgroundColor: 'var(--color-white)',
    borderRadius: '12px',
    borderLeft: '4px solid var(--color-gold)',
    boxShadow: 'var(--shadow-sm)'
  },
  infoTextBold: {
    fontSize: '1.08rem',
    fontWeight: '600',
    color: 'var(--color-brown)'
  },
  inlineCalBtn: {
    marginTop: '0.5rem'
  },
  connectedDivider: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
    maxWidth: '650px',
    margin: '1rem 0 2rem'
  },
  divLine: {
    height: '1px',
    flex: 1,
    background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)'
  },
  divText: {
    fontSize: '0.82rem',
    fontWeight: '700',
    color: 'var(--color-gold-dark)',
    letterSpacing: '1.2px',
    textTransform: 'uppercase'
  },
  venueLocationSection: {
    width: '100%',
    maxWidth: '680px',
    backgroundColor: 'var(--color-white)',
    border: '1.5px solid var(--color-gold-light)',
    borderRadius: '16px',
    padding: '2rem 1.6rem',
    boxShadow: 'var(--shadow-md)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  },
  venueHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem'
  },
  venueName: {
    fontSize: '1.45rem',
    color: 'var(--color-maroon)',
    margin: 0
  },
  venueAddress: {
    fontSize: '0.98rem',
    color: 'var(--color-brown)',
    opacity: 0.9,
    maxWidth: '520px'
  },
  mapContainer: {
    width: '100%',
    height: '240px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid var(--color-gold)',
    boxShadow: 'var(--shadow-sm)',
    margin: '0.5rem 0'
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 0
  },
  directionsBtn: {
    marginTop: '0.5rem',
    width: '100%',
    maxWidth: '300px'
  }
};

export default Events;
