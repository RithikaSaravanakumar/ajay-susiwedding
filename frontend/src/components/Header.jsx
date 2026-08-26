import React, { useState, useEffect } from 'react';
import { siteData } from '../config/data';
import Monogram from './Monogram';
import { Menu, X } from 'lucide-react';

const Header = ({ lang, setLang }) => {
  const content = siteData[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'story', 'invitation', 'couple', 'events', 'gallery', 'rsvp'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: content.home },
    { id: 'story', label: content.story },
    { id: 'invitation', label: content.invitation },
    { id: 'events', label: content.events },
    { id: 'gallery', label: content.gallery },
    { id: 'rsvp', label: content.rsvp }
  ];

  return (
    <header
      style={{
        ...styles.header,
        backgroundColor: isScrolled ? 'rgba(248, 241, 227, 0.95)' : 'rgba(248, 241, 227, 0.8)',
        borderBottom: isScrolled ? '1px solid var(--color-gold)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(107, 30, 45, 0.08)' : 'none'
      }}
    >
      <nav style={styles.nav}>
        {/* Monogram Brand */}
        <a href="#home" style={styles.brand}>
          <Monogram size="sm" />
          <span style={styles.brandTitle}>Ajay & Susindra</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul style={styles.desktopUl}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                style={{
                  ...styles.link,
                  color: activeSection === item.id ? 'var(--color-maroon)' : 'var(--color-brown)',
                  fontWeight: activeSection === item.id ? '700' : '500'
                }}
              >
                {item.label}
                {activeSection === item.id && <div style={styles.activeLine} />}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: Language Switcher & Mobile Menu Icon */}
        <div style={styles.rightGroup}>
          <div style={styles.langToggleBox}>
            <button
              onClick={() => setLang('ta')}
              style={{
                ...styles.langPill,
                backgroundColor: lang === 'ta' ? 'var(--color-maroon)' : 'transparent',
                color: lang === 'ta' ? '#FFF' : 'var(--color-brown)',
              }}
            >
              தமிழ்
            </button>
            <button
              onClick={() => setLang('en')}
              style={{
                ...styles.langPill,
                backgroundColor: lang === 'en' ? 'var(--color-maroon)' : 'transparent',
                color: lang === 'en' ? '#FFF' : 'var(--color-brown)',
              }}
            >
              English
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={styles.mobileMenuBtn}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} color="var(--color-maroon)" /> : <Menu size={26} color="var(--color-maroon)" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={styles.mobileDrawer}>
          <ul style={styles.mobileUl}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    ...styles.mobileLink,
                    color: activeSection === item.id ? 'var(--color-maroon)' : 'var(--color-brown)'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s ease-out',
    padding: '0.75rem 1.5rem'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none'
  },
  brandTitle: {
    fontFamily: 'var(--font-en-display)',
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--color-maroon)',
    letterSpacing: '0.5px'
  },
  desktopUl: {
    display: 'flex',
    gap: '1.8rem',
    alignItems: 'center',
    listStyle: 'none'
  },
  link: {
    position: 'relative',
    textDecoration: 'none',
    fontSize: '0.92rem',
    letterSpacing: '0.3px',
    padding: '0.4rem 0',
    transition: 'color 0.2s'
  },
  activeLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: 'var(--color-gold)',
    borderRadius: '2px'
  },
  rightGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  langToggleBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--color-beige)',
    borderRadius: '30px',
    padding: '3px',
    border: '1px solid var(--color-gold-light)'
  },
  langPill: {
    border: 'none',
    padding: '0.35rem 0.85rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  mobileMenuBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px'
  },
  mobileDrawer: {
    backgroundColor: 'var(--color-cream)',
    borderTop: '1px solid var(--color-gold-light)',
    padding: '1.5rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
  },
  mobileUl: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    alignItems: 'center'
  },
  mobileLink: {
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600'
  }
};

export default Header;
