
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Users, Target, MousePointer2 } from 'lucide-react';

interface Stats {
  reach: number;
  engagement: number;
  impressions: number;
  impactScore: number;
}

export const CampaignPlanner: React.FC = () => {
  const [budget, setBudget] = useState(5000);
  const [niche, setNiche] = useState('Lifestyle');
  const [platform, setPlatform] = useState('TikTok');
  const [stats, setStats] = useState<Stats>({ reach: 0, engagement: 0, impressions: 0, impactScore: 0 });

  const niches = [
    { name: 'Lifestyle', cpm: 12, eng: 0.045 },
    { name: 'Tech & Gaming', cpm: 25, eng: 0.032 },
    { name: 'Fashion & Beauty', cpm: 18, eng: 0.058 },
    { name: 'B2B/SaaS', cpm: 45, eng: 0.021 },
  ];

  const platforms = [
    { name: 'TikTok', multiplier: 1.2 },
    { name: 'Instagram', multiplier: 1.0 },
    { name: 'YouTube', multiplier: 0.7 },
  ];

  useEffect(() => {
    const selectedNiche = niches.find(n => n.name === niche) || niches[0];
    const selectedPlatform = platforms.find(p => p.name === platform) || platforms[0];

    const reach = (budget / selectedNiche.cpm) * 1000 * selectedPlatform.multiplier;
    const engagement = reach * selectedNiche.eng;
    const impressions = reach * 1.4;
    const impactScore = Math.min(100, (budget / 50000) * 100 + (selectedNiche.eng * 1000));

    setStats({
      reach: Math.round(reach),
      engagement: Math.round(engagement),
      impressions: Math.round(impressions),
      impactScore: Math.round(impactScore)
    });
  }, [budget, niche, platform]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <section className="py-24 bg-[#0a0814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-400 font-extrabold tracking-[0.2em] uppercase text-xs mb-4">Strategic Planning</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Predict Your <span className="gradient-text">Campaign Impact</span>
          </h3>
          <p className="mt-4 text-slate-400 font-medium max-w-2xl mx-auto">
            Use our proprietary reach engine to estimate the potential performance of your next creator collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-[#16132b] p-8 md:p-10 rounded-[40px] shadow-2xl border border-white/5 flex flex-col justify-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-tight">Monthly Budget</label>
                  <span className="text-3xl font-black text-indigo-400">${budget.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="100000" 
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-tight">Industry Niche</label>
                <div className="grid grid-cols-2 gap-3">
                  {niches.map((n) => (
                    <button
                      key={n.name}
                      onClick={() => setNiche(n.name)}
                      className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all border-2 ${
                        niche === n.name 
                        ? 'bg-indigo-600/10 border-indigo-600 text-indigo-400' 
                        : 'bg-[#0d0b1a] border-white/5 text-slate-500 hover:border-white/10'
                      }`}
                    >
                      {n.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-tight">Primary Platform</label>
                <div className="flex p-1.5 bg-[#0d0b1a] rounded-2xl">
                  {platforms.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setPlatform(p.name)}
                      className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${
                        platform === p.name 
                        ? 'bg-[#16132b] text-white shadow-xl border border-white/5' 
                        : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0d0b1a] rounded-[40px] p-8 md:p-12 border border-white/5 relative overflow-hidden flex flex-col justify-between group shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 transition-all group-hover:bg-indigo-600/10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                <div className="px-4 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                  Estimates Based on Current Data
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <StatItem label="Reach" value={formatNumber(stats.reach)} icon={<Users className="w-4 h-4" />} color="text-white" />
                <StatItem label="Engagements" value={formatNumber(stats.engagement)} icon={<TrendingUp className="w-4 h-4" />} color="text-emerald-400" />
                <StatItem label="Impressions" value={formatNumber(stats.impressions)} icon={<Target className="w-4 h-4" />} color="text-white" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
                    <MousePointer2 className="w-4 h-4" />
                    Impact Score
                  </div>
                  <div className="flex items-end gap-3">
                    <div className="text-5xl font-black text-indigo-400 tracking-tighter">{stats.impactScore}</div>
                    <div className="text-2xl font-black text-slate-800 mb-1">/ 100</div>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-indigo-400 transition-all duration-1000 ease-out" style={{ width: `${stats.impactScore}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 p-8 bg-[#16132b] rounded-3xl border border-white/5 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h5 className="text-white font-bold text-lg mb-1">Scale this plan?</h5>
                  <p className="text-slate-500 text-sm">Our strategist will refine this based on your specific KPIs.</p>
                </div>
                <button className="whitespace-nowrap px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-500 hover:scale-[1.05] transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                  Book Strategy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ label: string; value: string; icon: React.ReactNode; color: string }> = ({ label, value, icon, color }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
      {icon}
      {label}
    </div>
    <div className={`text-5xl font-black ${color} tracking-tighter`}>
      {value}
    </div>
    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-wide">Network-wide estimate</p>
  </div>
);
