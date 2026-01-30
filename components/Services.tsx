
import React from 'react';
import { Users, Layout, BarChart3 } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Influencer Marketing',
      description: 'We connect brands with relevant creators for authentic promotions across Instagram, YouTube, and TikTok.',
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      color: 'indigo'
    },
    {
      title: 'Creator Management',
      description: 'We help high-potential creators secure premium brand deals and manage long-term strategic partnerships.',
      icon: <Layout className="w-8 h-8 text-purple-400" />,
      color: 'purple'
    },
    {
      title: 'Campaign Strategy',
      description: 'Full-service planning, execution, and deep analytics reporting to ensure every campaign hits your KPIs.',
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      color: 'indigo'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">What We Do</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Comprehensive Solutions for <br />
            the <span className="gradient-text">Creator Economy</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#16132b] p-10 rounded-[32px] shadow-2xl hover:shadow-[0_20px_50px_rgba(99,102,241,0.1)] transition-all duration-500 border border-white/5 hover:border-indigo-500/30 hover:-translate-y-3"
            >
              <div className={`w-20 h-20 rounded-[24px] flex items-center justify-center mb-10 transition-all duration-500 ${service.color === 'indigo' ? 'bg-indigo-500/10 group-hover:bg-indigo-600' : 'bg-purple-500/10 group-hover:bg-purple-600'}`}>
                <div className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-white">
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { 
                    className: `w-8 h-8 transition-colors ${service.color === 'indigo' ? 'text-indigo-400' : 'text-purple-400'} group-hover:text-white` 
                  })}
                </div>
              </div>
              <h4 className="text-2xl font-black text-white mb-5 group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn more <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};