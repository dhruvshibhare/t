'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'With over 15 years of experience in digital design and web development, Alex leads our creative vision and technical strategy.'
    },
    {
      name: 'Jamie Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Jamie specializes in front-end architecture and performance optimization, ensuring our projects are both beautiful and blazing fast.'
    },
    {
      name: 'Taylor Reed',
      role: '3D Specialist',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Taylor brings digital experiences to life through innovative 3D modeling, animation, and interactive WebGL implementations.'
    },
    {
      name: 'Jordan Patel',
      role: 'UX Strategist',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Jordan crafts intuitive user experiences that delight customers while achieving business objectives through research-driven design.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We are a collective of designers, developers, and digital strategists obsessed with creating extraordinary web experiences.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            We believe the web should be beautiful, functional, and accessible to everyone. Our mission is to push the boundaries of what's possible online while maintaining exceptional performance and usability.
          </p>
          <p className="text-lg">
            Every project we undertake is an opportunity to create something meaningful that connects people to brands in authentic ways.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-muted rounded-2xl p-8 h-full flex items-center"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Founded 2018</h3>
            <p className="mb-6">Starting with just two passionate developers, we've grown into a full-service agency working with clients worldwide.</p>
            <div className="flex gap-6">
              <div>
                <h4 className="text-4xl font-bold">120+</h4>
                <p>Projects Completed</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold">40+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="group"
            >
              <div className="relative h-80 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground mb-3">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}