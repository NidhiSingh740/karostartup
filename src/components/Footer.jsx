import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] pt-20 pb-10 overflow-hidden">
      <div className="w-full px-6 lg:px-20">
        
        {/* 1. MEGA CTA CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-neon-gradient p-[2px] overflow-hidden group"
        >
          <div className="bg-[#050915] rounded-[2.9rem] px-8 py-20 text-center relative overflow-hidden">
            {/* Background Animation for CTA */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.8]">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Pitch Your Future?</span>
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-bold uppercase tracking-widest">
                Don't let your location define your destination. Join the Bharat funding wave.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-12 py-6 bg-white text-black font-black text-xl rounded-2xl flex items-center justify-center gap-3 group/btn shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                >
                  Apply Now <Rocket size={24} />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-12 py-6 bg-transparent border-2 border-white/10 text-white font-black text-xl rounded-2xl hover:bg-white/5 transition-all"
                >
                  Partner With Us
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. REAL FOOTER LINKS */}
        <div className="mt-32 grid md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-neon-gradient rounded-lg" />
              <span className="text-2xl font-black text-white tracking-tighter uppercase">Karo<span className="text-blue-500">Pitch</span></span>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed mb-8">
              KaroStartup is India's largest startup storytelling platform. With Karo Pitch, we are democratizing access to capital for every founder in Bharat.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Mail].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer transition-all">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li className="hover:text-blue-500 cursor-pointer flex items-center gap-1 transition-colors">Apply to Pitch <ArrowUpRight size={14}/></li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Investor Network</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Success Stories</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li className="hover:text-white transition-colors">support@karostartup.com</li>
              <li className="hover:text-white transition-colors">New Delhi, India</li>
              <li className="hover:text-white transition-colors">Bharat Office: Indore, MP</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">
            © 2026 Karo Pitch by KaroStartup. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black text-slate-600 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;