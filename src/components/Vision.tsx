import React from 'react';
import { Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

interface VisionProps {
  onOpenBooking: () => void;
}

export const Vision: React.FC<VisionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="vision"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] text-vizora-midnight overflow-hidden border-y border-vizora-gold/20 scroll-mt-16"
    >
      {/* Decorative Editorial Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vizora-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vizora-blue/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle fine watermark line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] overflow-hidden whitespace-nowrap text-9xl font-serif font-black">
        VIZORA FASHION CASTING MANIFESTO
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Pill Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-[1px] bg-vizora-gold" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-vizora-gold-dark">
            The Vizora Vision &amp; Casting Manifesto
          </span>
        </div>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-8">
              Talent Is Everywhere.{' '}
              <span className="italic font-normal font-serif text-vizora-blue block mt-1">
                Opportunity Should Be Too.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light mb-8">
              The fashion, modeling, and beauty industry has historically suffered from broken friction:
              models and makeup artists lost in chaotic social media DMs, compressed image uploads that wash away
              delicate cosmetic textures, and legacy agencies deducting up to 35% in platform fees.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
              Vizora was founded to build a dedicated digital stage for runway models, celebrity
              makeup artists (MUAs), editorial hair sculptors, and fashion creators. We empower talent to
              curate verified comp cards, protect their usage rights, and book landmark campaigns with
              luxury fashion houses across Paris, Milan, London, and New York.
            </p>

            {/* Three Foundational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-300/80">
              <div className="p-4 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-vizora-blue/10 flex items-center justify-center text-vizora-blue mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-sm tracking-wide mb-1">
                  Digital Comp Cards
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified physical measurements, uncompressed 4K skin texture, and tear sheets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-vizora-gold/15 flex items-center justify-center text-vizora-gold-dark mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-sm tracking-wide mb-1">
                  Easy Bookings
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct brand-to-talent casting, clear call times, transparent usage licensing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-vizora-violet/10 flex items-center justify-center text-vizora-violet mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-sm tracking-wide mb-1">
                  Real Opportunities
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Paris/Milan runway castings, luxury beauty campaigns, and editorial covers.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-vizora-blue transition-colors duration-300 shadow-md"
              >
                <span>Initiate Talent Casting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#explore"
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-vizora-blue transition-colors px-4 py-3"
              >
                Browse Model &amp; MUA Directory →
              </a>
            </div>
          </div>

          {/* Right Column: Sculptural Brand Visual Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-ivory-card border border-vizora-gold/25 group">
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-vizora-gold/60 rounded-tr-xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-vizora-gold/60 rounded-bl-xl pointer-events-none" />

              {/* The Official Vizora Artwork in its native ivory element */}
              <div className="relative overflow-hidden rounded-xl border border-slate-200/70 mb-5 bg-[#FAF8F3]">
                <img
                  src="/assets/vizora-logo-original.jpeg"
                  alt="Vizora Official Brand Artwork"
                  className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Editorial Caption */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="font-mono uppercase tracking-widest text-[10px]">
                    FIGURE 1.0 — THE EMBLEM OF FASHION &amp; BEAUTY
                  </span>
                  <span className="text-vizora-gold-dark font-serif font-bold">2026 EDITION</span>
                </div>
                <p className="font-serif italic text-sm text-slate-800 leading-snug">
                  “The winged silhouette gazing toward the celestial halo symbolizes the ascension
                  of fashion models, beauty artists, and visual creators onto the world stage.”
                </p>
              </div>
            </div>

            {/* Quick Quote pill */}
            <div className="mt-8 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/90 border border-slate-200 shadow-sm text-xs text-slate-700">
              <span className="text-vizora-gold text-base">“</span>
              <span className="font-medium">
                Where high-fashion craft meets transparent professional casting.
              </span>
              <span className="text-vizora-gold text-base">”</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
