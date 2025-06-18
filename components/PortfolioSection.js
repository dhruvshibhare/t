'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const projects = [
    {
      title: 'Lumina Finance',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    {
      title: 'Orbital Gallery',
      category: 'Interactive Experience',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    },
    {
      title: 'Eco Impact',
      category: 'UX/UI Design',
      image: 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    }
  ];
  
  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Explore our latest projects showcasing our expertise in web development and design.
            </p>
          </div>
          
          <Link 
            href="/projects"
            className="mt-6 md:mt-0 px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-colors flex items-center"
          >
            View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-background text-foreground rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{project.category}</p>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}