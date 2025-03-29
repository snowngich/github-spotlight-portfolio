
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
      <div className={`relative rounded-full overflow-hidden ${sizes[size]}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
          JN
        </div>
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
