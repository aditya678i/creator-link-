
import React from 'react';

interface CTAProps {
  onGetStarted: () => void;
}

export const CTASection: React.FC<CTAProps> = ({ onGetStarted }) => {
  return (
    <section className="py-24 bg-[#0d0b1a] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-bg rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(99,102,241,0.3)]">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Ready to collaborate <br />with creators?
            </h2>
            <p className="text-indigo-50 text-xl mb-12 max-w-2xl mx-auto font-medium opacity-90">
              Join hundreds of forward-thinking brands that are scaling through CreatorLink partnerships.
            </p>
            <button
              onClick={onGetStarted}
              className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
