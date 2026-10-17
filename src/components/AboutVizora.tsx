import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { InquiryPreselection } from '../types';

interface AboutVizoraProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
}

export const AboutVizora: React.FC<AboutVizoraProps> = ({ onStartProject }) => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#F5EBDD] text-[#211C19] border-t border-[#C99A52]/25 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Studio Philosophy & Narrative (6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-[#9A6B28]">
                07 &nbsp;/&nbsp; STUDIO INTRODUCTION
              </span>
              <span
                className="w-16 h-[1px] bg-[#C99A52]"
                aria-hidden="true"
              />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#211C19] leading-[1.08] mb-6">
              Independent Thinking.{' '}
              <span className="italic text-[#A8762E]">Intentional Design.</span>
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[#49382B] leading-relaxed mb-5">
              Vizora transforms talent and business ideas into distinctive
              digital experiences.
            </p>

            <p className="text-sm sm:text-base text-[#49382B] leading-relaxed mb-8">
              Founded as a dedicated creative web design and development studio,
              Vizora brings the visual sensitivity of a fashion and art
              direction house to the modern web. Whether we are crafting a
              simple editorial portfolio, an immersive 3D WebGL showcase, or a
              complete salon and small-business website, every decision is made
              with care, clarity, and artistic restraint.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
              {[
                'Bespoke Editorial Art Direction',
                'Interactive 3D & Motion Capabilities',
                'Tailored Industry Architecture',
                'Responsive Mobile-First Engineering',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 px-4 py-3.5 rounded-2xl bg-[#FFF9F0] border border-[#C99A52]/35 text-xs sm:text-sm font-medium text-[#211C19]"
                >
                  <Check className="w-4 h-4 text-[#9A6B28] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onStartProject()}
              className="group inline-flex items-center gap-3.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill transition-all duration-300"
            >
              <span>Discover Vizora</span>
              <ArrowRight className="w-4 h-4 text-[#211C19] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Architectural Studio Plaque & Official Brand Mark (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] luxury-card-surface luxury-double-frame p-7 sm:p-10 border border-[#C99A52]/45">
              {/* Official Vizora Logo Presentation Frame */}
              <div className="rounded-2xl bg-[#FFFDF9] p-6 sm:p-8 border border-[#C99A52]/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] mb-6 flex flex-col items-center text-center relative overflow-hidden">
                <div className="text-[9.5px] font-sans font-bold uppercase tracking-[0.28em] text-[#9A6B28] mb-3">
                  ✦ &nbsp; OFFICIAL STUDIO ATELIER CREST &nbsp; ✦
                </div>
                <img
                  src="/assets/vizora-logo-original.jpeg"
                  alt="Official Vizora Brand Logo"
                  className="w-full max-w-[290px] h-auto object-contain mx-auto mix-blend-multiply"
                />
              </div>

              {/* Studio Editorial Photography Pair */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl overflow-hidden border border-[#C99A52]/40 h-44 shadow-sm">
                  <img
                    src="/images/fashion-stylist.jpg"
                    alt="Creative styling and lookbook direction at Vizora"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#C99A52]/40 h-44 shadow-sm">
                  <img
                    src="/images/small-business.jpg"
                    alt="Architectural studio and business design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Studio Identity & Selective Brand Accent Note */}
              <div className="p-5 rounded-2xl bg-[#F5EBDD]/90 border border-[#C99A52]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#9A6B28] block mb-1">
                    VIZORA STUDIO SIGNATURE
                  </span>
                  <p className="font-serif italic text-lg text-[#211C19]">
                    “Your Vision. Your Website. Your Next Opportunity.”
                  </p>
                </div>

                {/* Discreet Official Brand Color Signature Dots */}
                <div
                  className="flex items-center gap-2 shrink-0"
                  title="Official Vizora Brand Accents"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-[#C99A52] border border-[#211C19]/20" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#174BFF] border border-[#211C19]/20" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#7027E8] border border-[#211C19]/20" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FFD629] border border-[#211C19]/20" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#08080D] border border-[#211C19]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
