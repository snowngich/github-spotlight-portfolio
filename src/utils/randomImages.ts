// Utility to fetch and manage random background images

// List of high-quality background image URLs from Unsplash
const randomBackgroundUrls = [
  // Programming/Tech backgrounds
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1550439062-609e1531270e?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1600&auto=format&fit=crop&q=80',
  
  // Healthcare/Medical backgrounds
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&auto=format&fit=crop&q=80',
  
  // E-commerce/Shopping backgrounds
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&auto=format&fit=crop&q=80',
  
  // Abstract/Gradient backgrounds
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&auto=format&fit=crop&q=80',
  
  // Other tech/data themed backgrounds
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1600&auto=format&fit=crop&q=80'
];

// Category-specific image URLs
const categoryImages: Record<string, string[]> = {
  healthcare: [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&auto=format&fit=crop&q=80',
  ],
  ecommerce: [
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&auto=format&fit=crop&q=80',
  ],
  education: [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&auto=format&fit=crop&q=80',
  ],
  programming: [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1550439062-609e1531270e?w=1600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop&q=80',
  ]
};

// Project-specific image URLs
const projectImages: Record<string, string> = {
  'snowhub': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&auto=format&fit=crop&q=80',
  'medi-rescue-haven': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&auto=format&fit=crop&q=80',
  'piga order': 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format&fit=crop&q=80',
};

/**
 * Returns a random background image URL
 */
export const getRandomBackground = (): string => {
  const randomIndex = Math.floor(Math.random() * randomBackgroundUrls.length);
  return randomBackgroundUrls[randomIndex];
};

/**
 * Returns a specific project image URL or a random one if not found
 */
export const getProjectBackground = (projectName: string): string => {
  const lowerCaseName = projectName.toLowerCase();
  
  // Check for exact project name match
  if (projectImages[lowerCaseName]) {
    return projectImages[lowerCaseName];
  }
  
  // Check for partial matches
  if (lowerCaseName.includes('medi') || lowerCaseName.includes('health') || lowerCaseName.includes('rescue')) {
    const randomIndex = Math.floor(Math.random() * categoryImages.healthcare.length);
    return categoryImages.healthcare[randomIndex];
  }
  
  if (lowerCaseName.includes('shop') || lowerCaseName.includes('order') || lowerCaseName.includes('piga')) {
    const randomIndex = Math.floor(Math.random() * categoryImages.ecommerce.length);
    return categoryImages.ecommerce[randomIndex];
  }
  
  if (lowerCaseName.includes('edu') || lowerCaseName.includes('learn') || lowerCaseName.includes('hub')) {
    const randomIndex = Math.floor(Math.random() * categoryImages.education.length);
    return categoryImages.education[randomIndex];
  }
  
  // Default to random background
  return getRandomBackground();
};

/**
 * Returns a random background image URL based on a category
 */
export const getCategoryBackground = (category: string): string => {
  const lowerCaseCategory = category.toLowerCase();
  
  for (const [key, urls] of Object.entries(categoryImages)) {
    if (lowerCaseCategory.includes(key)) {
      const randomIndex = Math.floor(Math.random() * urls.length);
      return urls[randomIndex];
    }
  }
  
  return getRandomBackground();
};
