import React from 'react';
import { siteData } from '../config/data';
import { GopuramDivider, DeepamVilakku, HandmadePaperFrame } from './Motifs';
import Monogram from './Monogram';

const Invitation = ({ lang }) => {
  const content = siteData[lang].invitation;

  return (
    <section id="invitation" style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <HandmadePaperFrame style={styles.invitationCard}>
          {/* Top Deepam & Monogram */}
          <div style={styles.topHeader}>
            <DeepamVilakku size={34} />
            <Monogram size="md" />
            <DeepamVilakku size={34} />
          </div>

          <p style={styles.subtitle}>{content.subtitle}</p>

          <h2 style={styles.title}>{content.title}</h2>

          <GopuramDivider />

          <p style={styles.greeting}>{content.greeting}</p>

          <p style={styles.message}>{content.message}</p>

          <div style={styles.signatureBox}>
            <p style={styles.signatureTitle}>{content.signatureTitle}</p>
            <h3 style={styles.signature}>{content.signature}</h3>
          </div>
        </HandmadePaperFrame>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5.5rem 1.5rem',
    backgroundColor: '#FAF5EC'
  },
  container: {
    maxWidth: '850px',
    margin: '0 auto'
  },
  invitationCard: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  topHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'var(--color-gold-dark)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '0.4rem'
  },
  title: {
    fontSize: 'clamp(2.4rem, 4.8vw, 3.4rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  greeting: {
    fontSize: '1.2rem',
    color: 'var(--color-maroon-dark)',
    fontStyle: 'italic',
    fontWeight: '600',
    margin: '1rem 0'
  },
  message: {
    fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
    color: 'var(--color-brown)',
    lineHeight: 1.8,
    maxWidth: '650px',
    margin: '0 auto 2rem'
  },
  signatureBox: {
    marginTop: '1.5rem',
    borderTop: '1px solid var(--color-gold-light)',
    paddingTop: '1.5rem',
    width: '100%',
    maxWidth: '400px'
  },
  signatureTitle: {
    fontSize: '0.85rem',
    color: 'var(--color-gold-dark)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '0.3rem'
  },
  signature: {
    fontSize: '1.5rem',
    color: 'var(--color-maroon)',
    margin: 0
  }
};

export default Invitation;
