
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Navbar: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const navItems = ['About', 'Skills', 'Experience', 'Services'];

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0, rotateX: -45 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        className="glass-card px-8 py-4 rounded-[2rem] flex items-center gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 perspective-1000 pointer-events-auto relative group"
      >
        {/* Subtle holographic glare effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-brand-accent/5 rounded-[2rem] pointer-events-none"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.div 
          whileHover={{ scale: 1.05, translateZ: 20 }}
          className="font-black text-2xl tracking-tighter text-brand-primary relative z-10"
        >
          IBTISAM<span className="text-brand-accent italic font-serif">.</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 relative z-10" style={{ transform: "translateZ(10px)" }}>
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ 
                y: -3, 
                color: '#2563EB',
                translateZ: 30,
                scale: 1.1
              }}
              className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-muted hover:text-brand-accent transition-all"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ 
            scale: 1.05, 
            rotateY: 15, 
            translateZ: 40,
            boxShadow: "0 15px 30px rgba(15, 23, 42, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-primary text-white text-[10px] font-black tracking-widest px-6 py-3 rounded-xl shadow-lg relative z-10 group/btn"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="relative z-10 uppercase">GET IN TOUCH</span>
          <div className="absolute inset-0 bg-brand-accent rounded-xl scale-0 group-hover/btn:scale-100 transition-transform duration-300" />
        </motion.a>
        
        {/* Architectural border accent */}
        <div className="absolute inset-[2px] rounded-[1.9rem] border border-white/30 pointer-events-none" />
      </motion.nav>
    </div>
  );
};

export default Navbar;
