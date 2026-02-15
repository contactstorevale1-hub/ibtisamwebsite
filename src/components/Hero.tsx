
import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Linkedin, Facebook } from 'lucide-react';

const BackgroundText: React.FC<{ text: string; top: string; left: string; rotate: number; delay: number; speed: number }> = ({ text, top, left, rotate, delay, speed }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed * 200]);
  
  return (
    <motion.div
      style={{ top, left, rotate, y, opacity: 0.03 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.03, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="absolute pointer-events-none select-none z-0"
    >
      <span className="text-[8vw] font-black text-brand-primary uppercase tracking-tighter leading-none whitespace-nowrap">
        {text}
      </span>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const socialItemVariants: Variants = {
    initial: { opacity: 0, scale: 0, rotate: -45 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1.5 
      }
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundWords = [
    { text: "STRATEGY", top: "15%", left: "5%", rotate: -5, speed: 0.5 },
    { text: "COSTING", top: "25%", left: "60%", rotate: 10, speed: -0.8 },
    { text: "ANALYSIS", top: "65%", left: "10%", rotate: -12, speed: 1.2 },
    { text: "BUDGETING", top: "75%", left: "55%", rotate: 5, speed: -0.4 },
    { text: "ROI_DRIVEN", top: "45%", left: "-10%", rotate: 90, speed: 0.2 },
    { text: "EXCELLENCE", top: "40%", left: "85%", rotate: -90, speed: 1.5 },
    { text: "MANAGEMENT", top: "5%", left: "40%", rotate: 0, speed: -1.1 },
  ];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-brand-bg px-4">
      {/* 3D Background Elements & Typography */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {backgroundWords.map((word, i) => (
          <BackgroundText key={i} {...word} delay={0.1 * i} />
        ))}
        
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </motion.div>
      </div>

      {/* Floating Social Icons */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          {/* LinkedIn Popup */}
          <motion.a
            href="https://linkedin.com/in/m-ibtisam-tahir-management-excellence-guru"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialItemVariants}
            initial="initial"
            animate={["animate", "float"]}
            whileHover={{ scale: 1.1, rotateY: 15 }}
            className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-auto p-5 bg-white shadow-2xl rounded-3xl border border-slate-100 group flex items-center justify-center text-brand-primary hover:text-brand-accent transition-colors"
          >
            <Linkedin size={32} strokeWidth={1.5} />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold tracking-widest uppercase text-brand-muted">LinkedIn</div>
          </motion.a>

          {/* Facebook Popup */}
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialItemVariants}
            initial="initial"
            animate={["animate", "float"]}
            whileHover={{ scale: 1.1, rotateY: -15 }}
            className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-auto p-5 bg-white shadow-2xl rounded-3xl border border-slate-100 group flex items-center justify-center text-brand-primary hover:text-[#1877F2] transition-colors"
          >
            <Facebook size={32} strokeWidth={1.5} />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold tracking-widest uppercase text-brand-muted">Facebook</div>
          </motion.a>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="z-10 max-w-5xl space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="perspective-1000"
        >
          <h1 className="text-6xl md:text-9xl font-black text-brand-primary tracking-tighter leading-none mb-4 uppercase flex items-baseline justify-center">
            <span>Ibtisam</span>
            <span className="text-brand-accent ml-4">Tahir</span>
          </h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl font-serif italic text-brand-muted"
          >
            Chartered Management Accountant
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] md:text-xs font-bold text-brand-muted tracking-[0.25em] uppercase"
        >
          <span>Strategic Financial Expert</span>
          <span className="hidden md:block text-brand-accent/30">/</span>
          <span>Data-Driven Decision Making</span>
          <span className="hidden md:block text-brand-accent/30">/</span>
          <span>Business Intelligence</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
        >
          <motion.a
            href="https://calendly.com/ibtisamtahir329/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, translateZ: 20 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-brand-primary text-white px-8 py-4 rounded-full font-black text-lg overflow-hidden shadow-2xl transition-all"
          >
            <span className="relative z-10">BOOK CONSULTATION</span>
            <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>
          
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05, translateZ: 20 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border-2 border-brand-primary font-black text-lg hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all shadow-lg"
          >
            VIEW JOURNEY
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-muted"
      >
        <div className="w-6 h-10 border-2 border-brand-muted rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-brand-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
