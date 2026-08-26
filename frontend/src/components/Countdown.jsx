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
    </section>
  );
};

const styles = {
  section: {
    padding: '5.5rem 1.5rem',
    background: 'linear-gradient(135deg, #5A1624 0%, #6B1E2D 50%, #4A121E 100%)',
    color: '#FFF',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2
  },
  headerBox: {
    marginBottom: '3rem'
  },
  title: {
    fontSize: 'clamp(2.4rem, 4.8vw, 3.4rem)',
    color: 'var(--color-gold-light)',
    margin: 0
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--color-cream)',
    opacity: 0.9,
    marginTop: '0.4rem'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(10px)',
    border: '1.5px solid rgba(198, 161, 91, 0.4)',
    borderRadius: '16px',
    padding: '1.8rem 1.5rem',
    minWidth: '135px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, border-color 0.3s ease'
  },
  valueBox: {
    lineHeight: 1,
    marginBottom: '0.5rem'
  },
  value: {
    fontFamily: 'var(--font-en-display)',
    fontSize: 'clamp(2.8rem, 5vw, 3.8rem)',
    fontWeight: '700',
    color: 'var(--color-gold-light)',
    letterSpacing: '1px'
  },
  label: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--color-cream)'
  }
};

export default Countdown;
