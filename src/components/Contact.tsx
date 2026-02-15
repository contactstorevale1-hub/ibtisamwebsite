
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Calendar, MapPin, CheckCircle2, Send, Loader2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    
    try {
      // NOTE: Replace 'YOUR_ACCESS_KEY_HERE' with your real key from https://web3forms.com/
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Get your free key at web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Inquiry',
          message: formData.message,
          from_name: 'Ibtisam Portfolio'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Submission failed:", result);
        setStatus('error');
      }
    } catch (err) {
      console.error("Form error:", err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto glass-card rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-brand-primary text-white space-y-12">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                Let's <span className="text-brand-accent">Talk</span> Finance
              </h2>
              <p className="text-slate-400 font-light">Have a project or a strategic inquiry? Get in touch and let's optimize your business growth.</p>
            </div>

            <div className="space-y-8">
              <a href="mailto:ibtisamtahir329@gmail.com" className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">Email</div>
                  <div className="text-lg font-semibold">ibtisamtahir329@gmail.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/m-ibtisam-tahir-management-excellence-guru" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">LinkedIn</div>
                  <div className="text-lg font-semibold">ibtisam-tahir</div>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">Location</div>
                  <div className="text-lg font-semibold">Lahore, Punjab, Pakistan</div>
                </div>
              </div>
            </div>

            <motion.a 
              href="https://calendly.com/ibtisamtahir329/30min"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-brand-accent text-white px-8 py-4 rounded-full font-black uppercase text-sm shadow-xl"
            >
              <Calendar size={18} />
              Schedule 1:1 Meeting
            </motion.a>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 bg-white/50 backdrop-blur-sm relative">
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center bg-white/95 backdrop-blur-md"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-black text-brand-primary uppercase tracking-tight mb-2">Message Sent!</h3>
                  <p className="text-brand-muted max-w-xs mx-auto">Thank you for reaching out. I will review your inquiry and get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-brand-accent font-black uppercase text-[10px] tracking-[0.2em] hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center bg-white/95 backdrop-blur-md"
                >
                  <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-6">
                    <AlertCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-brand-primary uppercase tracking-tight mb-2">Transmission Error</h3>
                  <p className="text-brand-muted max-w-xs mx-auto">Something went wrong with the form service. Please try again or email me directly at ibtisamtahir329@gmail.com</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-brand-accent font-black uppercase text-[10px] tracking-[0.2em] hover:underline"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-3xl font-black text-brand-primary uppercase tracking-tight">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all disabled:opacity-50" 
                    placeholder="John Doe" 
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all disabled:opacity-50" 
                    placeholder="john@example.com" 
                    disabled={status === 'sending'}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all disabled:opacity-50" 
                  placeholder="Financial Consulting" 
                  disabled={status === 'sending'}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted">Message</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all disabled:opacity-50" 
                  placeholder="How can I help you?"
                  disabled={status === 'sending'}
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                disabled={status === 'sending'}
                className="w-full bg-brand-primary text-white font-black uppercase py-5 rounded-xl shadow-xl hover:bg-brand-accent transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
              <div className="text-center">
                <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">Secured by industry-standard encryption</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
