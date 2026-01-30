
import React from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  type: 'brand' | 'creator';
}

export const testimonials: Testimonial[] = [
  { id: 1, name: "Sarah Jenkins", role: "Marketing Director @ TechFlow", content: "CreatorLink transformed our Q4 strategy. The conversion rates were 3x our previous campaigns. Absolutely game-changing for our ROI.", avatar: "https://i.pravatar.cc/150?u=1", type: 'brand' },
  { id: 2, name: "Alex Rivera", role: "Tech YouTuber (2.4M Subs)", content: "Finally an agency that respects the creator's creative freedom while delivering professional brand deals that actually pay well.", avatar: "https://i.pravatar.cc/150?u=2", type: 'creator' },
  { id: 3, name: "David Chen", role: "Founder @ EcoBrew", content: "Vetted creators made all the difference. No more fake bot accounts, just real people and real engagement for our products.", avatar: "https://i.pravatar.cc/150?u=3", type: 'brand' },
  { id: 4, name: "Mila Kunis", role: "Lifestyle Influencer", content: "The support team is incredible. They handle all the logistics and contracts so I can focus on making high-quality content.", avatar: "https://i.pravatar.cc/150?u=4", type: 'creator' },
  { id: 5, name: "James Wilson", role: "Head of Growth @ FitTrack", content: "Scale was our biggest challenge until we found CreatorLink. We expanded into 50 countries in just two months effortlessly.", avatar: "https://i.pravatar.cc/150?u=5", type: 'brand' },
  { id: 6, name: "Elena Rossi", role: "Fashion Creator", content: "The brand matching is spot on. I've built long-term partnerships through this platform that feel authentic to my style.", avatar: "https://i.pravatar.cc/150?u=6", type: 'creator' },
  { id: 7, name: "Robert Fox", role: "CMO @ GamersHaven", content: "Real-time analytics gave us the insight we needed to double down on high-performing creators and cut waste in our budget.", avatar: "https://i.pravatar.cc/150?u=7", type: 'brand' },
  { id: 8, name: "Sophie Taylor", role: "Travel Content Creator", content: "Transparent pricing and fast payments. The best experience I've had with a management agency in my 5 years as a creator.", avatar: "https://i.pravatar.cc/150?u=8", type: 'creator' },
];

interface TestimonialFlowProps {
  onSeeAll: () => void;
}

export const TestimonialFlow: React.FC<TestimonialFlowProps> = ({ onSeeAll }) => {
  const row1 = [...testimonials, ...testimonials, ...testimonials];
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section className="py-28 bg-[#0d0b1a] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left">
            <h2 className="text-indigo-400 font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4">Community Voice</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              What <span className="gradient-text">people say</span>
            </h3>
            <p className="mt-4 text-slate-400 font-medium max-w-xl text-base leading-relaxed">
              Join the elite network of brands and creators building the future of authentic digital connection.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button 
              onClick={onSeeAll}
              className="group relative flex items-center gap-4 px-10 py-5 bg-indigo-600 text-white rounded-[24px] font-black text-sm transition-all duration-500 hover:bg-indigo-500 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.6)] hover:-translate-y-1.5 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">See all reviews</span>
              <div className="relative z-10 p-1.5 bg-white/20 rounded-xl group-hover:bg-white group-hover:text-indigo-600 transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="relative space-y-4">
        <div className="flex overflow-hidden testimonial-container">
          <div className="flex animate-scroll-left">
            {row1.map((t, idx) => (
              <TestimonialCard key={`row1-${idx}`} testimonial={t} />
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden testimonial-container">
          <div className="flex animate-scroll-right">
            {row2.map((t, idx) => (
              <TestimonialCard key={`row2-${idx}`} testimonial={t} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0d0b1a] via-[#0d0b1a]/90 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0d0b1a] via-[#0d0b1a]/90 to-transparent z-10"></div>
      </div>

      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes scroll-right { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 20s linear infinite; display: flex; width: fit-content; }
        .animate-scroll-right { animation: scroll-right 22s linear infinite; display: flex; width: fit-content; }
        .testimonial-container:hover .animate-scroll-left, .testimonial-container:hover .animate-scroll-right { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export const TestimonialCard: React.FC<{ testimonial: Testimonial; grid?: boolean }> = ({ testimonial, grid = false }) => (
  <div className={`flex-shrink-0 ${grid ? 'w-full' : 'w-[300px] md:w-[340px]'} px-2.5 py-3`}>
    <div className="h-full bg-[#16132b] border border-white/5 p-6 rounded-[28px] hover:border-indigo-500/30 hover:bg-[#1c1835] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.15)] hover:-translate-y-1 hover:scale-[1.03] group relative cursor-pointer">
      <div className="flex items-center gap-3.5 mb-5">
        <div className="relative">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-10 h-10 rounded-xl object-cover border-2 border-white/10 shadow-sm group-hover:scale-110 transition-transform duration-700"
          />
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border border-white/10 flex items-center justify-center text-[7px] shadow-sm font-black ${
            testimonial.type === 'brand' ? 'bg-indigo-600 text-white' : 'bg-purple-500 text-white'
          }`}>
            {testimonial.type === 'brand' ? 'B' : 'C'}
          </div>
        </div>
        <div className="overflow-hidden">
          <h4 className="font-black text-white text-sm leading-tight group-hover:text-indigo-400 transition-colors truncate">
            {testimonial.name}
          </h4>
          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.1em] mt-0.5 truncate">
            {testimonial.role}
          </p>
        </div>
      </div>
      
      <div className="relative min-h-[60px]">
        <Quote className="absolute -top-3 -left-2 w-6 h-6 text-indigo-500/10 -z-0 group-hover:text-indigo-500/20 transition-colors" />
        <p className="relative z-10 text-slate-300 font-medium leading-[1.5] text-[13px] italic line-clamp-3">
          "{testimonial.content}"
        </p>
      </div>

      <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-indigo-500 text-indigo-500" />
          ))}
        </div>
        <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">
          Verified
        </span>
      </div>
    </div>
  </div>
);
