
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard, { GithubRepo } from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fetchGithubRepos, filterGithubRepos } from '@/api/github';
import { Button } from '@/components/ui/button';
import { Search, FilterX, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

// Categories based on common technologies or topics
type CategoryFilter = 'all' | 'frontend' | 'backend' | 'fullstack' | 'data' | 'other';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [includeForks, setIncludeForks] = useState(false);
  
  // Fetch GitHub repositories
  const { data: allRepos = [], isLoading, error } = useQuery({
    queryKey: ['githubRepos', 'snowngich'],
    queryFn: () => fetchGithubRepos('snowngich'),
  });
  
  // Filter repositories based on current filters
  const filteredRepos = React.useMemo(() => {
    let repos = filterGithubRepos(allRepos, includeForks);
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      repos = repos.filter(repo => 
        repo.name.toLowerCase().includes(term) || 
        (repo.description && repo.description.toLowerCase().includes(term))
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      // Category filter logic
      const categoryFilters: Record<CategoryFilter, (repo: GithubRepo) => boolean> = {
        all: () => true,
        frontend: (repo) => {
          const frontendTechs = ['react', 'vue', 'angular', 'javascript', 'html', 'css', 'tailwind', 'bootstrap'];
          return frontendTechs.some(tech => 
            repo.topics?.includes(tech) || 
            repo.language?.toLowerCase() === tech ||
            (repo.description?.toLowerCase().includes(tech))
          );
        },
        backend: (repo) => {
          const backendTechs = ['node', 'express', 'django', 'flask', 'fastapi', 'python', 'java', 'php', 'api'];
          return backendTechs.some(tech => 
            repo.topics?.includes(tech) || 
            repo.language?.toLowerCase() === tech ||
            (repo.description?.toLowerCase().includes(tech))
          );
        },
        fullstack: (repo) => {
          const fullstackTechs = ['fullstack', 'full-stack', 'mern', 'mean', 'webapp'];
          return fullstackTechs.some(tech => 
            repo.topics?.includes(tech) || 
            (repo.description?.toLowerCase().includes(tech))
          );
        },
        data: (repo) => {
          const dataTechs = ['data', 'analytics', 'machine-learning', 'ml', 'ai', 'pandas', 'numpy', 'tensorflow', 'scikit', 'jupyter'];
          return dataTechs.some(tech => 
            repo.topics?.includes(tech) || 
            (repo.description?.toLowerCase().includes(tech))
          );
        },
        other: (repo) => {
          // If it doesn't match any other category
          const allTechs = ['react', 'vue', 'angular', 'javascript', 'html', 'css', 'node', 'express', 'django', 'flask', 'fastapi', 'python', 'java', 'php', 'fullstack', 'full-stack', 'mern', 'mean', 'data', 'analytics', 'machine-learning', 'ml', 'ai', 'pandas', 'numpy', 'tensorflow', 'scikit'];
          return !allTechs.some(tech => 
            repo.topics?.includes(tech) || 
            repo.language?.toLowerCase() === tech ||
            (repo.description?.toLowerCase().includes(tech))
          );
        }
      };
      
      repos = repos.filter(categoryFilters[selectedCategory]);
    }
    
    return repos;
  }, [allRepos, searchTerm, selectedCategory, includeForks]);
  
  // Create manual projects for those not in GitHub
  const manualProjects: GithubRepo[] = [
    {
      id: 1001,
      name: "WHO Dataset Analysis",
      full_name: "snowngich/who-dataset-analysis",
      html_url: "https://github.com/snowngich",
      description: "Explored and visualized global health trends using WHO datasets.",
      homepage: "",
      stargazers_count: 0,
      language: "Python",
      topics: ["data-analysis", "visualization", "python", "pandas"],
      fork: false
    },
    {
      id: 1002,
      name: "Amazon Sales Analysis",
      full_name: "snowngich/amazon-sales-analysis",
      html_url: "https://github.com/snowngich",
      description: "Conducted sales trend analysis using Power BI and Python.",
      homepage: "",
      stargazers_count: 0,
      language: "Python",
      topics: ["power-bi", "data-analysis", "python", "sales"],
      fork: false
    },
    {
      id: 1003,
      name: "Financial Data Prediction Model",
      full_name: "snowngich/financial-prediction-model",
      html_url: "https://github.com/snowngich",
      description: "Built a machine learning model to predict stock trends using historical data.",
      homepage: "",
      stargazers_count: 0,
      language: "Python",
      topics: ["machine-learning", "finance", "prediction", "scikit-learn"],
      fork: false
    },
    {
      id: 1004,
      name: "Bill Tracking App",
      full_name: "snowngich/bill-tracker",
      html_url: "https://github.com/snowngich",
      description: "A Python-based application for tracking expenses and bill payments.",
      homepage: "",
      stargazers_count: 0,
      language: "Python",
      topics: ["sqlite", "python", "finance", "desktop-app"],
      fork: false
    }
  ];
  
  // Combine GitHub repos with manual projects
  const allProjects = React.useMemo(() => {
    if (selectedCategory === 'data') {
      return [...filteredRepos, ...manualProjects.filter(project => 
        project.topics.some(topic => ['data-analysis', 'machine-learning', 'visualization'].includes(topic))
      )];
    }
    return filteredRepos;
  }, [filteredRepos, selectedCategory]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Projects Hero Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My <span className="text-primary">Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                A collection of my work including GitHub repositories, data analysis projects, and more.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full md:w-[300px]"
                />
              </div>
              
              <div className="flex gap-4 items-center w-full md:w-auto">
                <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={(value) => setSelectedCategory(value as CategoryFilter)}>
                  <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                    <TabsTrigger value="data">Data</TabsTrigger>
                    <TabsTrigger value="other">Other</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setIncludeForks(!includeForks)}
                  className={includeForks ? 'bg-primary/10' : ''}
                >
                  {includeForks ? <FilterX size={18} /> : <Filter size={18} />}
                </Button>
              </div>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                // Loading skeletons
                Array(6).fill(0).map((_, index) => (
                  <div key={index} className="border rounded-lg p-5">
                    <Skeleton className="h-7 w-4/5 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <div className="flex gap-2 mb-4">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                    <div className="flex justify-between">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-5 w-24" />
                    </div>
                  </div>
                ))
              ) : error ? (
                <div className="col-span-full text-center py-10">
                  <p className="text-lg text-destructive mb-4">
                    Error loading projects. Please try again later.
                  </p>
                  <Button onClick={() => window.location.reload()}>
                    Retry
                  </Button>
                </div>
              ) : allProjects.length === 0 ? (
                <div className="col-span-full text-center py-10">
                  <p className="text-lg mb-4">
                    No projects found matching your criteria.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setIncludeForks(false);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                allProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
