import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { InquiryPreselection } from '../types';

interface FinalCTAProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
  onExploreWork: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onStartProject,
  onExploreWork,
}) => {
  return (
    <section
      id="final-cta"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 text-[#211C19] overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto relative z-10">
        <div className="relative rounded-[36px] overflow-hidden border border-[#C99A52]/45 shadow-champagne-elevated bg-[#FFF9F0]">
          {/* Sunlit Architectural Backdrop */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <img
              src="/images/champagne-arch-studio-bg.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center opacity-40"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#FFF9F0]/95 via-[#FFF9F0]/88 to-[#F5EBDD]/80"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 p-10 sm:p-16 lg:p-20 max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-[#9A6B28]">
                08 &nbsp;/&nbsp; FINAL PROJECT INVITATION
              </span>
              <span
                className="w-16 h-[1px] bg-[#C99A52]"
                aria-hidden="true"
              />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#211C19] leading-[1.08] mb-6">
              Have a Vision?{' '}
              <span className="italic text-[#A8762E]">
                Let&apos;s Give It a Place to Live.
              </span>
            </h2>

            <p className="font-serif text-lg sm:text-2xl text-[#49382B] leading-relaxed mb-10 max-w-2xl">
              Let&apos;s craft a custom portfolio, immersive 3D showcase, or
              business website that reflects your talent and welcomes your next
              opportunity.
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <button
                type="button"
                onClick={() => onStartProject()}
                className="group inline-flex items-center justify-center gap-3.5 px-9 py-4 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#211C19]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#211C19] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="group inline-flex items-center gap-2 font-serif text-lg sm:text-xl text-[#211C19] hover:text-[#9A6B28] transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52] rounded"
              >
                <span className="border-b border-[#211C19]/60 group-hover:border-[#C99A52] pb-0.5">
                  Explore Our Work
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#9A6B28] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
