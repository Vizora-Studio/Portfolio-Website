import React from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { WHO_WE_BUILD_FOR } from '../data/vizoraData';
import { DemoRouteId, InquiryPreselection } from '../types';

interface WhoWeBuildForProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
  onOpenDemo: (demoId: DemoRouteId) => void;
}

export const WhoWeBuildFor: React.FC<WhoWeBuildForProps> = ({
  onStartProject,
  onOpenDemo,
}) => {
  return (
    <section
      id="who-we-help"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 text-[#211C19] overflow-hidden"
    >

      <div className="max-w-[1380px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 pb-8 border-b border-[#C99A52]/30">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-[#9A6B28]">
                04 &nbsp;/&nbsp; INDUSTRY SHOWCASE
              </span>
              <span
                className="w-16 h-[1px] bg-[#C99A52]"
                aria-hidden="true"
              />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#211C19] leading-[1.08] mb-4">
              Made for the People with{' '}
              <span className="italic text-[#A8762E]">Something to Show.</span>
            </h2>

            <p className="font-serif text-lg sm:text-2xl text-[#49382B] leading-relaxed">
              A visual directory of the creative disciplines, beauty studios,
              and independent businesses we art-direct and build for.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onStartProject()}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill transition-all duration-300"
            >
              <span>Let&apos;s Create Yours</span>
              <ArrowRight className="w-4 h-4 text-[#211C19] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 6 Editorial Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {WHO_WE_BUILD_FOR.map((category, idx) => {
            // Apply soft blush pink editorial surface on selected beauty/fashion cards
            const isBlushCard =
              category.id === 'makeup-artists' ||
              category.id === 'salons-beauty-studios';
            const isModelCard = category.id === 'models-fashion';

            return (
              <article
                key={category.id}
                className={`group rounded-[28px] overflow-hidden border transition-all duration-500 flex flex-col justify-between shadow-champagne-card hover:shadow-champagne-elevated ${isBlushCard ? 'luxury-glass-card-blush' : 'luxury-glass-card'} luxury-double-frame`}
              >
                {/* Top Editorial Image Frame */}
                <div>
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#211C19]">
                    <img
                      src={category.image}
                      alt={category.imageAlt}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#211C19]/75 via-transparent to-transparent" />

                    {/* Top Index Pill */}
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#FFF9F0] border border-[#C99A52]/50 shadow-sm">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#211C19]">
                        0{idx + 1} &nbsp;·&nbsp; {category.title.split('&')[0].trim()}
                      </span>
                    </div>

                    {/* Subtitle Overlay on Image Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 px-3.5 py-2 rounded-xl bg-[#FFF9F0] border border-[#C99A52]/45 shadow-sm">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.14em] text-[#9A6B28] block">
                        {category.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Narrative Body */}
                  <div className="p-7 sm:p-8 pb-5">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#211C19] mb-3 group-hover:text-[#9A6B28] transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-sm text-[#49382B] leading-relaxed mb-5">
                      {category.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {category.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs text-[#211C19] font-medium"
                        >
                          <Check className="w-3.5 h-3.5 text-[#9A6B28] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer CTAs */}
                <div className="px-7 sm:px-8 pb-7 pt-4 border-t border-[#C99A52]/25 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        onStartProject({
                          profession: category.profession,
                          websiteType: category.websiteType,
                          designStyle: category.designStyle,
                          projectContext: `Inquiry for ${category.title}`,
                        })
                      }
                      className="group/btn inline-flex items-center gap-1.5 font-serif text-base sm:text-lg font-medium text-[#211C19] hover:text-[#9A6B28] transition-colors whitespace-nowrap shrink-0"
                    >
                      <span className="border-b border-[#211C19]/60 group-hover/btn:border-[#C99A52] pb-0.5">
                        Let&apos;s Create Yours
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#9A6B28] transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    {category.demoRoute && (
                      <button
                        type="button"
                        onClick={() => onOpenDemo(category.demoRoute!)}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#FFF9F0] hover:bg-[#C99A52]/25 border border-[#C99A52]/40 text-[10px] font-sans font-bold uppercase tracking-[0.14em] text-[#49382B] hover:text-[#211C19] transition-colors"
                      >
                        <span>{category.demoLabel || 'Explore Demo'}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#9A6B28]" />
                      </button>
                    )}
                  </div>

                  {/* Direct Live Client Proof Links for Models & Fashion Talent */}
                  {isModelCard && (
                    <div className="pt-2.5 border-t border-[#C99A52]/20 flex items-center justify-between text-[11px] text-[#49382B]">
                      <span className="font-serif italic">Live Client Editions:</span>
                      <div className="flex items-center gap-2.5 font-semibold">
                        <a
                          href="https://khadija-portfolio-og.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#9A6B28] hover:underline inline-flex items-center gap-0.5"
                        >
                          <span>Khadija Simple</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                        <span>·</span>
                        <a
                          href="https://khadija-3d-portfolio.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#9A6B28] hover:underline inline-flex items-center gap-0.5"
                        >
                          <span>Khadija 3D</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
