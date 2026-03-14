
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';

const StartupCard = ({ name, category, desc }) => {
  return (
    <motion.div 
      whileHover={{ y: -12 }}
      className="group relative p-[1px] rounded-[2.5rem] bg-white/10 hover:bg-gradient-to-br hover:from-blue-500 hover:to-green-400 transition-all duration-500 shadow-2xl"
    >
      {/* Main Card Body */}
      <div className="bg-[#050915] rounded-[2.5rem] p-8 h-full flex flex-col justify-between overflow-hidden relative">
        
        {/* Background Glow Overlay */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/5 blur-[80px] group-hover:bg-blue-600/20 transition-all duration-700" />
        
        <div>
          {/* Card Header: Icon & Category Tag */}
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-blue-500 text-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">
              {name[0]}
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="px-4 py-1.5 rounded-full border border-green-500/30 text-[10px] font-black text-green-400 uppercase tracking-[0.2em] bg-green-500/5">
                {category}
              </span>
              <div className="flex gap-1">
                 <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
                 <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
                 <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
              </div>
            </div>
          </div>
          
          {/* Startup Info */}
          <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-blue-400 transition-colors">
            {name}
          </h4>
          <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity">
            {desc}
          </p>
        </div>

        {/* Action Footer */}
        <div className="flex items-center gap-3">
          <button className="flex-1 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all duration-300">
            View Pitch Deck
          </button>
          <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
            <Globe size={18} />
          </button>
        </div>

        {/* Scan-line Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      </div>
    </motion.div>
  );
};

export default StartupCard;