import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_KARO } from '../data/content';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#020617] overflow-hidden">
      <div className="w-full px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
              Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Bharat</span> Entrepreneur
            </h3>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              {ABOUT_KARO.description}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {ABOUT_KARO.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Graphic (The "Glow" Card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-blue-500 to-green-400 shadow-2xl">
              <div className="bg-[#020617] rounded-[2.3rem] p-10">
                <blockquote className="text-2xl font-medium italic text-slate-300">
                  "Karo Pitch is not just a platform; it's a movement to bring world-class funding to the heart of India."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/20" />
                  <div>
                    <div className="text-white font-bold">Team KaroStartup</div>
                    <div className="text-sm text-slate-500 uppercase tracking-widest">Est. 5 Years Ago</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;