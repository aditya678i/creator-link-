
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { WhyUs } from './components/WhyUs';
import { Partners } from './components/Partners';
import { CTASection } from './components/CTASection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { SmartAssistant } from './components/SmartAssistant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'contact'>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setActiveTab} activeTab={activeTab} />
      
      <main className="flex-grow">
        {activeTab === 'home' ? (
          <>
            <Hero onGetStarted={() => setActiveTab('contact')} />
            <Partners />
            <Services />
            <SmartAssistant />
            <HowItWorks />
            <WhyUs />
            <CTASection onGetStarted={() => setActiveTab('contact')} />
          </>
        ) : (
          <ContactForm />
        )}
      </main>

      <Footer onNavigate={setActiveTab} />
    </div>
  );
};

export default App;
