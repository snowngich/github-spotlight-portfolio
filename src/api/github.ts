
import { GithubRepo } from "@/components/ProjectCard";

// This function fetches all repositories for a given GitHub username
export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data as GithubRepo[];
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

// This function filters out forks or includes them based on parameter
export function filterGithubRepos(repos: GithubRepo[], includeForks: boolean = false): GithubRepo[] {
  if (includeForks) {
    return repos;
  }
  
  return repos.filter(repo => !repo.fork);
}

// This function gets featured repositories based on predefined criteria
export function getFeaturedRepos(repos: GithubRepo[]): GithubRepo[] {
  const featuredRepoNames = [
    'snowhub',
    'piga-order',
    'code-connect',
    'school-website',
    'bill-tracker'
  ];
  
  // First try to match by exact name
  const featuredRepos = repos.filter(repo => 
    featuredRepoNames.includes(repo.name.toLowerCase())
  );
  
  // If we have less than the desired number, get the most starred repos
  if (featuredRepos.length < 5) {
    const remainingCount = 5 - featuredRepos.length;
    const existingNames = featuredRepos.map(repo => repo.name.toLowerCase());
    
    const additionalRepos = repos
      .filter(repo => !existingNames.includes(repo.name.toLowerCase()))
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, remainingCount);
    
    return [...featuredRepos, ...additionalRepos];
  }
  
  return featuredRepos;
}
