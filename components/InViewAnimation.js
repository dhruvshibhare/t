'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const InViewAnimation = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay * 0.001 }}
    >
      {children}
    </motion.div>
  );
};
