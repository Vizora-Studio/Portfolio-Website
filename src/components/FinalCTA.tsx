import React from 'react';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onOpenCreatorApply: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenBooking,
  onOpenCreatorApply,
}) => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-vizora-midnight text-white overflow-hidden border-t border-white/[0.08]">
      {/* Dynamic Golden Orbit Halo Animation in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-vizora-gold/20 animate-spin-slow pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-vizora-gold shadow-gold-glow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-vizora-blue/20 animate-spin-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-vizora-violet/15 pointer-events-none" />

      {/* Radiant Cosmic Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-vizora-blue/20 via-vizora-violet/20 to-vizora-gold/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-vizora-gold/30 shadow-gold-glow mb-8">
          <Sparkles className="w-3.5 h-3.5 text-vizora-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-vizora-gold-light">
            THE RUNWAY &amp; STUDIO AWAIT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-vizora-gold" />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Your Next Runway, Campaign, or Cover Starts With{' '}
          <span className="text-gold-gradient underline decoration-vizora-gold/30 decoration-1 underline-offset-8">
            Being Seen.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="font-sans text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Digital comp cards. Uncompressed 4K beauty books. Direct bookings from the world&apos;s most visionary luxury brands and magazines.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA: Join Roster */}
          <button
            onClick={onOpenCreatorApply}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-vizora-midnight bg-gradient-to-r from-vizora-gold via-vizora-gold-light to-vizora-gold shadow-gold-glow hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-vizora-midnight" />
            <span>Apply to Talent Roster</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA: Book Fashion Talent */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-vizora-gold/50 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Book Fashion Talent</span>
            <Compass className="w-4 h-4 text-vizora-gold" />
          </button>
        </div>

        {/* Confidence Statement */}
        <div className="mt-14 flex items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-vizora-gold" />
            Verified Measurements &amp; Kits
          </span>
          <span>•</span>
          <span>Global Casting Reach</span>
          <span>•</span>
          <span>Zero Traditional Agency Tax</span>
        </div>
      </div>
    </section>
  );
};
