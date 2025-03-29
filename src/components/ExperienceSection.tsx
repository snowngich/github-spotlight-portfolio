
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Frontend Developer",
      company: "BorneLabs",
      period: "2025 - Present",
      description: [
        "Designed and developed modern, responsive, and scalable web applications.",
        "Collaborated with backend teams to integrate APIs and optimize web performance.",
        "Built reusable UI components in React, ensuring smooth user interactions.",
        "Improved website performance and user experience, reducing load time by 40%."
      ]
    },
    {
      title: "Freelance Developer",
      company: "GitHub & Open-Source",
      period: "2022 - Present",
      description: [
        "Developed and contributed to various open-source projects in Python and JavaScript.",
        "Created automation tools, data analysis dashboards, and machine learning models.",
        "Built and maintained personal projects, showcasing full-stack development skills."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        
        <div className="max-w-3xl mx-auto relative border-l border-primary/30 pl-8 py-4 space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[42px] bg-background p-1 rounded-full border-2 border-primary">
                <Briefcase size={18} className="text-primary" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="hidden md:block text-muted-foreground">•</span>
                <span className="text-lg text-primary">{exp.company}</span>
              </div>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{exp.period}</span>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <p>{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
