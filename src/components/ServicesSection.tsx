import React from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/vizoraData';
import { DemoRouteId, InquiryPreselection } from '../types';

interface ServicesSectionProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
  onOpenDemo: (demoId: DemoRouteId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onStartProject,
  onOpenDemo,
}) => {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#F5EBDD] text-[#211C19] border-t border-[#C99A52]/25 overflow-hidden"
    >
      {/* Subtle Sunlit Ambient Lighting */}
      <div
        className="absolute top-1/3 -left-32 w-[520px] h-[520px] bg-[#FFF9F0]/80 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 -right-32 w-[500px] h-[500px] bg-[#E7D2B8]/50 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 pb-8 border-b border-[#C99A52]/30">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-[#9A6B28]">
                03 &nbsp;/&nbsp; CRAFTED DIGITAL OFFERINGS
              </span>
              <span
                className="w-16 h-[1px] bg-[#C99A52]"
                aria-hidden="true"
              />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#211C19] leading-[1.08] mb-4">
              Thoughtfully Designed.{' '}
              <span className="italic text-[#A8762E]">Beautifully Built.</span>
            </h2>

            <p className="font-serif text-lg sm:text-2xl text-[#49382B] leading-relaxed">
              From your first portfolio to a complete business presence, we
              create websites tailored to your ambitions.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onStartProject()}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill transition-all duration-300"
            >
              <span>Find Your Perfect Website</span>
              <ArrowRight className="w-4 h-4 text-[#211C19] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 4 Editorial Service Presentations */}
        <div className="space-y-12 sm:space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;
            const letterLabel = ['A', 'B', 'C', 'D'][index] || service.number;
            const isLiveKhadija =
              service.id === 'luxury-portfolio-websites' ||
              service.id === 'immersive-3d-websites';
            const liveHref =
              service.id === 'immersive-3d-websites'
                ? 'https://khadija-3d-portfolio.vercel.app/'
                : 'https://khadija-portfolio-og.vercel.app/';

            return (
              <article
                key={service.id}
                className="group relative rounded-[32px] bg-[#FFF9F0] border border-[#C99A52]/35 shadow-champagne-card hover:shadow-champagne-elevated transition-all duration-500 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Visual Showcase Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 relative min-h-[320px] sm:min-h-[380px] overflow-hidden bg-[#211C19] ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#211C19]/80 via-[#211C19]/15 to-transparent" />

                    {/* Top Architectural Index Pill */}
                    <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#FFF9F0] border border-[#C99A52]/50 shadow-sm">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#211C19]">
                        OFFERING {letterLabel} &nbsp;·&nbsp; {service.number}
                      </span>
                    </div>

                    {/* Bottom Live Example Link Bar */}
                    <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-[#FFF9F0] border border-[#C99A52]/50 shadow-md flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="block text-[9px] uppercase tracking-[0.2em] text-[#9A6B28] font-bold">
                          {isLiveKhadija
                            ? 'Featured Live Client Example'
                            : 'Studio Concept Showcase'}
                        </span>
                        <span className="font-mono text-xs text-[#211C19] truncate block">
                          {service.previewUrlLabel}
                        </span>
                      </div>

                      {isLiveKhadija ? (
                        <a
                          href={liveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-champagne-gold-pill text-[10px] font-bold uppercase tracking-[0.14em] text-[#211C19] shrink-0"
                        >
                          <span>View Live</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onOpenDemo(service.demoRoute)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#211C19] hover:bg-[#49382B] text-[#FFF9F0] text-[10px] font-bold uppercase tracking-[0.14em] transition-colors shrink-0"
                        >
                          <span>Preview Concept</span>
                          <ArrowUpRight className="w-3 h-3 text-[#E3BF82]" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Editorial Narrative Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-[#C99A52]/25">
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-3xl sm:text-4xl italic text-[#A8762E]">
                            {letterLabel}.
                          </span>
                          <span className="text-[11px] uppercase tracking-[0.22em] text-[#49382B] font-bold">
                            BESPOKE STUDIO OFFERING
                          </span>
                        </div>
                        <span className="px-3.5 py-1 rounded-full bg-[#F5EBDD] border border-[#C99A52]/35 text-[11px] font-medium text-[#49382B]">
                          Tailored Scope &amp; Direction
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#211C19] mb-2.5">
                        {service.title}
                      </h3>

                      <p className="font-serif italic text-base sm:text-lg text-[#9A6B28] mb-4">
                        {service.audience}
                      </p>

                      <p className="text-sm sm:text-base text-[#49382B] leading-relaxed mb-7">
                        {service.summary}
                      </p>

                      {/* Key Highlights Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2.5 px-4 py-3 rounded-2xl bg-[#F5EBDD]/70 border border-[#C99A52]/25 text-xs sm:text-sm text-[#211C19]"
                          >
                            <Check className="w-4 h-4 text-[#9A6B28] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="pt-5 border-t border-[#C99A52]/25 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          onStartProject({
                            websiteType: service.websiteType,
                            designStyle: service.designStyle,
                            projectContext: `Interested in ${service.title}`,
                          })
                        }
                        className="group/btn inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] bg-champagne-gold-pill transition-all duration-300"
                      >
                        <span>Find Your Perfect Website</span>
                        <ArrowRight className="w-4 h-4 text-[#211C19] transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          onStartProject({
                            websiteType: service.websiteType,
                            projectContext: `Requesting scope guidance for ${service.title}`,
                          })
                        }
                        className="font-serif text-base sm:text-lg text-[#49382B] hover:text-[#211C19] border-b border-[#49382B]/40 hover:border-[#C99A52] pb-0.5 transition-colors"
                      >
                        Inquire About This Service ↗
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
