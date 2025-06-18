'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Working with Nexus Web Studio transformed our online presence. Their expertise in web development and 3D interactions significantly improved user engagement and conversion rates.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechVision Inc.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    },
    {
      quote: "Their innovative approach to our e-commerce platform redesign resulted in a 40% increase in sales within the first quarter. Highly recommended for any business looking to elevate their digital presence.",
      author: "Michael Chen",
      role: "CEO, FutureWear",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    },
    {
      quote: "The team at Nexus delivered beyond our expectations. Their attention to detail and commitment to creating a seamless user experience sets them apart from other agencies we've worked with.",
      author: "Laura Garcia",
      role: "Product Manager, InnovateLab",
      image: "https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    },
    {
      quote: "Exceptional work quality and professional service. They turned our vision into reality with stunning visual effects and smooth performance across all devices.",
      author: "David Wilson",
      role: "Founder, CreativeSpace",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    },
    {
      quote: "Outstanding technical expertise combined with creative design. Our website now stands out in the competitive market and drives more qualified leads.",
      author: "Emma Thompson",
      role: "Marketing Head, DigitalFlow",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section ref={ref} className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients have to say about working with us.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card p-8 md:p-12 rounded-xl border shadow-sm min-h-[300px] flex flex-col justify-center"
                  >
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-full border-2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="64"
                          height="64"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.author}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-lg leading-relaxed text-center">
                      "{testimonial.quote}"
                    </blockquote>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}