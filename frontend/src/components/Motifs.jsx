import React from 'react';

// 1. Full-Page Continuous Sikku Kolam Edge Border Frame Wrapper
export const FullPageSikkuKolamFrame = ({ children }) => (
  <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
    {/* Fixed Outer Sikku Kolam Frame (Top, Left, Right, Bottom Edges) */}
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 100,
        opacity: 0.85
      }}
    >
      <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top Edge Kolam Line */}
        <line x1="0" y1="12" x2="100%" y2="12" stroke="#6B1E2D" strokeWidth="2" strokeDasharray="12 6" />
        <line x1="0" y1="16" x2="100%" y2="16" stroke="#9A7835" strokeWidth="1" strokeDasharray="4 4" />

        {/* Bottom Edge Kolam Line */}
        <line x1="0" y1="calc(100% - 12px)" x2="100%" y2="calc(100% - 12px)" stroke="#6B1E2D" strokeWidth="2" strokeDasharray="12 6" />
        <line x1="0" y1="calc(100% - 16px)" x2="100%" y2="calc(100% - 16px)" stroke="#9A7835" strokeWidth="1" strokeDasharray="4 4" />

        {/* Left Edge Kolam Line */}
        <line x1="12" y1="0" x2="12" y2="100%" stroke="#6B1E2D" strokeWidth="2" strokeDasharray="12 6" />
        <line x1="16" y1="0" x2="16" y2="100%" stroke="#9A7835" strokeWidth="1" strokeDasharray="4 4" />

        {/* Right Edge Kolam Line */}
        <line x1="calc(100% - 12px)" y1="0" x2="calc(100% - 12px)" y2="100%" stroke="#6B1E2D" strokeWidth="2" strokeDasharray="12 6" />
        <line x1="calc(100% - 16px)" y1="0" x2="calc(100% - 16px)" y2="100%" stroke="#9A7835" strokeWidth="1" strokeDasharray="4 4" />

        {/* Top-Left Sikku Corner Loop */}
        <g transform="translate(12, 12)">
          <circle cx="20" cy="20" r="16" fill="none" stroke="#6B1E2D" strokeWidth="2" />
          <circle cx="20" cy="20" r="6" fill="#C6A15B" />
          <path d="M4 20 Q20 4 36 20 Q20 36 4 20 Z" fill="none" stroke="#6B1E2D" strokeWidth="1.5" />
        </g>

        {/* Top-Right Sikku Corner Loop */}
        <g transform="translate(calc(100% - 52px), 12)">
          <circle cx="20" cy="20" r="16" fill="none" stroke="#6B1E2D" strokeWidth="2" />
          <circle cx="20" cy="20" r="6" fill="#C6A15B" />
          <path d="M4 20 Q20 4 36 20 Q20 36 4 20 Z" fill="none" stroke="#6B1E2D" strokeWidth="1.5" />
        </g>

        {/* Bottom-Left Sikku Corner Loop */}
        <g transform="translate(12, calc(100% - 52px))">
          <circle cx="20" cy="20" r="16" fill="none" stroke="#6B1E2D" strokeWidth="2" />
          <circle cx="20" cy="20" r="6" fill="#C6A15B" />
          <path d="M4 20 Q20 4 36 20 Q20 36 4 20 Z" fill="none" stroke="#6B1E2D" strokeWidth="1.5" />
        </g>

        {/* Bottom-Right Sikku Corner Loop */}
        <g transform="translate(calc(100% - 52px), calc(100% - 52px))">
          <circle cx="20" cy="20" r="16" fill="none" stroke="#6B1E2D" strokeWidth="2" />
          <circle cx="20" cy="20" r="6" fill="#C6A15B" />
          <path d="M4 20 Q20 4 36 20 Q20 36 4 20 Z" fill="none" stroke="#6B1E2D" strokeWidth="1.5" />
        </g>
      </svg>
    </div>

    {children}
  </div>
);

