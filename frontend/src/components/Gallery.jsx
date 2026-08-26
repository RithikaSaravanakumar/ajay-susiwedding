import React, { useState, useEffect } from 'react';
import { siteData } from '../config/data';
import { GopuramDivider, BananaLeafDecoration, KolamCorner, LotusMotif } from './Motifs';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

import couple1 from '../assets/couple1.jpeg';
import couple2 from '../assets/couple2.jpeg';
import couple3 from '../assets/couple3.jpeg';
import couple4 from '../assets/couple4.jpeg';

const Gallery = ({ lang }) => {
  const content = siteData[lang].gallery;
  const [activeImgIndex, setActiveImgIndex] = useState(null);

  const images = [
    {
      url: couple1,
      caption: lang === 'ta' ? 'அழகிய தருணங்கள்' : 'Moments of Pure Joy'
    },
    {
      url: couple2,
      caption: lang === 'ta' ? 'அன்பின் மலர்ச்சி' : 'Blooming Love'
    },
    {
      url: couple3,
      caption: lang === 'ta' ? 'இணையற்ற நினைவுகள்' : 'Treasured Memories'
    },
    {
      url: couple4,
      caption: lang === 'ta' ? 'ஒன்றாக ஒரு பயணம்' : 'A Journey Together'
    }
  ];

  useEffect(() => {
    const handlePopState = (e) => {
      if (activeImgIndex !== null) {
        setActiveImgIndex(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeImgIndex]);

  const openLightbox = (index) => {
    setActiveImgIndex(index);
    window.history.pushState({ lightboxOpen: true }, '', '#gallery-view');
  };

  const closeLightbox = () => {
    if (activeImgIndex !== null) {
      setActiveImgIndex(null);
      if (window.location.hash === '#gallery-view') {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <div style={styles.headerBox}>
          <div style={styles.badgeRow}>
            <LotusMotif size={24} />
            <span style={styles.tagBadge}>MEMORIES SCRAPBOOK • நினைவுகள்</span>
          </div>

          <h2 style={styles.title}>{content.title}</h2>
          <p style={styles.subtitle}>{content.subtitle}</p>
          <GopuramDivider />
        </div>

        {/* Photo Gallery Grid */}
        <div style={styles.gridWrapper}>
          <div style={styles.asymmetricGrid}>
            {images.map((img, idx) => (
              <div
                key={idx}
                style={styles.gridCard}
                onClick={() => openLightbox(idx)}
                className={`reveal-scale delay-${idx + 1}`}
              >
                <img src={img.url} alt={img.caption} style={styles.img} />
                <div style={styles.imgOverlay}>
                  <Maximize2 size={16} color="#FFF" />
                  <span style={styles.overlayText}>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImgIndex !== null && (
        <div style={styles.lightboxModal} onClick={closeLightbox}>
          <button style={styles.closeBtn} onClick={closeLightbox} aria-label="Close Lightbox">
            <X size={32} color="#FFF" />
          </button>

          <button style={styles.navBtnLeft} onClick={prevImage} aria-label="Previous Image">
            <ChevronLeft size={36} color="#FFF" />
          </button>

          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={images[activeImgIndex].url}
              alt={images[activeImgIndex].caption}
              style={styles.lightboxImg}
            />
            <div style={styles.lightboxCaption}>
              <span>{images[activeImgIndex].caption}</span>
            </div>
          </div>

          <button style={styles.navBtnRight} onClick={nextImage} aria-label="Next Image">
            <ChevronRight size={36} color="#FFF" />
          </button>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: {
    padding: '2.5rem 1rem',
    backgroundColor: '#FAF5EC',
    position: 'relative'
  },
  container: {
    maxWidth: '650px',
    margin: '0 auto',
    textAlign: 'center'
  },
  headerBox: {
    marginBottom: '1.5rem'
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    marginBottom: '0.4rem'
  },
  tagBadge: {
    fontSize: '0.72rem',
    fontWeight: '700',
    color: 'var(--color-gold-dark)',
    letterSpacing: '1.2px',
    textTransform: 'uppercase'
  },
  title: {
    fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  subtitle: {
    fontSize: '0.88rem',
    color: 'var(--color-brown)',
    opacity: 0.85,
    marginTop: '0.2rem'
  },
  gridWrapper: {
    position: 'relative',
    padding: '0.75rem',
    backgroundColor: 'var(--color-white)',
    border: '1.5px dashed var(--color-maroon)',
    borderRadius: '16px',
    boxShadow: 'var(--shadow-md)',
    maxWidth: '580px',
    margin: '0 auto'
  },
  asymmetricGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.65rem',
    gridAutoRows: '130px'
  },
  gridCard: {
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-gold-light)'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    display: 'block'
  },
  imgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(107, 30, 45, 0.85) 0%, transparent 60%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '0.65rem',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    color: '#FFF'
  },
  overlayText: {
    fontSize: '0.75rem',
    fontWeight: '600',
    marginTop: '0.2rem'
  },
  lightboxModal: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(25, 15, 18, 0.95)',
    zIndex: 99999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    backdropFilter: 'blur(10px)',
    animation: 'fadeIn 0.3s ease'
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10
  },
  navBtnLeft: {
    position: 'absolute',
    left: '20px',
    background: 'rgba(255, 255, 255, 0.15)',
    border: 'none',
    borderRadius: '50%',
    width: '54px',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backdropFilter: 'blur(5px)'
  },
  navBtnRight: {
    position: 'absolute',
    right: '20px',
    background: 'rgba(255, 255, 255, 0.15)',
    border: 'none',
    borderRadius: '50%',
    width: '54px',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backdropFilter: 'blur(5px)'
  },
  lightboxContent: {
    maxWidth: '90vw',
    maxHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  lightboxImg: {
    maxWidth: '100%',
    maxHeight: '75vh',
    objectFit: 'contain',
    borderRadius: '8px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
  },
  lightboxCaption: {
    marginTop: '1rem',
    color: 'var(--color-cream)',
    fontSize: '1.1rem',
    letterSpacing: '1px'
  }
};

export default Gallery;
