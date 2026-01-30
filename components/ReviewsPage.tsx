
import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, X, Star, Send, CheckCircle } from 'lucide-react';
import { testimonials, TestimonialCard } from './TestimonialFlow';

interface ReviewsPageProps {
  onBack: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <div className="pt-32 pb-24 bg-[#0d0b1a] min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 font-bold text-sm transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                  Community <span className="gradient-text">Wall of Love</span>
                </h1>
              </div>
              <p className="text-slate-400 font-medium text-lg max-w-2xl leading-relaxed">
                Real feedback from the brands and creators who are redefining the future of influencer marketing with CreatorLink.
              </p>
            </div>
            
            <div className="bg-[#16132b] p-6 rounded-3xl border border-white/5 shadow-2xl flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-black text-white">4.9/5</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Average Rating</div>
              </div>
              <div className="w-px h-10 bg-white/5"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">500+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Reviews</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="animate-fade-in-up" style={{ animationDelay: `${t.id * 0.1}s` }}>
              <TestimonialCard testimonial={t} grid={true} />
            </div>
          ))}
          {/* Mocking more reviews for grid density */}
          {[...testimonials].map((t, i) => (
            <div key={`extra-${i}`} className="animate-fade-in-up" style={{ animationDelay: `${(i + testimonials.length) * 0.1}s` }}>
              <TestimonialCard testimonial={{...t, id: t.id + 100}} grid={true} />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-12 bg-[#16132b] rounded-[40px] border border-white/5 shadow-2xl max-w-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl -z-0"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-4">Want to share your experience?</h3>
              <p className="text-slate-400 font-medium mb-8">
                We value every piece of feedback. It helps us build a better platform for everyone.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 gradient-bg text-white rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/20"
              >
                Submit Your Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0a0814]/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#16132b] border border-white/10 rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in slide-in-from-bottom-8 duration-500">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-black text-white mb-4">Review Submitted!</h2>
                <p className="text-slate-400 font-medium leading-relaxed">
                  Thank you for sharing your journey with us. Your feedback helps our community thrive.
                </p>
              </div>
            ) : (
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white">Share Your Story</h2>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Join our wall of fame</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="transition-transform active:scale-90"
                        >
                          <Star 
                            className={`w-8 h-8 transition-colors ${
                              (hoverRating || rating) >= star ? 'fill-indigo-500 text-indigo-500' : 'text-slate-700'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-[#0d0b1a] border-2 border-white/5 focus:border-indigo-600 rounded-2xl text-white outline-none font-medium transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Role / Brand</label>
                      <input 
                        required
                        type="text" 
                        placeholder="CEO @ BrandX"
                        className="w-full px-5 py-4 bg-[#0d0b1a] border-2 border-white/5 focus:border-indigo-600 rounded-2xl text-white outline-none font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Experience</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How has CreatorLink helped you grow?"
                      className="w-full px-5 py-4 bg-[#0d0b1a] border-2 border-white/5 focus:border-indigo-600 rounded-2xl text-white outline-none font-medium transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 gradient-bg text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    Post Review <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
