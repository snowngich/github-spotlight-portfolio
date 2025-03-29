
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, this would send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:snowngich35@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    snowngich35@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+254722446473" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +254 722 446 473
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Kenya</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/snowngich" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/joseph-njoroge-591324243" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:snowngich35@gmail.com"
                  className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors p-3 rounded-full"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can I help you?" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, question, or just say hi!" 
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
