import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PROCESS_STAGES } from '../data/vizoraData';
import { InquiryPreselection } from '../types';

interface ProcessSectionProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onStartProject,
}) => {
  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 text-[#211C19] overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 pb-8 border-b border-[#C99A52]/30">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-[#9A6B28]">
                06 &nbsp;/&nbsp; OUR PROCESS
              </span>
              <span
                className="w-16 h-[1px] bg-[#C99A52]"
                aria-hidden="true"
              />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#211C19] leading-[1.08]">
              From Your Vision to{' '}
              <span className="italic text-[#A8762E]">
                Your Digital Presence.
              </span>
            </h2>
          </div>

          <p className="font-serif text-lg sm:text-xl text-[#49382B] max-w-md leading-relaxed">
            A calm, clear, and collaborative four-stage studio workflow from
            first conversation to launch.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline on Desktop / Vertical Sequence on Mobile */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Fine Horizontal Connecting Line on Desktop */}
          <div
            className="hidden lg:block absolute top-11 left-12 right-12 h-[1px] bg-[#C99A52]/50 pointer-events-none"
            aria-hidden="true"
          />

          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.number}
              className="relative z-10 rounded-[28px] luxury-card-surface luxury-double-frame border border-[#C99A52]/40 p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number Emblem */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFF9F0] border border-[#C99A52] flex items-center justify-center font-serif text-xl text-[#9A6B28] shadow-sm">
                    {stage.number}
                  </div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#9A6B28]">
                    STEP {stage.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#211C19] mb-2.5">
                  {stage.number} — {stage.title}
                </h3>

                <p className="font-serif italic text-base text-[#49382B] leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              <div className="pt-5 border-t border-[#C99A52]/25">
                <span className="block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#9A6B28] mb-3">
                  Studio Deliverables
                </span>
                <ul className="space-y-2">
                  {stage.deliverableFocus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-[#211C19] font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-[#9A6B28] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Collaborative Invitation */}
        <div className="mt-14 pt-8 border-t border-[#C99A52]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-serif text-lg text-[#49382B]">
            Ready to begin with{' '}
            <strong className="font-medium text-[#211C19]">
              01 — Discover
            </strong>
            ? Share your vision with our studio.
          </p>
          <button
            type="button"
            onClick={() => onStartProject()}
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-[#211C19] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
