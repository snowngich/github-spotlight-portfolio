import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { getProjectBackground } from '../utils/randomImages';

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  fork: boolean;
}

interface ProjectCardProps {
  project: GithubRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Convert repository name to a more readable format
  const formatName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Determine the project language color
  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      "JavaScript": "text-yellow-500",
      "TypeScript": "text-blue-500",
      "Python": "text-green-500",
      "Java": "text-orange-500",
      "HTML": "text-red-500",
      "CSS": "text-purple-500",
      "C": "text-gray-500",
      "C++": "text-pink-500",
      "PHP": "text-indigo-500",
    };
    
    return colors[language] || "text-gray-500";
  };

  // Get project background image based on project name or language
  const getProjectBackground = () => {
    const formattedName = project.name.toLowerCase();
    return getProjectBackground(formattedName);
  };

  return (
    <Card className="project-card h-full flex flex-col overflow-hidden group">
      <div className="overflow-hidden">
        <AspectRatio ratio={16/9}>
          <div className="relative w-full h-full">
            <img 
              src={getProjectBackground()} 
              alt={formatName(project.name)} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
          </div>
        </AspectRatio>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg hover:text-primary transition-colors">
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {formatName(project.name)}
              {project.fork && <Badge variant="outline" className="text-xs">Fork</Badge>}
            </a>
          </CardTitle>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Star size={16} />
            <span className="text-sm">{project.stargazers_count}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description || `A ${project.language || 'code'} repository by Joseph Njoroge.`}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {project.language && (
            <Badge variant="secondary" className={getLanguageColor(project.language)}>
              {project.language}
            </Badge>
          )}
          
          {project.topics && project.topics.slice(0, 3).map(topic => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 flex justify-between">
        <a 
          href={project.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          <Github size={14} />
          View Code
        </a>
        
        {project.homepage && (
          <a 
            href={project.homepage} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
