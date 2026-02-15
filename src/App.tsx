
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Journey from './components/Journey';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Robust smooth scrolling for hash links
    const handleScroll = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        const element = id ? document.getElementById(id) : null;
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          // Note: Removed window.history.pushState to avoid SecurityError in sandboxed environments.
        }
      }
    };
    window.addEventListener('click', handleScroll);
    return () => window.removeEventListener('click', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Tools />
        <Journey />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
