
import React from 'react';
import { Code, Stethoscope, ShoppingCart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProjectImageProps {
  projectName: string;
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ projectName, className = "" }) => {
  const getProjectIcon = () => {
    switch (projectName.toLowerCase()) {
      case 'snowhub':
        return <Code size={48} className="text-blue-500" />;
      case 'medi-rescue-haven':
        return <Stethoscope size={48} className="text-green-500" />;
      case 'piga order':
        return <ShoppingCart size={48} className="text-orange-500" />;
      default:
        return <Code size={48} className="text-primary" />;
    }
  };

  const getGradientClass = () => {
    switch (projectName.toLowerCase()) {
      case 'snowhub':
        return 'from-blue-500/20 to-indigo-500/20';
      case 'medi-rescue-haven':
        return 'from-green-500/20 to-emerald-500/20';
      case 'piga order':
        return 'from-orange-500/20 to-amber-500/20';
      default:
        return 'from-primary/20 to-accent/20';
    }
  };

  const getProjectImage = () => {
    switch (projectName.toLowerCase()) {
      case 'snowhub':
        return '/project-images/snowhub.jpg';
      case 'medi-rescue-haven':
        return '/project-images/medi-rescue-haven.jpg';
      case 'piga order':
        return '/project-images/piga-order.jpg';
      default:
        return '';
    }
  };

  const imagePath = getProjectImage();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AspectRatio ratio={16 / 9} className="w-full">
        {imagePath ? (
          <div className="absolute inset-0">
            <img 
              src={imagePath} 
              alt={projectName} 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass()} opacity-90`}></div>
          </div>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass()}`}></div>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            {getProjectIcon()}
            <h3 className="mt-2 font-semibold text-foreground">{projectName}</h3>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default ProjectImage;
