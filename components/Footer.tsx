
import React from 'react';
import { Twitter, Instagram, Linkedin, ArrowUp, Send } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (tab: 'home' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Logo className="w-8 h-8" />
              </div>
              <span className="text-xl font-extrabold text-slate-900">
                Creator<span className="gradient-text">Link</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
              Connecting global brands with world-class creators. Building the future of authentic digital marketing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/creatorlink01" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-pink-500 transition-all hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-800 transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">Influencer Marketing</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">Creator Management</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">Campaign Strategy</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">Reporting & Analytics</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors">Case Studies</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-600 transition-colors">Careers</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-600 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-4 font-medium">Subscribe for industry insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-50 border-2 border-transparent rounded-xl px-4 py-2 text-sm w-full outline-none focus:ring-0 focus:border-blue-500 transition-all"
              />
              <button className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors active:scale-95">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-bold">
            &copy; {new Date().getFullYear()} CreatorLink Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold text-slate-400">
            <a href="#" className="hover:text-slate-600 uppercase transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 uppercase transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-blue-600 transition-all active:scale-90"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
