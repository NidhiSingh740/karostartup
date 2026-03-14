import React from 'react';
import { FEATURED_STARTUPS } from '../data/content';
import StartupCard from './StartupCard';

const Categories = () => {
  return (
    <section id = "startups" className="py-32 bg-[#020617]">
      <div className="w-full px-6 lg:px-20">
        <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-16">
          Featured <span className="text-blue-500 italic">Founders</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURED_STARTUPS.map((startup, index) => (
            <StartupCard 
              key={index}
              name={startup.name}
              category={startup.category}
              desc={startup.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;