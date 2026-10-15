import React, { useState } from 'react';
import { Sparkles, Layers, Compass, Briefcase, Check, ArrowRight } from 'lucide-react';
import { PLATFORM_PILLARS } from '../data/portfolioData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [Layers, Compass, Briefcase];

  return (
    <section
      id="how-it-works"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-vizora-midnight text-white overflow-hidden border-t border-white/[0.06] scroll-mt-16"
    >
      {/* Background Orbital Flow Line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-vizora-gold/30 to-transparent -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vizora-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vizora-gold/10 border border-vizora-gold/30 text-[11px] font-semibold uppercase tracking-[0.25em] text-vizora-gold-light mb-4">
            <span>The Platform Journey</span>
            <Sparkles className="w-3 h-3 text-vizora-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            How Vizora Works
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            A frictionless three-stage architecture engineered to turn creative vision into
            sustainable, career-defining commissions.
          </p>
        </div>

        {/* Interactive Step Switcher Tabs (Mobile & Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PLATFORM_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx];
            const isSelected = activeStep === idx;
            return (
              <div
                key={pillar.step}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-vizora-midnight-elevated to-vizora-midnight-card border-vizora-gold/50 shadow-gold-glow scale-[1.02]'
                    : 'bg-vizora-midnight-card/60 border-white/[0.08] hover:border-white/20 hover:bg-vizora-midnight-card'
                }`}
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-serif text-2xl font-bold tracking-wider ${
                        isSelected ? 'text-vizora-gold' : 'text-slate-500'
                      }`}
                    >
                      {pillar.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-vizora-gold text-vizora-midnight'
                          : 'bg-white/[0.05] text-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-vizora-gold-light mb-3 font-mono">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Micro Features List */}
                <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                  {pillar.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-vizora-gold/20 flex items-center justify-center text-vizora-gold">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Glow indicator line */}
                {isSelected && (
                  <div className="absolute -bottom-[1px] inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-vizora-gold to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Deep Dive Showcase Panel for Active Step */}
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-widest text-vizora-gold font-semibold mb-2 block font-mono">
                STAGE {PLATFORM_PILLARS[activeStep].step} IN ACTION
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                {PLATFORM_PILLARS[activeStep].title}: {PLATFORM_PILLARS[activeStep].subtitle}
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
                Whether you are an established studio veteran or an emergent auteur, Vizora
                removes friction at every milestone. No complex coding required to produce
                an editorial showcase, and no ambiguity when negotiating client scope.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-vizora-midnight bg-gradient-to-r from-vizora-gold to-vizora-gold-light shadow-gold-glow hover:scale-105 transition-transform"
                >
                  <span>Experience Step {PLATFORM_PILLARS[activeStep].step}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Interactive Graphic */}
            <div className="lg:col-span-5">
              <div className="rounded-xl p-5 bg-vizora-midnight-card border border-vizora-gold/30 shadow-2xl relative">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-slate-400 text-[10px] ml-2">vizora.space/showcase</span>
                  </div>
                  <span className="text-vizora-gold-light font-mono text-[10px]">LIVE</span>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-white/5 rounded w-full" />
                  <div className="h-3 bg-white/5 rounded w-5/6" />

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="h-20 rounded-lg bg-vizora-blue/20 border border-vizora-blue/30 flex items-center justify-center text-xs text-blue-200">
                      3D Model Viewer
                    </div>
                    <div className="h-20 rounded-lg bg-vizora-violet/20 border border-vizora-violet/30 flex items-center justify-center text-xs text-purple-200">
                      Editorial Case Study
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-300">
                    <span className="text-[11px] text-slate-400">Direct Opportunity Channel</span>
                    <span className="text-vizora-gold font-semibold">Active &amp; Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