// 2. Large Authentic Sikku Kolam (Pulli Kolam) Loop-Drawing Vector Centerpiece
export const SikkuKolamCenterpiece = ({ size = 260, color = '#C6A15B', opacity = 0.45 }) => (
  <div style={{ display: 'inline-block', opacity, pointerEvents: 'none' }}>
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[40, 70, 100, 130, 160].map((x) =>
        [40, 70, 100, 130, 160].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill={color} />
        ))
      )}
      <path
        d="M100 25 Q135 25 135 60 Q135 95 100 95 Q65 95 65 60 Q65 25 100 25 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 105 Q135 105 135 140 Q135 175 100 175 Q65 175 65 140 Q65 105 100 105 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M60 100 Q60 65 95 65 Q130 65 130 100 Q130 135 95 135 Q60 135 60 100 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 10 C140 10 190 60 190 100 C190 140 140 190 100 190 C60 190 10 140 10 100 C10 60 60 10 100 10 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeDasharray="4 2"
        fill="none"
      />
      <path
        d="M100 20 Q180 100 100 180 Q20 100 100 20 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  </div>
);

// 3. Continuous Sikku Kolam Loop Line-Art Card Border
export const SikkuKolamCardBorder = ({ color = '#C6A15B' }) => (
  <div style={{ position: 'absolute', inset: 6, pointerEvents: 'none', borderRadius: '16px', overflow: 'hidden' }}>
    <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="14" stroke={color} strokeWidth="1.5" strokeDasharray="6 3" />
      <path d="M12 25 Q25 25 25 12" stroke={color} strokeWidth="2" />
      <path d="Mcalc(100% - 12px) 25 Qcalc(100% - 25px) 25 calc(100% - 25px) 12" stroke={color} strokeWidth="2" />
      <path d="M12 calc(100% - 25px) Q25 calc(100% - 25px) 25 calc(100% - 12px)" stroke={color} strokeWidth="2" />
      <path d="Mcalc(100% - 12px) calc(100% - 25px) Qcalc(100% - 25px) calc(100% - 25px) calc(100% - 25px) calc(100% - 12px)" stroke={color} strokeWidth="2" />
    </svg>
  </div>
);

