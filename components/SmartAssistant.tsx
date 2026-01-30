
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Send } from 'lucide-react';

export const SmartAssistant: React.FC = () => {
  const [brandInfo, setBrandInfo] = useState('');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const brainstormCampaign = async () => {
    if (!brandInfo.trim()) return;
    setLoading(true);
    setSuggestion(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Act as a senior influencer marketing strategist at CreatorLink. 
        Create a high-impact creator campaign strategy for the following brand/niche: "${brandInfo}".
        Keep the response professional, concise (max 200 words), and include:
        1. Campaign Theme
        2. Suggested Platform (IG/YT/TikTok)
        3. Core Deliverable (e.g., Unboxing, Day-in-the-life)
        4. Target KPI.
        Format it with clear headings and bullet points.`,
      });
      setSuggestion(response.text || 'No suggestion generated.');
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setSuggestion("Unable to generate strategy at this moment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#0a0814]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group bg-[#0d0b1a] rounded-[48px] p-8 md:p-14 border border-white/5 shadow-2xl overflow-hidden relative transition-all duration-700 hover:shadow-[0_0_80px_rgba(99,102,241,0.1)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full group-hover:bg-indigo-600/20 transition-all duration-1000"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:rotate-12 transition-all duration-500">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-1">Campaign AI</h3>
                <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest">Powered by CreatorLink Intelligence</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-lg font-medium mb-10 leading-relaxed">
              Unlock instant inspiration. Input your brand niche and our AI strategy engine will draft a bespoke campaign concept in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <input
                type="text"
                value={brandInfo}
                onChange={(e) => setBrandInfo(e.target.value)}
                placeholder="e.g. Eco-friendly coffee pods"
                className="flex-grow px-8 py-5 bg-[#16132b] border-2 border-white/5 rounded-3xl text-white outline-none focus:border-indigo-600 transition-all font-semibold placeholder:text-slate-600 text-lg"
              />
              <button
                onClick={brainstormCampaign}
                disabled={loading || !brandInfo.trim()}
                className="px-10 py-5 gradient-bg text-white rounded-3xl font-black flex items-center justify-center gap-3 disabled:opacity-50 hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-indigo-600/20 whitespace-nowrap text-lg"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
                Draft Strategy
              </button>
            </div>

            {suggestion && (
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-[32px] border border-white/10 animate-in fade-in zoom-in duration-500">
                <div className="prose prose-invert prose-sm max-w-none text-slate-200 whitespace-pre-line font-medium leading-relaxed text-base">
                  {suggestion}
                </div>
              </div>
            )}
            
            <div className="mt-10 pt-10 border-t border-white/5 flex flex-wrap gap-6 items-center justify-between text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                Strategy Engine Online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};