
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  activeTab: 'home' | 'contact';
  onNavigate: (tab: 'home' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why CreatorLink', href: '#why-us' },
  ];

  const handleLinkClick = (href: string) => {
    onNavigate('home');
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#121021]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="transition-transform duration-500 group-hover:scale-110">
              <Logo className="w-10 h-10" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Creator<span className="gradient-text">Link</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="relative text-slate-300 hover:text-indigo-400 font-semibold transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 active:scale-95 shadow-md ${
                activeTab === 'contact' 
                  ? 'bg-indigo-600 text-white shadow-indigo-500/20' 
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              Get Creators
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#121021] border-t border-white/5 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="block w-full text-left px-4 py-3 text-slate-300 font-bold hover:bg-white/5 rounded-xl"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('contact'); setIsOpen(false); }}
            className="block w-full text-center gradient-bg text-white px-4 py-4 rounded-2xl font-black shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Work With Creators
          </button>
        </div>
      )}
    </nav>
  );
};