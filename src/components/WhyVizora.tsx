import React from 'react';
import { Sparkles, Feather, ShieldCheck, Target, Users, TrendingUp, Globe, Check } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/portfolioData';

interface WhyVizoraProps {
  onOpenBooking: () => void;
}

export const WhyVizora: React.FC<WhyVizoraProps> = ({ onOpenBooking }) => {
  const icons = [Feather, ShieldCheck, Target, Users, TrendingUp, Globe];

  return (
    <section
      id="why-vizora"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-vizora-midnight text-white overflow-hidden border-t border-white/[0.06] scroll-mt-16"
    >
      {/* Subtle radial ambient lights */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-vizora-blue/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-vizora-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vizora-gold/10 border border-vizora-gold/30 text-[11px] font-semibold uppercase tracking-[0.25em] text-vizora-gold-light mb-4">
            <span>The Value Proposition</span>
            <Sparkles className="w-3 h-3 text-vizora-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Why Creators &amp; Studios Choose{' '}
            <span className="text-gold-gradient">Vizora</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Constructed specifically for visionaries who refuse to treat their craft like
            disposable social media content.
          </p>
        </div>

        {/* 6 Core Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={prop.title}
                className="group relative rounded-2xl sm:rounded-3xl p-8 bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-vizora-gold/40 shadow-luxury-card hover:shadow-gold-glow/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-vizora-gold/20 to-vizora-blue/20 border border-vizora-gold/30 flex items-center justify-center text-vizora-gold-light mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-vizora-gold transition-colors">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {prop.description}
                  </p>
                </div>

                {/* Micro Guarantee footer */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-vizora-gold-light/80">
                  <Check className="w-3.5 h-3.5 text-vizora-gold" />
                  <span>Guaranteed Platform Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Endorsement Plaque */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-vizora-midnight-elevated via-vizora-midnight-card to-vizora-midnight-elevated border border-vizora-gold/30 max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="font-serif text-xl font-bold text-white">
              Are you an Agency Director or Art Buyer?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
              Gain priority access to curated rosters, verified availability calendars, and direct artist contracting.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-vizora-midnight bg-gradient-to-r from-vizora-gold to-vizora-gold-light shadow-gold-glow hover:scale-105 transition-transform"
          >
            Access Talent Roster
          </button>
        </div>
      </div>
    </section>
  );
};
