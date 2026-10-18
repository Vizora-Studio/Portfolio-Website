import React, { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Globe,
  ExternalLink,
  Eye,
  X,
} from 'lucide-react';
import { FEATURED_DEMOS, LIVE_CLIENT_WEBSITES } from '../data/vizoraData';
import { DemoRouteId, InquiryPreselection, LiveClientProject } from '../types';

interface FeaturedWorkProps {
  onOpenDemo: (demoId: DemoRouteId) => void;
  onStartProject: (preselection?: InquiryPreselection) => void;
}

type WorkCategoryFilter =
  | 'all'
  | 'live-client'
  | 'portfolio'
  | '3d-interactive'
  | 'business';

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  onOpenDemo,
  onStartProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<WorkCategoryFilter>('all');
  const [liveModalProject, setLiveModalProject] =
    useState<LiveClientProject | null>(null);

  const filterTabs: { id: WorkCategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Selected Works' },
    { id: 'live-client', label: 'Live Client Work' },
    { id: 'portfolio', label: 'Portfolio Websites' },
    { id: '3d-interactive', label: '3D & Interactive' },
    { id: 'business', label: 'Business Websites' },
  ];

  const showKhadijaEditorial =
    activeFilter === 'all' ||
    activeFilter === 'live-client' ||
    activeFilter === 'portfolio';

  const showKhadija3D =
    activeFilter === 'all' ||
    activeFilter === 'live-client' ||
    activeFilter === 'portfolio' ||
    activeFilter === '3d-interactive';

  const filteredDemos = FEATURED_DEMOS.filter((demo) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'live-client') return false;
    if (activeFilter === 'portfolio') return demo.id !== 'beauty-studio';
    if (activeFilter === '3d-interactive') return demo.id === 'model-portfolio';
    if (activeFilter === 'business') return demo.id === 'beauty-studio';
    return true;
  });

  const khadijaEditorial = LIVE_CLIENT_WEBSITES[0];
  const khadija3D = LIVE_CLIENT_WEBSITES[1];

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 text-[#211C19] overflow-hidden"
    >

      <div className="max-w-[1380px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16 pb-8 border-b border-[#B8893D]/40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-[#211C19]">
                02 &nbsp;/&nbsp; SELECTED WORKS
              </span>
              <span
                className="w-20 h-[1px] bg-[#B8893D]/80"
                aria-hidden="true"
              />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1E1916] leading-[1.06] mb-4">
              Digital Experiences,{' '}
              <span className="italic text-[#A87932]">Distinctly Yours.</span>
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[#2B231D] leading-relaxed">
              Every brand has a story. We build the digital space that brings it
              to life.
            </p>
          </div>

          {/* Editorial Category Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter portfolio works by category"
            className="flex flex-wrap items-center gap-2.5"
          >
            {filterTabs.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4.5 py-2.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                    active
                      ? 'bg-champagne-gold-pill text-[#211C19]'
                      : 'bg-[#FFF9F0] text-[#49382B] hover:text-[#211C19] border border-[#C99A52]/45 shadow-sm'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* ASYMMETRIC MAGAZINE-INSPIRED FEATURED CLIENT WORK (KHADIJA SITES) */}
        {/* ================================================================= */}
        {(showKhadijaEditorial || showKhadija3D) && (
          <div className="mb-20 sm:mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Asymmetric Editorial Column (7 cols): Khadija 3D & Motion Portfolio */}
              {showKhadija3D && (
                <article
                  className={`${
                    showKhadijaEditorial ? 'lg:col-span-7' : 'lg:col-span-12'
                  } group flex flex-col rounded-[32px] luxury-glass-card luxury-double-frame border border-[#C99A52]/50 p-5 sm:p-7`}
                >
                  {/* Visual Exhibition Frame */}
                  <div className="relative rounded-[22px] overflow-hidden bg-[#211C19] border border-[#C99A52]/45 shadow-champagne-elevated mb-6">
                    {/* Subtle Studio Browser Header */}
                    <div className="px-5 py-3 bg-[#1A1512] border-b border-[#C99A52]/25 flex items-center justify-between gap-2 text-[#F5EBDD]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#C99A52]" />
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#E3BF82] font-semibold">
                          LIVE CLIENT WORK · INTERACTIVE 3D &amp; MOTION
                        </span>
                      </div>
                      <a
                        href={khadija3D.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#E7D2B8] hover:text-[#E3BF82] transition-colors"
                      >
                        <Globe className="w-3 h-3 text-[#C99A52]" />
                        <span>{khadija3D.displayDomain}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={khadija3D.heroImage}
                        alt={khadija3D.imageAlt}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#211C19]/85 via-transparent to-transparent" />

                      {/* Floating Portrait Inset + Interactive Modal Trigger */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                        <div className="px-4 py-2.5 rounded-2xl bg-[#FFF9F0] border border-[#C99A52]/50 shadow-md">
                          <span className="block text-[9.5px] uppercase tracking-[0.2em] text-[#9A6B28] font-bold">
                            Interactive 3D / Luxury Creative Portfolio
                          </span>
                          <span className="font-serif italic text-sm text-[#211C19]">
                            Dimensional presentation &amp; motion-led storytelling
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setLiveModalProject(khadija3D)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-champagne-gold-pill text-[#211C19] text-[10px] font-bold uppercase tracking-[0.16em] transition-all shrink-0"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Live Preview</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Caption Below Frame */}
                  <div className="px-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#9A6B28]">
                        Interactive 3D / Luxury Creative Portfolio
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#FFF9F0] border border-[#C99A52]/35 text-xs font-serif italic text-[#211C19]">
                        Client: Khadija Farhat
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1916] mb-3 group-hover:text-[#9A6B28] transition-colors">
                      Khadija — 3D and Motion Portfolio
                    </h3>

                    <p className="font-serif text-lg sm:text-[19px] text-[#2B231D] leading-relaxed mb-6">
                      Dimensional presentation, motion-led storytelling, and
                      unforgettable visual impact. Features an interactive 360°
                      3D Orbit &amp; Monolith spatial archive, full-bleed motion
                      video reels, ambient couture audio controls, and editorial
                      series case studies.
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#C99A52]/35">
                      <a
                        href={khadija3D.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] bg-champagne-gold-pill transition-all"
                      >
                        <span>Launch Live 3D Website</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#211C19]" />
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          onStartProject({
                            profession: khadija3D.profession,
                            websiteType: khadija3D.preselectWebsiteType,
                            designStyle: khadija3D.preselectDesignStyle,
                            projectContext: `Inspired by Khadija — 3D and Motion Portfolio (${khadija3D.liveUrl})`,
                          })
                        }
                        className="group/btn inline-flex items-center gap-1.5 font-serif text-lg text-[#211C19] hover:text-[#9A6B28] transition-colors"
                      >
                        <span className="border-b border-[#211C19]/60 group-hover/btn:border-[#C99A52] pb-0.5">
                          Commission a 3D Portfolio
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#9A6B28]" />
                      </button>
                    </div>
                  </div>
                </article>
              )}

              {/* Right Offset Editorial Column (5 cols): Khadija Simple Editorial Portfolio */}
              {showKhadijaEditorial && (
                <article
                  className={`${
                    showKhadija3D ? 'lg:col-span-5 lg:mt-14' : 'lg:col-span-12'
                  } group flex flex-col rounded-[32px] luxury-glass-card luxury-double-frame border border-[#C99A52]/50 p-5 sm:p-7`}
                >
                  {/* Visual Exhibition Frame */}
                  <div className="relative rounded-[22px] overflow-hidden bg-[#F5EBDD] border border-[#C99A52]/45 shadow-champagne-elevated mb-6">
                    <div className="px-5 py-3 bg-[#FFF9F0] border-b border-[#C99A52]/30 flex items-center justify-between gap-2 text-[#211C19]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#9A6B28]" />
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#49382B] font-bold">
                          LIVE CLIENT WORK · EDITORIAL
                        </span>
                      </div>
                      <a
                        href={khadijaEditorial.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#49382B] hover:text-[#211C19] transition-colors"
                      >
                        <Globe className="w-3 h-3 text-[#9A6B28]" />
                        <span>{khadijaEditorial.displayDomain}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="relative aspect-[16/11] overflow-hidden bg-[#211C19]">
                      <img
                        src={khadijaEditorial.heroImage}
                        alt={khadijaEditorial.imageAlt}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#211C19]/80 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                        <div className="px-3.5 py-2 rounded-xl bg-[#FFF9F0] border border-[#C99A52]/45 text-[#211C19] shadow-md">
                          <span className="block text-[9px] uppercase tracking-[0.2em] text-[#9A6B28] font-bold">
                            Model Portfolio / Editorial Website
                          </span>
                          <span className="font-serif italic text-xs text-[#49382B]">
                            Clean visual focus &amp; graceful typography
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setLiveModalProject(khadijaEditorial)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-champagne-gold-pill text-[#211C19] text-[10px] font-bold uppercase tracking-[0.16em] transition-all shrink-0"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Caption Below Frame */}
                  <div className="px-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#9A6B28]">
                        Model Portfolio / Editorial Website
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#FFF9F0] border border-[#C99A52]/35 text-xs font-serif italic text-[#211C19]">
                        Client: Khadija Farhat
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1916] mb-3 group-hover:text-[#9A6B28] transition-colors">
                      Khadija — Simple Editorial Portfolio
                    </h3>

                    <p className="font-serif text-lg sm:text-[18.5px] text-[#2B231D] leading-relaxed mb-6">
                      Clean visual focus, graceful typography, direct
                      presentation, and effortless browsing. Designed so casting
                      directors, bridal studios, and fashion houses can review
                      her gallery and book immediately.
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#C99A52]/35">
                      <a
                        href={khadijaEditorial.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] bg-champagne-gold-pill transition-all"
                      >
                        <span>Launch Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#211C19]" />
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          onStartProject({
                            profession: khadijaEditorial.profession,
                            websiteType: khadijaEditorial.preselectWebsiteType,
                            designStyle: khadijaEditorial.preselectDesignStyle,
                            projectContext: `Inspired by Khadija — Simple Editorial Portfolio (${khadijaEditorial.liveUrl})`,
                          })
                        }
                        className="group/btn inline-flex items-center gap-1.5 font-serif text-lg text-[#211C19] hover:text-[#9A6B28] transition-colors"
                      >
                        <span className="border-b border-[#211C19]/60 group-hover/btn:border-[#C99A52] pb-0.5">
                          Build Similar
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#9A6B28]" />
                      </button>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* PART 2: CURATED STUDIO CONCEPT SHOWCASES (ASYMMETRIC EDITORIAL)   */}
        {/* ================================================================= */}
        {filteredDemos.length > 0 && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-b border-[#B8893D]/40">
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-[#9A6B28] block mb-2">
                  CURATED INDUSTRY CONCEPTS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1916]">
                  Interactive Studio Concept Websites
                </h3>
              </div>
              <p className="font-serif text-lg sm:text-xl text-[#2B231D] max-w-md">
                Explore full multi-section concept websites tailored for models,
                bridal makeup artists, photographers, and luxury beauty studios.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              {filteredDemos.map((demo, idx) => {
                // Asymmetric editorial column spans (7/5 alternating)
                const isWide = idx % 3 === 0;
                const colClass =
                  filteredDemos.length === 1
                    ? 'lg:col-span-12'
                    : isWide
                    ? 'lg:col-span-7'
                    : 'lg:col-span-5';
                const offsetClass = idx % 2 === 1 ? 'lg:mt-12' : '';
                const isBlush = demo.id === 'makeup-artist';

                return (
                  <article
                    key={demo.id}
                    className={`${colClass} ${offsetClass} group flex flex-col rounded-[32px] ${
                      isBlush ? 'luxury-glass-card-blush' : 'luxury-glass-card'
                    } luxury-double-frame border border-[#C99A52]/50 p-5 sm:p-7`}
                  >
                    <div
                      onClick={() => onOpenDemo(demo.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onOpenDemo(demo.id);
                        }
                      }}
                      aria-label={`Explore ${demo.projectTitle}`}
                      className="relative rounded-[22px] overflow-hidden bg-[#F5EBDD] border border-[#C99A52]/45 shadow-champagne-card group-hover:shadow-champagne-elevated transition-all duration-500 cursor-pointer mb-5"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={demo.heroImage}
                          alt={demo.imageAlt}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#211C19]/70 via-transparent to-transparent" />

                        <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#FFF9F0] border border-[#C99A52]/55 text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-[#211C19] shadow-sm">
                          {demo.industry}
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                          <div className="px-3.5 py-2 rounded-xl bg-[#FFF9F0] border border-[#C99A52]/45 shadow-md">
                            <span className="block text-[9px] uppercase tracking-[0.2em] text-[#9A6B28] font-bold">
                              {demo.websiteType}
                            </span>
                            <span className="font-serif text-sm text-[#211C19] font-medium">
                              {demo.accentTheme}
                            </span>
                          </div>

                          <div className="hidden sm:block w-20 h-14 rounded-lg overflow-hidden border-2 border-[#FFF9F0] shadow-md shrink-0">
                            <img
                              src={demo.secondaryImage}
                              alt={`${demo.projectTitle} detail`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Caption */}
                    <div className="px-1">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#9A6B28]">
                          {demo.number} &nbsp;·&nbsp; {demo.industry}
                        </span>
                      </div>

                      <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#1E1916] mb-2.5 group-hover:text-[#9A6B28] transition-colors">
                        {demo.projectTitle}
                      </h4>

                      <p className="font-serif text-lg text-[#2B231D] leading-relaxed mb-5">
                        {demo.shortDescription}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#C99A52]/35">
                        <a
                          href={demo.route}
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenDemo(demo.id);
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] bg-champagne-gold-pill transition-all"
                        >
                          <span>Explore Interactive Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#211C19]" />
                        </a>

                        <button
                          type="button"
                          onClick={() =>
                            onStartProject({
                              profession: demo.profession,
                              websiteType: demo.preselectWebsiteType,
                              designStyle: demo.preselectDesignStyle,
                              projectContext: `Inspired by ${demo.projectTitle}`,
                            })
                          }
                          className="group/btn inline-flex items-center gap-1.5 font-serif text-lg text-[#211C19] hover:text-[#9A6B28] transition-colors"
                        >
                          <span className="border-b border-[#211C19]/60 group-hover/btn:border-[#C99A52] pb-0.5">
                            Request Similar Direction
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-[#9A6B28]" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Live Client Website Modal Preview */}
      {liveModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Live preview of ${liveModalProject.projectTitle}`}
          className="fixed inset-0 z-50 bg-[#211C19]/85 backdrop-blur-xl p-3 sm:p-6 flex flex-col"
        >
          <div className="max-w-7xl w-full mx-auto bg-[#FFF9F0] border border-[#C99A52]/50 rounded-3xl overflow-hidden flex flex-col flex-1 shadow-2xl">
            <div className="px-4 sm:px-6 py-3.5 bg-[#F5EBDD] border-b border-[#C99A52]/30 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-champagne-gold-pill text-[#211C19] text-[10px] font-bold uppercase tracking-widest">
                  Live Client Website
                </span>
                <span className="font-serif font-medium text-[#211C19] text-base sm:text-lg">
                  {liveModalProject.projectTitle}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={liveModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-champagne-gold-pill text-[#211C19] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#211C19]" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const proj = liveModalProject;
                    setLiveModalProject(null);
                    onStartProject({
                      profession: proj.profession,
                      websiteType: proj.preselectWebsiteType,
                      designStyle: proj.preselectDesignStyle,
                      projectContext: `I want to build a website like ${proj.projectTitle} (${proj.liveUrl})`,
                    });
                  }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#211C19] text-[#FFF9F0] text-xs font-bold uppercase tracking-wider hover:bg-[#49382B] transition-colors"
                >
                  <span>Commission Similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setLiveModalProject(null)}
                  aria-label="Close live preview"
                  className="p-2 rounded-full bg-[#E7D2B8]/60 hover:bg-[#C99A52] text-[#211C19] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-black relative">
              <iframe
                src={liveModalProject.liveUrl}
                title={liveModalProject.projectTitle}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
