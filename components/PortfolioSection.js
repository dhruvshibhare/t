'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { InViewAnimation } from './InViewAnimation';

// Smooth and slow scroll animation for image
const PortfolioItem = ({ image, title, category, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    let start = null;
    let frame;
    const duration = 8000; // 8 seconds
    const maxScroll = 384; // height in px

    function animateScroll(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      let progress = Math.min(elapsed / duration, 1);
      if (isHovered) {
        setScrollY(progress * maxScroll);
        if (progress < 1) {
          frame = requestAnimationFrame(animateScroll);
        }
      } else {
        setScrollY((prev) => {
          if (prev > 0) {
            frame = requestAnimationFrame(() => setScrollY(prev - maxScroll / (duration / 16)));
            return Math.max(prev - maxScroll / (duration / 16), 0);
          }
          return 0;
        });
      }
    }

    if (isHovered) {
      frame = requestAnimationFrame(animateScroll);
    } else {
      frame = requestAnimationFrame(() => setScrollY(0));
    }
    return () => {
      cancelAnimationFrame(frame);
      start = null;
    };
  }, [isHovered]);

  return (
    <div 
      className="relative overflow-hidden rounded-lg group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-96 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full object-cover"
          style={{
            height: '615%',
            transform: `translateY(calc(-100% + ${384 + scrollY}px))`,
            objectPosition: 'top',
            transition: isHovered ? 'none' : 'transform 0.8s cubic-bezier(0.4,0,0.2,1)'
          }}
        />
      </div>
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-background/80 to-background/30 flex flex-col justify-end p-6 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
        }`}
      >
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-muted-foreground mb-4">{category}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default function PortfolioSection() {
  const projects = [
    {
      image: 'images/c1.png',
      title: 'Corporate & Tech',
      category: 'Corporate & Tech',
      link: 'https://aizflex.webflow.io/',
    },
    {
      image: 'images/c2.png',
      title: 'Corporate & Tech',
      category: 'Corporate & Tech',
      link: 'https://pulse-saas.webflow.io/',
    },
    {
      image: 'images/c3.png',
      title: 'Corporate & Tech',
      category: 'Corporate & Tech',
      link: 'https://tech-tribe.webflow.io/',
    },
    {
      image: 'images/c4.png',
      title: 'Corporate & Tech',
      category: 'Corporate & Tech',
      link: 'https://corporata-template.webflow.io/',
    },
    {
      image: 'images/e1.png',
      title: 'Eco Marketplace',
      category: 'E-commerce',
      link: 'https://zinzira.webflow.io/',
    },
    {
      image: 'images/e2.png',
      title: 'Eco Marketplace',
      category: 'E-commerce',
      link: 'https://flash-flow.webflow.io/',
    },
    {
      image: 'images/e4.png',
      title: 'Eco Marketplace',
      category: 'E-commerce',
      link: 'https://kidcube.webflow.io/',
    },
    {
      image: 'images/e3.png',
      title: 'Eco Marketplace',
      category: 'E-commerce',
      link: 'https://jewellery-nx.webflow.io/',
    },
    {
      image: 'images/t1.png',
      title: 'Travel & Real Estate',
      category: 'Travel & Real estate',
      link: 'https://real-estatoe.webflow.io/',
    },
    {
      image: 'images/t2.png',
      title: 'Travel & Real Estate',
      category: 'Travel & Real estate',
      link: 'https://urban-estate-template.webflow.io/',
    },
    {
      image: 'images/t3.png',
      title: 'Travel & Real Estate',
      category: 'Travel & Real estate',
      link: 'https://estyva.webflow.io/',
    },
    {
      image: 'images/t.png',
      title: 'Travel & Real Estate',
      category: 'Travel & Real estate',
      link: 'https://ruma-property-site.webflow.io/',
    },
    {
      image: 'images/h1.png',
      title: 'Healthcare Platform',
      category: 'Healthcare Platform',
      link: 'https://medpro-medical-template.webflow.io/',
    },
    {
      image: 'images/h2.png',
      title: 'Healthcare Platform',
      category: 'Healthcare Platform',
      link: 'https://doctorate-template.webflow.io/',
    },
  ];
  
  const categories = ['All', 'Corporate & Tech', 'E-commerce', 'Travel & Real estate', 'Healthcare Platform'];
  const [activeCategory, setActiveCategory] = useState('Travel & Real estate');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <InViewAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio & Templates</h2>
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