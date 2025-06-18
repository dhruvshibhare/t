'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'We build fast, responsive websites using the latest technologies and best practices.',
      items: [
        'Custom website development',
        'Progressive web applications',
        'E-commerce solutions',
        'CMS implementation'
      ]
    },
    {
      title: 'Interactive Experiences',
      description: 'Create memorable digital experiences with cutting-edge interactivity and animations.',
      items: [
        '3D web experiences with Three.js',
        'Interactive data visualizations',
        'Micro-interactions and animations',
        'Experimental interfaces'
      ]
    },
    {
      title: 'UX/UI Design',
      description: 'Crafting intuitive interfaces that balance aesthetics with usability.',
      items: [
        'User experience strategy',
        'Interface design',
        'Wireframing and prototyping',
        'Design systems'
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Improve load times, rendering performance, and overall user experience.',
      items: [
        'Core Web Vitals optimization',
        'Image and asset optimization',
        'Caching strategies',
        'Performance auditing and improvements'
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We offer comprehensive digital solutions that help businesses thrive in the digital landscape.
        </p>
      </motion.div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="bg-card p-10 rounded-2xl hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="mb-6 text-muted-foreground">{service.description}</p>
            <ul className="space-y-3">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-muted rounded-2xl p-10 md:p-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          We follow a collaborative, iterative process that puts your business goals and user needs at the center of everything we do.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {['Discovery', 'Strategy', 'Design & Development', 'Launch & Support'].map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.8 }}
              className="relative"
            >
              <div className="bg-background rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}