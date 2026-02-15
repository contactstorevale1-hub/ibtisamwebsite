
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Precise spring for the main dot
  const mainSpringConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  const mainX = useSpring(mouseX, mainSpringConfig);
  const mainY = useSpring(mouseY, mainSpringConfig);

  // Smoother, lagging spring for the trailing ring to create "motion"
  const trailSpringConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const trailX = useSpring(mouseX, trailSpringConfig);
  const trailY = useSpring(mouseY, trailSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      if (isHidden) setIsHidden(false);

      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button');
      
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isHidden]);

  // Don't render on mobile devices as they use touch
  if (typeof window !== 'undefined' && window.innerWidth <= 1024) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Lagging Trailing Ring */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 0.3,
          borderColor: isPointer ? '#2563EB' : '#0F172A',
        }}
        className="w-8 h-8 border border-brand-primary rounded-full absolute"
      />

      {/* Primary Precision Dot */}
      <motion.div
        style={{
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.8 : 1,
          opacity: isHidden ? 0 : 1,
          backgroundColor: isPointer ? '#2563EB' : '#0F172A',
        }}
        className="w-1.5 h-1.5 rounded-full absolute bg-brand-primary"
      >
        {/* Subtle center light for depth */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-[0.3]" />
      </motion.div>
      
      {/* Subtle pulse effect on hover */}
      <motion.div
        style={{
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? [1, 2.5, 1] : 0,
          opacity: isPointer ? [0.2, 0, 0] : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut"
        }}
        className="w-4 h-4 rounded-full bg-brand-accent absolute"
      />
    </div>
  );
};

export default CustomCursor;
