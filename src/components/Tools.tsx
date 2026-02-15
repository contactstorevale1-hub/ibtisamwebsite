
import React from 'react';
import { motion } from 'framer-motion';
import { TOOLS } from '../constants';

const Tools: React.FC = () => {
  return (
    <section className="pt-20 pb-16 bg-white border-y border-brand-muted/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h3 className="text-sm font-bold text-center tracking-[0.4em] text-brand-muted uppercase">
          Ecosystem & Platforms
        </h3>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center whitespace-nowrap px-6"
        >
          {[...TOOLS, ...TOOLS].map((tool, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-4 px-8 py-4 bg-brand-bg rounded-2xl border border-brand-muted/5 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className={`w-3 h-3 rounded-full ${tool.color} group-hover:scale-150 transition-transform`} />
              <span className="text-2xl font-black text-brand-primary uppercase tracking-tight">{tool.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
