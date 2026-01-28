
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
      <div className="pt-40 pb-20 px-4 flex items-center justify-center">
        <div className="text-center max-w-md bg-white p-12 rounded-[40px] shadow-2xl border border-blue-50">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Inquiry Received!</h2>
          <p className="text-slate-600 font-medium mb-8">
            Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-bold hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-40 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Let's build your <br />
              <span className="gradient-text">Dream Campaign</span>
            </h1>
            <p className="text-slate-600 text-lg mb-12 font-medium">
              Ready to scale? Fill out the form and our strategy team will reach out to build a custom creator roadmap for your brand.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Us</div>
                  <div className="text-lg font-bold text-slate-900">hello@creatorlink.agency</div>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">DM Us</div>
                  <div className="text-lg font-bold text-slate-900">@creatorlink_global</div>
                  <p className="text-xs text-pink-500 font-bold mt-1 uppercase">DM us for faster response</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">WhatsApp</div>
                  <div className="text-lg font-bold text-slate-900">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border-transparent border focus:border-blue-500 focus:bg-white rounded-2xl transition-all outline-none font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Work Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@company.com"
                    className="w-full px-5 py-4 bg-slate-50 border-transparent border focus:border-blue-500 focus:bg-white rounded-2xl transition-all outline-none font-medium" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Company Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Acme Inc."
                    className="w-full px-5 py-4 bg-slate-50 border-transparent border focus:border-blue-500 focus:bg-white rounded-2xl transition-all outline-none font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Monthly Budget</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border-transparent border focus:border-blue-500 focus:bg-white rounded-2xl transition-all outline-none font-medium cursor-pointer">
                    <option>$2k - $5k</option>
                    <option>$5k - $15k</option>
                    <option>$15k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Tell us about your goals</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Tell us about your brand and what you hope to achieve..."
                  className="w-full px-5 py-4 bg-slate-50 border-transparent border focus:border-blue-500 focus:bg-white rounded-2xl transition-all outline-none font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 gradient-bg text-white rounded-2xl font-extrabold text-lg shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
              >
                Send Inquiry
                <Send className="w-5 h-5" />
              </button>
              
              <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mt-6">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
