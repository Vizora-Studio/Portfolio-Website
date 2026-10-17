import React from 'react';
import { ArrowRight, Layout } from 'lucide-react';
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
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-vizora-black text-white overflow-hidden border-t border-white/10"
    >
      {/* Royal Blue & Purple Lighting with Yellow Accents */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[460px] h-[460px] bg-vizora-blue/25 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[460px] h-[460px] bg-vizora-purple/25 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-vizora-black-elevated via-[#111122] to-vizora-black-elevated border border-white/15 shadow-editorial-dark text-center relative overflow-hidden">
          {/* Top Decorative Yellow Line */}
          <div
            className="w-24 h-1 bg-vizora-yellow mx-auto rounded-full mb-8"
            aria-hidden="true"
          />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 mb-6">
            <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-vizora-yellow">
              Custom Portfolio &amp; Business Websites
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-3xl mx-auto">
            Your Next Chapter Deserves a{' '}
            <span className="text-blue-purple-gradient">Beautiful Website.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10">
            Let&apos;s create a digital presence that reflects your talent, communicates your value,
            and gives people a reason to connect with you.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onStartProject()}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white bg-vizora-blue hover:bg-vizora-blue-light shadow-blue-glow transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
            >
              <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-vizora-yellow transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onExploreWork}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-vizora-purple-light transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
            >
              <Layout className="w-4 h-4 text-vizora-yellow" />
              <span>Explore Our Work</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
