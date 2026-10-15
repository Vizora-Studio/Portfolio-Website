import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Link2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CreatorApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatorApplyModal: React.FC<CreatorApplyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolioUrl: '',
    discipline: 'High-Fashion & Runway Model',
    experienceYears: 'Emerging Talent (1 – 3 Years)',
    representation: 'Freelance / Direct Bookings',
    bioSnippet: '',
  });

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
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D9A441', '#174BFF', '#6D22F5', '#F5D075'],
      });
    }, 600);
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
      aria-labelledby="creator-modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-vizora-midnight-card border border-vizora-gold/30 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 my-auto overflow-hidden"
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
              Application Transmitted
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed font-light">
              Welcome to the threshold, <span className="font-semibold text-white">{formData.name}</span>. Our curatorial guild reviews all portfolio submissions for artistic fidelity and craft. You will receive an invitation access link at{' '}
              <span className="font-mono text-vizora-gold-light text-xs">{formData.email}</span> within 48 hours.
            </p>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-vizora-midnight bg-gradient-to-r from-vizora-gold to-vizora-gold-light shadow-gold-glow hover:scale-105 transition-transform"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-vizora-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-vizora-gold-light">
                Model &amp; Artist Application
              </span>
            </div>

            <h3 id="creator-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Join the Vizora Fashion Roster
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 font-light">
              Apply to publish your digital comp card or beauty book. Get discovered by luxury fashion houses, magazines, and casting directors worldwide.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Full Name / Stage Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anya Laurent"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-vizora-gold focus:ring-1 focus:ring-vizora-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anya@atelier-model.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-vizora-gold focus:ring-1 focus:ring-vizora-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Comp Card / Portfolio / Agency Link *
                </label>
                <div className="relative">
                  <input
                    type="url"
                    required
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://models.com/anya or portfolio link"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-vizora-gold focus:ring-1 focus:ring-vizora-gold"
                  />
                  <Link2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Primary Talent Category
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
                    <option value="Fashion Photographer">Fashion &amp; Editorial Photographer</option>
                    <option value="Casting Director">Casting Director &amp; Scout</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Representation Status
                  </label>
                  <select
                    value={formData.representation}
                    onChange={(e) => setFormData({ ...formData, representation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-vizora-midnight-surface border border-white/10 text-white text-sm focus:outline-none focus:border-vizora-gold"
                  >
                    <option value="Freelance / Direct Bookings">Freelance / Direct Bookings</option>
                    <option value="Mother Agency Signed">Mother Agency Signed (Non-Exclusive)</option>
                    <option value="Exclusive Agency Signed">Exclusive Agency Representation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Measurements / Kit Specs &amp; Credits
                </label>
                <textarea
                  rows={2}
                  value={formData.bioSnippet}
                  onChange={(e) => setFormData({ ...formData, bioSnippet: e.target.value })}
                  placeholder="Models: Height, bust/waist/hips, shoe size • MUAs/Hair: Signature techniques & brand kits • Credits: Shows, covers, campaigns..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-vizora-gold focus:ring-1 focus:ring-vizora-gold"
                />
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
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Submit Talent Application</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                ✦ Zero traditional agency commission deductions • Keep 100% of your agreed booking fee
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
