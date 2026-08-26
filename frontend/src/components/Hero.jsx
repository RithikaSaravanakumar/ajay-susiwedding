import React, { useEffect, useRef } from 'react';
import { siteData } from '../config/data';
import Monogram from './Monogram';
import {
  TamilThoranam,
  JasmineGarland,
  GopuramDivider,
  DeepamVilakku,
  SikkuKolamCenterpiece,
  GoldenGopuramArtwork,
  TamilCoupleIllustration,
  VazhaiMaramFull
} from './Motifs';

const Hero = ({ lang }) => {
  const content = siteData[lang].hero;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Flowing Jasmine, Marigold, & Lotus Petals Array
    const particles = Array.from({ length: 42 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 6 + 4,
      speedY: Math.random() * 0.9 + 0.4,
      speedX: Math.random() * 0.6 - 0.3,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 1.5 - 0.75,
      opacity: Math.random() * 0.7 + 0.3,
      type: Math.random() > 0.5 ? 'jasmine' : Math.random() > 0.5 ? 'marigold' : 'lotus'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'jasmine') {
          // White Jasmine Flower (மல்லிகைப்பூ)
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 1.6, 0, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = '#F59E0B';
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.3, 0, 2 * Math.PI);
          ctx.fill();
        } else if (p.type === 'marigold') {
          // Golden-Yellow Marigold Petal (சாமந்திப்பூ)
          ctx.fillStyle = '#FBBF24';
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.2, p.size * 0.8, 0, 0, 2 * Math.PI);
          ctx.fill();
        } else {
          // Pink Lotus Petal (தாமரை இதழ்)
          ctx.fillStyle = '#F48FB1';
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.9, p.size * 1.8, 0, 0, 2 * Math.PI);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="hero-main-section" style={styles.heroSection}>
      {/* Floating Petals Canvas */}
      <canvas ref={canvasRef} style={styles.canvas} />

      {/* Top Tamil Thoranam Mango Leaf Garland */}
      <div style={styles.thoranamContainer}>
        <TamilThoranam />
      </div>

      {/* Side Vertical Jasmine Garlands */}
      <JasmineGarland side="left" />
      <JasmineGarland side="right" />

      {/* Background Sikku Kolam Centerpiece behind text */}
      <div style={styles.sikkuKolamBg}>
        <SikkuKolamCenterpiece size={340} opacity={0.35} />
      </div>

      {/* Reference Scene Artwork Bottom Overlays */}
      {/* Bottom-Left: Golden Temple Gopuram + Tamil Bride & Groom */}
      <div style={styles.bottomLeftScene}>
        <GoldenGopuramArtwork height={160} />
        <div style={styles.coupleWrapper}>
          <TamilCoupleIllustration height={105} />
        </div>
      </div>

      {/* Bottom-Right: Detailed Banana Tree (வாழை மரம்) with Fruit Cluster */}
      <div style={styles.bottomRightScene}>
        <VazhaiMaramFull height={160} />
      </div>

      <div style={styles.container} className="reveal-on-scroll">
        {/* Deepam Vilakku & Monogram */}
        <div style={styles.topIconBox}>
          <DeepamVilakku size={38} />
          <Monogram size="lg" />
          <DeepamVilakku size={38} />
        </div>

        {/* Wedding Tag */}
        <div style={styles.tagBadge}>
          <span>{content.weddingTag}</span>
        </div>

        {/* Couple Names */}
        <h1 style={styles.coupleNames}>{content.names}</h1>

        {/* Subtag Line */}
        <p style={styles.subTag}>{content.subTag}</p>

        <GopuramDivider />

        {/* Date Pill */}
        <div style={styles.datePill}>
          <span style={styles.dateText}>{content.date}</span>
        </div>

        {/* Traditional Quote */}
        <p style={styles.quoteText}>{content.quote}</p>

        {/* Scroll Prompt */}
        <div style={styles.scrollPrompt}>
          <span>{content.scrollText}</span>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#FAF5EC',
    backgroundImage: 'none',
    padding: '5rem 1.5rem 3rem',
    overflow: 'hidden',
    textAlign: 'center'
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1
  },
  thoranamContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10
  },
  sikkuKolamBg: {
    position: 'absolute',
    top: '48%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    pointerEvents: 'none'
  },
  bottomLeftScene: {
    position: 'absolute',
    bottom: '5px',
    left: '15px',
    display: 'flex',
    alignItems: 'flex-end',
    zIndex: 3,
    pointerEvents: 'none',
    opacity: 0.45
  },
  coupleWrapper: {
    marginLeft: '-40px',
    marginBottom: '5px'
  },
  bottomRightScene: {
    position: 'absolute',
    bottom: '5px',
    right: '15px',
    zIndex: 3,
    pointerEvents: 'none',
    opacity: 0.45
  },
  container: {
    position: 'relative',
    zIndex: 4,
    maxWidth: '850px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  },
  topIconBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    marginTop: '3.5rem',
    marginBottom: '0.5rem'
  },
  tagBadge: {
    backgroundColor: 'rgba(107, 30, 45, 0.08)',
    border: '1px solid var(--color-gold)',
    borderRadius: '30px',
    padding: '0.4rem 1.4rem',
    fontSize: '0.82rem',
    fontWeight: '700',
    color: 'var(--color-maroon-dark)',
    letterSpacing: '1.5px',
    textTransform: 'uppercase'
  },
  coupleNames: {
    fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
    color: 'var(--color-maroon)',
    margin: '0.2rem 0',
    lineHeight: 1.15
  },
  subTag: {
    fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
    color: 'var(--color-brown)',
    maxWidth: '680px',
    lineHeight: 1.6,
    opacity: 0.95
  },
  datePill: {
    backgroundColor: 'var(--color-maroon)',
    color: 'var(--color-cream)',
    padding: '0.6rem 2rem',
    borderRadius: '30px',
    fontSize: '1.05rem',
    fontWeight: '600',
    boxShadow: 'var(--shadow-md)',
    border: '1px solid var(--color-gold)'
  },
  quoteText: {
    fontStyle: 'italic',
    fontSize: 'clamp(1.02rem, 1.8vw, 1.18rem)',
    color: 'var(--color-brown)',
    maxWidth: '600px',
    margin: '0.5rem 0 1.5rem',
    opacity: 0.88
  },
  scrollPrompt: {
    fontSize: '0.9rem',
    color: 'var(--color-gold-dark)',
    fontWeight: '600',
    letterSpacing: '1px',
    animation: 'pulseSoft 2s infinite ease-in-out'
  }
};

export default Hero;
