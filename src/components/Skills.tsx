
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const SKILLS = [
  { name: "Financial Reporting", code: "ACC-01", level: 5 },
  { name: "Data Analytics", code: "BI-02", level: 4 },
  { name: "Performance Analysis", code: "PA-03", level: 4 },
  { name: "Budget Planning", code: "BP-04", level: 5 },
  { name: "Cost Management", code: "CM-05", level: 5 },
  { name: "Financial Analysis", code: "FA-06", level: 4 }
];

const SkillCard: React.FC<{ name: string, code: string, level: number, index: number }> = ({ name, code, level, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  // Parallax layers
  const textTranslateZ = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);
  const highlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const highlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="perspective-1000 w-full group"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-72 w-full bg-white rounded-[2.5rem] p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 cursor-pointer overflow-hidden"
      >
        {/* Dynamic Light/Highlight Effect */}
        <motion.div 
          style={{ 
            left: highlightX, 
            top: highlightY,
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none z-0 blur-2xl"
        />

        {/* Content Layers */}
        <div className="relative z-10 space-y-6 pointer-events-none" style={{ transform: "translateZ(60px)" }}>
          <div className="flex justify-between items-start">
            <motion.div 
              className="w-14 h-1.5 bg-brand-accent rounded-full"
              style={{ transform: "translateZ(80px)" }}
            />
            <span className="font-mono text-[10px] text-brand-muted/40 font-bold uppercase tracking-widest">{code}</span>
          </div>
          
          <motion.h3 
            style={{ translateZ: textTranslateZ }}
            className="text-4xl font-black text-brand-primary leading-[0.9] uppercase tracking-tighter"
          >
            {name.split(" ").map((word, i) => (
              <span key={i} className="block group-hover:text-brand-accent transition-colors duration-500">
                {word}
              </span>
            ))}
          </motion.h3>
        </div>
        
        <div className="relative z-10 flex justify-between items-end pointer-events-none">
          <div style={{ transform: "translateZ(40px)" }} className="space-y-1">
            <span className="block text-[9px] font-bold tracking-[0.3em] text-brand-muted uppercase">Core_Discipline</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= level ? 'bg-brand-accent' : 'bg-slate-200'}`} />
              ))}
            </div>
          </div>
          
          <motion.div 
            style={{ transform: "translateZ(100px)" }}
            className="bg-brand-primary p-3 rounded-2xl text-white shadow-xl group-hover:bg-brand-accent group-hover:rotate-12 transition-all duration-500"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

        {/* Inner Border Depth */}
        <div className="absolute inset-4 rounded-[2rem] border border-slate-50 pointer-events-none z-0" style={{ transform: "translateZ(20px)" }} />
      </motion.div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-24 flex flex-col items-center text-center justify-center">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-brand-primary uppercase tracking-tighter leading-none"
            >
              Core <span className="text-brand-accent">Excellence</span>
            </motion.h2>
            <p className="text-[11px] font-bold tracking-[0.5em] text-brand-muted uppercase mt-6">
              Technical Proficiency & Strategic Expertise
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SKILLS.map((skill, idx) => (
            <SkillCard key={skill.name} name={skill.name} code={skill.code} level={skill.level} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
