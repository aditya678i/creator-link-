
import React, { useState } from 'react';
import { Mail, Instagram, MessageCircle, Send, CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-20 px-4 flex items-center justify-center bg-[#0d0b1a]">
        <div className="text-center max-w-md bg-[#16132b] p-12 rounded-[40px] shadow-2xl border border-white/5 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-indigo-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">Inquiry Received!</h2>
          <p className="text-slate-400 font-medium mb-8">
            Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-indigo-400 font-bold hover:underline transition-all"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-40 pb-20 bg-[#0d0b1a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-5xl font-black text-white mb-6 tracking-tight">
              Let's build your <br />
              <span className="gradient-text">Dream Campaign</span>
            </h1>
            <p className="text-slate-400 text-lg mb-12 font-medium">
              Ready to scale? Fill out the form and our strategy team will reach out to build a custom creator roadmap for your brand.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 bg-[#16132b] rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email Us</div>
                  <div className="text-lg font-bold text-white">creatorlink0001@gmail.com</div>
                </div>
              </div>

              <a 
                href="https://www.instagram.com/creatorlink01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-[#16132b] rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">DM Us</div>
                  <div className="text-lg font-bold text-white">@creatorlink01</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#16132b] p-8 lg:p-12 rounded-[40px] shadow-2xl border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Your Name</label>
                  <input type="text" required className="w-full px-5 py-4 bg-[#0d0b1a] border-2 border-white/5 focus:border-indigo-600 rounded-2xl text-white outline-none font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Work Email</label>
                  <input type="email" required className="w-full px-5 py-4 bg-[#0d0b1a] border-2 border-white/5 focus:border-indigo-600 rounded-2xl text-white outline-none font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">Tell us about your goals</label>
                <textarea rows={4} required className="w-full px-5 py-4 bg-[#0d0b1a] border-2 border-white/5 focus:border-indigo-600 rounded-2xl text-white outline-none font-medium resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-5 gradient-bg text-white rounded-2xl font-extrabold text-lg shadow-xl shadow-indigo-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                Send Inquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};