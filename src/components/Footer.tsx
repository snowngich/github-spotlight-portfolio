
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Joseph Njoroge</h3>
            <p className="text-muted-foreground mb-4">
              Software Engineer, Data Analyst, and Full-Stack Developer specializing in creating impactful digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/snowngich" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/joseph-njoroge-591324243" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:snowngich35@gmail.com" className="text-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+254722446473" className="text-foreground hover:text-primary transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:snowngich35@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">snowngich35@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+254722446473" className="text-muted-foreground hover:text-primary transition-colors">+254 722 446 473</a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} className="text-primary" />
                <a href="https://github.com/snowngich" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">github.com/snowngich</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} className="text-primary" />
                <a href="https://linkedin.com/in/joseph-njoroge-591324243" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">linkedin.com/in/joseph-njoroge-591324243</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Joseph Njoroge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
