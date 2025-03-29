
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { GitHub, Linkedin, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Contact Hero Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Feel free to reach out if you have any questions or would like to work together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button asChild variant="outline" className="gap-2">
                  <a href="https://github.com/snowngich" target="_blank" rel="noopener noreferrer">
                    <GitHub size={18} />
                    GitHub
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="gap-2">
                  <a href="https://linkedin.com/in/joseph-njoroge-591324243" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="gap-2">
                  <a href="mailto:snowngich35@gmail.com">
                    <Mail size={18} />
                    snowngich35@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <ContactSection />
        
        {/* Map/Location Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-primary">Location</span>
              </h2>
              
              <div className="flex justify-center items-center mb-8">
                <MapPin size={24} className="text-primary mr-2" />
                <span className="text-xl">Kenya</span>
              </div>
              
              <div className="bg-card rounded-lg overflow-hidden border border-border h-80">
                {/* This is a placeholder for a map - in a real project, you'd embed a Google Map or similar */}
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <div className="text-center p-8">
                    <MapPin size={48} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Based in Kenya</h3>
                    <p className="text-muted-foreground">
                      Available for remote work worldwide and local opportunities in Kenya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
