
import React from 'react';
import { useTheme } from '../hooks/use-theme';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo = ({ size = 'md', withText = true }: LogoProps) => {
  const { theme } = useTheme();
  
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  
  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizes[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="url(#logo-gradient)" />
          <text 
            x="50" 
            y="50" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fill="white"
            fontWeight="bold"
            fontSize="40"
          >
            JN
          </text>
        </svg>
      </div>
      
      {withText && (
        <span className={`font-bold ${textSizes[size]}`}>
          <span className="text-primary">Joseph</span>
          <span className="text-foreground">Njoroge</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
