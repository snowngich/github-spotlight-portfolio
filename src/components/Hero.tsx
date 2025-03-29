
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-primary font-semibold mb-4 border border-primary/20 rounded-full px-4 py-1">
                Software Engineer & Data Analyst
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm <span className="text-primary">Joseph Njoroge</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A highly skilled and innovative Software Engineer, Data Analyst, and Full-Stack Developer with a strong background in Mathematics and Computer Science. I specialize in web development, data science, and analytics, combining creativity with technical expertise to build impactful solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              
              <Button variant="outline" size="lg" onClick={scrollToProjects}>
                View My Work
              </Button>
              
              <div className="flex items-center gap-4 ml-2">
                <a 
                  href="https://github.com/snowngich" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/joseph-njoroge-591324243" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:snowngich35@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-sm opacity-75"></div>
              <div className="relative rounded-full overflow-hidden border-2 border-background w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="/lovable-uploads/39323a6c-1738-4ea7-aff3-4cec5713697c.png" 
                  alt="Joseph Njoroge" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <ArrowDown size={24} className="text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
