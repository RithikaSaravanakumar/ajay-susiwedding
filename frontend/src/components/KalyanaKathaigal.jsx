import React, { useRef } from 'react';
import { siteData } from '../config/data';
import { GopuramDivider, LotusMotif } from './Motifs';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

const KalyanaKathaigal = ({ lang }) => {
  const isTa = lang === 'ta';
  const data = siteData[lang] || siteData.en;
  const title = data.kathaigalTitle;
  const subtitle = data.kathaigalSubTitle;
  const cards = data.kathaigalList;

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <div style={styles.headerBox}>
          <div style={styles.badgeRow}>
            <LotusMotif size={24} />
            <span style={styles.tagBadge}>
              {isTa ? 'கல்யாணக் கதைகள்' : 'KALYANA KATHAIGAL • MEMORIES'}
            </span>
          </div>

          <h2 style={styles.title}>{title}</h2>
          <p style={styles.subtitle}>{subtitle}</p>
          <GopuramDivider />
        </div>

        {/* Horizontal Navigation Control Buttons */}
        <div style={styles.navRow}>
          <button onClick={scrollLeft} style={styles.scrollBtn} aria-label="Scroll Left">
            <ChevronLeft size={24} color="var(--color-maroon)" />
          </button>
          <button onClick={scrollRight} style={styles.scrollBtn} aria-label="Scroll Right">
            <ChevronRight size={24} color="var(--color-maroon)" />
          </button>
        </div>

        {/* Horizontally Scrollable Memory Cards Container */}
        <div ref={scrollRef} style={styles.cardsTrack} className="no-scrollbar">
          {cards.map((item) => (
            <div key={item.id} style={styles.memoryCard} className="reveal-scale kathaigal-card">
              <div style={styles.cardHeader}>
                <Bookmark size={18} color="var(--color-gold-dark)" />
                <span style={styles.cardTag}>{item.tag}</span>
              </div>

              {/* Single Language Hierarchy: Title -> Story Sentence */}
              <div style={styles.titleGroup}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
              </div>

              <div style={styles.goldLine} />

              <p style={styles.storyText}>{item.story}</p>
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
    backgroundColor: 'var(--color-bg)',
    position: 'relative'
  },
  container: {
    maxWidth: '1250px',
    margin: '0 auto',
    textAlign: 'center'
  },
  headerBox: {
    marginBottom: '2rem'
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem'
  },
  tagBadge: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--color-gold-dark)',
    letterSpacing: '1.5px',
    textTransform: 'uppercase'
  },
  title: {
    fontFamily: 'var(--font-ta-display)',
    fontSize: 'clamp(2.4rem, 4.8vw, 3.4rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--color-brown)',
    opacity: 0.88,
    marginTop: '0.5rem'
  },
  navRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
    marginBottom: '1rem',
    paddingRight: '0.5rem'
  },
  scrollBtn: {
    background: 'var(--color-white)',
    border: '1.5px solid var(--color-gold)',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all 0.2s ease'
  },
  cardsTrack: {
    display: 'flex',
    gap: '1.6rem',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    padding: '0.75rem 0.25rem 2rem',
    scrollBehavior: 'smooth'
  },
  memoryCard: {
    flex: '0 0 310px',
    scrollSnapAlign: 'start',
    backgroundColor: 'var(--color-white)',
    border: '1.5px solid var(--color-gold-light)',
    borderRadius: '18px',
    padding: '2.2rem 1.8rem',
    boxShadow: 'var(--shadow-md)',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    minHeight: '250px',
    position: 'relative'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.75rem'
  },
  cardTag: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--color-gold-dark)',
    letterSpacing: '1px'
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.1rem'
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: 'var(--color-maroon)',
    margin: 0
  },
  goldLine: {
    width: '60px',
    height: '1px',
    backgroundColor: 'var(--color-gold)',
    margin: '0.8rem 0'
  },
  storyText: {
    fontSize: '0.98rem',
    color: 'var(--color-brown)',
    lineHeight: 1.65,
    opacity: 0.95
  }
};

export default KalyanaKathaigal;
