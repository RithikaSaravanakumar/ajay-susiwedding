import React from 'react';
import { siteData } from '../config/data';
import { Share2 } from 'lucide-react';

const WhatsAppShare = ({ lang }) => {
  const content = siteData[lang].share;

  const handleShare = () => {
    const shareUrl = 'https://ajay-susiwedding.vercel.app/?invitation=ajay-susi';
    const shareText = `${content.waText} ${shareUrl}`;
    const waUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button onClick={handleShare} style={styles.shareBtn} className="btn-gold" aria-label="Share Invitation on WhatsApp">
      <Share2 size={18} />
      <span>{content.btnText}</span>
    </button>
  );
};

const styles = {
  shareBtn: {
    padding: '0.65rem 1.4rem',
    fontSize: '0.88rem',
  }
};

export default WhatsAppShare;
