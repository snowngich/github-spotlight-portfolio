
import React from 'react';
import { 
  Braces, Laptop, Database, FileJson, 
  Flame, Coffee, Hash, Server, Globe, 
  Table2, Languages, BarChart2, Gauge
} from 'lucide-react';

interface ProgrammingIconProps {
  language: string;
  size?: number;
  className?: string;
}

const ProgrammingIcon: React.FC<ProgrammingIconProps> = ({ 
  language, 
  size = 20,
  className = "" 
}) => {
  const getLanguageIcon = () => {
    const lang = language.toLowerCase();
    
    if (lang.includes('javascript')) return <FileJson size={size} className="text-yellow-500" />;
    if (lang.includes('typescript')) return <Braces size={size} className="text-blue-500" />;
    if (lang.includes('python')) return <Flame size={size} className="text-green-500" />;
    if (lang.includes('java')) return <Coffee size={size} className="text-orange-500" />;
    if (lang.includes('c')) return <Hash size={size} className="text-blue-400" />;
    if (lang.includes('html') || lang.includes('css')) return <Globe size={size} className="text-red-500" />;
    if (lang.includes('react')) return <Laptop size={size} className="text-blue-400" />;
    if (lang.includes('node')) return <Server size={size} className="text-green-600" />;
    if (lang.includes('sql') || lang.includes('mysql') || lang.includes('postgresql')) 
      return <Database size={size} className="text-blue-600" />;
    if (lang.includes('mongo')) return <Database size={size} className="text-green-500" />;
    if (lang.includes('excel')) return <Table2 size={size} className="text-green-700" />;
    if (lang.includes('power bi')) return <BarChart2 size={size} className="text-yellow-600" />;
    if (lang.includes('tableau')) return <Gauge size={size} className="text-blue-500" />;
    
    // Default icon for other languages
    return <Languages size={size} className="text-primary" />;
  };
  
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      {getLanguageIcon()}
      <span>{language}</span>
    </span>
  );
};

export default ProgrammingIcon;
