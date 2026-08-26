import React, { useState, useEffect } from 'react';
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
        {/* Full-Website Traditional Wedding Background Layer */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            opacity: 0.22,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

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
