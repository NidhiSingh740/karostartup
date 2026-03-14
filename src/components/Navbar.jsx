import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Startups', href: '#startups' },
    { name: 'Investors', href: '#investors' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="w-full px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-3 group cursor-pointer z-[110]">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:rotate-12 transition-transform duration-300">
              <Rocket className="text-white" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              Karo<span className="text-blue-500">Pitch</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block px-8 py-3 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-blue-500 transition-all border border-blue-400/30 whitespace-nowrap"
            >
              Apply to Pitch
            </motion.button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-[110] p-2 text-white bg-white/5 rounded-lg border border-white/10 active:scale-90 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HALF-SCREEN MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay for the background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[101] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* The Actual Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[70%] sm:w-[50%] z-[105] bg-[#050915] border-l border-white/10 flex flex-col p-10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] md:hidden"
            >
              {/* Background Glow inside panel */}
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-blue-600/10 rounded-full blur-[60px]" />

              <div className="flex flex-col items-start gap-10 mt-20">
                {navLinks.map((item, i) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-black text-white uppercase tracking-widest hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  Register Now <ArrowRight size={16} />
                </motion.button>
              </div>

              <div className="mt-auto pb-10">
                <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.4em]">
                  Karo Pitch &copy; 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;