import React from 'react';

const Monogram = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: { width: 44, height: 44, fontSize: 13, heartSize: 10 },
    md: { width: 68, height: 68, fontSize: 20, heartSize: 14 },
    lg: { width: 110, height: 110, fontSize: 32, heartSize: 22 },
    xl: { width: 160, height: 160, fontSize: 46, heartSize: 32 }
  };

  const current = sizeMap[size] || sizeMap.md;

  return (
    <div className={`monogram-wrapper ${className}`} style={{ display: 'inline-block' }}>
      <svg
        width={current.width}
        height={current.height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0px 4px 10px rgba(198, 161, 91, 0.3))' }}
      >
        {/* Outer Fine Gold Circle */}
        <circle cx="50" cy="50" r="47" stroke="#C6A15B" strokeWidth="1.2" strokeDasharray="4 2" />
        
        {/* Inner Solid Gold Circle */}
        <circle cx="50" cy="50" r="42" stroke="#C6A15B" strokeWidth="1.8" fill="#F8F1E3" />
        
        {/* Decorative Radial Dots (Kolam Inspired) */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 50 + 44.5 * Math.cos(rad);
          const cy = 50 + 44.5 * Math.sin(rad);
          return <circle key={idx} cx={cx} cy={cy} r="1.5" fill="#6B1E2D" />;
        })}

        {/* Inner Floral Crest Frame */}
        <circle cx="50" cy="50" r="37" stroke="#6B1E2D" strokeWidth="0.8" opacity="0.6" />

        {/* Monogram Text: A | S */}
        <text
          x="30"
          y="58"
          fontFamily="'Cormorant Garamond', 'Playfair Display', serif"
          fontSize="28"
          fontWeight="700"
          fill="#6B1E2D"
          textAnchor="middle"
        >
          A
        </text>
        
        {/* Gold Heart Symbol */}
        <path
          d="M 50 45 C 50 41, 46 38, 43 41 C 40 44, 43 49, 50 54 C 57 49, 60 44, 57 41 C 54 38, 50 41, 50 45 Z"
          fill="#C6A15B"
        />

        <text
          x="70"
          y="58"
          fontFamily="'Cormorant Garamond', 'Playfair Display', serif"
          fontSize="28"
          fontWeight="700"
          fill="#6B1E2D"
          textAnchor="middle"
        >
          S
        </text>
      </svg>
    </div>
  );
};

export default Monogram;
