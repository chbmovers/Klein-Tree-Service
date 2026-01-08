import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'orange' | 'black' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-12", variant = 'orange' }) => {
  const mainColor = variant === 'orange' ? '#f37021' : variant === 'white' ? '#ffffff' : '#000000';
  const contrastColor = variant === 'orange' ? '#0f0c0b' : variant === 'white' ? '#0f0c0b' : '#ffffff';

  return (
    <div className={`relative flex items-center justify-center rounded-full ${className}`} style={{ backgroundColor: mainColor }}>
      <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
        {/* Outer Circular Seal */}
        <circle cx="50" cy="50" r="47" fill="none" stroke={contrastColor} strokeWidth="1.5" />
        <circle cx="50" cy="50" r="44" fill="none" stroke={contrastColor} strokeWidth="0.5" strokeDasharray="1 1.5" />

        {/* The Kingdom Tree - Symmetrical & Structured */}
        <g fill={contrastColor}>
          {/* Main Trunk */}
          <path d="M48 85 L52 85 L51 45 L49 45 Z" />
          
          {/* Symmetrical Roots - Knotwork Style */}
          <path d="M48 85 Q40 85 35 78 L37 76 Q40 82 48 82 Z" />
          <path d="M52 85 Q60 85 65 78 L63 76 Q60 82 52 82 Z" />
          <path d="M50 85 Q50 92 42 95 L43 96 Q51 94 50 85 Z" />
          <path d="M50 85 Q50 92 58 95 L57 96 Q49 94 50 85 Z" />

          {/* Structured Canopy - Tapered Leaf Shapes (Not Circles) */}
          <g>
            {/* Center Tier */}
            <path d="M50 15 Q55 25 50 35 Q45 25 50 15" />
            <path d="M40 20 Q48 28 42 40 Q34 32 40 20" />
            <path d="M60 20 Q52 28 58 40 Q66 32 60 20" />
            
            {/* Mid Tier */}
            <path d="M30 35 Q40 40 32 55 Q22 50 30 35" />
            <path d="M70 35 Q60 40 68 55 Q78 50 70 35" />
            
            {/* Low Tier */}
            <path d="M25 55 Q35 60 28 72 Q18 67 25 55" />
            <path d="M75 55 Q65 60 72 72 Q82 67 75 55" />
          </g>
          
          {/* Integrated Branches */}
          <path d="M50 45 L35 30" stroke={contrastColor} strokeWidth="1" fill="none" />
          <path d="M50 45 L65 30" stroke={contrastColor} strokeWidth="1" fill="none" />
          <path d="M50 55 L30 50" stroke={contrastColor} strokeWidth="1" fill="none" />
          <path d="M50 55 L70 50" stroke={contrastColor} strokeWidth="1" fill="none" />
        </g>

        {/* "KINGDOM" Circular Text */}
        <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
        <text style={{ fontSize: '4.8px', fontWeight: '900', fontFamily: 'Montserrat, sans-serif' }} fill={contrastColor}>
          <textPath xlinkHref="#circlePath" startOffset="25%" textAnchor="middle">
            KINGDOM TREE SERVICES
          </textPath>
        </text>

        {/* Paynesville Mark */}
        <text x="50" y="81" style={{ fontSize: '3px', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }} fill={contrastColor} textAnchor="middle">
          EST. PAYNESVILLE
        </text>
      </svg>
    </div>
  );
};

export default Logo;