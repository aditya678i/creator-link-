
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const benefits = [
    { title: 'Verified Creators', desc: 'Every creator is manually vetted for authentic engagement and content quality.' },
    { title: 'Fast Turnaround', desc: 'Launch campaigns in days, not weeks. Our automation tools speed up the boring stuff.' },
    { title: 'Transparent Pricing', desc: 'No hidden agency fees. Clear budgeting and performance-based options.' },
    { title: 'Global Network', desc: 'Access creators from over 50 countries across all major niches.' },
    { title: 'ROI-Focused', desc: 'Data-driven campaigns designed to deliver sales, downloads, or brand lift.' }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
              Setting the Standard for <br />
              <span className="text-emerald-400">Creator Excellence</span>
            </h3>
            <p className="text-slate-400 text-lg mb-12 font-medium">
              We don't just find influencers; we build bridges. CreatorLink is built on the philosophy that authentic human connection drives business growth better than any algorithm.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-emerald-500 opacity-20 blur-2xl rounded-full"></div>
            <div className="relative bg-slate-800 p-8 rounded-[40px] border border-slate-700 shadow-2xl">
              <div className="aspect-square bg-slate-700 rounded-3xl overflow-hidden mb-6">
                <img 
                  src="https://picsum.photos/seed/agency/800/800" 
                  alt="Modern Agency" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">150M+</div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Reach</div>
                </div>
                <div className="h-8 w-px bg-slate-700"></div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Campaigns</div>
                </div>
                <div className="h-8 w-px bg-slate-700"></div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
