import React from 'react';
import { siteData } from '../config/data';
import { GopuramDivider } from './Motifs';
import { MapPin, ExternalLink, Navigation, Compass } from 'lucide-react';

// Reusable VenueCard Component for Wedding & Reception Locations
const VenueCard = ({
  title,
  name,
  address,
  searchQuery,
  navUrl,
  btnText,
  delayClass = 'delay-1'
}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Construct iframe embed URL specifically targeting Natrampalli Thirumurugan Alayam with place marker
  const mapEmbedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(searchQuery)}`
    : `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div style={styles.card} className={`reveal-scale ${delayClass}`}>
      {/* Header Badge & Title */}
      <div style={styles.cardHeader}>
        <div style={styles.badgeBox}>
          <Compass size={14} color="var(--color-maroon)" />
          <span style={styles.venueBadge}>{title}</span>
        </div>
        <h3 style={styles.venueName}>{name}</h3>
        <p style={styles.address}>
          <MapPin size={18} color="var(--color-maroon)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{address}</span>
        </p>
      </div>

      {/* Interactive Google Map centered specifically on the Temple/Venue */}
      <div style={styles.mapFrameWrapper}>
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${name} Map`}
          style={styles.mapIframe}
        />
        {/* Subtle glassmorphic location banner overlay */}
        <div style={styles.mapOverlayBanner}>
          <MapPin size={14} color="var(--color-gold-dark)" />
          <span>{name}</span>
        </div>
      </div>

      {/* Direct Google Maps Navigation Button */}
      <a
        href={navUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-maroon venue-direction-btn"
        style={styles.mapBtn}
      >
        <Navigation size={18} />
        <span>{btnText}</span>
        <ExternalLink size={16} style={{ opacity: 0.8 }} />
      </a>
    </div>
  );
};

const Venue = ({ lang }) => {
  const content = siteData[lang].venue;

  return (
    <section id="venue" style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <div style={styles.headerBox}>
          <h2 style={styles.title}>{content.title}</h2>
          <p style={styles.subtitle}>{content.subtitle}</p>
          <GopuramDivider />
        </div>

        <div style={styles.grid}>
          {/* Wedding / Muhurtham Venue Card */}
          <VenueCard
            title={content.weddingTitle}
            name={content.weddingName}
            address={content.weddingAddress}
            searchQuery={content.weddingSearchQuery}
            navUrl={content.weddingNavUrl}
            btnText={content.btnDirections}
            delayClass="delay-1"
          />

          {/* Wedding Reception Venue Card */}
          <VenueCard
            title={content.receptionTitle}
            name={content.receptionName}
            address={content.receptionAddress}
            searchQuery={content.receptionSearchQuery}
            navUrl={content.receptionNavUrl}
            btnText={content.btnDirections}
            delayClass="delay-2"
          />
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5.5rem 1.5rem',
    backgroundColor: 'var(--color-bg)'
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
    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--color-brown)',
    opacity: 0.85,
    marginTop: '0.4rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '2.5rem',
    alignItems: 'stretch'
  },
  card: {
    backgroundColor: 'var(--color-white)',
    border: '1.5px solid var(--color-gold)',
    borderRadius: '20px',
    padding: '2.5rem 2rem',
    boxShadow: 'var(--shadow-md)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative'
  },
  cardHeader: {
    marginBottom: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  badgeBox: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    backgroundColor: 'rgba(198, 161, 91, 0.15)',
    border: '1px solid var(--color-gold)',
    padding: '0.3rem 0.95rem',
    borderRadius: '30px',
    width: 'fit-content'
  },
  venueBadge: {
    color: 'var(--color-maroon-dark)',
    fontSize: '0.82rem',
    fontWeight: '700',
    letterSpacing: '0.8px',
    textTransform: 'uppercase'
  },
  venueName: {
    fontSize: '1.7rem',
    color: 'var(--color-maroon)',
    margin: '0.2rem 0',
    lineHeight: 1.3
  },
  address: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    fontSize: '0.98rem',
    color: 'var(--color-brown)',
    lineHeight: 1.5,
    opacity: 0.95
  },
  mapFrameWrapper: {
    position: 'relative',
    width: '100%',
    height: '260px',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid var(--color-gold-light)',
    margin: '1.25rem 0 1.5rem',
    backgroundColor: '#FAF5EC',
    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.06)'
  },
  mapIframe: {
    width: '100%',
    height: '100%',
    border: 0
  },
  mapOverlayBanner: {
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    backgroundColor: 'rgba(248, 241, 227, 0.92)',
    backdropFilter: 'blur(8px)',
    border: '1px solid var(--color-gold)',
    borderRadius: '20px',
    padding: '0.35rem 0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.82rem',
    fontWeight: '600',
    color: 'var(--color-maroon-dark)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  mapBtn: {
    width: '100%',
    marginTop: 'auto',
    justifyContent: 'center'
  }
};

// Dynamic Hover and Active Press Effects for Directions Buttons
const styleSheet = document.createElement('style');
styleSheet.innerText = `
  .venue-direction-btn {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease !important;
  }
  .venue-direction-btn:hover {
    transform: translateY(-3px) scale(1.01) !important;
    box-shadow: 0 10px 25px rgba(107, 30, 45, 0.25) !important;
  }
  .venue-direction-btn:active {
    transform: translateY(0) scale(0.98) !important;
    box-shadow: 0 4px 12px rgba(107, 30, 45, 0.15) !important;
  }
  div[style*="card"]:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;
document.head.appendChild(styleSheet);

export default Venue;
