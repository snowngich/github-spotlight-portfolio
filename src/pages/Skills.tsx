
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillsSection from '@/components/SkillsSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, Database, Server, LineChart, 
  Monitor, LayoutGrid, Network, BrainCircuit,
  BarChart3, ChevronRight, PenTool 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: "computer-science",
      label: "Computer Science",
      icon: <Code className="w-4 h-4" />,
      skills: [
        { name: "Electronics & Computer Networks", value: 85 },
        { name: "Data Structures & Algorithms", value: 90 },
        { name: "Database Systems & Operating Systems", value: 85 },
        { name: "Embedded Systems & Intelligent Systems", value: 75 },
        { name: "Human-Computer Interaction", value: 80 },
        { name: "Discrete Structures", value: 85 },
        { name: "Numerical Analysis, Probability, and Statistics", value: 90 }
      ]
    },
    {
      id: "programming",
      label: "Programming",
      icon: <Monitor className="w-4 h-4" />,
      skills: [
        { name: "Python", value: 95 },
        { name: "JavaScript", value: 90 },
        { name: "TypeScript", value: 85 },
        { name: "Java", value: 80 },
        { name: "C", value: 75 },
        { name: "HTML/CSS", value: 90 }
      ]
    },
    {
      id: "frontend",
      label: "Frontend",
      icon: <LayoutGrid className="w-4 h-4" />,
      skills: [
        { name: "React", value: 90 },
        { name: "Bootstrap", value: 85 },
        { name: "Tailwind CSS", value: 90 },
        { name: "Responsive Design", value: 85 },
        { name: "UI/UX Principles", value: 80 }
      ]
    },
    {
      id: "backend",
      label: "Backend",
      icon: <Server className="w-4 h-4" />,
      skills: [
        { name: "Django", value: 85 },
        { name: "Node.js", value: 85 },
        { name: "Express.js", value: 80 },
        { name: "RESTful APIs", value: 90 },
        { name: "Authentication/Authorization", value: 85 }
      ]
    },
    {
      id: "databases",
      label: "Databases",
      icon: <Database className="w-4 h-4" />,
      skills: [
        { name: "MySQL", value: 90 },
        { name: "PostgreSQL", value: 85 },
        { name: "MongoDB", value: 80 },
        { name: "Database Design", value: 85 },
        { name: "SQL Query Optimization", value: 75 }
      ]
    },
    {
      id: "data-analytics",
      label: "Data Analytics",
      icon: <LineChart className="w-4 h-4" />,
      skills: [
        { name: "Microsoft Power BI", value: 85 },
        { name: "SQL", value: 90 },
        { name: "Excel", value: 85 },
        { name: "Pandas", value: 90 },
        { name: "NumPy", value: 85 },
        { name: "Data Cleaning and Preparation", value: 95 }
      ]
    },
    {
      id: "data-viz",
      label: "Data Visualization",
      icon: <BarChart3 className="w-4 h-4" />,
      skills: [
        { name: "Matplotlib", value: 85 },
        { name: "Seaborn", value: 80 },
        { name: "Tableau", value: 75 },
        { name: "D3.js", value: 70 },
        { name: "Chart.js", value: 75 }
      ]
    },
    {
      id: "machine-learning",
      label: "Machine Learning",
      icon: <BrainCircuit className="w-4 h-4" />,
      skills: [
        { name: "Scikit-Learn", value: 85 },
        { name: "TensorFlow", value: 70 },
        { name: "Classification Algorithms", value: 80 },
        { name: "Regression Models", value: 85 },
        { name: "Data Preprocessing", value: 90 }
      ]
    },
    {
      id: "tools",
      label: "Tools",
      icon: <Wrench className="w-4 h-4" />,
      skills: [
        { name: "Git/GitHub", value: 95 },
        { name: "VS Code", value: 95 },
        { name: "Docker", value: 75 },
        { name: "Jupyter Notebook", value: 90 },
        { name: "Agile/Scrum", value: 85 },
        { name: "Postman", value: 90 }
      ]
    },
    {
      id: "other",
      label: "Other",
      icon: <Network className="w-4 h-4" />,
      skills: [
        { name: "Problem Solving", value: 95 },
        { name: "Communication", value: 90 },
        { name: "Leadership", value: 85 },
        { name: "Collaboration", value: 90 },
        { name: "Graphic Design", value: 75 },
        { name: "Ethical Hacking", value: 70 }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Skills Hero Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My <span className="text-primary">Skills</span> & Expertise
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                A comprehensive overview of my technical abilities and proficiencies.
              </p>
            </div>
          </div>
        </section>
        
        {/* Skills Overview */}
        <SkillsSection />
        
        {/* Detailed Skills Assessment */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Skills <span className="text-primary">Assessment</span>
            </h2>
            
            <Tabs defaultValue="computer-science" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8">
                {skillCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {skillCategories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category.icon}
                        {category.label} Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {category.skills.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-2">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.value}%</span>
                            </div>
                            <Progress value={skill.value} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-primary">Certifications</span> & Training
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { 
                  title: "Python Essentials 1 & 2", 
                  issuer: "Cisco", 
                  description: "Comprehensive Python programming fundamentals and advanced concepts.",
                  icon: <Code className="text-primary" />
                },
                { 
                  title: "Introduction to Data Science", 
                  issuer: "Cisco Networking Academy", 
                  description: "Foundations of data science, including data analysis, visualization, and basic machine learning.",
                  icon: <Database className="text-primary" />
                },
                { 
                  title: "Data Analytics", 
                  issuer: "Martial School of IT", 
                  description: "Advanced data analysis techniques using modern tools and methodologies.",
                  icon: <LineChart className="text-primary" />
                },
                { 
                  title: "Software Engineering", 
                  issuer: "PowerLearn Project", 
                  description: "Software development lifecycle, best practices, and modern engineering techniques.",
                  icon: <Monitor className="text-primary" />
                },
                { 
                  title: "Graphics Design", 
                  issuer: "Ajira Digital Program", 
                  description: "Digital design principles and practical skills using industry-standard tools.",
                  icon: <PenTool className="text-primary" />
                },
                { 
                  title: "Ethical Hacking", 
                  issuer: "Cisco Networking Academy", 
                  description: "Security principles, vulnerability assessment, and ethical hacking techniques.",
                  icon: <Network className="text-primary" />
                }
              ].map((cert, index) => (
                <Card key={index} className="flex flex-col h-full hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {cert.icon}
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-2">{cert.description}</p>
                    <p className="text-sm flex items-center text-primary mt-4">
                      <ChevronRight size={16} className="mr-1" />
                      Issued by {cert.issuer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Skills;
