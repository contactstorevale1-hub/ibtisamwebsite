
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, Variants } from 'framer-motion';
import * as Icons from 'lucide-react';
import { EXPERIENCES } from '../constants';

const JourneyCard: React.FC<{ exp: typeof EXPERIENCES[0]; index: number; isLeft: boolean }> = ({ exp, index, isLeft }) => {
  const cardRef = useRef(null);
  
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: isLeft ? -40 : 40, 
      rotateY: isLeft ? 10 : -10,
      z: -10,
      scale: 0.99
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0, 
      z: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 45,
        damping: 22,
        duration: 0.8
      }
    }
  };

  return (
    <div ref={cardRef} className={`relative flex w-full mb-48 items-center ${isLeft ? 'justify-start' : 'justify-end'} px-6 lg:px-64 overflow-visible`}>
      {/* Background Index Number - Architectural element near the box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        className={`absolute ${isLeft ? 'left-24 lg:left-40' : 'right-24 lg:right-40'} top-1/2 -translate-y-1/2 pointer-events-none select-none z-0`}
      >
        <span className="text-[14rem] lg:text-[18rem] font-black text-brand-primary leading-none uppercase tracking-tighter">
          0{index + 1}
        </span>
      </motion.div>

      {/* Box container */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`w-full lg:w-[35%] perspective-2000 z-20`}
      >
        <motion.div 
          whileHover={{ 
            scale: 1.05, 
            rotateX: 1, 
            rotateY: isLeft ? 3 : -3, 
            translateZ: 120,
            boxShadow: "0 40px 100px -20px rgba(15,23,42,0.15)"
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="glass-card rounded-[2.5rem] p-10 lg:p-12 shadow-2xl border border-white relative overflow-visible group preserve-3d cursor-default"
        >
          {/* Solid Base Layer */}
          <div className="absolute inset-0 bg-white/95 rounded-[2.5rem] pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white font-mono text-sm font-bold shadow-md">
                {index + 1}
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[8px] font-bold tracking-[0.4em] text-brand-accent uppercase">
                  SEQ_DATA
                </span>
                <span className="text-xs font-black text-brand-muted uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-brand-primary uppercase tracking-tighter leading-tight group-hover:text-brand-accent transition-colors duration-500">
                {exp.company}
              </h3>
              <p className="text-lg font-serif italic text-brand-muted leading-tight">{exp.role}</p>
              <div className="text-[10px] font-bold tracking-[0.2em] text-brand-muted/30 uppercase pt-2">
                {exp.location}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <ul className="space-y-4">
                {exp.responsibilities.map((resp, i) => (
                  <motion.li 
                    key={i} 
                    className="flex gap-4 items-start group/item"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent/30 group-hover/item:bg-brand-accent group-hover/item:scale-150 transition-all duration-300 shrink-0" />
                    <p className="text-sm text-brand-muted font-light leading-snug group-hover:text-brand-primary transition-colors">
                      {resp}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const TerminalMarker: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-80 mb-12 relative z-30 perspective-2000">
      {/* 3D Dynamic Scenography */}
      <motion.div 
        className="relative w-80 h-80 flex items-center justify-center preserve-3d"
        animate={{ rotateY: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {/* Core Floating Monolith - CSS 3D Cube with Glass Effects */}
        <motion.div 
          className="relative w-36 h-36 preserve-3d"
          animate={{ rotateX: [0, 360], rotateZ: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {/* 6 Sides of the Crystal Prism */}
          {[0, 90, 180, 270].map((rot, i) => (
            <div 
              key={i}
              className="absolute inset-0 bg-brand-accent/5 border border-brand-accent/30 backdrop-blur-lg rounded-2xl"
              style={{ transform: `rotateY(${rot}deg) translateZ(72px)` }}
            />
          ))}
          <div className="absolute inset-0 bg-brand-primary/10 border border-brand-accent/30 backdrop-blur-lg rounded-2xl" style={{ transform: 'rotateX(90deg) translateZ(72px)' }} />
          <div className="absolute inset-0 bg-brand-primary/10 border border-brand-accent/30 backdrop-blur-lg rounded-2xl" style={{ transform: 'rotateX(-90deg) translateZ(72px)' }} />
          
          {/* Internal Energy Source */}
          <div className="absolute inset-6 bg-brand-primary rounded-full blur-2xl animate-pulse" />
          <div className="absolute inset-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.6)] border border-slate-100">
            <Icons.Zap className="text-brand-accent w-10 h-10" />
          </div>
        </motion.div>

        {/* Orbiting Achievement Nodes - 3D Positioning */}
        {[
          { icon: 'Target', label: 'PRECISION', angle: 0 },
          { icon: 'TrendingUp', label: 'GROWTH', angle: 120 },
          { icon: 'Award', label: 'MASTERY', angle: 240 }
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute preserve-3d"
            style={{ 
              transform: `rotateY(${node.angle}deg) translateZ(200px)` 
            }}
          >
            {/* Counter-rotation to keep icons facing front */}
            <motion.div 
              animate={{ rotateY: -360, y: [0, -25, 0] }}
              transition={{ 
                rotateY: { duration: 40, repeat: Infinity, ease: "linear" },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }
              }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-50 flex items-center justify-center group hover:bg-brand-primary transition-colors duration-500">
                {React.createElement((Icons as any)[node.icon], { 
                  className: "text-brand-primary group-hover:text-white transition-colors", 
                  size: 20 
                })}
              </div>
              <span className="font-mono text-[9px] font-black text-brand-primary bg-white/80 px-3 py-1 rounded-md shadow-sm border border-slate-50 uppercase tracking-[0.4em]">
                {node.label}
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* Success Ripple Planes */}
        {[1, 2, 3].map((r) => (
          <motion.div 
            key={r}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 3, opacity: [0, 0.15, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: r * 2, ease: "easeOut" }}
            className="absolute w-40 h-40 border-[0.5px] border-brand-accent/40 rounded-full"
            style={{ transform: "rotateX(90deg)" }}
          />
        ))}
      </motion.div>

      {/* Title & Technical Metadata */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        className="mt-24 text-center relative z-40"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
           <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-brand-accent/30" />
           <span className="font-mono text-[10px] font-black text-brand-accent uppercase tracking-[0.8em]">SUMMIT_COORDINATES</span>
           <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-brand-accent/30" />
        </div>
        
        <h4 className="text-5xl md:text-7xl font-black text-brand-primary uppercase tracking-tighter leading-none mb-6">
          Strategic <span className="text-brand-accent">Excellence</span>
        </h4>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="font-serif italic text-brand-muted text-xl md:text-2xl">Defining the New Paradigm of Financial Leadership</p>
          <div className="mt-8 flex gap-6">
            <div className="flex flex-col">
              <span className="font-mono text-[7px] font-bold text-brand-muted uppercase">SYSTEM_STATUS</span>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> OPTIMIZED
              </span>
            </div>
            <div className="w-[1px] h-8 bg-slate-100" />
            <div className="flex flex-col">
              <span className="font-mono text-[7px] font-bold text-brand-muted uppercase">TRAJECTORY</span>
              <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">ASCENDING</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Journey: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Updated spring settings for faster, snappier movement
  const pathSpring = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 25,
    restDelta: 0.001
  });

  const fluidPathLength = useTransform(
    pathSpring, 
    [0, 0.4, 0.6, 0.8, 1], 
    [0, 0.2, 0.4, 0.9, 1]
  );

  const fluidOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  const chronologicalExperiences = [...EXPERIENCES].reverse();

  return (
    <section id="experience" ref={containerRef} className="relative pt-24 pb-20 bg-brand-bg overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0F172A 1.5px, transparent 1.5px)', backgroundSize: '100px 100px' }} />

      <div className="container mx-auto px-4 relative">
        <div className="mb-32 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <h2 className="text-6xl md:text-8xl font-black text-brand-primary uppercase tracking-tighter leading-none">
              Professional <span className="text-brand-accent">Journey</span>
            </h2>
            <p className="text-[12px] font-bold tracking-[0.6em] text-brand-muted uppercase mt-10">
              Tracing the curve of Strategic Growth
            </p>
            <div className="h-1 w-24 bg-brand-primary/10 mx-auto mt-14 rounded-full relative overflow-hidden">
                <motion.div 
                    style={{ scaleX: scrollYProgress, originX: 0 }}
                    className="absolute inset-0 bg-brand-accent"
                />
            </div>
          </motion.div>
        </div>

        {/* The Weaving Timeline Path */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[350px] bottom-32 w-full hidden lg:block pointer-events-none z-10">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 3000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fluid-clean-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>
            
            <path 
              d="M500 0 
                 C 500 150, 300 300, 300 700 
                 C 300 1100, 700 1300, 700 1600 
                 C 700 1900, 300 2100, 300 2450 
                 C 300 2700, 700 2750, 700 2850 
                 C 700 2950, 500 2980, 500 3000" 
              stroke="#E2E8F0" 
              strokeWidth="8" 
              strokeLinecap="round"
            />
            
            <motion.path 
              style={{ pathLength: fluidPathLength, opacity: fluidOpacity }}
              d="M500 0 
                 C 500 150, 300 300, 300 700 
                 C 300 1100, 700 1300, 700 1600 
                 C 700 1900, 300 2100, 300 2450 
                 C 300 2700, 700 2750, 700 2850 
                 C 700 2950, 500 2980, 500 3000" 
              stroke="url(#fluid-clean-grad)" 
              strokeWidth="8" 
              strokeLinecap="round"
            />

            <motion.path 
              style={{ pathLength: fluidPathLength, opacity: fluidOpacity }}
              d="M500 0 
                 C 500 150, 300 300, 300 700 
                 C 300 1100, 700 1300, 700 1600 
                 C 700 1900, 300 2100, 300 2450 
                 C 300 2700, 700 2750, 700 2850 
                 C 700 2950, 500 2980, 500 3000" 
              stroke="#3B82F6" 
              strokeWidth="12" 
              strokeLinecap="round"
              strokeDasharray="1 10000"
            />
          </svg>
        </div>

        <div className="relative z-20 space-y-12 lg:space-y-0">
          {chronologicalExperiences.map((exp, idx) => (
            <JourneyCard 
              key={exp.id} 
              exp={exp} 
              index={idx} 
              isLeft={idx % 2 === 0} 
            />
          ))}
        </div>

        {/* Milestone Terminal Construct */}
        <TerminalMarker />

      </div>
    </section>
  );
};

export default Journey;
