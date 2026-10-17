import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { DemoRouteId, InquiryPreselection, ProfessionOption } from '../types';
import { FEATURED_DEMOS } from '../data/vizoraData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
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
    { label: 'Models & Fashion Creators', profession: 'Model or fashion creator' },
    { label: 'Makeup Artists & Bridal Beauty', profession: 'Makeup artist or beauty professional' },
    { label: 'Photographers & Videographers', profession: 'Photographer or videographer' },
    { label: 'Salons & Beauty Studios', profession: 'Salon or beauty studio' },
    { label: 'Fashion & Creative Professionals', profession: 'Fashion or creative professional' },
    { label: 'Small Businesses & Studios', profession: 'Small business' },
  ];

  return (
    <footer className="relative bg-[#050509] text-white border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Actual Vizora Logo & Brand Description (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('hero');
                }}
                className="inline-flex items-center gap-3.5 mb-5 group"
              >
                <div className="h-14 px-3 py-1.5 rounded-xl bg-[#FAF9F5] border border-white/20 flex items-center justify-center">
                  <img
                    src="/assets/vizora-logo-original.jpeg"
                    alt="Vizora Official Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif tracking-[0.18em] text-xl font-bold text-white group-hover:text-vizora-yellow transition-colors">
                      VIZORA
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-vizora-yellow" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 block mt-0.5">
                    Creative Web Design Studio
                  </span>
                </div>
              </a>

              <p className="font-serif italic text-base text-vizora-yellow mb-3">
                “Your Vision. Your Website. Your Next Opportunity.”
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                Vizora is a creative web design and development startup building custom portfolio
                websites, business websites, and personal brand websites for creatives,
                professionals, and small businesses.
              </p>
            </div>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => onStartProject()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-white bg-vizora-blue hover:bg-vizora-blue-light shadow-blue-glow transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-vizora-yellow" />
                <span>Start Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-vizora-yellow" />
              </button>
            </div>
          </div>

          {/* Column 2: Services & About (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-vizora-yellow mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onStartProject({ websiteType: 'Portfolio website' })
                  }
                  className="hover:text-vizora-yellow transition-colors text-left"
                >
                  Portfolio Websites
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onStartProject({ websiteType: 'Business website' })
                  }
                  className="hover:text-vizora-yellow transition-colors text-left"
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
                  className="hover:text-vizora-yellow transition-colors text-left"
                >
                  Personal Brand Websites
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onStartProject({ websiteType: 'Website redesign' })
                  }
                  className="hover:text-vizora-yellow transition-colors text-left"
                >
                  Website Redesigns
                </button>
              </li>
            </ul>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-vizora-yellow mt-7 mb-3">
              About &amp; Studio
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('about');
                  }}
                  className="hover:text-vizora-yellow transition-colors"
                >
                  About Vizora
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('process');
                  }}
                  className="hover:text-vizora-yellow transition-colors"
                >
                  Our 4-Stage Process
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateSection('faq');
                  }}
                  className="hover:text-vizora-yellow transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries Served (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-vizora-yellow mb-4">
              Industries Served
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {industriesServed.map((ind) => (
                <li key={ind.label}>
                  <button
                    type="button"
                    onClick={() =>
                      onStartProject({ profession: ind.profession })
                    }
                    className="hover:text-vizora-yellow transition-colors text-left flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-vizora-blue-light" />
                    <span>{ind.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Live Client Websites, Featured Demos & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-vizora-yellow mb-3">
              Live Client Websites
            </h3>
            <ul className="space-y-2 text-xs text-slate-200 mb-5 pb-4 border-b border-white/10">
              <li>
                <a
                  href="https://khadija-portfolio-og.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vizora-yellow transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="font-mono text-[10px] text-vizora-yellow">LIVE 01</span>
                  <span>Khadija — Simple Model Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-vizora-yellow" />
                </a>
              </li>
              <li>
                <a
                  href="https://khadija-3d-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vizora-yellow transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="font-mono text-[10px] text-vizora-purple-light">LIVE 02</span>
                  <span>Khadija — 3D Motion Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-vizora-yellow" />
                </a>
              </li>
            </ul>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-vizora-yellow mb-3">
              Featured Studio Demos
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 mb-5">
              {FEATURED_DEMOS.map((demo) => (
                <li key={demo.id}>
                  <a
                    href={demo.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenDemo(demo.id);
                    }}
                    className="hover:text-vizora-yellow transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="font-mono text-[10px] text-vizora-blue-light">
                      {demo.number}
                    </span>
                    <span>{demo.industry}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-vizora-yellow mb-2">
                Contact &amp; Project Inquiries
              </h3>
              <button
                type="button"
                onClick={() => onStartProject()}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-vizora-blue-light hover:text-vizora-yellow transition-colors"
              >
                <span>Open Project Inquiry Form</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} VIZORA. All rights reserved.</span>
            <span>·</span>
            <span>Custom Portfolio &amp; Business Website Design Studio</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-vizora-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow rounded px-2 py-1"
          >
            <ArrowUp className="w-3.5 h-3.5 text-vizora-yellow" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
