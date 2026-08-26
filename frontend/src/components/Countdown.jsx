import React, { useState, useEffect } from 'react';
import { siteData } from '../config/data';
import { GopuramDivider } from './Motifs';

const Countdown = ({ lang }) => {
  const content = siteData[lang].countdown;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Wedding Muhurtham Date: September 13, 2026 04:30 AM IST
    const weddingDate = new Date('2026-09-13T04:30:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: content.days, value: timeLeft.days },
    { label: content.hours, value: timeLeft.hours },
    { label: content.minutes, value: timeLeft.minutes },
    { label: content.seconds, value: timeLeft.seconds }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <div style={styles.cardContainer} className="countdown-main-card">
          <div style={styles.headerBox}>
            <h2 style={styles.title}>{content.title}</h2>
            <p style={styles.subtitle}>{content.subtitle}</p>
            <GopuramDivider />
          </div>

          <div style={styles.grid} className="countdown-grid-container">
            {timeBlocks.map((block, idx) => (
              <div key={idx} style={styles.card} className="countdown-timer-box reveal-scale delay-1">
                <div style={styles.valueBox}>
                  <span style={styles.value}>
                    {String(block.value).padStart(2, '0')}
                  </span>
                </div>
                <span style={styles.label}>{block.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '3.5rem 1rem',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '520px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2
  },
  cardContainer: {
    backgroundColor: '#FAF5EC',
    backgroundImage: 'radial-gradient(#6B1E2D 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    border: '1.5px dashed var(--color-maroon)',
    borderRadius: '24px',
    padding: '2rem 1.25rem',
    boxShadow: '0 10px 30px rgba(107, 30, 45, 0.1)',
    maxWidth: '420px',
    margin: '0 auto'
  },
  headerBox: {
    marginBottom: '1.5rem'
  },
  title: {
    fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  subtitle: {
    fontSize: '0.95rem',
    color: 'var(--color-brown)',
    opacity: 0.9,
    marginTop: '0.3rem'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    flexWrap: 'nowrap'
  },
  card: {
    backgroundColor: 'var(--color-terracotta)',
    border: '1.5px dashed var(--color-gold)',
    borderRadius: '16px',
    padding: '0.8rem 0.4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 6px 16px rgba(107, 30, 45, 0.15)',
    transition: 'transform 0.3s ease'
  },
  valueBox: {
    lineHeight: 1,
    marginBottom: '0.25rem'
  },
  value: {
    fontFamily: 'var(--font-en-display)',
    fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
    fontWeight: '700',
    color: 'var(--color-gold-light)',
    letterSpacing: '0.5px'
  },
  label: {
    fontSize: '0.78rem',
    fontWeight: '600',
    color: 'var(--color-cream)'
  }
};

export default Countdown;
