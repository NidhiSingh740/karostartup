import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#020617] overflow-hidden">
      
      {/* 1. BACKGROUND GLOWS - The "Aura" */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-20">
        
        {/* Animated Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-xl mb-10"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">The Future of Bharat Startups</span>
        </motion.div>

        {/* The Mega Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter text-white mb-10"
        >
          PITCH TO THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            TOP 1% INVESTORS
          </span>
        </motion.h1>

        {/* High Contrast Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 font-medium leading-relaxed"
        >
          Bridging the gap for <span className="text-white">Tier-2, Tier-3, and Bharat founders.</span> 
          A structured platform to secure funding and mentorship.
        </motion.p>

        {/* Brutalist Hero Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-black font-black text-xl rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-green-500/40 transition-all uppercase tracking-tighter"
          >
            Apply to Pitch
          </motion.button>
          
          <motion.button 
            className="px-12 py-5 bg-transparent border-2 border-white/20 text-white font-black text-xl rounded-2xl hover:bg-white/10 transition-all uppercase tracking-tighter"
          >
            Explore Startups
          </motion.button>
        </div>

        {/* Visual Social Proof */}
        <div className="mt-32 pt-12 border-t border-white/5">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] mb-12">Participating VCs & Angels</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-3xl font-black tracking-tighter italic">SEQUOIA</div>
             <div className="text-3xl font-black tracking-tighter">ACCEL</div>
             <div className="text-3xl font-black tracking-tighter italic">BLUME</div>
             <div className="text-3xl font-black tracking-tighter">TIGER GLOBAL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;