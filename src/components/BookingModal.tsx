import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Clock, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CREATORS } from '../data/portfolioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCreator?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedCreator,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    company: '',
    discipline: 'High-Fashion & Runway Model',
    creator: preselectedCreator || 'Open to all matching talent',
    budget: '$3,500 – $8,000',
    timeline: '1 – 2 Weeks Out (Lookbook / Editorial)',
    brief: '',
  });

  useEffect(() => {
    if (preselectedCreator) {
      setFormData((prev) => ({ ...prev, creator: preselectedCreator }));
    }
  }, [preselectedCreator]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Trigger golden celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D9A441', '#174BFF', '#6D22F5', '#F5D075', '#FFFFFF'],
      });
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-vizora-midnight/90 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-vizora-midnight-card border border-vizora-gold/30 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-vizora-gold"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-vizora-gold/20 border border-vizora-gold flex items-center justify-center text-vizora-gold mb-6 shadow-gold-glow">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Inquiry Dispatched Successfully
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed font-light">
              Thank you, <span className="font-semibold text-white">{formData.clientName}</span>. Your project brief has been routed to{' '}
              <span className="font-semibold text-vizora-gold-light">{formData.creator}</span>.
              A tailored proposal and availability review will be delivered to{' '}
              <span className="font-mono text-white text-xs">{formData.clientEmail}</span>.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-400 max-w-sm mb-6 text-left space-y-1">
              <div>Scope: <span className="text-slate-200">{formData.discipline}</span></div>
              <div>Estimated Budget: <span className="text-slate-200">{formData.budget}</span></div>
              <div>Delivery Target: <span className="text-slate-200">{formData.timeline}</span></div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-vizora-midnight bg-gradient-to-r from-vizora-gold to-vizora-gold-light shadow-gold-glow hover:scale-105 transition-transform"
            >
              Return to Vizora
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-vizora-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-vizora-gold-light">
                Direct Casting Brief
              </span>
            </div>

            <h3 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Book Talent For Your Shoot
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 font-light">
              Submit your shoot details directly to models, MUAs, or stylists. No middleman agency lag or hidden surcharges.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name / Producer *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="e.g. Julian Hayes"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-vizora-gold focus:ring-1 focus:ring-vizora-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    placeholder="casting@voguemagazine.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-vizora-gold focus:ring-1 focus:ring-vizora-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Talent Category Needed
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-vizora-midnight-surface border border-white/10 text-white text-sm focus:outline-none focus:border-vizora-gold"
                  >
                    <option value="High-Fashion & Runway Model">High-Fashion &amp; Runway Model</option>
                    <option value="Editorial & Beauty MUA">Editorial &amp; Key MUA (Makeup Artist)</option>
                    <option value="Haute Couture Hair Sculptor">Haute Couture Hair Sculptor</option>
                    <option value="Wardrobe Stylist">Wardrobe Stylist &amp; Costume Director</option>
                    <option value="Fashion Photographer">Fashion &amp; Campaign Photographer</option>
                    <option value="Full Creative & Casting Team">Full Glam Team (Model + MUA + Hair)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Requested Talent
                  </label>
                  <select
                    value={formData.creator}
                    onChange={(e) => setFormData({ ...formData, creator: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-vizora-midnight-surface border border-white/10 text-white text-sm focus:outline-none focus:border-vizora-gold"
                  >
                    <option value="Open to all matching talent">Match with Best Available Talent</option>
                    {CREATORS.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} ({c.specialty})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Day Rate / Production Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-vizora-midnight-surface border border-white/10 text-white text-sm focus:outline-none focus:border-vizora-gold"
                  >
                    <option value="$1,200 – $3,500">$1,200 – $3,500 (Editorial / Lookbook Half-Day)</option>
                    <option value="$3,500 – $8,000">$3,500 – $8,000 (Runway Show / Multi-Look Production)</option>
                    <option value="$8,000 – $20,000">$8,000 – $20,000 (Commercial Campaign &amp; Buyout)</option>
                    <option value="$20,000+">$20,000+ (Global Campaign / Full Roster)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Target Shoot Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-vizora-midnight-surface border border-white/10 text-white text-sm focus:outline-none focus:border-vizora-gold"
                  >
                    <option value="Urgent Call Sheet (Within 72h)">Urgent Call Sheet (Within 72 Hours)</option>
                    <option value="1 – 2 Weeks Out">1 – 2 Weeks Out (Lookbook / Editorial)</option>
                    <option value="1 Month Out">1 Month Out (Campaign Production)</option>
                    <option value="Fashion Week Season">Upcoming Fashion Week Season</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Shoot Brief &amp; Usage Rights *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Specify shoot details: date, location (studio/location), call time, talent requirements (model measurements / MUA kit), and usage licensing (Editorial, Web, Global OOH Buyout)..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-vizora-gold focus:ring-1 focus:ring-vizora-gold"
                />
              </div>

              {/* Guarantees */}
              <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-vizora-gold" />
                  Direct Talent Response
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-vizora-blue" />
                  Avg. Reply within 24h
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  Zero Platform Fees
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-vizora-midnight bg-gradient-to-r from-vizora-gold via-vizora-gold-light to-vizora-gold shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-vizora-midnight border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Casting Brief</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
