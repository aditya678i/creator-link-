
import React from 'react';
// Added missing Send icon import.
import { Rocket, Twitter, Instagram, Linkedin, ArrowUp, Send } from 'lucide-react';

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
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-slate-900">
                Creator<span className="gradient-text">Link</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
              Connecting global brands with world-class creators. Building the future of authentic digital marketing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-pink-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600">Influencer Marketing</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600">Creator Management</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600">Campaign Strategy</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600">Reporting & Analytics</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600">About Us</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600">Case Studies</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-600">Careers</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-blue-600">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-4 font-medium">Subscribe for industry insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-50 border-none rounded-xl px-4 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-bold">
            &copy; {new Date().getFullYear()} CreatorLink Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-bold text-slate-400">
            <a href="#" className="hover:text-slate-600 uppercase">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 uppercase">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};