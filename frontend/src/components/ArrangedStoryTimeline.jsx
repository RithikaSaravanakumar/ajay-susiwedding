import React from 'react';
import { siteData } from '../config/data';
import { GopuramDivider, DeepamVilakku, BananaLeafMotif, VazhaiMaramSide, TerracottaKolamFrame, SikkuKolamCardBorder } from './Motifs';
import { Users, Sparkles, HeartHandshake, Utensils, ShoppingBag, Camera, Gift, Sun, PartyPopper } from 'lucide-react';

const iconMap = {
  Users: Users,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Utensils: Utensils,
  Ring: Sparkles,
  ShoppingBag: ShoppingBag,
  Camera: Camera,
  Gift: Gift,
  Sun: Sun,
  PartyPopper: PartyPopper
};

const ArrangedStoryTimeline = ({ lang }) => {
  const isTa = lang === 'ta';
  const data = siteData[lang] || siteData.en;
  const title = data.storyTitle;
  const subtitle = data.storySubTitle;
  const timelineEvents = data.storyTimeline;

  return (
    <section id="story" className="story-main-section" style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <div style={styles.headerBox}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.subtitle}>{subtitle}</p>
          <GopuramDivider />
        </div>

        <div style={styles.timelineWrapper}>
          {/* Vertical Center Gold Timeline Line */}
          <div style={styles.timelineLine} className="timeline-center-line" />

          {timelineEvents.map((item, index) => {
            const IconComp = iconMap[item.icon] || Sparkles;
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                style={{
                  ...styles.timelineItem,
                  flexDirection: isEven ? 'row' : 'row-reverse'
                }}
                className="timeline-item-container"
              >
                {/* Timeline Card */}
                <div
                  style={{
                    ...styles.cardWrapper,
                    textAlign: isEven ? 'right' : 'left'
                  }}
                  className={`timeline-card-wrapper reveal-scale delay-${(index % 4) + 1}`}
                >
                  {/* Terracotta Kolam Frame for milestone cards */}
                  <TerracottaKolamFrame style={styles.storyCard}>
                    <SikkuKolamCardBorder />

                    <div style={styles.cardTagRow}>
                      <span style={styles.calligraphicTag}>{item.calligraphicTag}</span>
                    </div>

                    <h3 style={styles.itemTitle}>{item.title}</h3>

                    <p style={styles.quoteText}>{item.quote}</p>

                    <div style={styles.dividerLine} />

                    <p style={styles.itemDesc}>{item.desc}</p>

                    {/* Special Kai Ninaithal Split Feast Sub-Cards */}
                    {item.isSplit && (
                      <div style={styles.splitFeastContainer}>
                        <div style={styles.feastSubCard}>
                          <BananaLeafMotif size={36} />
                          <h4 style={styles.feastTitle}>{item.brideHome.title}</h4>
                          <p style={styles.feastDesc}>{item.brideHome.desc}</p>
                        </div>

                        <div style={styles.feastSubCard}>
                          <VazhaiMaramSide side="left" height={100} />
                          <h4 style={styles.feastTitle}>{item.groomHome.title}</h4>
                          <p style={styles.feastDesc}>{item.groomHome.desc}</p>
                        </div>
                      </div>
                    )}
                  </TerracottaKolamFrame>
                </div>

                {/* Timeline Node Center Dot */}
                <div style={styles.nodeDot} className="timeline-node-dot">
                  <IconComp size={20} color="var(--color-maroon)" />
                </div>

                {/* Empty Balancing Spacer for Desktop Grid */}
                <div style={styles.emptySpacer} className="timeline-empty-spacer" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '5.5rem 1.5rem',
    backgroundColor: '#FAF5EC',
    position: 'relative'
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center'
  },
  headerBox: {
    marginBottom: '3.5rem'
  },
  title: {
    fontSize: 'clamp(2.4rem, 4.8vw, 3.4rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--color-brown)',
    opacity: 0.88,
    marginTop: '0.4rem'
  },
  timelineWrapper: {
    position: 'relative',
    padding: '1rem 0'
  },
  timelineLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(180deg, var(--color-gold) 0%, var(--color-maroon) 50%, var(--color-gold) 100%)',
    transform: 'translateX(-50%)',
    zIndex: 1
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3.5rem',
    position: 'relative',
    width: '100%'
  },
  cardWrapper: {
    width: '45%',
    zIndex: 2
  },
  storyCard: {
    textAlign: 'left'
  },
  cardTagRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.6rem'
  },
  stepTag: {
    backgroundColor: 'rgba(229, 202, 143, 0.2)',
    border: '1px solid var(--color-gold-light)',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--color-gold-light)'
  },
  calligraphicTag: {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    color: 'var(--color-gold-light)',
    opacity: 0.9
  },
  itemTitle: {
    fontSize: '1.65rem',
    color: 'var(--color-gold-light)',
    margin: '0.2rem 0 0.5rem'
  },
  quoteText: {
    fontSize: '0.98rem',
    fontStyle: 'italic',
    color: 'var(--color-cream)',
    opacity: 0.9,
    marginBottom: '0.6rem'
  },
  dividerLine: {
    height: '1px',
    backgroundColor: 'rgba(198, 161, 91, 0.4)',
    margin: '0.75rem 0'
  },
  itemDesc: {
    fontSize: '0.96rem',
    color: 'var(--color-cream)',
    lineHeight: 1.6,
    opacity: 0.92
  },
  splitFeastContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '1rem',
    marginTop: '1.25rem',
    paddingTop: '1rem',
    borderTop: '1px stroke rgba(255,255,255,0.2)'
  },
  feastSubCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '1rem',
    border: '1px solid rgba(229, 202, 143, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  feastTitle: {
    fontSize: '1rem',
    color: 'var(--color-gold-light)',
    margin: '0.4rem 0 0.2rem'
  },
  feastDesc: {
    fontSize: '0.82rem',
    color: 'var(--color-cream)',
    opacity: 0.88,
    lineHeight: 1.4
  },
  nodeDot: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-cream)',
    border: '2px solid var(--color-gold)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-md)',
    zIndex: 3
  },
  emptySpacer: {
    width: '45%'
  }
};

export default ArrangedStoryTimeline;
