
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import BackgroundImage from '@/components/BackgroundImage';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { ThemeProvider } from '../hooks/use-theme';
import { getRandomBackground, getCategoryBackground } from '../utils/randomImages';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <BackgroundImage 
            imageUrl={getCategoryBackground('programming')}
            opacity={0.1}
            className="w-full"
          >
            <Hero />
          </BackgroundImage>
          
          {/* About Me (Brief) */}
          <BackgroundImage 
            imageUrl={getRandomBackground()}
            opacity={0.08}
            className="py-20 bg-secondary/50 w-full"
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold mb-6">
                      About <span className="text-primary">Me</span>
                    </h2>
                    
                    <p className="text-lg mb-6">
                      A highly skilled and innovative Software Engineer, Data Analyst, and Full-Stack Developer with a strong background in Mathematics and Computer Science. I specialize in web development, data science, and analytics, combining creativity with technical expertise to build impactful solutions.
                    </p>
                    
                    <p className="text-lg mb-6">
                      Passionate about problem-solving, automation, and leveraging AI-driven technologies to enhance business processes. Experienced in frontend development, data visualization, and machine learning. Constantly learning and contributing to open-source communities.
                    </p>
                    
                    <div className="flex gap-4">
                      <Button asChild>
                        <a href="/about">Read More</a>
                      </Button>
                      
                      <Button variant="outline" className="gap-2">
                        <Download size={16} />
                        Download CV
                      </Button>
                    </div>
                  </motion.div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-lg blur-xl"></div>
                    <div className="relative bg-card rounded-lg overflow-hidden border border-border p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Education</h3>
                          <p className="text-muted-foreground">BSc in Mathematics and Computer Science</p>
                          <p className="text-sm">Mama Ngina University (Expected 2026)</p>
                        </div>
                        
                        <div className="border-t border-border pt-4">
                          <h3 className="text-xl font-semibold mb-2">Experience</h3>
                          <p className="text-muted-foreground">Frontend Developer at BorneLabs</p>
                          <p className="text-sm">2025 - Present</p>
                        </div>
                        
                        <div className="border-t border-border pt-4">
                          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="skill-badge">React</span>
                            <span className="skill-badge">Python</span>
                            <span className="skill-badge">Django</span>
                            <span className="skill-badge">Node.js</span>
                            <span className="skill-badge">Data Analysis</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </BackgroundImage>
          
          {/* Featured Projects */}
          <BackgroundImage 
            imageUrl={getCategoryBackground('programming')}
            opacity={0.05}
            className="w-full"
          >
            <FeaturedProjects />
          </BackgroundImage>
          
          {/* Skills Overview */}
          <BackgroundImage 
            imageUrl={getCategoryBackground('programming')}
            opacity={0.08}
            className="w-full"
          >
            <SkillsSection />
          </BackgroundImage>
          
          {/* Experience */}
          <BackgroundImage 
            imageUrl={getRandomBackground()}
            opacity={0.05}
            className="w-full"
          >
            <ExperienceSection />
          </BackgroundImage>
          
          {/* Education */}
          <BackgroundImage 
            imageUrl={getCategoryBackground('education')}
            opacity={0.08}
            className="w-full"
          >
            <EducationSection />
          </BackgroundImage>
          
          {/* Certifications */}
          <BackgroundImage 
            imageUrl={getRandomBackground()}
            opacity={0.05}
            className="w-full"
          >
            <CertificationsSection />
          </BackgroundImage>
          
          {/* Contact Section */}
          <BackgroundImage 
            imageUrl={getRandomBackground()}
            opacity={0.08}
            className="w-full"
          >
            <ContactSection />
          </BackgroundImage>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
