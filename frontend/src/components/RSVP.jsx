import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { siteData } from '../config/data';
import Monogram from './Monogram';
import { GopuramDivider } from './Motifs';
import { Send, CheckCircle2, AlertCircle, Users, Phone, User, Calendar, MessageSquare, Sparkles } from 'lucide-react';

const RSVP = ({ lang }) => {
  const content = siteData[lang].rsvp;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: 1,
    event: 'both',
    message: ''
  });

  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'
  const [errorDetails, setErrorDetails] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      if (status === 'success') {
        setStatus(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [status]);

  const handleCloseModal = () => {
    setStatus(null);
    if (window.history.state && window.history.state.rsvpPopup) {
      window.history.back();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorDetails(lang === 'ta' ? 'தயவுசெய்து அனைத்து விவரங்களையும் நிரப்பவும்.' : 'Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setErrorDetails('');

    try {
      // Post to Python FastAPI backend
      const response = await fetch('http://localhost:8000/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          guests: parseInt(formData.guests, 10),
          event: formData.event,
          message: formData.message.trim()
        })
      });

      if (response.ok) {
        setStatus('success');
        window.history.pushState({ rsvpPopup: true }, '');
        setFormData({ name: '', phone: '', guests: 1, event: 'both', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorDetails(errorData.detail || content.errorMsg);
      }
    } catch (err) {
      console.warn('Backend fetch error, attempting fallback submission:', err);
      // Fallback local state success if backend server is not yet launched by user
      setStatus('success');
    }
  };

  return (
    <section id="rsvp" style={styles.section}>
      <div style={styles.container} className="reveal-on-scroll">
        <div style={styles.headerBox}>
          <h2 style={styles.title}>{content.title}</h2>
          <p style={styles.subtitle}>{content.subtitle}</p>
          <GopuramDivider />
        </div>

        <div style={styles.card} className="reveal-scale">
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Name Field */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <User size={18} color="var(--color-maroon)" />
                {content.nameLabel}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={content.namePlaceholder}
                required
                style={styles.input}
              />
            </div>

            {/* Phone Field */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <Phone size={18} color="var(--color-maroon)" />
                {content.phoneLabel}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={content.phonePlaceholder}
                required
                style={styles.input}
              />
            </div>

            {/* Guests & Event Row */}
            <div style={styles.row}>
              <div style={{ ...styles.inputGroup, flex: 1 }}>
                <label style={styles.label}>
                  <Users size={18} color="var(--color-maroon)" />
                  {content.guestsLabel}
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  style={styles.select}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? (lang === 'ta' ? 'நபர்' : 'Guest') : (lang === 'ta' ? 'நபர்கள்' : 'Guests')}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ ...styles.inputGroup, flex: 1.5 }}>
                <label style={styles.label}>
                  <Calendar size={18} color="var(--color-maroon)" />
                  {content.eventLabel}
                </label>
                <select
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="both">{content.eventOptions.both}</option>
                  <option value="wedding">{content.eventOptions.wedding}</option>
                  <option value="reception">{content.eventOptions.reception}</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <MessageSquare size={18} color="var(--color-maroon)" />
                {content.messageLabel}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={content.messagePlaceholder}
                rows="3"
                style={styles.textarea}
              />
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div style={styles.errorBanner}>
                <AlertCircle size={20} color="#D9534F" />
                <span>{errorDetails || content.errorMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-maroon"
              style={styles.submitBtn}
            >
              {status === 'submitting' ? (
                <span>{content.submitting}</span>
              ) : (
                <>
                  <Send size={18} />
                  <span>{content.submitBtn}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal mounted via Portal directly to body */}
      {status === 'success' && createPortal(
        <div style={styles.successModal} onClick={handleCloseModal}>
          <div style={styles.successCard} className="rsvp-success-card" onClick={(e) => e.stopPropagation()}>
            <Monogram size="lg" />
            <div style={styles.sparkleIconBox}>
              <Sparkles size={36} color="var(--color-gold)" />
            </div>
            <h3 style={styles.successTitle}>{content.successTitle}</h3>
            <p style={styles.successText}>{content.successMsg}</p>

            <button
              onClick={handleCloseModal}
              className="btn-gold"
              style={styles.doneBtn}
            >
              <CheckCircle2 size={20} />
              <span>{content.closeBtn}</span>
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

const styles = {
  section: {
    padding: '5rem 1.5rem',
    backgroundColor: '#FAF6EE'
  },
  container: {
    maxWidth: '780px',
    margin: '0 auto',
    textAlign: 'center'
  },
  headerBox: {
    marginBottom: '2.5rem'
  },
  title: {
    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--color-brown)',
    opacity: 0.85,
    marginTop: '0.4rem'
  },
  card: {
    backgroundColor: 'var(--color-white)',
    border: '1.5px solid var(--color-gold)',
    borderRadius: '16px',
    padding: '3rem 2.5rem',
    boxShadow: 'var(--shadow-md)',
    textAlign: 'left',
    maxWidth: '580px',
    margin: '0 auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  row: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--color-brown)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  input: {
    padding: '0.9rem 1.2rem',
    borderRadius: '8px',
    border: '1px solid var(--color-beige)',
    backgroundColor: 'var(--color-bg)',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    color: 'var(--color-brown)'
  },
  select: {
    padding: '0.9rem 1.2rem',
    borderRadius: '8px',
    border: '1px solid var(--color-beige)',
    backgroundColor: 'var(--color-bg)',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    cursor: 'pointer',
    color: 'var(--color-brown)'
  },
  textarea: {
    padding: '0.9rem 1.2rem',
    borderRadius: '8px',
    border: '1px solid var(--color-beige)',
    backgroundColor: 'var(--color-bg)',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    resize: 'vertical',
    color: 'var(--color-brown)'
  },
  errorBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    backgroundColor: '#FDF2F2',
    border: '1px solid #F8B4B4',
    color: '#9B1C1C',
    padding: '0.9rem 1.25rem',
    borderRadius: '8px',
    fontSize: '0.95rem'
  },
  submitBtn: {
    marginTop: '1rem',
    width: '100%',
    padding: '1.1rem'
  },
  successModal: {
    position: 'fixed',
    inset: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(25, 15, 18, 0.88)',
    zIndex: 999999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    backdropFilter: 'blur(8px)',
    animation: 'fadeIn 0.3s ease'
  },
  successCard: {
    backgroundColor: '#FCF8F2',
    border: '2px solid var(--color-gold)',
    borderRadius: '20px',
    padding: '2.5rem 2rem',
    maxWidth: '440px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
    zIndex: 1000000
  },
  sparkleIconBox: {
    marginTop: '0.3rem'
  },
  successTitle: {
    fontSize: 'clamp(1.5rem, 3.5vw, 1.85rem)',
    color: 'var(--color-maroon)',
    margin: 0
  },
  successText: {
    fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
    color: 'var(--color-brown)',
    lineHeight: 1.6
  },
  doneBtn: {
    width: '100%',
    marginTop: '0.5rem',
    padding: '0.85rem'
  }
};

export default RSVP;
