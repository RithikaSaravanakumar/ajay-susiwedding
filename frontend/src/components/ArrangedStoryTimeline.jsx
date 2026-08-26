import React from 'react';
import { siteData } from '../config/data';
import { GopuramDivider, DeepamVilakku, BananaLeafMotif, VazhaiMaramSide, TerracottaKolamFrame } from './Motifs';
import {
  Users, Sparkles, HeartHandshake, Utensils, Gem,
  ShoppingBag, Camera, Gift, Sun, PartyPopper, Home
} from 'lucide-react';

const iconMap = {
  Users: Users,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Utensils: Utensils,
  Ring: Gem,
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
  const subTitle = data.storySubTitle;
  const timeline = data.storyTimeline;

  return (
    <section id="story" style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <div style={styles.headerBox}>
          <span style={styles.storyBadge}>
            {isTa ? 'அமைக்கப்பட்ட திருமணம்' : 'ARRANGED MARRIAGE JOURNEY'}
          </span>

          <h2 style={styles.title}>{title}</h2>
          <p style={styles.subtitle}>{subTitle}</p>

          <GopuramDivider />
        </div>

        {/* Vertical Timeline Container */}
        <div style={styles.timelineWrapper}>
          {/* Vertical Central Gold Connecting Line */}
          <div style={styles.verticalGoldLine} />

          {timeline.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || Sparkles;
            const isEven = idx % 2 === 0;

            // Apply Terracotta treatment selectively to key story cards (e.g. step 1, step 3, engagement)
            const isTerracotta = idx % 3 === 0;

            // Handle Special Kai Ninaithal Split Card
            if (step.isSplit) {
              return (
                <div key={step.id} style={{ width: '100%', maxWidth: '880px', margin: '1.5rem auto', zIndex: 3 }} className="reveal-scale">
                  <TerracottaKolamFrame>
                    <div style={styles.stepBadgeBox}>
                      <BananaLeafMotif size={36} />
                      <span style={{ ...styles.calligraphicTag, color: 'var(--color-gold-light)' }}>{step.calligraphicTag}</span>
                      <span style={{ ...styles.stepTag, color: 'var(--color-cream)' }}>{step.tag}</span>
                    </div>

                    <h3 style={{ ...styles.stepTitle, color: 'var(--color-gold-light)' }}>{step.title}</h3>
                    <p style={{ ...styles.stepQuote, color: 'var(--color-cream)' }}>{step.quote}</p>
                    <p style={{ ...styles.stepDesc, color: 'var(--color-cream)', opacity: 0.9 }}>{step.desc}</p>

                    {/* Split Cards: Bride's Home & Groom's Home */}
                    <div style={styles.splitCardsContainer}>
                      <div style={styles.homeCardTerracotta} className="reveal-on-scroll">
                        <div style={styles.homeHeader}>
                          <Home size={20} color="var(--color-gold-light)" />
                          <h4 style={{ ...styles.homeTitle, color: 'var(--color-gold-light)' }}>{step.brideHome.title}</h4>
                        </div>
                        <p style={{ ...styles.homeDesc, color: 'var(--color-cream)' }}>{step.brideHome.desc}</p>
                      </div>

                      <div style={styles.homeCardTerracotta} className="reveal-on-scroll">
                        <div style={styles.homeHeader}>
                          <Home size={20} color="var(--color-gold-light)" />
                          <h4 style={{ ...styles.homeTitle, color: 'var(--color-gold-light)' }}>{step.groomHome.title}</h4>
                        </div>
                        <p style={{ ...styles.homeDesc, color: 'var(--color-cream)' }}>{step.groomHome.desc}</p>
                      </div>
                    </div>

                    {/* Merge Ornament */}
                    <div style={styles.mergeOrnament}>
                      <div style={{ ...styles.mergeLine, background: 'linear-gradient(90deg, transparent, #C6A15B, transparent)' }} />
                      <span style={{ ...styles.mergeText, color: 'var(--color-gold-light)' }}>
                        {isTa ? 'இரு குடும்பங்களும் இணைந்த தருணம்' : 'Two Families Merged into One'}
                      </span>
                      <div style={{ ...styles.mergeLine, background: 'linear-gradient(90deg, transparent, #C6A15B, transparent)' }} />
                    </div>
                  </TerracottaKolamFrame>
                </div>
              );
            }

            return (
              <div
                key={step.id}
                style={{
                  ...styles.timelineItem,
                  flexDirection: isEven ? 'row' : 'row-reverse'
                }}
                className={`reveal-scale delay-${(idx % 3) + 1}`}
              >
                {/* Content Card */}
                <div style={{
                  ...styles.cardBox,
                  ...(isTerracotta ? styles.terracottaCardStyle : {})
                }}>
                  {step.id === 'muhurtham' && (
                    <>
                      <VazhaiMaramSide side="left" height={160} />
                      <VazhaiMaramSide side="right" height={160} />
                    </>
                  )}

                  <div style={styles.cardHeaderRow}>
                    <div>
                      <span style={{ ...styles.calligraphicTag, color: isTerracotta ? 'var(--color-gold-light)' : 'var(--color-maroon)' }}>{step.calligraphicTag}</span>
                      <span style={{ ...styles.stepTag, color: isTerracotta ? 'var(--color-cream)' : 'var(--color-gold-dark)' }}>{step.tag}</span>
                    </div>
                    {step.id === 'muhurtham' && <DeepamVilakku size={28} />}
                  </div>

                  <h3 style={{ ...styles.stepTitle, color: isTerracotta ? 'var(--color-gold-light)' : 'var(--color-maroon)' }}>{step.title}</h3>
                  <p style={{ ...styles.stepQuote, color: isTerracotta ? 'var(--color-cream)' : 'var(--color-maroon-dark)' }}>{step.quote}</p>
                  <p style={{ ...styles.stepDesc, color: isTerracotta ? 'var(--color-cream)' : 'var(--color-brown)' }}>{step.desc}</p>
                </div>

                {/* Center Node Icon */}
                <div style={styles.centerNode}>
                  <div style={styles.iconCircle}>
                    <IconComponent size={20} color="var(--color-maroon)" />
                  </div>
                </div>

                {/* Empty Balancing Spacer */}
                <div style={styles.spacerBox} />
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
    backgroundColor: '#FAF6EE',
    position: 'relative'
  },
  container: {
    maxWidth: '1050px',
    margin: '0 auto',
    textAlign: 'center'
  },
  headerBox: {
    marginBottom: '4rem'
  },
  storyBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(46, 125, 50, 0.12)',
    color: 'var(--color-green-dark)',
    border: '1px solid var(--color-green)',
    padding: '0.3rem 1.1rem',
    borderRadius: '30px',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '1.5px',
    marginBottom: '0.75rem'
  },
  title: {
    fontFamily: 'var(--font-ta-display)',
    fontSize: 'clamp(2.4rem, 4.8vw, 3.4rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  subtitle: {
    fontSize: '1.15rem',
    color: 'var(--color-brown)',
    opacity: 0.88,
    marginTop: '0.4rem'
  },
  timelineWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    padding: '1rem 0'
  },
  verticalGoldLine: {
    position: 'absolute',
    top: '20px',
    bottom: '20px',
    left: '50%',
    width: '2px',
    background: 'linear-gradient(180deg, transparent, var(--color-gold) 10%, var(--color-gold) 90%, transparent)',
    transform: 'translateX(-50%)',
    zIndex: 1
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    zIndex: 2
  },
  cardBox: {
    width: 'calc(50% - 40px)',
    backgroundColor: 'var(--color-white)',
    border: '1.5px solid var(--color-gold-light)',
    borderRadius: '18px',
    padding: '2rem 1.8rem',
    boxShadow: 'var(--shadow-md)',
    textAlign: 'left',
    position: 'relative',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease'
  },
  terracottaCardStyle: {
    backgroundColor: '#7A2535',
    backgroundImage: 'radial-gradient(#9B3245 1px, transparent 1px)',
    backgroundSize: '20px 20px',
    border: '2px solid var(--color-gold)',
    boxShadow: '0 12px 35px rgba(122, 37, 53, 0.25)'
  },
  cardHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.5rem'
  },
  calligraphicTag: {
    fontSize: '0.78rem',
    fontWeight: '700',
    display: 'block',
    letterSpacing: '1px'
  },
  stepTag: {
    fontSize: '0.72rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  },
  stepTitle: {
    fontSize: '1.55rem',
    margin: '0.3rem 0 0.5rem'
  },
  stepQuote: {
    fontSize: '1.05rem',
    fontStyle: 'italic',
    marginBottom: '0.6rem',
    lineHeight: 1.6
  },
  stepDesc: {
    fontSize: '0.96rem',
    lineHeight: 1.6,
    opacity: 0.9
  },
  centerNode: {
    width: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3
  },
  iconCircle: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-cream)',
    border: '2px solid var(--color-gold)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(107, 30, 45, 0.15)'
  },
  spacerBox: {
    width: 'calc(50% - 40px)'
  },
  stepBadgeBox: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.2rem',
    marginBottom: '0.5rem'
  },
  splitCardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    margin: '2rem 0 1.5rem',
    textAlign: 'left'
  },
  homeCardTerracotta: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    border: '1px solid var(--color-gold-light)',
    borderRadius: '14px',
    padding: '1.6rem'
  },
  homeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    marginBottom: '0.5rem'
  },
  homeTitle: {
    fontSize: '1.25rem',
    margin: 0
  },
  homeDesc: {
    fontSize: '0.92rem',
    lineHeight: 1.5
  },
  mergeOrnament: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem'
  },
  mergeLine: {
    height: '1px',
    flex: 1
  },
  mergeText: {
    fontSize: '0.82rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  }
};

export default ArrangedStoryTimeline;
