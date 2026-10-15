import React, { useState } from 'react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, Clock, FileCheck } from 'lucide-react';

interface BookingsSectionProps {
  onOpenBooking: () => void;
}

export const BookingsSection: React.FC<BookingsSectionProps> = ({ onOpenBooking }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('Runway & Lookbook Models');
  const [activeTier, setActiveTier] = useState(1);

  const tiers = [
    {
      title: 'Editorial Shoot / Lookbook',
      range: '$1,200 – $3,500',
      duration: 'Half-Day / Full-Day Shoot',
      deliverables: ['Verified Talent On-Set', 'Lookbook & Web Digital Rights (1 Yr)', 'Up to 6 Look Changes / Touch-ups'],
    },
    {
      title: 'Fashion Week / Runway Showcase',
      range: '$3,500 – $9,000',
      duration: 'Fittings + Runway Show Day',
      deliverables: ['Pre-Show Lineup Fittings & Rehearsal', 'Runway Walk & Backstage Glam Prep', 'Worldwide Press & Live Stream Rights'],
    },
    {
      title: 'Global Campaign & Commercial Buyout',
      range: '$10,000 – $30,000+',
      duration: 'Multi-Day Production',
      deliverables: ['Full Day Rate + Worldwide Buyout', 'Print, OOH, Digital & Broadcast Rights', 'Dedicated MUA / Stylist Kit & Multi-Talent Team'],
    },
  ];

  return (
    <section
      id="collaborate"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-vizora-midnight text-white overflow-hidden border-t border-white/[0.06] scroll-mt-16"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-vizora-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-vizora-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vizora-gold/10 border border-vizora-gold/30 text-[11px] font-semibold uppercase tracking-[0.25em] text-vizora-gold-light mb-4">
              <span>Casting &amp; Talent Bookings</span>
              <Sparkles className="w-3 h-3 text-vizora-gold" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              From Comp Cards to{' '}
              <span className="text-gold-gradient block mt-1">
                Fashion Bookings.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
              Finding the perfect face or visionary beauty artist shouldn&apos;t require navigating slow, archaic agency gatekeepers.
              Vizora empowers brands, magazines, and casting directors to book premier models and artists directly.
            </p>

            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8">
              Review verified physical measurements, high-res skin closeups, runway walks, and tear sheets.
              Structure shoot dates, call times, usage licensing, and day rates with complete clarity.
            </p>

            {/* Workflow Guarantees */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-vizora-gold/20 flex items-center justify-center text-vizora-gold mt-0.5 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Talent &amp; Agent Channel</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Briefs route straight to models, key makeup artists, or their direct representatives without bureaucratic lag.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-vizora-blue/20 flex items-center justify-center text-vizora-blue mt-0.5 shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Clear Call Times &amp; Usage Rights</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Pre-negotiated licensing bounds (Digital, Print Editorial, Worldwide Commercial Buyout) before call sheets are sent.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-vizora-violet/20 flex items-center justify-center text-vizora-violet mt-0.5 shrink-0">
                  <FileCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Zero 30% Agency Fee Deductions</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Vizora does not siphon 20–35% agency commissions from artist earnings. Talent and producers keep true market value.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-vizora-midnight bg-gradient-to-r from-vizora-gold via-vizora-gold-light to-vizora-gold shadow-gold-glow hover:scale-105 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Talent For Your Shoot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Live Sample Booking Card / Estimator */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-vizora-midnight-card border border-vizora-gold/30 p-6 sm:p-8 shadow-2xl overflow-hidden group">
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-vizora-blue via-vizora-gold to-vizora-violet" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vizora-gold block">
                    SAMPLE CASTING BRIEF
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                    Production Scope Estimator
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] uppercase font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Accepting Bookings</span>
                </div>
              </div>

              {/* Discipline Selector */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  1. Talent Discipline Needed
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Runway & Lookbook Models',
                    'Key Makeup Artists (MUA)',
                    'Haute Couture Hair Sculptors',
                    'Wardrobe & Editorial Stylists'
                  ].map((item) => (
                    <button
                      key={item}
                      onClick={() => setSelectedDiscipline(item)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedDiscipline === item
                          ? 'bg-vizora-gold/15 border-vizora-gold text-white font-medium'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tier Selection */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  2. Milestone Scale Bracket
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {tiers.map((tier, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTier(idx)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        activeTier === idx
                          ? 'bg-white/[0.08] border-vizora-gold text-vizora-gold-light font-bold shadow-sm'
                          : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-mono tracking-wider opacity-70">
                        Tier 0{idx + 1}
                      </div>
                      <div className="text-xs font-semibold mt-1">{tier.range}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Scope Summary Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400">Selected Bracket:</span>
                  <span className="font-serif font-bold text-vizora-gold text-sm">
                    {tiers[activeTier].title}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-slate-400">Target Delivery:</span>
                  <span className="text-slate-200 font-mono">{tiers[activeTier].duration}</span>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    Standard Scope Deliverables:
                  </span>
                  {tiers[activeTier].deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="text-vizora-gold text-xs leading-none">✦</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-vizora-midnight bg-gradient-to-r from-vizora-gold to-vizora-gold-light shadow-gold-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Submit Casting Inquiry With This Scope</span>
              </button>

              <p className="text-[10px] text-center text-slate-500 mt-3 font-mono">
                Actual shoot contracts, call sheets, and usage licensing formulated directly with chosen talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
