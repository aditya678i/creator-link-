
import React from 'react';

export const Partners: React.FC = () => {
  const categories = [
    'Startups', 'D2C Brands', 'Apps', 'Agencies', 'E-commerce'
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {categories.map((cat, idx) => (
            <div key={idx} className="text-2xl font-black text-slate-800 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-200"></div>
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
