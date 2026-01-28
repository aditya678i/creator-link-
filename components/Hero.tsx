
import React from 'react';
import { ArrowRight, Star, Globe, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-50 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4 opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-emerald-50 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-8 animate-fade-in">
          <Star className="w-4 h-4 fill-blue-700" />
          <span>The Leading Creator Agency for High-Growth Brands</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Connecting Brands with the <br />
          <span className="gradient-text">Right Creators</span>
        </h1>
        
        <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
          Paid collaborations • Global reach • Real results. We help startups and D2C brands scale through authentic creator partnerships.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-4 gradient-bg text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/25 hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Work With Creators
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors"
          >
            Partner With CreatorLink
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-100 pt-12">
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 p-3 rounded-xl mb-3">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <span className="font-bold text-slate-900">Global Network</span>
            <span className="text-sm text-slate-500">Creators across 40+ countries</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-emerald-50 p-3 rounded-xl mb-3">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="font-bold text-slate-900">High Engagement</span>
            <span className="text-sm text-slate-500">Above-industry average ROI</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 p-3 rounded-xl mb-3">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <span className="font-bold text-slate-900">Verified Talent</span>
            <span className="text-sm text-slate-500">Hand-picked high-quality profiles</span>
          </div>
        </div>
      </div>
    </section>
  );
};
