import React from 'react';
import logoLight from '../assets/images/logo-light.png';
import logoDark from '../assets/images/logo-dark.png';

interface LogoProps {
  /** 'light' = placed on a light surface, 'dark' = placed on a dark surface. */
  variant?: 'light' | 'dark' | 'full';
  size?: 'sm' | 'md' | 'lg';
  /**
   * Retained for API compatibility. The supplied artwork is a single lockup
   * that already includes the "suspended concrete slabs" tagline, so it
   * cannot be toggled off without separate artwork.
   */
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
}) => {
  const heights = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16 sm:h-20',
  };

  // Dark-ink artwork for light surfaces, light-ink artwork for dark surfaces.
  const src = variant === 'light' ? logoLight : logoDark;

  return (
    <img
      src={src}
      alt="Smart Slabs — suspended concrete slabs"
      className={`w-auto select-none ${heights[size]} ${className}`}
      draggable={false}
    />
  );
};
