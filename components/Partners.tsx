
import React from 'react';

export const Partners: React.FC = () => {
  const categories = [
    'Startups', 'D2C Brands', 'Apps', 'Agencies', 'E-commerce'
  ];

  return (
    <section className="py-12 bg-[#0d0b1a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-10 opacity-70">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {categories.map((cat, idx) => (
            <div key={idx} className="text-xl font-black text-white flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/20"></div>
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
