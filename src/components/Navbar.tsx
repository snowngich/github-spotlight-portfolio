
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, Github } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md border-b' : ''
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="ml-2">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          <Button variant="outline" size="sm" asChild className="ml-4">
            <a href="https://github.com/snowngich" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={16} />
              GitHub
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
            <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
            <Link to="/skills" className="nav-link" onClick={closeMenu}>Skills</Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href="https://github.com/snowngich" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Github size={16} />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