// 4. Golden South Indian Gopuram Temple Tower
export const GoldenGopuramArtwork = ({ height = 160 }) => (
  <div style={{ display: 'inline-block', opacity: 0.95 }}>
    <svg width={height * 0.75} height={height} viewBox="0 0 180 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="200" width="140" height="35" fill="#D4AF37" stroke="#9A7835" strokeWidth="1.5" />
      <path d="M40 200 L40 235 M70 200 L70 235 M100 200 L100 235 M130 200 L130 235" stroke="#9A7835" strokeWidth="1" />
      <path d="M25 200 L35 160 L145 160 L155 200 Z" fill="#E5C158" stroke="#9A7835" strokeWidth="1.5" />
      <circle cx="90" cy="180" r="8" fill="#6B1E2D" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="55" cy="180" r="5" fill="#C6A15B" />
      <circle cx="125" cy="180" r="5" fill="#C6A15B" />
      <path d="M35 160 L45 125 L135 125 L145 160 Z" fill="#D4AF37" stroke="#9A7835" strokeWidth="1.5" />
      <circle cx="90" cy="142.5" r="7" fill="#6B1E2D" />
      <circle cx="60" cy="142.5" r="4" fill="#F8F1E3" />
      <circle cx="120" cy="142.5" r="4" fill="#F8F1E3" />
      <path d="M45 125 L55 95 L125 95 L135 125 Z" fill="#E5C158" stroke="#9A7835" strokeWidth="1.5" />
      <circle cx="90" cy="110" r="6" fill="#6B1E2D" />
      <path d="M55 95 L65 70 L115 70 L125 95 Z" fill="#D4AF37" stroke="#9A7835" strokeWidth="1.5" />
      <circle cx="90" cy="82.5" r="5" fill="#F8F1E3" />
      <path d="M65 70 L75 48 L105 48 L115 70 Z" fill="#E5C158" stroke="#9A7835" strokeWidth="1.5" />
      <path d="M70 48 C70 30 110 30 110 48 Z" fill="#C6A15B" stroke="#9A7835" strokeWidth="1.5" />
      {[74, 82, 90, 98, 106].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 2} 32 L${x + 2} 32 L${x} 20 Z`} fill="#D4AF37" stroke="#9A7835" strokeWidth="0.8" />
          <circle cx={x} cy="18" r="2" fill="#6B1E2D" />
        </g>
      ))}
    </svg>
  </div>
);

// 5. Hand-Drawn Tamil Bride & Groom Illustration
export const TamilCoupleIllustration = ({ height = 105 }) => (
  <div style={{ display: 'inline-block' }}>
    <svg width={height * 0.7} height={height} viewBox="0 0 105 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(48, 20)">
        <circle cx="24" cy="14" r="9" fill="#2F211B" />
        <ellipse cx="24" cy="17" rx="7" ry="8" fill="#F5CBA7" />
        <path d="M12 25 Q24 22 36 25 L38 65 L10 65 Z" fill="#F8F1E3" stroke="#C6A15B" strokeWidth="1" />
        <path d="M15 25 Q24 50 33 25" stroke="#9B2C2C" strokeWidth="3.5" fill="none" strokeDasharray="3 1" />
        <path d="M16 26 Q24 48 32 26" stroke="#F6AD55" strokeWidth="2" fill="none" />
        <path d="M10 65 L38 65 L40 120 L8 120 Z" fill="#F7FAFC" stroke="#C6A15B" strokeWidth="1.2" />
        <line x1="24" y1="65" x2="24" y2="120" stroke="#D4AF37" strokeWidth="1.5" />
      </g>
      <g transform="translate(10, 25)">
        <circle cx="20" cy="12" r="10" fill="#2F211B" />
        <path d="M10 8 C10 4 30 4 30 8" stroke="#FFF" strokeWidth="3" fill="none" />
        <ellipse cx="22" cy="16" rx="6.5" ry="7.5" fill="#F5CBA7" />
        <path d="M12 24 C12 24 22 22 32 24 L36 60 L8 60 Z" fill="#9B2C2C" stroke="#D4AF37" strokeWidth="1" />
        <path d="M12 24 Q22 45 28 60" stroke="#D4AF37" strokeWidth="3.5" fill="none" />
        <path d="M14 24 Q22 48 30 24" stroke="#9B2C2C" strokeWidth="3" fill="none" strokeDasharray="3 1" />
        <path d="M15 25 Q22 46 29 25" stroke="#F6AD55" strokeWidth="2" fill="none" />
        <path d="M8 60 L36 60 L40 115 L4 115 Z" fill="#9B2C2C" stroke="#7B1D1D" strokeWidth="1" />
        <path d="M16 60 L14 115 M24 60 L24 115 M32 60 L34 115" stroke="#D4AF37" strokeWidth="1" />
      </g>
    </svg>
  </div>
);

// 6. Detailed Banana Tree with Fruit Cluster & Red Banana Flower (வாழை மரம்)
export const VazhaiMaramFull = ({ height = 160 }) => (
  <div style={{ display: 'inline-block', opacity: 0.95 }}>
    <svg width={height * 0.65} height={height} viewBox="0 0 130 230" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55 230 Q60 140 65 40 Q62 140 70 230 Z" fill="#5D4037" stroke="#3E2723" strokeWidth="1.2" />
      <path d="M65 90 Q15 45 5 10 Q45 30 63 85 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
      <path d="M65 90 Q15 45 5 10" stroke="#81C784" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M65 70 Q25 20 30 0 Q55 20 63 65 Z" fill="#388E3C" stroke="#1B5E20" strokeWidth="1" />
      <path d="M67 80 Q115 35 125 10 Q95 30 67 75 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
      <path d="M67 80 Q115 35 125 10" stroke="#81C784" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M67 105 Q120 70 128 45 Q98 65 67 100 Z" fill="#4CAF50" stroke="#1B5E20" strokeWidth="1" />
      <path d="M65 120 Q12 90 8 65 Q40 85 63 115 Z" fill="#388E3C" stroke="#1B5E20" strokeWidth="1" />
      <g transform="translate(65, 110)">
        <path d="M0 0 Q-8 20 -4 40" stroke="#795548" strokeWidth="2.5" fill="none" />
        <ellipse cx="-7" cy="14" rx="4" ry="7" fill="#F59E0B" stroke="#D97706" strokeWidth="0.8" />
        <ellipse cx="2" cy="16" rx="4" ry="7" fill="#F59E0B" stroke="#D97706" strokeWidth="0.8" />
        <ellipse cx="-5" cy="24" rx="4" ry="7" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
        <ellipse cx="4" cy="26" rx="4" ry="7" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
        <path d="M-6 36 C-12 50 0 60 0 60 C0 60 12 50 6 36 Z" fill="#7B1D1D" stroke="#D4AF37" strokeWidth="1" />
      </g>
    </svg>
  </div>
);

// 7. Handmade Paper Frame Wrapper with Top Arch & Hanging Lotus Buds
export const HandmadePaperFrame = ({ children, style = {} }) => (
  <div
    style={{
      backgroundColor: '#FAF6EE',
      backgroundImage: 'radial-gradient(#E8D8C3 0.8px, transparent 0.8px)',
      backgroundSize: '20px 20px',
      border: '2px solid #C6A15B',
      borderRadius: '24px',
      padding: '3rem 2rem 2.5rem',
      position: 'relative',
      boxShadow: '0 20px 50px rgba(107, 30, 45, 0.08)',
      overflow: 'hidden',
      ...style
    }}
  >
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, lineHeight: 0, opacity: 0.85 }}>
      <svg viewBox="0 0 800 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
        <path d="M0 0 L800 0 L800 20 Q400 60 0 20 Z" fill="#F4EADB" stroke="#C6A15B" strokeWidth="1" />
        {[160, 320, 480, 640].map((x, i) => (
          <g key={i} transform={`translate(${x}, 35)`}>
            <line x1="0" y1="0" x2="0" y2="15" stroke="#C6A15B" strokeWidth="1" />
            <path d="M-4 15 C-8 22 0 28 0 28 C0 28 8 22 4 15 Z" fill="#D81B60" />
          </g>
        ))}
      </svg>
    </div>
    {children}
  </div>
);

// 8. Rich Tamil Thoranam Top Garland with Mango Leaves, Red Flowers & Jasmine Strings
export const TamilThoranam = () => (
  <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, opacity: 0.9, position: 'relative', zIndex: 10 }}>
    <svg viewBox="0 0 1200 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
      <path d="M0 8 Q 30 30, 60 8 Q 90 30, 120 8 Q 150 30, 180 8 Q 210 30, 240 8 Q 270 30, 300 8 Q 330 30, 360 8 Q 390 30, 420 8 Q 450 30, 480 8 Q 510 30, 540 8 Q 570 30, 600 8 Q 630 30, 660 8 Q 690 30, 720 8 Q 750 30, 780 8 Q 810 30, 840 8 Q 870 30, 900 8 Q 930 30, 960 8 Q 990 30, 1020 8 Q 1050 30, 1080 8 Q 1110 30, 1140 8 Q 1170 30, 1200 8" stroke="#2E7D32" strokeWidth="2.5" fill="none" />
      {Array.from({ length: 20 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 60 + 30}, 16)`}>
          <path d="M0 0 C-8 12, -10 24, 0 34 C10 24, 8 12, 0 0 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.8" />
          <path d="M0 0 L0 34" stroke="#81C784" strokeWidth="0.8" />
          <circle cx="0" cy="36" r="3" fill="#6B1E2D" />
          {i % 2 === 0 && (
            <g transform="translate(0, 40)">
              <ellipse cx="0" cy="0" rx="1.5" ry="3" fill="#FFF" />
              <ellipse cx="0" cy="7" rx="1.5" ry="3" fill="#FFF" />
              <ellipse cx="0" cy="14" rx="1.5" ry="3" fill="#FFF" />
              <path d="M-2.5 20 L2.5 20 L3.5 25 L-3.5 25 Z" fill="#C6A15B" />
              <circle cx="0" cy="27" r="1" fill="#9A7835" />
            </g>
          )}
          {i % 4 === 1 && (
            <g transform="translate(0, 40)">
              <line x1="0" y1="0" x2="0" y2="12" stroke="#C6A15B" strokeWidth="1" />
              <path d="M-4 12 Q0 18 4 12 Z" fill="#C6A15B" />
              <path d="M0 6 C-2 9 -3 12 0 16 C3 12 2 9 0 6 Z" fill="#F59E0B" className="flame-glow" />
            </g>
          )}
        </g>
      ))}
    </svg>
  </div>
);

