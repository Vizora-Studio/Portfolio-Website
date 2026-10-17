import React from 'react';
import { WHY_VIZORA_PILLARS } from '../data/vizoraData';

export const WhyVizora: React.FC = () => {
  return (
    <section
      id="why-vizora"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#F5EBDD] text-[#211C19] border-t border-[#C99A52]/25 overflow-hidden"
    >
      {/* Warm Sunlit Architectural Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] bg-[#FFF9F0]/75 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 sm:mb-20 pb-8 border-b border-[#C99A52]/30">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-[#9A6B28]">
                05 &nbsp;/&nbsp; THE STUDIO DIFFERENCE
              </span>
              <span
                className="w-16 h-[1px] bg-[#C99A52]"
                aria-hidden="true"
              />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#211C19] leading-[1.08]">
              Your Work Deserves More{' '}
              <span className="italic text-[#A8762E]">Than a Template.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="font-serif text-lg sm:text-xl text-[#49382B] leading-relaxed">
              Social feeds scroll past in seconds and generic templates flatten
              your individuality. We art-direct websites that give your talent a
              permanent, unmistakable home.
            </p>
          </div>
        </div>

        {/* 4 Core Architectural Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {WHY_VIZORA_PILLARS.map((pillar, idx) => (
            <article
              key={pillar.title}
              className="group relative p-8 sm:p-10 rounded-[28px] bg-[#FFF9F0] border border-[#C99A52]/35 shadow-champagne-card hover:shadow-champagne-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-[#C99A52]/25">
                  <span className="font-serif text-3xl sm:text-4xl italic text-[#A8762E]">
                    0{idx + 1}.
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-[#F5EBDD] border border-[#C99A52]/30 text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-[#49382B]">
                    {pillar.accentTag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#211C19] mb-3.5 group-hover:text-[#9A6B28] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-[#49382B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C99A52]/20 flex items-center justify-between text-[10px] font-sans uppercase tracking-[0.22em] text-[#9A6B28] font-semibold">
                <span>VIZORA ARCHITECTURAL STANDARD</span>
                <span>0{idx + 1} / 04</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
