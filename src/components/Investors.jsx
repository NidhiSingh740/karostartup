
import React from 'react';
import { motion } from 'framer-motion';

const Investors = () => {
  return (
    <section id = "investors" className="py-24 bg-[#020617] relative">
      <div className="w-full px-6 lg:px-20">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-900/20 to-black border border-white/5 relative overflow-hidden">
          
          {/* Decorative background circle */}
          <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
              Meet Investors Looking for the <br />
              <span className="text-transparent bg-clip-text bg-neon-gradient">Next Big Startup.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              Our curated closed-room pitch events feature top-tier VCs, Angel Networks, and Industry Titans looking to invest in Bharat's potential.
            </p>

            {/* Investor Avatar Grid Placeholder */}
            <div className="flex flex-wrap justify-center gap-4">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative group grayscale hover:grayscale-0 transition-all">
                   <div className="w-12 h-12 rounded-full bg-slate-800" />
                   <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;