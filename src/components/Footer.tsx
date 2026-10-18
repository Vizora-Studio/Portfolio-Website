import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import {
  DemoRouteId,
  InquiryPreselection,
  PageRouteId,
  ProfessionOption,
} from '../types';
import { FEATURED_DEMOS } from '../data/vizoraData';

interface FooterProps {
  onNavigateSection: (sectionId: string, pageRoute?: PageRouteId) => void;
  onStartProject: (preselection?: InquiryPreselection) => void;
  onOpenDemo: (demoId: DemoRouteId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onStartProject,
  onOpenDemo,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const industriesServed: { label: string; profession: ProfessionOption }[] = [
    { label: 'Models & Fashion Talent', profession: 'Model or fashion creator' },
    {
      label: 'Makeup Artists & Beauty Professionals',
      profession: 'Makeup artist or beauty professional',
    },
    {
      label: 'Photographers & Visual Storytellers',
      profession: 'Photographer or videographer',
    },
    { label: 'Salons & Beauty Studios', profession: 'Salon or beauty studio' },
    {
      label: 'Entrepreneurs & Personal Brands',
      profession: 'Fashion or creative professional',
    },
    {
      label: 'Small Businesses & Growing Companies',
      profession: 'Small business',
    },
  ];

  return (
    <footer className="relative z-10 bg-[#211C19] text-[#F5EBDD] border-t border-[#C99A52]/30 pt-20 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Subtle Warm Gold Ambient Glow */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[250px] bg-[#C99A52]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1380px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#C99A52]/20">
          {/* Column 1: Vizora Logo & Studio Description (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('hero', 'home');
                }}
                className="inline-flex items-center gap-3.5 mb-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF9F0] border border-[#C99A52]/50 p-1.5 flex items-center justify-center">
                  <img
                    src="/assets/vizora-logo-original.jpeg"
                    alt="Vizora Official Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-serif tracking-[0.16em] text-2xl font-normal text-[#FFF9F0] group-hover:text-[#E3BF82] transition-colors block leading-none">
                    VIZORA
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#E7D2B8]/80 block mt-1">
                    CREATIVE WEB DESIGN STUDIO
                  </span>
                </div>
              </a>

              <p className="font-serif italic text-lg text-[#E3BF82] mb-3">
                “Your Talent Deserves a Website as Exceptional as You.”
              </p>

              <p className="text-xs sm:text-sm text-[#E7D2B8]/85 leading-relaxed max-w-sm">
                Vizora is a luxury creative web design and development studio
                crafting bespoke portfolio websites, immersive 3D experiences,
                and business websites for creative talent and ambitious brands.
              </p>
            </div>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => onStartProject()}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.16em] bg-champagne-gold-pill text-[#211C19] transition-all"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#211C19]" />
              </button>
            </div>
          </div>

          {/* Column 2: Studio Navigation & Services (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#E3BF82] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-[#F5EBDD]/85">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onStartProject({ websiteType: 'Portfolio website' })
                  }
                  className="hover:text-[#E3BF82] transition-colors text-left"
                >
                  Luxury Portfolio Websites
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onStartProject({
                      websiteType: '3D interactive portfolio website',
                    })
                  }
                  className="hover:text-[#E3BF82] transition-colors text-left"
                >
                  Immersive 3D Websites
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onStartProject({ websiteType: 'Business website' })
                  }
                  className="hover:text-[#E3BF82] transition-colors text-left"
                >
                  Business Websites
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onStartProject({ websiteType: 'Personal brand website' })
                  }
                  className="hover:text-[#E3BF82] transition-colors text-left"
                >
                  Bespoke Brand Experiences
                </button>
              </li>
            </ul>

            <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#E3BF82] mt-7 mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-[#F5EBDD]/85">
              <li>
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('work', 'work');
                  }}
                  className="hover:text-[#E3BF82] transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('process', 'process');
                  }}
                  className="hover:text-[#E3BF82] transition-colors"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('about', 'about');
                  }}
                  className="hover:text-[#E3BF82] transition-colors"
                >
                  About Vizora
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries Served (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#E3BF82] mb-4">
              Who We Help
            </h3>
            <ul className="space-y-2.5 text-xs text-[#F5EBDD]/85">
              {industriesServed.map((ind) => (
                <li key={ind.label}>
                  <button
                    type="button"
                    onClick={() =>
                      onStartProject({ profession: ind.profession })
                    }
                    className="hover:text-[#E3BF82] transition-colors text-left flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C99A52]" />
                    <span>{ind.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Live Client Websites & Concept Showcases (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#E3BF82] mb-3">
              Live Client Websites
            </h3>
            <ul className="space-y-2.5 text-xs text-[#F5EBDD] mb-5 pb-4 border-b border-[#C99A52]/20">
              <li>
                <a
                  href="https://khadija-portfolio-og.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3BF82] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="font-mono text-[10px] text-[#C99A52]">
                    01
                  </span>
                  <span>Khadija — Simple Editorial Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C99A52]" />
                </a>
              </li>
              <li>
                <a
                  href="https://khadija-3d-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3BF82] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="font-mono text-[10px] text-[#C99A52]">
                    02
                  </span>
                  <span>Khadija — 3D &amp; Motion Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C99A52]" />
                </a>
              </li>
            </ul>

            <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#E3BF82] mb-3">
              Interactive Concept Demos
            </h3>
            <ul className="space-y-2 text-xs text-[#F5EBDD]/85">
              {FEATURED_DEMOS.map((demo) => (
                <li key={demo.id}>
                  <a
                    href={demo.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenDemo(demo.id);
                    }}
                    className="hover:text-[#E3BF82] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="font-mono text-[10px] text-[#C99A52]">
                      {demo.number}
                    </span>
                    <span>{demo.industry}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#C99A52]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E7D2B8]/75">
          <div className="flex flex-wrap items-center gap-2">
            <span>
              © {new Date().getFullYear()} VIZORA. All rights reserved.
            </span>
            <span>·</span>
            <span>Creative Web Design Studio</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#F5EBDD] hover:text-[#E3BF82] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52] rounded px-2 py-1"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#C99A52]" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
