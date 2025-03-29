
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    { title: "Python Essentials 1", issuer: "Cisco" },
    { title: "Python Essentials 2", issuer: "Cisco Networking Academy" },
    { title: "Introduction to Data Science", issuer: "Cisco Networking Academy" },
    { title: "Data Analytics", issuer: "Martial School of IT" },
    { title: "Software Engineering", issuer: "PowerLearn Project" },
    { title: "Graphics Design", issuer: "Ajira Digital Program" },
    { title: "Ethical Hacking", issuer: "Cisco Networking Academy" }
  ];

  return (
    <section id="certifications" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="text-primary">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="flex items-start p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300"
            >
              <CheckCircle2 size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
