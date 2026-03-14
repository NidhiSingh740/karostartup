import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '../data/content';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-[#020617] relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm font-black uppercase tracking-[0.5em] text-blue-500 mb-4"
          >
            The Process
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-[0.8] tracking-tighter uppercase"
          >
            From Bharat <br />
            <span className="text-transparent bg-clip-text bg-neon-gradient">To The Boardroom</span>
          </motion.h3>
        </div>

        {/* The Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative h-[400px]"
            >
              {/* The "Crazy" Card */}
              <div className="relative h-full w-full bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl overflow-hidden flex flex-col justify-end transition-all duration-500 group-hover:border-blue-500/50 group-hover:bg-white/[0.08]">
                
                {/* Huge Watermark Number */}
                <span className="absolute top-[-20px] right-[-10px] text-[12rem] font-black text-white/[0.03] group-hover:text-blue-500/[0.08] transition-colors duration-500 italic">
                  {index + 1}
                </span>

                {/* Animated Icon Box */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-400 p-[1px] group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full bg-[#020617] rounded-2xl flex items-center justify-center text-white">
                    <step.icon size={28} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative z-10">
                  <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-4 opacity-80 group-hover:opacity-100">
                    {step.desc}
                  </p>
                  
                  {/* Progress Indicator Line */}
                  <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.5 + (index * 0.2), duration: 1 }}
                      className="h-full bg-neon-gradient"
                    />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Subtext */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-xs">
            Start your journey today <span className="text-blue-500 inline-block animate-bounce ml-2">↓</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;