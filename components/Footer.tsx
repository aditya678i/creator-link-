
import React from 'react';
import { Twitter, Instagram, Linkedin, ArrowUp, Send } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (tab: 'home' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0a0814] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer group" onClick={() => onNavigate('home')}>
              <Logo className="w-8 h-8" />
              <span className="text-xl font-extrabold text-white">
                Creator<span className="gradient-text">Link</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
              Connecting global brands with world-class creators. Building the future of authentic digital marketing.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-400 transition-colors">Influencer Marketing</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-400 transition-colors">Creator Management</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-indigo-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Stay Updated</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-[#16132b] border-2 border-white/5 rounded-xl px-4 py-2 text-sm w-full outline-none focus:border-indigo-500 text-white" />
              <button className="bg-white text-slate-900 px-4 py-2 rounded-xl hover:bg-slate-100 transition-colors"><Send className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-bold">
            &copy; {new Date().getFullYear()} CreatorLink Agency.
          </p>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-indigo-400 transition-all">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};