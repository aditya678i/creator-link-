
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Campaign Briefing',
      description: 'Share your requirements, budget, and target audience goals with our team.'
    },
    {
      number: '02',
      title: 'Creator Selection',
      description: 'We shortlist verified creators that perfectly align with your brand voice.'
    },
    {
      number: '03',
      title: 'Launch & Content',
      description: 'Content goes live across selected platforms with full creative supervision.'
    },
    {
      number: '04',
      title: 'Analyze & Scale',
      description: 'Receive detailed reports on reach and ROI. We double down on what works.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-emerald-500 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">The Process</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
              From Briefing to <span className="gradient-text">Success</span> <br />in 4 Simple Steps
            </h3>
          </div>
          <div className="lg:w-1/3 text-slate-500 font-semibold text-lg leading-relaxed border-l-4 border-emerald-500 pl-8">
            We handle the friction. You get the growth. Our process is optimized for speed without sacrificing quality.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10 translate-y-8"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="group relative bg-white p-10 rounded-[40px] border border-slate-50 hover:border-emerald-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] hover:-translate-y-2 z-10">
              <div className="text-7xl font-black text-slate-50 absolute top-4 right-8 transition-all duration-500 group-hover:text-emerald-50/50 group-hover:scale-110 select-none">
                {step.number}
              </div>
              <div className="bg-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black mb-8 shadow-lg shadow-emerald-500/20 group-hover:rotate-[360deg] transition-all duration-1000">
                {idx + 1}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-bold">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
