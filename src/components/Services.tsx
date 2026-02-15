
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const ServiceVisualizer: React.FC<{ serviceId: string; index: number }> = ({ serviceId, index }) => {
  const renderVisualizer = () => {
    switch (serviceId) {
      case 's1': // Cost Analysis & Control (Financial Magnification) - DARKER VERSION
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-65 transition-opacity duration-700">
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                className="text-[12rem] font-black text-brand-primary/30 select-none flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                $
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [-60, 60, -30, -60],
                  y: [-40, 40, -20, -40],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-36 h-36"
              >
                <div className="w-full h-full rounded-full border-2 border-brand-accent/50 bg-white/20 backdrop-blur-[4px] relative flex items-center justify-center shadow-2xl">
                   <div className="absolute -right-4 -bottom-8 w-1.5 h-12 bg-brand-accent/60 rounded-full rotate-45" />
                   <div className="flex flex-col items-center">
                     <span className="text-4xl font-black text-brand-accent drop-shadow-md">$</span>
                     <span className="font-mono text-[8px] font-black text-brand-accent uppercase tracking-tighter">FOCUS_COST</span>
                   </div>
                   <div className="absolute -top-10 -left-6 font-mono text-[7px] font-black text-brand-primary bg-white px-2 py-1 rounded border border-slate-200 uppercase whitespace-nowrap shadow-sm">
                     ACCURACY: 99.8%
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      case 's2': // Strategic Budgeting
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-50 transition-opacity duration-700">
            {[1, 2, 3].map((r) => (
              <motion.div
                key={r}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: r * 0.5 }}
                className="absolute border-2 border-brand-primary rounded-full"
                style={{ width: r * 80, height: r * 80 }}
              />
            ))}
          </div>
        );
      case 's3': // Pricing Strategies - POSITIONED LOWER WITH TWO LINES RESTORED
        return (
          <div className="absolute inset-0 flex items-end justify-center px-4 pb-20 opacity-25 group-hover:opacity-50 transition-opacity duration-700">
            <svg viewBox="0 0 200 100" className="w-full h-32 overflow-visible">
              <motion.path
                d="M0,80 Q40,70 80,40 T160,20 T200,10"
                fill="none"
                stroke="#2563EB"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.path
                d="M0,90 Q50,85 100,60 T200,30"
                fill="none"
                stroke="#0F172A"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
            </svg>
          </div>
        );
      case 's4': // Business Intelligence
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-55 transition-opacity duration-700 preserve-3d">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <motion.div 
                animate={{ rotateX: 60, rotateZ: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 border-[0.5px] border-brand-accent/20 grid grid-cols-4 grid-rows-4 relative"
                style={{ transform: "rotateX(60deg)" }}
              >
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border-[0.5px] border-brand-accent/10" />
                ))}
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icons.Layers size={40} className="text-brand-accent/40" />
              </div>
            </div>
          </div>
        );
      case 's5': // Process Optimization
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-50 transition-opacity duration-700">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                <Icons.Settings size={180} className="text-brand-primary/20 stroke-[1]" />
             </motion.div>
          </div>
        );
      case 's6': // Financial Reporting
        return (
          <div className="absolute inset-0 flex items-center justify-center gap-2 px-10 opacity-25 group-hover:opacity-60 transition-opacity duration-700">
            {[60, 100, 80, 140, 120].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: h }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
                className={`w-6 rounded-sm ${i % 2 === 0 ? 'bg-brand-primary' : 'bg-brand-accent'}`}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-[2rem]">
      {renderVisualizer()}
    </div>
  );
};

const ServiceModule: React.FC<{ service: typeof SERVICES[0]; index: number }> = ({ service, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 20 });
  const translateZ = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    translateZ.set(40);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    translateZ.set(0);
  };

  const IconComponent = (Icons as any)[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 group cursor-default h-[480px]"
    >
      <motion.div
        style={{ rotateX, rotateY, translateZ, transformStyle: "preserve-3d" }}
        className="relative h-full w-full bg-white rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden flex flex-col"
      >
        <ServiceVisualizer serviceId={service.id} index={index} />

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon Container with Two-Sided Borders (Top and Right) */}
          <div className="mb-8 relative w-16 h-16">
            <motion.div 
              style={{ transform: "translateZ(50px)" }}
              className="w-full h-full bg-brand-bg rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm relative z-10"
            >
              {IconComponent && <IconComponent size={30} strokeWidth={1.5} />}
            </motion.div>
            
            {/* Half Border (Top and Right) */}
            <div className="absolute -top-1.5 -right-1.5 w-8 h-8 border-t-2 border-r-2 border-brand-accent/40 rounded-tr-xl z-0 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
            
            {/* Subtle supporting half-border (Bottom and Left) */}
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b border-l border-brand-accent/10 rounded-bl-lg z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div style={{ transform: "translateZ(35px)" }}>
            <h3 className="text-2xl font-black text-brand-primary uppercase tracking-tighter leading-tight mb-4 group-hover:text-brand-accent transition-colors duration-500">
              {service.title}
            </h3>
            <p className="text-brand-muted text-sm font-light leading-relaxed group-hover:text-slate-900 transition-colors">
              {service.description}
            </p>
          </div>

          {/* Enhanced CTA Button */}
          <div className="mt-auto flex items-center justify-between" style={{ transform: "translateZ(60px)" }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 bg-brand-primary text-white text-[11px] font-black uppercase tracking-widest rounded-2xl shadow-xl flex items-center gap-3 hover:bg-brand-accent transition-all duration-300 group/btn"
            >
              Consult Now
              <Icons.ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </motion.a>

            <div className="flex gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1 h-1 rounded-full bg-brand-accent" />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-4 rounded-[2.1rem] border border-slate-50/50 pointer-events-none z-0" style={{ transform: "translateZ(15px)" }} />
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section id="services" ref={containerRef} className="pt-24 pb-48 bg-brand-bg overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.02]">
        <span className="text-[30vw] font-black text-brand-primary uppercase tracking-tighter leading-none whitespace-nowrap">
          SYSTEMS
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <div className="inline-flex items-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-brand-accent/30" />
             <span className="font-mono text-[10px] font-black text-brand-accent uppercase tracking-[0.8em]">SPECIALIZED_FIELDS</span>
             <div className="h-[1px] w-12 bg-brand-accent/30" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-brand-primary uppercase tracking-tighter leading-none mb-8">
            Professional <span className="text-brand-accent">Services</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-brand-muted font-light italic font-serif leading-relaxed">
              Precision-engineered financial strategies designed for 
              <span className="text-brand-primary font-semibold not-italic font-sans"> scalability and operational excellence.</span>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <ServiceModule key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
