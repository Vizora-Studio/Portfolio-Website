import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PROCESS_STAGES } from '../data/vizoraData';
import { InquiryPreselection } from '../types';

interface ProcessSectionProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-vizora-paper text-vizora-black editorial-grid-lines-light overflow-hidden border-t border-vizora-paper-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vizora-blue/10 border border-vizora-blue/25 mb-5">
              <span className="w-2 h-2 rounded-full bg-vizora-blue" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vizora-blue">
                Our Process
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-vizora-black leading-[1.08]">
              From Your First Idea to{' '}
              <span className="text-blue-purple-gradient">Your Finished Website.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-vizora-paper-muted max-w-md leading-relaxed">
            A transparent, collaborative workflow designed to make creating your portfolio or
            business website clear and approachable from day one.
          </p>
        </div>

        {/* 4-Stage Editorial Numbered Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Connecting Horizontal Line on Desktop */}
          <div
            className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-gradient-to-r from-vizora-blue via-vizora-purple to-vizora-yellow pointer-events-none"
            aria-hidden="true"
          />

          {PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.number}
              className="relative z-10 rounded-3xl bg-white border border-vizora-paper-border hover:border-vizora-blue transition-all duration-300 p-7 shadow-editorial-light flex flex-col justify-between"
            >
              <div>
                {/* Stage Number Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-serif text-xl font-bold shadow-md ${
                      idx % 2 === 0
                        ? 'bg-vizora-blue text-white'
                        : 'bg-vizora-black text-vizora-yellow'
                    }`}
                  >
                    {stage.number}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-400">
                    STAGE {stage.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-vizora-black mb-3">
                  {stage.number} — {stage.title}
                </h3>

                <p className="text-sm text-vizora-paper-muted leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              <div className="pt-4 border-t border-vizora-paper-border">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">
                  Focus Areas
                </span>
                <ul className="space-y-1.5">
                  {stage.deliverableFocus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-vizora-black font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-vizora-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-14 pt-8 border-t border-vizora-paper-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-vizora-paper-muted">
            Ready to begin with <strong className="text-vizora-black">01 — Discover</strong>? Tell
            us about your profession and website goals.
          </p>
          <button
            type="button"
            onClick={() => onStartProject()}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] text-white bg-vizora-blue hover:bg-vizora-blue-deep shadow-blue-glow transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-vizora-yellow" />
          </button>
        </div>
      </div>
    </section>
  );
};
