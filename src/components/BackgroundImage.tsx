
import React from 'react';
import { getRandomBackground } from '../utils/randomImages';

interface BackgroundImageProps {
  imageUrl?: string;
  opacity?: number;
  children?: React.ReactNode;
  className?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ 
  imageUrl, 
  opacity = 0.15, 
  children,
  className = ""
}) => {
  const bgImage = imageUrl || getRandomBackground();
  
  return (
    <div className={`relative ${className}`}>
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          opacity: opacity,
          zIndex: -1
        }}
      />
      
      {/* Optional gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95"
        style={{ zIndex: -1 }}
      />
      
      {/* Content */}
      {children}
    </div>
  );
};

export default BackgroundImage;
