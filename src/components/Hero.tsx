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
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden"
    >
      {/* Sunlit Architectural Studio Backdrop (Photorealistic Reference Scene) */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%)',
        }}
      >
        <img
          src="/images/champagne-luxury-hero-scene.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-left lg:object-center"
        />
        {/* Mobile/Tablet Readability Veil (Zero wash-out on Desktop so Arches, Books, Flowers & Laptop shine in 8K clarity) */}
        <div
          className="absolute inset-0 bg-[#F5EBDD]/86 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#F5EBDD]/35 lg:via-transparent lg:to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Editorial Composition */}
      <div className="relative z-10 max-w-[1380px] mx-auto w-full px-4 sm:px-8 lg:px-12 my-auto pt-4 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-stretch">
          {/* Left Column: Editorial Headline, Copy, CTAs & Bottom Feature Strip (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left justify-between">
            <div>
              {/* Eyebrow Label + Fine Horizontal Champagne Line */}
              <div className="flex items-center gap-4 mb-5 sm:mb-6">
                <span className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.26em] text-[#211C19]">
                  BESPOKE DIGITAL EXPERIENCES
                </span>
                <span
                  className="w-16 sm:w-24 h-[1px] bg-[#B8893D]/75"
                  aria-hidden="true"
                />
              </div>

              {/* Oversized High-Contrast Editorial Serif Headline */}
              <h1 className="font-serif text-[2.85rem] sm:text-6xl xl:text-[4.55rem] font-normal text-[#1E1916] leading-[1.05] tracking-[-0.015em] mb-6 sm:mb-7">
                Your Talent Deserves
                <br />
                a{' '}
                <span className="italic font-normal text-[#A87932]">
                  Website
                </span>{' '}
                as
                <br />
                <span className="text-[#A87932]">Exceptional</span> as You.
              </h1>

              {/* Supporting Editorial Paragraph */}
              <p className="font-serif text-xl sm:text-[1.4rem] text-[#2B231D] max-w-[520px] leading-[1.46] font-normal mb-8 sm:mb-10">
                We create distinctive portfolio and business websites for models,
                makeup artists, photographers, beauty professionals, and ambitious
                brands.
              </p>

              {/* Primary & Secondary Actions */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
                <button
                  type="button"
                  onClick={() => onStartProject()}
                  className="group inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full text-xs sm:text-[12.5px] font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#211C19]"
                >
                  <span>LET&apos;S BUILD YOUR WEBSITE</span>
                  <ArrowRight className="w-4 h-4 text-[#211C19] transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={onExploreWork}
                  className="group inline-flex items-center gap-2 font-serif text-lg sm:text-[21px] text-[#211C19] hover:text-[#9A6B28] transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52] rounded"
                >
                  <span className="border-b border-[#211C19]/65 group-hover:border-[#C99A52] pb-0.5">
                    Explore Our Work
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#211C19] group-hover:text-[#9A6B28] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Bottom 4-Item Feature Strip Separated by Fine Vertical Lines */}
            <div className="w-full max-w-[540px] pt-4 grid grid-cols-2 sm:grid-cols-4 gap-y-6">
              {/* Item 1: Luxury Designs */}
              <div className="flex flex-col items-center text-center px-2 sm:border-r border-[#B8893D]/40">
                <Gem className="w-6 h-6 text-[#966824] stroke-[1.4] mb-2.5" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-bold uppercase tracking-[0.15em] text-[#211C19] leading-snug">
                  LUXURY
                  <br />
                  DESIGNS
                </span>
              </div>

              {/* Item 2: 3D & Interactive Experiences */}
              <div className="flex flex-col items-center text-center px-2 sm:border-r border-[#B8893D]/40">
                <Monitor className="w-6 h-6 text-[#966824] stroke-[1.4] mb-2.5" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-bold uppercase tracking-[0.15em] text-[#211C19] leading-snug">
                  3D &amp; INTERACTIVE
                  <br />
                  EXPERIENCES
                </span>
              </div>

              {/* Item 3: Business Websites */}
              <div className="flex flex-col items-center text-center px-2 sm:border-r border-[#B8893D]/40">
                <Crown className="w-6 h-6 text-[#966824] stroke-[1.4] mb-2.5" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-bold uppercase tracking-[0.15em] text-[#211C19] leading-snug">
                  BUSINESS
                  <br />
                  WEBSITES
                </span>
              </div>

              {/* Item 4: Industry Focused */}
              <div className="flex flex-col items-center text-center px-2">
                <Sparkles className="w-6 h-6 text-[#966824] stroke-[1.4] mb-2.5" />
                <span className="text-[10px] sm:text-[10.5px] font-sans font-bold uppercase tracking-[0.15em] text-[#211C19] leading-snug">
                  INDUSTRY
                  <br />
                  FOCUSED
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Desktop: Interactive Hotspot Over the Photorealistic Studio Laptop + Subtle Bottom Capsule */}
          <div className="hidden lg:flex lg:col-span-6 relative flex-col justify-between items-end min-h-[540px]">
            {/* Interactive Clickable Portal Over the Studio Laptop Screen */}
            <a
              href={currentLiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Launch Khadija Farhat Live Portfolio Website"
              className="group relative mt-14 mr-2 w-[84%] h-[360px] rounded-2xl flex items-end justify-center pb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52]"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16120E]/90 backdrop-blur-md border border-[#C99A52]/80 text-[#FFF9F0] text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                <span>Launch Live Client Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E5C17E]" />
              </span>
            </a>

            {/* Compact Luxury Capsule Tucked on Lower Silk Drapery */}
            <div className="mt-auto inline-flex flex-wrap items-center gap-3 px-5 py-2.5 rounded-full bg-[#FFF9F0] border border-[#C99A52]/65 shadow-[0_14px_34px_-6px_rgba(33,28,25,0.28)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B8863B]" />
                <span className="text-[11px] font-sans font-semibold text-[#211C19]">
                  Live Client Work: <span className="font-serif italic text-[13px]">Khadija Farhat</span>
                </span>
              </div>
              <span className="text-[#C99A52]/60">•</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://khadija-portfolio-og.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveEdition('classic')}
                  className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#49382B] hover:text-[#9A6B28] transition-colors"
                >
                  <span>Simple Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#C99A52]/60">|</span>
                <a
                  href="https://khadija-3d-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveEdition('3d')}
                  className="inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#9A6B28] hover:text-[#211C19] transition-colors"
                >
                  <span>3D &amp; Motion Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Mobile/Tablet: Framed Studio Scene & Live Client Links */}
          <div className="lg:hidden relative flex flex-col items-center">
            <div className="relative w-full rounded-[24px] overflow-hidden border border-[#C99A52]/45 shadow-champagne-elevated bg-[#FFF9F0] p-2">
              <div className="relative aspect-[16/10] rounded-[18px] overflow-hidden">
                <img
                  src="/images/champagne-luxury-hero-scene.jpg"
                  alt="Khadija Farhat Portfolio Website Shown Inside Luxury Studio Laptop"
                  className="w-full h-full object-cover object-right"
                />
              </div>
              <div className="mt-2 px-3 py-2.5 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-sans font-semibold text-[#211C19]">
                  Live Client Work: <span className="font-serif italic">Khadija Farhat</span>
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://khadija-portfolio-og.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#49382B] underline underline-offset-4"
                  >
                    <span>Simple Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://khadija-3d-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#9A6B28] underline underline-offset-4"
                  >
                    <span>3D Site</span>
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
