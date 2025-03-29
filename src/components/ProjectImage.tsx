
import React from 'react';
import { Code, Stethoscope, ShoppingCart } from 'lucide-react';

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

  return (
    <div className={`bg-gradient-to-br ${getGradientClass()} flex items-center justify-center ${className}`}>
      <div className="text-center">
        {getProjectIcon()}
        <h3 className="mt-2 font-semibold">{projectName}</h3>
      </div>
    </div>
  );
};

export default ProjectImage;
