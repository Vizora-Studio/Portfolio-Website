import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Gem,
  Monitor,
  Crown,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { DemoRouteId, InquiryPreselection } from '../types';

interface HeroProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
  onExploreWork: () => void;
  onOpenDemo: (demoId: DemoRouteId) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreWork,
}) => {
  const [activeEdition, setActiveEdition] = useState<'3d' | 'classic'>('3d');

  const currentLiveUrl =
    activeEdition === '3d'
      ? 'https://khadija-3d-portfolio.vercel.app/'
      : 'https://khadija-portfolio-og.vercel.app/';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-14 overflow-hidden bg-[#F5EBDD]"
    >
      {/* Sunlit Architectural Studio Backdrop (Full-Bleed Reference Scene) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/champagne-arch-studio-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right-bottom opacity-95 scale-[1.01]"
        />
        {/* Soft Sunlit Champagne Ivory Left-to-Right Editorial Veil for Effortless Text Legibility */}
        <div
          className="absolute inset-0 bg-[#F5EBDD]/82 lg:bg-transparent bg-gradient-to-r from-[#F5EBDD] via-[#F5EBDD]/95 lg:via-[#F5EBDD]/72 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F5EBDD]/85 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F5EBDD] via-[#F5EBDD]/60 to-transparent lg:from-transparent lg:via-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Editorial Composition */}
      <div className="relative z-10 max-w-[1380px] mx-auto w-full px-4 sm:px-8 lg:px-12 my-auto pt-4 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline, Copy, CTAs & Bottom Feature Strip (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow Label + Fine Horizontal Champagne Line */}
            <div className="flex items-center gap-4 mb-6 sm:mb-7">
              <span className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.26em] text-[#211C19]">
                BESPOKE DIGITAL EXPERIENCES
              </span>
              <span
                className="w-16 sm:w-24 h-[1px] bg-[#C99A52]"
                aria-hidden="true"
              />
            </div>

            {/* Oversized High-Contrast Editorial Serif Headline */}
            <h1 className="font-serif text-[2.75rem] sm:text-6xl xl:text-[4.35rem] font-normal text-[#211C19] leading-[1.06] tracking-[-0.01em] mb-6 sm:mb-7">
              Your Talent Deserves
              <br />
              a{' '}
              <span className="italic font-normal text-[#A8762E]">
                Website
              </span>{' '}
              as
              <br />
              <span className="text-[#A8762E]">Exceptional</span> as You.
            </h1>

            {/* Supporting Editorial Paragraph */}
            <p className="font-serif text-lg sm:text-[1.35rem] text-[#49382B] max-w-xl leading-[1.52] font-normal mb-8 sm:mb-10">
              We create distinctive portfolio and business websites for models,
              makeup artists, photographers, beauty professionals, and ambitious
              brands.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-12 sm:mb-14">
              <button
                type="button"
                onClick={() => onStartProject()}
                className="group inline-flex items-center justify-center gap-3.5 px-8 sm:px-9 py-4 sm:py-4.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#211C19]"
              >
                <span>LET&apos;S BUILD YOUR WEBSITE</span>
                <ArrowRight className="w-4 h-4 text-[#211C19] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="group inline-flex items-center gap-2 font-serif text-lg sm:text-xl text-[#211C19] hover:text-[#9A6B28] transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52] rounded"
              >
                <span className="border-b border-[#211C19]/60 group-hover:border-[#C99A52] pb-0.5">
                  Explore Our Work
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#211C19] group-hover:text-[#9A6B28] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Bottom 4-Item Feature Strip Separated by Fine Vertical Lines */}
            <div className="w-full max-w-xl pt-4 border-t border-[#C99A52]/30 grid grid-cols-2 sm:grid-cols-4 gap-y-6">
              {/* Item 1: Luxury Designs */}
              <div className="flex flex-col items-center sm:items-center text-center px-2 sm:border-r border-[#C99A52]/35">
                <Gem className="w-6 h-6 text-[#9A6B28] stroke-[1.4] mb-2.5" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#211C19] leading-snug">
                  LUXURY
                  <br />
                  DESIGNS
                </span>
              </div>

              {/* Item 2: 3D & Interactive Experiences */}
              <div className="flex flex-col items-center sm:items-center text-center px-2 sm:border-r border-[#C99A52]/35">
                <Monitor className="w-6 h-6 text-[#9A6B28] stroke-[1.4] mb-2.5" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#211C19] leading-snug">
                  3D &amp; INTERACTIVE
                  <br />
                  EXPERIENCES
                </span>
              </div>

              {/* Item 3: Business Websites */}
              <div className="flex flex-col items-center sm:items-center text-center px-2 sm:border-r border-[#C99A52]/35">
                <Crown className="w-6 h-6 text-[#9A6B28] stroke-[1.4] mb-2.5" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#211C19] leading-snug">
                  BUSINESS
                  <br />
                  WEBSITES
                </span>
              </div>

              {/* Item 4: Industry Focused */}
              <div className="flex flex-col items-center sm:items-center text-center px-2">
                <Sparkles className="w-6 h-6 text-[#9A6B28] stroke-[1.4] mb-2.5" />
                <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-[#211C19] leading-snug">
                  INDUSTRY
                  <br />
                  FOCUSED
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Studio Laptop Showcase featuring Khadija Farhat (6 cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end">
            {/* Edition Switcher Pill Above Laptop */}
            <div className="mb-3 inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#FFF9F0] border border-[#C99A52]/40 shadow-champagne-card">
              <span className="pl-3 pr-1 text-[10px] uppercase tracking-[0.2em] text-[#49382B] font-semibold hidden sm:inline">
                Live Client Showcase:
              </span>
              <button
                type="button"
                onClick={() => setActiveEdition('3d')}
                className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] transition-all ${
                  activeEdition === '3d'
                    ? 'bg-champagne-gold-pill text-[#211C19]'
                    : 'text-[#49382B] hover:text-[#211C19]'
                }`}
              >
                Khadija 3D &amp; Motion
              </button>
              <button
                type="button"
                onClick={() => setActiveEdition('classic')}
                className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] transition-all ${
                  activeEdition === 'classic'
                    ? 'bg-champagne-gold-pill text-[#211C19]'
                    : 'text-[#49382B] hover:text-[#211C19]'
                }`}
              >
                Khadija Simple Editorial
              </button>
            </div>

            {/* Studio Laptop Composition */}
            <div className="relative w-full max-w-[630px]">

              {/* Realistic Studio Laptop Display Frame */}
              <div className="relative z-20 mx-auto w-full">
                {/* Laptop Lid / Bezel */}
                <div className="relative rounded-t-[20px] bg-[#141210] p-2.5 sm:p-3.5 border-[2px] border-[#3A322C] shadow-[0_32px_70px_-15px_rgba(33,28,25,0.55)]">
                  {/* Camera Notch Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2E2925] mx-auto mb-1.5" />

                  {/* Inner Screen Display */}
                  <div className="relative aspect-[16/10] rounded-[10px] overflow-hidden bg-[#0F0C0A] border border-[#C99A52]/30 group">
                    {/* Background Portrait of Khadija Farhat */}
                    <img
                      src={
                        activeEdition === '3d'
                          ? '/images/khadija/khadija-bridal-red-veil.jpg'
                          : '/images/khadija/khadija-og-website-preview.jpg'
                      }
                      alt="Khadija Farhat Portfolio Website Shown Inside Studio Laptop"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Warm Couture Vignette Overlay Matching Reference Laptop Screen */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-[#120E0B]/75 via-[#18120E]/45 to-[#120E0B]/88"
                      aria-hidden="true"
                    />

                    {/* Simulated Portfolio Website Top Nav Inside Laptop */}
                    <div className="absolute top-0 inset-x-0 px-4 sm:px-6 py-3 flex items-center justify-between text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#F5EBDD]/90 border-b border-[#C99A52]/15">
                      <span className="font-serif font-semibold tracking-[0.24em] text-xs sm:text-sm text-[#FFF9F0]">
                        KHADIJA
                      </span>
                      <div className="hidden sm:flex items-center gap-3.5 text-[8px] tracking-[0.18em]">
                        <span className="text-[#E3BF82] border-b border-[#C99A52] pb-0.5">
                          HOME
                        </span>
                        <span>PORTFOLIO</span>
                        <span>GALLERY</span>
                        <span>ABOUT</span>
                        <span>CONTACT</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full border border-[#C99A52]/60 text-[#E3BF82] text-[8px] tracking-[0.16em]">
                        BOOKING ★
                      </span>
                    </div>

                    {/* Center Portfolio Title & Subtitle Inside Laptop Screen */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-6">
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-[#E3BF82]/90 mb-1.5">
                        {activeEdition === '3d'
                          ? '3D SPATIAL & HAUTE COUTURE PORTFOLIO'
                          : 'SIGNATURE EDITORIAL MODEL PORTFOLIO'}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-4xl md:text-[2.65rem] tracking-[0.18em] text-[#FFF9F0] font-normal leading-none">
                        KHADIJA
                      </h2>
                      <p className="font-serif text-xl sm:text-3xl md:text-[2.2rem] tracking-[0.22em] text-[#D8AD64] font-normal mt-1 mb-3">
                        FARHAT
                      </p>
                      <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.24em] text-[#F5EBDD]/90 mb-2">
                        MODEL &nbsp;•&nbsp; HAUTE COUTURE &nbsp;•&nbsp; EDITORIAL &nbsp;•&nbsp; MOTION
                      </p>
                      <p className="font-serif italic text-[11px] sm:text-xs text-[#E7D2B8] max-w-xs leading-relaxed mb-4 hidden sm:block">
                        “Where elegance meets storytelling, creating visual experiences that leave a lasting impression.”
                      </p>
                      <a
                        href={currentLiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16120E]/85 hover:bg-[#C99A52] text-[#F5EBDD] hover:text-[#211C19] border border-[#C99A52]/70 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300"
                      >
                        <span>VIEW PORTFOLIO</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Realistic Brushed Silver/Warm Champagne Laptop Base & Trackpad Notch */}
                <div className="relative mx-auto w-[104%] -left-[2%] h-3.5 sm:h-4 rounded-b-xl bg-gradient-to-r from-[#C8BEB2] via-[#EFEAE2] to-[#B8ADA0] border-t border-white/60 shadow-[0_18px_35px_-6px_rgba(33,28,25,0.45)] flex items-start justify-center">
                  <div className="w-20 sm:w-28 h-1.5 rounded-b-md bg-[#A69B8E]" />
                </div>
              </div>

              {/* Direct Live Client Website Links Bar Below the Travertine Plinth */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-[#FFF9F0]/90 backdrop-blur-md border border-[#C99A52]/35 shadow-champagne-card">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C99A52]" />
                  <span className="text-[11px] font-sans font-semibold text-[#211C19]">
                    Live Client Work for <span className="font-serif italic text-sm">Khadija Farhat</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://khadija-portfolio-og.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#49382B] hover:text-[#9A6B28] underline underline-offset-4"
                  >
                    <span>Simple Portfolio</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[#C99A52]">|</span>
                  <a
                    href="https://khadija-3d-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#49382B] hover:text-[#9A6B28] underline underline-offset-4"
                  >
                    <span>3D &amp; Motion Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