// 9. Vertical Jasmine Garland for Side Framing
export const JasmineGarland = ({ side = 'left' }) => {
  const isRight = side === 'right';

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        [isRight ? 'right' : 'left']: '10px',
        height: '100%',
        width: '30px',
        pointerEvents: 'none',
        zIndex: 5,
        opacity: 0.85
      }}
    >
      <svg viewBox="0 0 30 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <line x1="15" y1="0" x2="15" y2="400" stroke="#C6A15B" strokeWidth="1" strokeDasharray="4 2" />
        {Array.from({ length: 18 }).map((_, i) => (
          <g key={i} transform={`translate(15, ${i * 22 + 15})`}>
            <ellipse cx="0" cy="0" rx="3.5" ry="6" fill="#FFF" stroke="#E8D8C3" strokeWidth="0.5" />
            <circle cx="0" cy="7" r="2" fill="#6B1E2D" />
            {i % 5 === 2 && (
              <g transform="translate(0, 10)">
                <path d="M-4 0 L4 0 L5 6 L-5 6 Z" fill="#C6A15B" />
                <circle cx="0" cy="8" r="1.5" fill="#9A7835" />
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

// 10. Traditional Gopuram Temple Spire Section Divider
export const GopuramDivider = () => (
  <div className="ornament-line-container">
    <div className="ornament-line" />
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2 L26 12 L34 16 L32 26 L8 26 L6 16 L14 12 Z" stroke="#C6A15B" strokeWidth="1.2" fill="#F8F1E3" />
      <path d="M20 2 L20 26" stroke="#C6A15B" strokeWidth="0.8" />
      <circle cx="20" cy="8" r="2" fill="#6B1E2D" />
      <circle cx="20" cy="16" r="2.5" fill="#C6A15B" />
    </svg>
    <div className="ornament-line" />
  </div>
);

// 11. Fine-Line Gopuram Temple Silhouette Artwork
export const TempleIllustration = ({ width = 240, height = 160 }) => (
  <div style={{ display: 'inline-block', opacity: 0.85 }}>
    <svg width={width} height={height} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M120 10 L135 40 L160 55 L155 140 L85 140 L80 55 L105 40 Z" fill="#FAF6EE" stroke="#C6A15B" strokeWidth="1.5" />
      <path d="M120 2 L124 10 L116 10 Z" fill="#C6A15B" />
      <circle cx="120" cy="2" r="2" fill="#6B1E2D" />
      <line x1="95" y1="50" x2="145" y2="50" stroke="#C6A15B" strokeWidth="1" />
      <line x1="90" y1="75" x2="150" y2="75" stroke="#C6A15B" strokeWidth="1" />
      <line x1="86" y1="100" x2="154" y2="100" stroke="#C6A15B" strokeWidth="1" />
      <path d="M105 140 C105 115 135 115 135 140 Z" fill="#6B1E2D" opacity="0.85" />
      <circle cx="120" cy="70" r="4" fill="#C6A15B" />
      <circle cx="120" cy="90" r="5" fill="#6B1E2D" />
      <rect x="50" y="80" width="10" height="60" fill="#E8D8C3" stroke="#C6A15B" strokeWidth="1" />
      <rect x="180" y="80" width="10" height="60" fill="#E8D8C3" stroke="#C6A15B" strokeWidth="1" />
    </svg>
  </div>
);

// 12. Handcrafted Tamil Wedding Invitation Card Frame Wrapper
export const TamilWeddingFrame = ({ children, style = {}, bg = 'ivory' }) => {
  const isTerracotta = bg === 'terracotta';

  return (
    <div
      style={{
        backgroundColor: isTerracotta ? '#7A2535' : '#FCF8F2',
        backgroundImage: isTerracotta
          ? 'radial-gradient(#9B3245 1px, transparent 1px)'
          : 'radial-gradient(#E5CA8F 0.6px, transparent 0.6px)',
        backgroundSize: '24px 24px',
        color: isTerracotta ? '#F8F1E3' : '#2F211B',
        border: '2px solid #C6A15B',
        borderRadius: '20px',
        padding: '2.5rem 2rem',
        position: 'relative',
        boxShadow: isTerracotta ? '0 14px 40px rgba(122, 37, 53, 0.3)' : '0 14px 40px rgba(107, 30, 45, 0.08)',
        ...style
      }}
    >
      <div style={{ position: 'absolute', top: 10, left: 10, opacity: 0.85 }}><KolamCorner position="top-left" /></div>
      <div style={{ position: 'absolute', top: 10, right: 10, opacity: 0.85 }}><KolamCorner position="top-right" /></div>
      <div style={{ position: 'absolute', bottom: 10, left: 10, opacity: 0.85 }}><KolamCorner position="bottom-left" /></div>
      <div style={{ position: 'absolute', bottom: 10, right: 10, opacity: 0.85 }}><KolamCorner position="bottom-right" /></div>
      {children}
    </div>
  );
};

// 13. Banana Leaf Corner Cluster Decoration
export const BananaLeafDecoration = ({ position = 'bottom-left', size = 80 }) => {
  const isRight = position.includes('right');
  const isTop = position.includes('top');

  return (
    <div
      style={{
        position: 'absolute',
        [isTop ? 'top' : 'bottom']: '-10px',
        [isRight ? 'right' : 'left']: '-10px',
        transform: `${isRight ? 'scaleX(-1)' : ''} ${isTop ? 'scaleY(-1)' : ''}`,
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 0.85
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path d="M10 90 Q 50 10, 90 20 Q 70 70, 10 90 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
        <path d="M10 90 Q 50 55, 90 20" stroke="#81C784" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="35" cy="65" r="4" fill="#FFF" />
        <circle cx="50" cy="50" r="3" fill="#F59E0B" />
        <circle cx="65" cy="35" r="4" fill="#6B1E2D" />
      </svg>
    </div>
  );
};

// 14. Traditional Uruli Brass Bowl with Floating Lotus Flowers
export const UruliLotusBowl = ({ size = 60 }) => (
  <div style={{ display: 'inline-block' }}>
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 25 C10 45 90 45 90 25 Z" fill="#C6A15B" stroke="#9A7835" strokeWidth="1.5" />
      <ellipse cx="50" cy="25" rx="42" ry="8" fill="#581924" stroke="#C6A15B" strokeWidth="1" />
      <ellipse cx="50" cy="25" rx="38" ry="6" fill="#1A237E" opacity="0.4" />
      <circle cx="35" cy="25" r="5" fill="#F8F1E3" />
      <circle cx="35" cy="25" r="2.5" fill="#E53935" />
      <circle cx="50" cy="24" r="6" fill="#FFF" />
      <circle cx="50" cy="24" r="3" fill="#E91E63" />
      <circle cx="65" cy="25" r="5" fill="#F8F1E3" />
      <circle cx="65" cy="25" r="2.5" fill="#E53935" />
    </svg>
  </div>
);

// 15. Terracotta Panel Frame with Cream Kolam Border
export const TerracottaKolamFrame = ({ children, style = {} }) => (
  <div
    style={{
      backgroundColor: '#7A2535',
      backgroundImage: 'radial-gradient(#9B3245 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      color: '#F8F1E3',
      border: '2px solid #C6A15B',
      borderRadius: '20px',
      padding: '2.2rem 1.8rem',
      position: 'relative',
      boxShadow: '0 14px 40px rgba(122, 37, 53, 0.3)',
      ...style
    }}
  >
    <div style={{ position: 'absolute', top: 10, left: 10, opacity: 0.8 }}><KolamCorner position="top-left" /></div>
    <div style={{ position: 'absolute', top: 10, right: 10, opacity: 0.8 }}><KolamCorner position="top-right" /></div>
    <div style={{ position: 'absolute', bottom: 10, left: 10, opacity: 0.8 }}><KolamCorner position="bottom-left" /></div>
    <div style={{ position: 'absolute', bottom: 10, right: 10, opacity: 0.8 }}><KolamCorner position="bottom-right" /></div>
    {children}
  </div>
);

// 16. Traditional Banana Tree Side Motif
export const VazhaiMaramSide = ({ side = 'left', height = 180 }) => {
  const isRight = side === 'right';

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        [isRight ? 'right' : 'left']: '-20px',
        transform: `translateY(-50%) ${isRight ? 'scaleX(-1)' : ''}`,
        width: `${height * 0.55}px`,
        height: `${height}px`,
        opacity: 0.75,
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path d="M45 200 Q48 120 52 20 Q50 120 55 200 Z" fill="#4E342E" stroke="#2F211B" strokeWidth="1" />
        <path d="M50 80 Q10 40 5 10 Q35 25 50 75 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.8" />
        <path d="M50 60 Q20 20 25 0 Q45 15 50 55 Z" fill="#388E3C" stroke="#1B5E20" strokeWidth="0.8" />
        <path d="M52 70 Q85 30 95 10 Q70 25 52 65 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.8" />
        <path d="M52 90 Q90 60 98 40 Q75 55 52 85 Z" fill="#4CAF50" opacity="0.9" stroke="#1B5E20" strokeWidth="0.8" />
        <path d="M50 110 Q12 80 8 60 Q32 75 50 105 Z" fill="#388E3C" stroke="#1B5E20" strokeWidth="0.8" />
        <g transform="translate(50, 95)">
          <path d="M0 0 Q-5 15 -2 30" stroke="#795548" strokeWidth="2" fill="none" />
          <ellipse cx="-4" cy="10" rx="3" ry="5" fill="#C6A15B" />
          <ellipse cx="2" cy="12" rx="3" ry="5" fill="#C6A15B" />
          <ellipse cx="-2" cy="18" rx="3" ry="5" fill="#C6A15B" />
          <ellipse cx="4" cy="20" rx="3" ry="5" fill="#C6A15B" />
          <path d="M-4 28 C-8 38 0 45 0 45 C0 45 8 38 4 28 Z" fill="#6B1E2D" stroke="#C6A15B" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
};

// 17. Traditional Vilakku / Kuthuvilakku SVG Motif
export const DeepamVilakku = ({ size = 36, animated = true }) => (
  <div style={{ display: 'inline-block', position: 'relative' }}>
    <svg width={size} height={size * 1.3} viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2 C16 10, 14 15, 20 22 C26 15, 24 10, 20 2 Z"
        fill="#F59E0B"
        opacity="0.9"
        className={animated ? "flame-glow" : ""}
      />
      <path
        d="M20 6 C18 11, 17 14, 20 19 C23 14, 22 11, 20 6 Z"
        fill="#FBBF24"
      />
      <ellipse cx="20" cy="24" rx="8" ry="3" fill="#C6A15B" stroke="#9A7835" strokeWidth="0.8" />
      <path d="M17 24 L16 38 L24 38 L23 24 Z" fill="#C6A15B" />
      <ellipse cx="20" cy="38" rx="14" ry="4" fill="#6B1E2D" stroke="#C6A15B" strokeWidth="1" />
      <path d="M8 38 L6 46 L34 46 L32 38 Z" fill="#C6A15B" />
      <ellipse cx="20" cy="46" rx="16" ry="4" fill="#9A7835" />
    </svg>
  </div>
);

// 18. Traditional Banana Leaf Meal Motif (Kai Ninaithal)
export const BananaLeafMotif = ({ size = 42 }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 20 Q 30 2, 55 20 Q 30 38, 5 20 Z"
      fill="#2E7D32"
      stroke="#C6A15B"
      strokeWidth="1.2"
    />
    <path d="M5 20 Q 30 20, 55 20" stroke="#81C784" strokeWidth="1.5" strokeDasharray="3 2" />
    <circle cx="20" cy="15" r="3" fill="#FFF" />
    <circle cx="30" cy="14" r="3.5" fill="#F59E0B" />
    <circle cx="40" cy="16" r="3" fill="#E53935" />
    <circle cx="25" cy="25" r="4" fill="#FFF" />
    <circle cx="36" cy="24" r="3" fill="#FB8C00" />
  </svg>
);

// 19. Kolam Corner Frame Ornament
export const KolamCorner = ({ position = 'top-left' }) => {
  const transformMap = {
    'top-left': 'rotate(0)',
    'top-right': 'rotate(90deg)',
    'bottom-right': 'rotate(180deg)',
    'bottom-left': 'rotate(270deg)'
  };

  return (
    <div style={{ transform: transformMap[position], width: '60px', height: '60px', opacity: 0.6 }}>
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path d="M5 5 L55 5 M5 5 L5 55" stroke="#C6A15B" strokeWidth="1.5" />
        <path d="M12 12 L45 12 M12 12 L12 45" stroke="#6B1E2D" strokeWidth="0.8" strokeDasharray="3 2" />
        <circle cx="20" cy="20" r="3" fill="#C6A15B" />
        <circle cx="32" cy="20" r="2" fill="#6B1E2D" />
        <circle cx="20" cy="32" r="2" fill="#6B1E2D" />
        <path d="M5 5 Q 30 30, 45 12" stroke="#C6A15B" strokeWidth="0.8" />
      </svg>
    </div>
  );
};

// 20. Subtle Lotus Flower Accent
export const LotusMotif = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5 C15 15, 10 25, 20 32 C30 25, 25 15, 20 5 Z" fill="#6B1E2D" opacity="0.8" />
    <path d="M20 12 C10 18, 5 28, 16 33 C20 30, 20 20, 20 12 Z" fill="#C6A15B" opacity="0.7" />
    <path d="M20 12 C30 18, 35 28, 24 33 C20 30, 20 20, 20 12 Z" fill="#C6A15B" opacity="0.7" />
    <circle cx="20" cy="32" r="2" fill="#2F211B" />
  </svg>
);
