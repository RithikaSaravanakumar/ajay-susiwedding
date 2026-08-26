import React from 'react';
import { siteData } from '../config/data';
import Monogram from './Monogram';
import { GopuramDivider } from './Motifs';
import { Heart } from 'lucide-react';

const Couple = ({ lang }) => {
  const content = siteData[lang].couple;

  return (
    <section id="couple" style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <div style={styles.headerBox}>
          <span style={styles.subtitle}>{content.subtitle}</span>
          <h2 style={styles.title}>{content.title}</h2>
          <GopuramDivider />
        </div>

        <div style={styles.contentCard} className="reveal-scale">
          {/* Monogram Watermark */}
          <div style={styles.watermark}>
            <Monogram size="xl" />
          </div>

          <div style={styles.coupleRow} className="couple-names-row">
            {/* Groom Box */}
            <div style={styles.personBox}>
              <h3 style={styles.personName}>{content.groomName}</h3>
              <span style={styles.personRole}>{content.groomRole}</span>
            </div>

            {/* Heart Divider Icon */}
            <div style={styles.heartWrapper}>
              <Heart size={24} fill="var(--color-gold)" color="var(--color-gold)" />
            </div>

            {/* Bride Box */}
            <div style={styles.personBox}>
              <h3 style={styles.personName}>{content.brideName === "Susindra" ? "Susi" : (content.brideName === "சுசிந்ரா" ? "சுசி" : content.brideName)}</h3>
              <span style={styles.personRole}>{content.brideRole}</span>
            </div>
          </div>

          <p style={styles.description}>{content.description}</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5rem 1.5rem',
    backgroundColor: 'var(--color-bg)'
  },
  container: {
    maxWidth: '850px',
    margin: '0 auto',
    textAlign: 'center'
  },
  headerBox: {
    marginBottom: '2.5rem'
  },
  subtitle: {
    fontSize: '0.9rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'var(--color-gold-dark)',
    fontWeight: '700',
    display: 'block',
    marginBottom: '0.5rem'
  },
  title: {
    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  contentCard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-gold-light)',
    borderRadius: '16px',
    padding: '3.5rem 2.5rem',
    boxShadow: 'var(--shadow-md)',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '580px',
    margin: '0 auto'
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.06,
    pointerEvents: 'none'
  },
  coupleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.5rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  },
  personBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem'
  },
  personName: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  personRole: {
    fontSize: '0.88rem',
    color: 'var(--color-gold-dark)',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontWeight: '600'
  },
  heartWrapper: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    backgroundColor: 'rgba(198, 161, 91, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
    lineHeight: 1.85,
    color: 'var(--color-brown)',
    maxWidth: '680px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  }
};

export default Couple;
