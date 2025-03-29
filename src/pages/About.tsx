
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Database, Laptop, Lightbulb, Rocket, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* About Hero Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Get to know more about my background, skills, and what drives me.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left Column */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="text-primary" size={28} />
                    Who I Am
                  </h2>
                  <p className="text-lg leading-relaxed">
                    A highly skilled and innovative Software Engineer, Data Analyst, and Full-Stack Developer with a strong background in Mathematics and Computer Science. I specialize in web development, data science, and analytics, combining creativity with technical expertise to build impactful solutions. Passionate about problem-solving, automation, and leveraging AI-driven technologies to enhance business processes. Experienced in frontend development, data visualization, and machine learning. Constantly learning and contributing to open-source communities.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                    <Rocket className="text-primary" size={28} />
                    My Approach
                  </h2>
                  <p className="text-lg leading-relaxed mb-4">
                    I approach software development and data analysis with a blend of creativity and analytical thinking. My background in mathematics gives me a strong foundation for problem-solving and algorithm development.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Whether I'm building web applications, analyzing data sets, or developing machine learning models, I focus on creating solutions that are both technically robust and user-friendly. I believe that the best technical solutions are those that solve real problems for real people.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="text-primary" size={28} />
                    Education
                  </h2>
                  <ul className="space-y-4">
                    <li className="border-l-2 border-primary pl-4 py-1">
                      <h3 className="text-xl font-semibold">Mama Ngina University</h3>
                      <p className="text-primary">BSc in Mathematics and Computer Science (Expected 2026)</p>
                      <p className="text-muted-foreground">
                        Studying Software Engineering, Algorithms, Data Structures, Database Management, and Machine Learning
                      </p>
                    </li>
                    <li className="border-l-2 border-primary pl-4 py-1">
                      <h3 className="text-xl font-semibold">PowerLearn Project Africa</h3>
                      <p className="text-primary">Software Engineering (Completed)</p>
                    </li>
                    <li className="border-l-2 border-primary pl-4 py-1">
                      <h3 className="text-xl font-semibold">Martial School of IT</h3>
                      <p className="text-primary">Data Analytics & Data Science (Completed)</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Code className="text-primary" size={24} />
                    Technical Focus
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>Full-Stack Web Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>Data Analysis & Visualization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>Machine Learning Models</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>Database Design & Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>Responsive UI/UX Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>API Development & Integration</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Laptop className="text-primary" size={24} />
                    Programming
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="skill-badge">Python</span>
                        <span className="skill-badge">Java</span>
                        <span className="skill-badge">C</span>
                        <span className="skill-badge">JavaScript</span>
                        <span className="skill-badge">TypeScript</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Frontend</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="skill-badge">HTML</span>
                        <span className="skill-badge">CSS</span>
                        <span className="skill-badge">React</span>
                        <span className="skill-badge">Bootstrap</span>
                        <span className="skill-badge">Tailwind CSS</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Backend</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="skill-badge">Django</span>
                        <span className="skill-badge">Node.js</span>
                        <span className="skill-badge">Express.js</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Database className="text-primary" size={24} />
                    Data Science
                  </h2>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-3">
                      Tools and technologies I use for data analysis and visualization:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="skill-badge">Microsoft Power BI</span>
                      <span className="skill-badge">SQL</span>
                      <span className="skill-badge">Excel</span>
                      <span className="skill-badge">Pandas</span>
                      <span className="skill-badge">NumPy</span>
                      <span className="skill-badge">Matplotlib</span>
                      <span className="skill-badge">Seaborn</span>
                      <span className="skill-badge">Tableau</span>
                      <span className="skill-badge">Scikit-Learn</span>
                      <span className="skill-badge">TensorFlow</span>
                    </div>
                    <p className="text-sm">
                      I've worked on data analysis projects with datasets from Kaggle, including WHO, Amazon, and financial datasets.
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

export default About;
