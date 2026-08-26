import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import ArrangedStoryTimeline from './components/ArrangedStoryTimeline';
import KalyanaKathaigal from './components/KalyanaKathaigal';
import QuoteCard from './components/QuoteCard';
import Events from './components/Events';
import Countdown from './components/Countdown';
import Couple from './components/Couple';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import { FullPageSikkuKolamFrame } from './components/Motifs';
import { useScrollReveal } from './hooks/useScrollReveal';
import { siteData } from './config/data';

import bgImage from './assets/background.jpg';

// Continuous Full-Website Falling Flowers Canvas Component
const FullPageFallingPetals = () => {
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

    // Jasmine, Marigold, & Lotus Falling Flowers Array
    const petals = Array.from({ length: 45 }).map(() => ({
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

      petals.forEach((p) => {
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
          // Orange/Yellow Marigold Petal
          ctx.fillStyle = '#FBBF24';
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.2, p.size * 0.8, 0, 0, 2 * Math.PI);
          ctx.fill();
        } else {
          // Pink Lotus Petal
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
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 99
      }}
    />
  );
};

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('weddingLang') || 'en';
  });

  // Activate scroll-reveal animation observer
  useScrollReveal();

  useEffect(() => {
    document.body.className = `lang-${lang}`;
    localStorage.setItem('weddingLang', lang);
  }, [lang]);

  const quotes = siteData[lang].quotes || [];

  return (
    <FullPageSikkuKolamFrame>
      <div className="app-container" style={{ position: 'relative' }}>
        {/* Low Opacity Traditional Wedding Background Layer */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            opacity: 0.20,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* Continuous Full-Website Falling Flowers Canvas */}
        <FullPageFallingPetals />

        {/* Sticky Header Nav with Language Switcher */}
        <Header lang={lang} setLang={setLang} />

        <main style={{ position: 'relative', zIndex: 1 }}>
          {/* Fullscreen Hero */}
          <Hero lang={lang} />

          {/* Digital Luxury Invitation Card */}
          <Invitation lang={lang} />

          {/* Quote Card 1 */}
          {quotes[0] && <QuoteCard text={quotes[0]} lang={lang} />}

          {/* Arranged Marriage Story Timeline */}
          <ArrangedStoryTimeline lang={lang} />

          {/* Quote Card 2 */}
          {quotes[1] && <QuoteCard text={quotes[1]} lang={lang} />}

          {/* Kalyana Kathaigal Memory Story Cards */}
          <KalyanaKathaigal lang={lang} />

          {/* Couple Story */}
          <Couple lang={lang} />

          {/* Wedding Events (Muhurtham & Reception Integrated with Locations & Maps) */}
          <Events lang={lang} />

          {/* Live Countdown Timer */}
          <Countdown lang={lang} />

          {/* Photo Gallery & Lightbox */}
          <Gallery lang={lang} />

          {/* Quote Card 3 */}
          {quotes[2] && <QuoteCard text={quotes[2]} lang={lang} />}

          {/* RSVP Registration */}
          <RSVP lang={lang} />
        </main>

        {/* Footer & Final Blessing */}
        <Footer lang={lang} style={{ position: 'relative', zIndex: 1 }} />

        {/* Ambient Audio Player Toggle */}
        <MusicPlayer lang={lang} />
      </div>
    </FullPageSikkuKolamFrame>
  );
}

export default App;
