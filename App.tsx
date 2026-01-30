
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { WhyUs } from './components/WhyUs';
import { Partners } from './components/Partners';
import { CTASection } from './components/CTASection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { TestimonialFlow } from './components/TestimonialFlow';
import { SmartAssistant } from './components/SmartAssistant';
import { ReviewsPage } from './components/ReviewsPage';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'contact' | 'reviews'>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (tab: 'home' | 'contact' | 'reviews') => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 350);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0b1a]">
      <Navbar onNavigate={handleNavigate} activeTab={activeTab === 'reviews' ? 'home' : activeTab as 'home' | 'contact'} />
      
      <main className={`flex-grow transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isTransitioning ? 'opacity-0 scale-[0.97] blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
        {activeTab === 'home' && (
          <div key="home-page" className="animate-fade-in">
            <Hero onGetStarted={() => handleNavigate('contact')} />
            <Partners />
            <Services />
            <TestimonialFlow onSeeAll={() => handleNavigate('reviews')} />
            <SmartAssistant />
            <HowItWorks />
            <WhyUs />
            <CTASection onGetStarted={() => handleNavigate('contact')} />
          </div>
        )}
        
        {activeTab === 'contact' && (
          <div key="contact-page" className="animate-scale-in">
            <ContactForm />
          </div>
        )}

        {activeTab === 'reviews' && (
          <div key="reviews-page" className="animate-scale-in">
            <ReviewsPage onBack={() => handleNavigate('home')} />
          </div>
        )}
      </main>

      <Footer onNavigate={(tab) => handleNavigate(tab as 'home' | 'contact')} />
    </div>
  );
};

export default App;
