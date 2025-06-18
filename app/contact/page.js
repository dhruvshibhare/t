'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        service: ''
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Have a project in mind? Let's talk about how we can bring your vision to life.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-8 mb-10">
            <div className="flex items-start">
              <div className="bg-muted rounded-full p-3 mr-4">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-muted-foreground">hello@nexuswebstudio.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-muted rounded-full p-3 mr-4">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-muted rounded-full p-3 mr-4">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-muted-foreground">123 Creative Avenue<br />San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="font-bold mb-3">Office Hours</h3>
            <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block mb-2 font-medium">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="interactive">Interactive Experiences</option>
                <option value="design">UX/UI Design</option>
                <option value="performance">Performance Optimization</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-center"
              >
                Thanks for your message! We'll get back to you soon.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}