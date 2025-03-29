
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const FeaturedProjects = () => {
  const projects: Project[] = [
    {
      title: "SnowHub",
      description: "A Learning Management System (LMS) where I teach full-stack development, offer job postings, and host tech events.",
      techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/snowngich/snowhub"
    },
    {
      title: "Piga Order - Creative eCommerce Platform",
      description: "A dynamic online marketplace with interactive UI, seamless shopping experience, and a dark mode UI.",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/snowngich/piga-order"
    },
    {
      title: "Code & Connect - Techie Dating & Networking Platform",
      description: "A dating platform for developers, techies, and crypto enthusiasts, integrating GitHub, AI matchmaking, and hackathon features.",
      techStack: ["React", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/snowngich/code-connect"
    }
  ];

  return (
    <section id="featured-projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my highlighted projects that demonstrate my technical skills and creativity.
        </p>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Project Image/Placeholder - alternating sides for visual interest */}
              <div className={`bg-secondary rounded-lg overflow-hidden border border-border h-64 md:h-80 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-6xl font-bold text-primary/30">{project.title.charAt(0)}</div>
                )}
              </div>
              
              {/* Project Description */}
              <div className={index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild size="lg">
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
