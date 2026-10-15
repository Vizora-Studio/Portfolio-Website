import React from 'react';
import { Sparkles, ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenCreatorApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenCreatorApply,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-vizora-midnight-deep text-white border-t border-vizora-gold/20 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-vizora-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo Lockup */}
              <a href="#hero" className="inline-flex items-center gap-3.5 mb-6 group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vizora-gold/30 to-vizora-blue/30 p-[1px] flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/vizora-emblem-isolated.png"
                    alt="Vizora Emblem"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif tracking-widest text-2xl font-bold text-white group-hover:text-vizora-gold transition-colors">
                      VIZORA
                    </span>
                    <span className="text-vizora-gold text-sm leading-none">✦</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans block mt-0.5">
                    Creative Portfolios &amp; Opportunity Platform
                  </span>
                </div>
              </a>

              {/* Tagline */}
              <p className="font-serif italic text-base sm:text-lg text-vizora-gold-light/90 max-w-sm mb-4">
                “Creative Portfolios • Easy Bookings • Real Opportunities”
              </p>

              <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
                The premier digital comp card and casting platform built for high-fashion models,
                editorial makeup artists (MUAs), couture hair sculptors, and wardrobe stylists.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-vizora-midnight bg-gradient-to-r from-vizora-gold to-vizora-gold-light hover:scale-105 transition-transform shadow-gold-glow flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Fashion Talent</span>
              </button>

              <button
                onClick={onOpenCreatorApply}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all"
              >
                Join Model Roster
              </button>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-vizora-gold font-mono mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#hero" className="hover:text-vizora-gold transition-colors">
                  Cinematic Hero
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-vizora-gold transition-colors">
                  The Vision
                </a>
              </li>
              <li>
                <a href="#explore" className="hover:text-vizora-gold transition-colors">
                  Talent Directory
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-vizora-gold transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-vizora-gold transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#why-vizora" className="hover:text-vizora-gold transition-colors">
                  Why Vizora
                </a>
              </li>
            </ul>
          </div>

          {/* Disciplines Directory (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-vizora-gold font-mono mb-4">
              Fashion &amp; Beauty Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center justify-between">
                <a href="#explore" className="hover:text-vizora-gold transition-colors">
                  High-Fashion &amp; Runway Models
                </a>
                <span className="text-[10px] text-slate-500 font-mono">Curated</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#explore" className="hover:text-vizora-gold transition-colors">
                  Key Makeup Artists (MUA) &amp; SFX
                </a>
                <span className="text-[10px] text-slate-500 font-mono">Active</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#explore" className="hover:text-vizora-gold transition-colors">
                  Haute Couture &amp; Session Hair
                </a>
                <span className="text-[10px] text-slate-500 font-mono">Verified</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#explore" className="hover:text-vizora-gold transition-colors">
                  Wardrobe &amp; Archival Stylists
                </a>
                <span className="text-[10px] text-slate-500 font-mono">Editorial</span>
              </li>
              <li className="flex items-center justify-between">
                <a href="#explore" className="hover:text-vizora-gold transition-colors">
                  Fashion &amp; Campaign Photographers
                </a>
                <span className="text-[10px] text-slate-500 font-mono">Curated</span>
              </li>
            </ul>
          </div>

          {/* Direct Collaboration (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-vizora-gold font-mono mb-4">
              Casting &amp; Booking
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                Direct production briefs and casting roster inquiries:
              </p>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-vizora-gold-light hover:underline font-semibold"
              >
                <span>Submit Casting Brief</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>

              <div className="pt-3 border-t border-white/[0.08]">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-vizora-gold" />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 VIZORA. All rights reserved.</span>
            <span>•</span>
            <span className="text-slate-400">Signature Creative Technology</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Designed with Editorial Rigor</span>
            <span className="w-1.5 h-1.5 rounded-full bg-vizora-gold" />
            <span className="font-mono text-[11px] text-vizora-gold-light">v1.0 Production</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
