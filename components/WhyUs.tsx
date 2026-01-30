
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
    <section id="why-us" className="py-24 bg-[#0d0b1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h2 className="text-indigo-400 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">Why Choose Us</h2>
            <h3 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
              Setting the Standard for <br />
              <span className="gradient-text">Creator Excellence</span>
            </h3>
            <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed">
              We don't just find influencers; we build bridges. CreatorLink is built on the philosophy that authentic human connection drives business growth.
            </p>
            <div className="space-y-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors mb-1">{benefit.title}</h4>
                    <p className="text-slate-500 text-sm font-semibold">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-10 bg-indigo-600/10 blur-[120px] rounded-full transition-all group-hover:bg-indigo-600/20"></div>
            <div className="relative bg-[#16132b] p-8 lg:p-12 rounded-[60px] border border-white/5 shadow-2xl hover:border-indigo-500/30 transition-all duration-700 overflow-hidden">
              <div className="aspect-square bg-[#0d0b1a] rounded-[48px] overflow-hidden mb-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Agency Team" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16132b] via-transparent to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 relative z-10">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">150M+</div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Reach</div>
                </div>
                <div className="w-px h-10 bg-white/5 mx-auto"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Campaigns</div>
                </div>
                <div className="w-px h-10 bg-white/5 mx-auto hidden"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-indigo-400">98%</div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
