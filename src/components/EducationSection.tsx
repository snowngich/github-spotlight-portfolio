
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  period: string;
  courses?: string[];
}

const EducationSection = () => {
  const education: Education[] = [
    {
      institution: "Mama Ngina University",
      degree: "BSc in Mathematics and Computer Science",
      period: "Expected 2026",
      courses: [
        "Software Engineering", "Algorithms", "Data Structures", 
        "Database Management", "Machine Learning"
      ]
    },
    {
      institution: "PowerLearn Project Africa",
      degree: "Software Engineering",
      period: "Completed"
    },
    {
      institution: "Martial School of IT",
      degree: "Data Analytics & Data Science",
      period: "Completed"
    },
    {
      institution: "Ajira Digital Program",
      degree: "Graphic Design",
      period: "Completed"
    },
    {
      institution: "Cisco Networking Academy",
      degree: "Ethical Hacking",
      period: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span> & Training
        </h2>
        
        <div className="max-w-3xl mx-auto relative border-l border-primary/30 pl-8 py-4 space-y-12">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[42px] bg-background p-1 rounded-full border-2 border-primary">
                <GraduationCap size={18} className="text-primary" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                <span className="text-lg text-primary">{edu.degree}</span>
                <span className="hidden md:block text-muted-foreground">•</span>
                <div className="flex items-center text-muted-foreground">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              {edu.courses && (
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="skill-badge">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
