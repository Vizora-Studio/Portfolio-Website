import React from 'react';
import {
  Sparkles,
  Palette,
  LayoutGrid,
  FileText,
  Smartphone,
  CalendarCheck,
  Wand2,
  MessageSquare,
} from 'lucide-react';
import { WHY_VIZORA_PILLARS } from '../data/vizoraData';

export const WhyVizora: React.FC = () => {
  const icons = [
    Sparkles,
    Palette,
    LayoutGrid,
    FileText,
    Smartphone,
    CalendarCheck,
    Wand2,
    MessageSquare,
  ];

  return (
    <section
      id="why-vizora"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-vizora-black text-white editorial-grid-lines overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] bg-gradient-to-tr from-vizora-blue/15 via-vizora-purple/15 to-transparent rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 mb-5">
            <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-vizora-yellow">
              Why Vizora
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-5">
            Thoughtful Design.{' '}
            <span className="text-blue-purple-gradient">Purposeful Websites.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every design decision we make serves a clear purpose: presenting your work with
            distinction and making it effortless for clients, agencies, or customers to inquire.
          </p>
        </div>

        {/* 8 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_VIZORA_PILLARS.map((pillar, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={pillar.title}
                className="group p-6 sm:p-7 rounded-3xl bg-vizora-black-elevated/90 border border-white/10 hover:border-vizora-blue/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-vizora-blue/15 border border-vizora-blue/35 flex items-center justify-center group-hover:bg-vizora-blue transition-colors">
                      <IconComponent className="w-5 h-5 text-vizora-yellow" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-full bg-white/[0.04]">
                      {pillar.accentTag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-vizora-yellow transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.07] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>VIZORA STANDARD</span>
                  <span className="text-vizora-blue-light">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
