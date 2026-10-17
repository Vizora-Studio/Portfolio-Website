import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { InquiryPreselection } from '../types';

interface AboutVizoraProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
}

export const AboutVizora: React.FC<AboutVizoraProps> = ({ onStartProject }) => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-vizora-paper text-vizora-black editorial-grid-lines-light overflow-hidden border-t border-vizora-paper-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Client-Focused Studio Story (6 cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vizora-purple/10 border border-vizora-purple/25 mb-5">
              <span className="w-2 h-2 rounded-full bg-vizora-purple" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vizora-purple">
                About Vizora
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-vizora-black leading-[1.1] mb-6">
              Built for People With{' '}
              <span className="text-blue-purple-gradient">Something Worth Showing.</span>
            </h2>

            <p className="text-base sm:text-lg text-vizora-paper-muted leading-relaxed mb-5">
              Vizora is a creative web design startup founded on a simple belief: talented people
              and ambitious businesses deserve a digital presence that genuinely reflects the
              quality of their work.
            </p>

            <p className="text-base text-vizora-paper-muted leading-relaxed mb-8">
              We combine editorial art direction, modern web development, visual storytelling, and
              practical functionality to create custom websites that are both beautiful to explore
              and useful for winning real inquiries. Instead of forcing your work into a generic
              template, we shape every layout around your profession, your visual identity, and the
              clients you want to reach.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
              {[
                'Custom Portfolio & Business Websites',
                'Editorial Visual Storytelling',
                'Mobile & Social-Media Ready Layouts',
                'Clear Inquiry & Booking Pathways',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-vizora-paper-border text-xs sm:text-sm font-semibold text-vizora-black"
                >
                  <CheckCircle2 className="w-4 h-4 text-vizora-blue shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onStartProject()}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white bg-vizora-blue hover:bg-vizora-blue-deep shadow-blue-glow transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
              <span>Start Your Website With Vizora</span>
              <ArrowRight className="w-4 h-4 text-vizora-yellow transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Editorial Composition Featuring the Actual Vizora Logo & Supporting Imagery (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-vizora-black p-6 sm:p-8 text-white shadow-editorial-light border border-vizora-black/15">
              {/* Top Actual Vizora Logo Showcase Plaque */}
              <div className="rounded-2xl bg-[#FAF9F5] p-6 sm:p-8 border-2 border-vizora-blue/30 shadow-lg mb-6 flex flex-col items-center text-center">
                <img
                  src="/assets/vizora-logo-original.jpeg"
                  alt="Official Vizora Brand Logo"
                  className="w-full max-w-[340px] h-auto object-contain mx-auto"
                />
              </div>

              {/* Supporting Editorial Studio Visuals */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl overflow-hidden border border-white/15 h-40">
                  <img
                    src="/images/fashion-stylist.jpg"
                    alt="Creative styling and lookbook direction"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/15 h-40">
                  <img
                    src="/images/small-business.jpg"
                    alt="Modern small business and studio space"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Brand Statement Strip */}
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-vizora-yellow block">
                    CORE POSITIONING
                  </span>
                  <p className="font-serif italic text-sm sm:text-base text-white">
                    “Vizora transforms talent and business ideas into distinctive digital
                    experiences.”
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-vizora-blue text-[10px] font-bold uppercase tracking-widest text-white shrink-0">
                  Web Design Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
