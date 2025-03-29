
import React from 'react';
import { Laptop, Server, Database, PieChart, Wrench, Lightbulb } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Laptop className="w-6 h-6 text-primary" />,
      skills: ["HTML", "CSS", "React", "Bootstrap", "Tailwind CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-primary" />,
      skills: ["Django", "Node.js", "Express.js", "Python", "Java", "C"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
    },
    {
      title: "Data Analysis & Science",
      icon: <PieChart className="w-6 h-6 text-primary" />,
      skills: ["Microsoft Power BI", "SQL", "Excel", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "Docker", "Jupyter Notebook", "Scikit-Learn", "TensorFlow"]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      skills: ["Creative Problem-Solving", "Effective Communication", "Leadership & Collaboration", "Agile Methodologies", "Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">Skills</span> & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
