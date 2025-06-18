'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InViewAnimation } from '../components/InViewAnimation';
import { PortfolioItem } from '../components/PortfolioSection';

export default function ProjectsPage() {
  const projects = [
    // ...copy the projects array from PortfolioSection.js...
  ];
  const categories = ['All', 'Corporate & Tech', 'E-commerce', 'Travel & Real estate', 'Healthcare Platform'];
  const [activeCategory, setActiveCategory] = useState('Travel & Real estate');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <InViewAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects & Templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful projects & Templates that showcase our expertise and commitment to excellence.
            </p>
          </div>
        </InViewAnimation>

        <InViewAnimation>
          <div className="flex flex-wrap justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </InViewAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <InViewAnimation key={index} delay={index * 100}>
              <PortfolioItem {...project} />
            </InViewAnimation>
          ))}
        </div>

        <InViewAnimation>
          <div className="text-center mt-12">
            <Link 
              href="#contact" 
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-md transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </InViewAnimation>
      </div>
    </section>
  );
}
