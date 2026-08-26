import React from 'react';
import { KolamCorner } from './Motifs';

const QuoteCard = ({ text, lang }) => {
  return (
    <div style={styles.container} className="reveal-on-scroll">
      <div style={styles.card} className="reveal-scale">
        <div style={{ position: 'absolute', top: 8, left: 8 }}><KolamCorner position="top-left" /></div>
        <div style={{ position: 'absolute', top: 8, right: 8 }}><KolamCorner position="top-right" /></div>

        <p style={styles.quoteText}>{text}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem 1.5rem',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FAF5EC'
  },
  card: {
    position: 'relative',
    maxWidth: '750px',
    width: '100%',
    textAlign: 'center',
    padding: '2.5rem 2rem',
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-gold)',
    borderRadius: '16px',
    boxShadow: 'var(--shadow-sm)'
  },
  quoteText: {
    fontSize: 'clamp(1.25rem, 2.8vw, 1.65rem)',
    color: 'var(--color-maroon)',
    fontStyle: 'italic',
    lineHeight: 1.6,
    margin: 0
  }
};

export default QuoteCard;
