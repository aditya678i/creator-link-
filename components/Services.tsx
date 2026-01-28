
import React from 'react';
import { Users, Layout, BarChart3 } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Influencer Marketing',
      description: 'We connect brands with relevant creators for authentic promotions across Instagram, YouTube, and TikTok.',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      color: 'blue'
    },
    {
      title: 'Creator Management',
      description: 'We help high-potential creators secure premium brand deals and manage long-term strategic partnerships.',
      icon: <Layout className="w-8 h-8 text-emerald-600" />,
      color: 'emerald'
    },
    {
      title: 'Campaign Strategy',
      description: 'Full-service planning, execution, and deep analytics reporting to ensure every campaign hits your KPIs.',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      color: 'blue'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">What We Do</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Comprehensive Solutions for <br />
            the <span className="gradient-text">Creator Economy</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-10 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 border border-slate-100 hover:border-blue-100 hover:-translate-y-3"
            >
              <div className={`w-20 h-20 rounded-[24px] flex items-center justify-center mb-10 transition-all duration-500 ${service.color === 'blue' ? 'bg-blue-50 group-hover:bg-blue-600' : 'bg-emerald-50 group-hover:bg-emerald-500'}`}>
                <div className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-white">
                  {React.cloneElement(service.icon as React.ReactElement, { 
                    className: `w-8 h-8 transition-colors ${service.color === 'blue' ? 'text-blue-600' : 'text-emerald-600'} group-hover:text-white` 
                  })}
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn more <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
