
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-bg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQFehePa9V1Lqw/profile-displayphoto-crop_800_800/B4DZtwOY1pI8AI-/0/1767114381552?e=1772668800&v=beta&t=J4Cf1XBE7urB95y1s9Sspac3h7D4UOMuX9XlQI-RBAI" 
                alt="Ibtisam Tahir"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.2em] font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full uppercase">ESTABLISHED 2019</span>
              <h2 className="text-5xl font-black text-brand-primary leading-tight uppercase">
                Management <span className="text-brand-accent">Excellence</span> Guru
              </h2>
            </div>
            
            <p className="text-lg text-brand-muted font-light leading-relaxed">
              I introduce myself as <span className="font-semibold text-brand-primary">Ibtisam Tahir</span>, an adept and enthusiastic professional with a rich background encompassing costing, budgeting, planning, accounting, and finance.
            </p>
            
            <p className="text-lg text-brand-muted font-light leading-relaxed">
              Holding the title of <span className="font-serif italic text-brand-primary">Chartered Management Accountant</span>, I bring over 4 years of seasoned expertise in the spheres of cost management, budgeting, planning, and accounts. My skills lie in a profound understanding of cost accounting principles and methodologies.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-2xl bg-brand-bg border border-brand-muted/10">
                <h4 className="font-black text-brand-primary">CERTIFIED</h4>
                <p className="text-[10px] text-brand-muted font-bold tracking-[0.2em] uppercase mt-1">ICMA Pakistan Graduate</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-bg border border-brand-muted/10">
                <h4 className="font-black text-brand-primary">LOCATION</h4>
                <p className="text-[10px] text-brand-muted font-bold tracking-[0.2em] uppercase mt-1">Lahore, Punjab, PK</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
