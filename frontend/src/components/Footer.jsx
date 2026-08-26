import React from 'react';
import { siteData } from '../config/data';
import Monogram from './Monogram';
import WhatsAppShare from './WhatsAppShare';
import { GopuramDivider, DeepamVilakku, UruliLotusBowl, TamilThoranam } from './Motifs';

const Footer = ({ lang }) => {
  const content = siteData[lang].footer;

  return (
    <footer style={styles.footer}>
      {/* Top Thoranam Garland */}
      <div style={styles.thoranamContainer}>
        <TamilThoranam />
      </div>

      <div style={styles.container}>
        {/* Deepam & Uruli Lotus Bowl Centerpiece */}
        <div style={styles.topIconBox}>
          <DeepamVilakku size={38} />
          <UruliLotusBowl size={70} />
          <DeepamVilakku size={38} />
        </div>

        {/* Final Blessing Tamil Section */}
        <div style={styles.blessingBox}>
          <h2 style={styles.blessingHeading}>{content.blessingHeading}</h2>
          <p style={styles.blessingSub}>{content.blessingSub}</p>
        </div>

        <GopuramDivider />

        <p style={styles.message}>{content.message}</p>

        <h2 style={styles.names}>{content.names}</h2>

        <div style={styles.shareBox}>
          <WhatsAppShare lang={lang} />
        </div>

        <p style={styles.credits}>
          © 2026 Ajay & Susindra Wedding. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#4A121E',
    backgroundImage: 'radial-gradient(circle at 50% 50%, #6B1E2D 0%, #3A0C16 100%)',
    color: 'var(--color-cream)',
    padding: '6rem 1.5rem 2.5rem',
    textAlign: 'center',
    borderTop: '2px solid var(--color-gold)',
    position: 'relative'
  },
  thoranamContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    opacity: 0.95
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
    position: 'relative',
    zIndex: 2
  },
  topIconBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem'
  },
  blessingBox: {
    margin: '0.5rem 0 1rem',
    maxWidth: '680px'
  },
  blessingHeading: {
    fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)',
    color: 'var(--color-gold-light)',
    marginBottom: '0.6rem'
  },
  blessingSub: {
    fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
    color: 'var(--color-cream)',
    lineHeight: 1.7,
    opacity: 0.95
  },
  message: {
    fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
    color: 'var(--color-gold-light)',
    fontStyle: 'italic',
    lineHeight: 1.6,
    maxWidth: '580px'
  },
  names: {
    fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
    color: 'var(--color-cream)',
    margin: '0.25rem 0'
  },
  shareBox: {
    margin: '1rem 0'
  },
  credits: {
    fontSize: '0.88rem',
    color: 'rgba(248, 241, 227, 0.5)',
    letterSpacing: '0.5px'
  }
};

export default Footer;
