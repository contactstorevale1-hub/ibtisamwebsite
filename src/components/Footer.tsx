
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ArrowUp, Mail, Globe, Shield, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-primary pt-32 pb-12 overflow-hidden">
      {/* Background Architectural Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="text-[22vw] font-black text-white/[0.02] uppercase tracking-tighter leading-none whitespace-nowrap">
          IBTISAM TAHIR
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-accent/20">
                <Shield size={24} />
              </div>
              <div className="font-black text-3xl tracking-tighter text-white uppercase">
                IBTISAM<span className="text-brand-accent">.</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md italic font-serif">
              "Empowering organizations through precision-engineered financial strategies and data-driven management excellence."
            </p>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/m-ibtisam-tahir-management-excellence-guru", color: "hover:bg-blue-600" },
                { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                { icon: Mail, href: "mailto:ibtisamtahir329@gmail.com", color: "hover:bg-brand-accent" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-mono text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Skills', 'Experience', 'Services'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick Link */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-mono text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Globe size={16} className="text-brand-accent" />
                <span className="text-sm font-medium">Lahore, Punjab, PK</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={16} className="text-brand-accent" />
                <span className="text-sm font-medium">ibtisamtahir329@gmail.com</span>
              </div>
              <div className="pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 bg-white text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-lg"
                >
                  Start Consultation
                </motion.a>
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-center">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -10 }}
              className="w-16 h-16 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-brand-accent hover:border-brand-accent transition-all duration-300 group"
            >
              <ArrowUp size={20} className="group-hover:animate-bounce" />
              <span className="text-[8px] font-black uppercase tracking-tighter">TOP</span>
            </motion.button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-slate-800 rounded-md">
              <Terminal size={14} className="text-brand-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono font-bold text-slate-600 uppercase tracking-widest">BUILD_REF</span>
              <span className="text-[10px] font-mono text-slate-400">V4.2.0-STABLE</span>
            </div>
          </div>

          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] text-center md:text-left">
            © {new Date().getFullYear()} M. IBTISAM TAHIR. MANAGEMENT EXCELLENCE GURU.
          </div>

          <div className="flex gap-6">
            <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">CMA PAKISTAN</span>
            <div className="w-[1px] h-4 bg-slate-800" />
            <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">STRATEGIC LEADERSHIP</span>
          </div>
        </div>
      </div>

      {/* Finishing Detail Lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent opacity-20" />
    </footer>
  );
};

export default Footer;
