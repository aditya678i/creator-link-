
import React from 'react';
import { ArrowRight, Star, Globe, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[60%] h-[60%] bg-blue-50/50 blur-[140px] rounded-full translate-x-1/4 -translate-y-1/4 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-emerald-50/50 blur-[140px] rounded-full -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-10 animate-fade-in-up">
          <Star className="w-4 h-4 fill-blue-700 animate-pulse" />
          <span className="tracking-tight">Trusted by 200+ global industry leaders</span>
        </div>
        
        <h1 className="text-5xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8 animate-fade-in-up stagger-1">
          Bridge Brands with the <br />
          <span className="gradient-text">Creator Elite</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up stagger-2">
          CreatorLink is the premium gateway for high-growth brands to collaborate with world-class influencers on Instagram, YouTube, and beyond.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up stagger-3">
          <button
            onClick={onGetStarted}
            className="group px-10 py-5 gradient-bg text-white rounded-2xl font-black text-xl shadow-2xl shadow-blue-500/25 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-3"
          >
            Start Campaign
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-xl hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95 shadow-lg shadow-slate-200/50">
            View Creator Network
          </button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up stagger-4">
          <div className="p-8 bg-white/50 backdrop-blur-sm rounded-[32px] border border-white flex flex-col items-center hover:bg-white transition-all hover:shadow-xl group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Global Presence</h3>
            <p className="text-slate-500 font-semibold text-sm">Campaigns across 50+ countries</p>
          </div>
          
          <div className="p-8 bg-white/50 backdrop-blur-sm rounded-[32px] border border-white flex flex-col items-center hover:bg-white transition-all hover:shadow-xl group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Star className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Vetted Talent</h3>
            <p className="text-slate-500 font-semibold text-sm">Manual verification for quality</p>
          </div>

          <div className="p-8 bg-white/50 backdrop-blur-sm rounded-[32px] border border-white flex flex-col items-center hover:bg-white transition-all hover:shadow-xl group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">ROI Focused</h3>
            <p className="text-slate-500 font-semibold text-sm">Data-driven performance tracking</p>
          </div>
        </div>
      </div>
    </section>
  );
};
