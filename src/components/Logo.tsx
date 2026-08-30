import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'full';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl sm:text-4xl',
  };

  const taglineSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[11px] tracking-[0.22em]',
    lg: 'text-[13px] tracking-[0.25em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Hexagon Logo Mark from Flyer */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Hexagonal Base / Slabs Structural Geometry */}
          <polygon
            points="50,4 93,27 93,73 50,96 7,73 7,27"
            fill="#5da832"
            stroke="#4d9e26"
            strokeWidth="3"
          />
          {/* Top isometric facet highlight */}
          <polygon
            points="50,4 93,27 50,50 7,27"
            fill="#6bc239"
            fillOpacity="0.4"
          />
          {/* Structural intersecting slabs motif (X shape inside hexagon with clean cutouts) */}
          <g stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Top-left to bottom-right structural beam */}
            <path d="M22 36 L78 64" />
            {/* Bottom-left to top-right structural beam */}
            <path d="M22 64 L78 36" />
            {/* Horizontal center reinforcing tie */}
            <path d="M12 50 L88 50" strokeWidth="3.5" strokeDasharray="4 2" strokeOpacity="0.6" />
            {/* Outer structural frame inside hex */}
            <polygon
              points="50,14 84,33 84,67 50,86 16,67 16,33"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
            />
          </g>
        </svg>
      </div>

      {/* Typography: smartslabs | suspended concrete slabs | */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight leading-none ${textSizes[size]} font-sans flex items-baseline`}>
          <span className={variant === 'light' ? 'text-gray-900' : 'text-white'}>
            smart
          </span>
          <span className="text-[#65a30d] font-black">
            slabs
          </span>
        </div>
        {showTagline && (
          <div className={`text-slate-400 font-medium uppercase mt-1 ${taglineSizes[size]}`}>
            | suspended concrete slabs |
          </div>
        )}
      </div>
    </div>
  );
};
