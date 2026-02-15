
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { STATS } from '../constants';
import { DollarSign, TrendingUp, BarChart3, PieChart, Activity, Briefcase } from 'lucide-react';

const StatItem: React.FC<{ stat: typeof STATS[0], index: number }> = ({ stat, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  
  const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
  const suffix = stat.value.replace(/[0-9.]/g, '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 1.2,
        ease: "easeOut",
        delay: index * 0.1,
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [isInView, numericValue, count, index]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v.toString()));
  }, [rounded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 45, translateZ: -100 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, translateZ: 0 }}
      viewport={{ once: false }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: index % 2 === 0 ? 8 : -8,
        translateZ: 60,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      className="relative group p-[4px] rounded-[2rem] overflow-hidden preserve-3d shadow-xl z-20"
      style={{ transformPerspective: '1200px' }}
    >
      {/* Subtle Focus Border */}
      <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500" />

      {/* Main Content Card */}
      <div className="relative text-center bg-brand-primary group-hover:bg-white p-6 md:p-8 rounded-[1.8rem] backdrop-blur-sm h-full w-full flex flex-col justify-center preserve-3d transition-all duration-700 ease-in-out">
        <div className="relative preserve-3d z-10">
          <motion.div 
            className="text-5xl md:text-6xl font-black text-white group-hover:text-brand-primary transition-colors duration-500 tracking-tighter font-sans"
            style={{ transform: "translateZ(40px)" }}
          >
            {displayValue}{suffix}
          </motion.div>
          <div 
            className="text-brand-accent text-[9px] tracking-[0.4em] uppercase font-bold transition-colors duration-500 font-mono mt-2"
            style={{ transform: "translateZ(20px)" }}
          >
            {stat.label}
          </div>
        </div>
        
        {/* Hover Inner Glow */}
        <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 rounded-[1.8rem] transition-opacity duration-500 -z-10" />
      </div>
    </motion.div>
  );
};

const BackgroundIcon: React.FC<{ icon: React.ReactNode; top: string; left: string; delay: number; scale: number }> = ({ icon, top, left, delay, scale }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.2 }}
    animate={{ 
      y: [0, -30, 0],
      rotate: [0, 8, -8, 0]
    }}
    transition={{ 
      y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
      opacity: { duration: 1 }
    }}
    className="absolute pointer-events-none text-white z-0"
    style={{ top, left, transform: `scale(${scale})` }}
  >
    {icon}
  </motion.div>
);

const Stats: React.FC = () => {
  return (
    <section className="relative bg-brand-primary py-24 md:py-32 overflow-hidden">
      {/* Subtle Mathematical Geometric Background Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        
        {/* Horizontal thin lines grid */}
        {[15, 30, 45, 60, 75, 90].map((top, i) => (
          <motion.div 
            key={`h-${i}`}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
            className="absolute left-[-10%] w-[120%] h-[2px] bg-white"
            style={{ top: `${top}%`, transform: `rotate(${i % 2 === 0 ? 0.5 : -0.5}deg)` }}
          />
        ))}

        {/* Vertical thin lines grid */}
        {[10, 25, 40, 55, 70, 85].map((left, i) => (
          <motion.div 
            key={`v-${i}`}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
            className="absolute top-[-10%] h-[120%] w-[2px] bg-white"
            style={{ left: `${left}%`, transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)` }}
          />
        ))}

        {/* Finance Symbols & Abstracts - Higher Opacity & Thickness */}
        <BackgroundIcon icon={<DollarSign size={120} strokeWidth={2.5} />} top="10%" left="5%" delay={0} scale={1} />
        <BackgroundIcon icon={<TrendingUp size={140} strokeWidth={2} />} top="60%" left="80%" delay={1} scale={1.2} />
        <BackgroundIcon icon={<BarChart3 size={100} strokeWidth={2.5} />} top="20%" left="70%" delay={2} scale={0.8} />
        <BackgroundIcon icon={<PieChart size={160} strokeWidth={2} />} top="70%" left="15%" delay={3} scale={1.1} />
        <BackgroundIcon icon={<Activity size={80} strokeWidth={2.5} />} top="40%" left="45%" delay={4} scale={0.9} />
        <BackgroundIcon icon={<Briefcase size={110} strokeWidth={2} />} top="5%" left="85%" delay={1.5} scale={1} />

        {/* Dynamic Intersecting Mathematical Lines - Increased Thickness */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.2 }}
          transition={{ duration: 2, ease: "circOut" }}
          className="absolute top-[20%] left-[-10%] w-[120%] h-[3px] bg-white rotate-[35deg] origin-left"
        />
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.2, ease: "circOut" }}
          className="absolute bottom-[20%] left-[-10%] w-[120%] h-[3px] bg-white rotate-[-25deg] origin-right"
        />
        <motion.div 
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 0.25 }}
          transition={{ duration: 2.5, delay: 0.4, ease: "circOut" }}
          className="absolute top-[-10%] left-[45%] w-[3px] h-[120%] bg-white rotate-[75deg] origin-top"
        />
        <motion.div 
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 0.15 }}
          transition={{ duration: 2.5, delay: 0.6, ease: "circOut" }}
          className="absolute top-[-10%] right-[30%] w-[2px] h-[120%] bg-white rotate-[-45deg] origin-top"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <StatItem key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
