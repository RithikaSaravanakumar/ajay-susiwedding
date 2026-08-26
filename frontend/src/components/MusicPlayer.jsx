import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX, Volume2 } from 'lucide-react';

const MusicPlayer = ({ lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Synthesize a soothing Indian classical / Nadaswaram ambient melody using Web Audio API
  const startAudioSynth = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Pentatonic Raga-like frequency sequence (C, D, E, G, A pentatonic harmony)
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00];
    let noteIndex = 0;

    const playNote = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft sine wave with warm harmonic overtone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(notes[noteIndex], ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.0);

      noteIndex = (noteIndex + 1) % notes.length;
    };

    playNote();
    timerRef.current = setInterval(playNote, 1200);
  };

  const stopAudioSynth = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopAudioSynth();
      setIsPlaying(false);
    } else {
      startAudioSynth();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopAudioSynth();
    };
  }, []);

  return (
    <div style={styles.floatingContainer}>
      <button
        onClick={toggleMusic}
        style={{
          ...styles.musicBtn,
          borderColor: isPlaying ? 'var(--color-gold)' : 'var(--color-maroon)',
          boxShadow: isPlaying ? '0 0 20px rgba(198, 161, 91, 0.6)' : 'var(--shadow-md)'
        }}
        title={isPlaying ? 'Mute Music' : 'Play Wedding Melody'}
        aria-label="Toggle Wedding Music"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {isPlaying ? (
            <>
              <Volume2 size={20} className="spin-slow" style={{ color: 'var(--color-gold)' }} />
              <span style={styles.playingText}>{lang === 'ta' ? 'இசை' : 'Music'}</span>
            </>
          ) : (
            <>
              <VolumeX size={20} style={{ color: 'var(--color-maroon)' }} />
              <span style={styles.mutedText}>{lang === 'ta' ? 'இசை' : 'Music'}</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

const styles = {
  floatingContainer: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
  },
  musicBtn: {
    background: 'rgba(248, 241, 227, 0.92)',
    backdropFilter: 'blur(8px)',
    border: '1.5px solid var(--color-gold)',
    borderRadius: '30px',
    padding: '0.6rem 1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    outline: 'none',
  },
  playingText: {
    fontSize: '0.82rem',
    fontWeight: '600',
    color: 'var(--color-maroon)',
    letterSpacing: '0.5px'
  },
  mutedText: {
    fontSize: '0.82rem',
    fontWeight: '600',
    color: 'var(--color-maroon-dark)',
    opacity: 0.8
  }
};

export default MusicPlayer;
