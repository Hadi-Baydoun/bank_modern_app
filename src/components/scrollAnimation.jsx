import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const scrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start('visible');
      }
    }, [isInView, mainControls]);
  
    return { ref, mainControls };
  };

export default scrollAnimation