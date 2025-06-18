'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'Lumina Finance',
      category: 'web-development',
      image: 'https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A modern fintech platform with real-time data visualization and interactive dashboards.'
    },
    {
      title: 'Orbital Gallery',
      category: 'interactive',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interactive 3D art gallery experience with WebGL and custom animations.'
    },
    {
      title: 'Eco Impact',
      category: 'design',
      image: 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'UX/UI design for an environmental sustainability platform with intuitive data reporting.'
    },
    {
      title: 'Velocity Store',
      category: 'performance',
      image: 'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'E-commerce platform optimization reducing load time by 70% and increasing conversions.'
    },
    {
      title: 'Harmony Music',
      category: 'web-development',
      image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Streaming service with custom audio visualization and seamless playback.'
    },
    {
      title: 'Nebula Explorer',
      category: 'interactive',
      image: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interactive space exploration experience with 3D planetary systems and educational content.'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'interactive', label: 'Interactive' },
    { value: 'design', label: 'Design' },
    { value: 'performance', label: 'Performance' }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Explore our portfolio of innovative digital experiences across various industries.
        </p>
      </motion.div>
      
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`px-5 py-2 rounded-full transition-colors ${
              filter === item.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden rounded-xl mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-background text-foreground rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}