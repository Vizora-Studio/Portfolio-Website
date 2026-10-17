import React, { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Globe,
  CheckCircle2,
  Sparkles,
  Box,
  Layers,
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

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  onOpenDemo,
  onStartProject,
}) => {
  const [liveModalProject, setLiveModalProject] = useState<LiveClientProject | null>(null);

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-luxury-obsidian text-white editorial-grid-lines overflow-hidden"
    >
      {/* Controlled Royal-Blue, Purple & Selective Yellow Ambient Lighting */}
      <div
        className="absolute top-1/4 -left-36 w-[540px] h-[540px] bg-vizora-blue/18 rounded-full blur-[165px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-36 w-[540px] h-[540px] bg-vizora-purple/18 rounded-full blur-[165px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-vizora-yellow/40 shadow-yellow-glow mb-5">
              <span className="w-2 h-2 rounded-full bg-vizora-yellow animate-pulse" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-vizora-yellow">
                Live Client Websites &amp; Studio Showcases
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-5">
              Real Websites Built to{' '}
              <span className="text-blue-purple-gradient">Captivate &amp; Convert.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              From clean, fast-loading editorial portfolios to breathtaking 3D WebGL &amp; motion
              experiences—explore our live client websites for model{' '}
              <strong className="text-vizora-yellow font-semibold">Khadija Farhat</strong> alongside
              our multi-industry studio concept demos.
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-2xl luxury-royal-frame border border-vizora-yellow/35 max-w-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vizora-yellow mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Two Signature Tiers Available</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Choose a <strong className="text-white">Simple Editorial Portfolio</strong> for
              effortless elegance or an <strong className="text-white">Immersive 3D Website</strong>{' '}
              for unforgettable visual impact.
            </p>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* PART 1: FLAGSHIP LIVE CLIENT WEBSITES (KHADIJA SIMPLE + KHADIJA 3D)   */}
        {/* ===================================================================== */}
        <div className="mb-20 sm:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-8 border-b border-white/15">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-vizora-yellow text-vizora-black text-[11px] font-bold uppercase tracking-[0.18em]">
                Featured Client Case Study
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Khadija Farhat — Two Live Model Portfolio Editions
              </h3>
            </div>
            <span className="text-xs font-mono text-vizora-yellow uppercase tracking-widest">
              Click to Visit Live URLs or Preview Inline
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {LIVE_CLIENT_WEBSITES.map((clientSite, idx) => {
              const is3D = clientSite.id === 'khadija-3d';
              return (
                <article
                  key={clientSite.id}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 flex flex-col justify-between luxury-double-border ${
                    is3D
                      ? 'bg-gradient-to-b from-[#1A1511] via-[#12100E] to-[#0B0A09] border border-vizora-yellow/45 hover:border-vizora-yellow'
                      : 'bg-gradient-to-b from-[#161310] via-[#110F0D] to-[#0B0A09] border border-vizora-blue/45 hover:border-vizora-yellow'
                  }`}
                >
                  {/* Top Luxury Browser Frame */}
                  <div>
                    <div className="bg-[#0B0A09] px-4 py-3 border-b border-white/12 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-vizora-blue" />
                        <span className="w-2.5 h-2.5 rounded-full bg-vizora-purple" />
                        <span className="w-2.5 h-2.5 rounded-full bg-vizora-yellow" />
                      </div>

                      <a
                        href={clientSite.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-[11px] font-mono text-white transition-colors truncate"
                        title={`Open ${clientSite.liveUrl} in a new tab`}
                      >
                        <Globe className="w-3 h-3 text-vizora-yellow shrink-0" />
                        <span className="truncate">{clientSite.displayDomain}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-vizora-yellow shrink-0" />
                      </a>

                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold shrink-0 ${
                          is3D
                            ? 'bg-vizora-purple/30 border border-vizora-yellow/50 text-vizora-yellow'
                            : 'bg-vizora-blue/25 border border-vizora-yellow/50 text-vizora-yellow'
                        }`}
                      >
                        {idx === 0 ? 'SIMPLE PORTFOLIO' : '3D PORTFOLIO'}
                      </span>
                    </div>

                    {/* Live Screenshot Preview Frame */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={clientSite.heroImage}
                        alt={clientSite.imageAlt}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vizora-black via-vizora-black/20 to-transparent" />

                      {/* Top Edition Ribbon */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-vizora-black/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.18em] text-vizora-yellow border border-vizora-yellow/50"
                        >
                          {is3D ? (
                            <Box className="w-3.5 h-3.5 text-vizora-yellow" />
                          ) : (
                            <Layers className="w-3.5 h-3.5 text-vizora-yellow" />
                          )}
                          <span>{clientSite.editionBadge}</span>
                        </span>

                        <button
                          type="button"
                          onClick={() => setLiveModalProject(clientSite)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-vizora-black/85 hover:bg-vizora-yellow hover:text-vizora-black text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider transition-colors"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Interactive Preview</span>
                        </button>
                      </div>

                      {/* Bottom Overlay + Real Client Portrait Inset */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-3">
                        <div className="px-3.5 py-2.5 rounded-xl bg-vizora-black/90 backdrop-blur-md border border-white/15">
                          <span className="block text-[10px] uppercase tracking-widest text-vizora-yellow font-bold">
                            {clientSite.tierLabel}
                          </span>
                          <span className="text-xs font-serif italic text-slate-200">
                            {clientSite.tagline}
                          </span>
                        </div>

                        <div className="hidden sm:flex items-center gap-2">
                          <div className="w-16 h-20 rounded-xl overflow-hidden border-2 border-vizora-yellow/70 shadow-2xl shrink-0">
                            <img
                              src={clientSite.secondaryImage}
                              alt={`${clientSite.clientName} portrait`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="w-16 h-20 rounded-xl overflow-hidden border-2 border-white/40 shadow-2xl shrink-0">
                            <img
                              src={clientSite.portraitImage}
                              alt={`${clientSite.clientName} couture look`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body: Details & Conversion CTAs */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-vizora-yellow/15 border border-vizora-yellow/40 text-[11px] font-bold text-vizora-yellow">
                          Live Deployed Client Website
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-semibold text-white border ${
                            is3D
                              ? 'bg-vizora-purple/25 border-vizora-purple/50'
                              : 'bg-vizora-blue/25 border-vizora-blue/50'
                          }`}
                        >
                          {is3D ? '3D Spatial WebGL + Motion' : 'Classic Luxury Editorial'}
                        </span>
                      </div>

                      <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2.5 group-hover:text-vizora-yellow transition-colors">
                        {clientSite.projectTitle}
                      </h4>

                      <p className="text-sm text-slate-200 leading-relaxed mb-5">
                        {clientSite.shortDescription}
                      </p>

                      <ul className="space-y-2.5 mb-7">
                        {clientSite.keyFeatures.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-vizora-yellow shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Bar: Launch Live Website + Interactive Preview + Create Mine */}
                    <div className="pt-5 border-t border-white/12 flex flex-col gap-3">
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <a
                          href={clientSite.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-vizora-black bg-vizora-blue hover:bg-vizora-blue-light transition-all shadow-blue-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
                        >
                          <span>Launch Live Website</span>
                          <ArrowUpRight className="w-4 h-4 text-vizora-black" />
                        </a>

                        <button
                          type="button"
                          onClick={() =>
                            onStartProject({
                              profession: clientSite.profession,
                              websiteType: clientSite.preselectWebsiteType,
                              designStyle: clientSite.preselectDesignStyle,
                              projectContext: `I want a website like ${clientSite.projectTitle} (${clientSite.liveUrl})`,
                            })
                          }
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-white bg-white/[0.08] hover:bg-vizora-yellow hover:text-vizora-black border border-vizora-yellow/45 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                          <span>{is3D ? 'Build My 3D Website' : 'Build My Simple Portfolio'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Luxury Comparison Strip: Simple Editorial vs 3D Portfolio */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl luxury-royal-frame border border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-vizora-yellow block mb-1.5">
                Tailored to Your Vision &amp; Ambition
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Want a Clean Editorial Portfolio or a Show-Stopping 3D Experience?
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                As seen in our work for <strong className="text-white">Khadija Farhat</strong>, we
                design both <strong className="text-vizora-yellow">Simple Editorial Portfolios</strong>{' '}
                for crisp, fast bookings and{' '}
                <strong className="text-vizora-yellow">Immersive 3D Motion Websites</strong> that turn
                your portfolio into an unforgettable luxury experience.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() =>
                  onStartProject({
                    websiteType: 'Portfolio website',
                    designStyle: 'Minimal and elegant',
                    projectContext:
                      'Interested in a Simple Editorial Portfolio like https://khadija-portfolio-og.vercel.app/',
                  })
                }
                className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-vizora-black bg-vizora-blue hover:bg-vizora-blue-light transition-colors"
              >
                Choose Simple Portfolio
              </button>
              <button
                type="button"
                onClick={() =>
                  onStartProject({
                    websiteType: '3D interactive portfolio website',
                    designStyle: 'Luxury and editorial',
                    projectContext:
                      'Interested in an Immersive 3D Portfolio like https://khadija-3d-portfolio.vercel.app/',
                  })
                }
                className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-white bg-vizora-purple hover:bg-vizora-purple-light border border-vizora-yellow/40 transition-colors"
              >
                Choose 3D Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* PART 2: 4 MULTI-INDUSTRY INTERACTIVE STUDIO CONCEPT DEMOS             */}
        {/* ===================================================================== */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-8 border-b border-white/15">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-vizora-blue/25 border border-vizora-blue/50 text-vizora-blue-light text-[11px] font-bold uppercase tracking-[0.18em]">
                Multi-Industry Demos
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Interactive Concept Websites Across Professions
              </h3>
            </div>
            <span className="text-xs text-slate-300">
              Models · Makeup Artists · Photographers · Salons &amp; Businesses
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {FEATURED_DEMOS.map((demo) => (
              <article
                key={demo.id}
                className="group rounded-3xl bg-vizora-black-elevated/95 border border-white/12 hover:border-vizora-blue/60 transition-all duration-500 overflow-hidden shadow-editorial-dark flex flex-col justify-between"
              >
                {/* Top Browser Window Preview */}
                <div>
                  <div className="bg-[#0B0A09] px-4 py-3 border-b border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-vizora-blue" />
                      <span className="w-2.5 h-2.5 rounded-full bg-vizora-purple" />
                      <span className="w-2.5 h-2.5 rounded-full bg-vizora-yellow" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono text-slate-300 truncate">
                      <Globe className="w-3 h-3 text-vizora-blue-light shrink-0" />
                      <span className="truncate">{demo.route}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-vizora-yellow/15 border border-vizora-yellow/40 text-[10px] font-mono font-bold text-vizora-yellow shrink-0">
                      {demo.number}
                    </span>
                  </div>

                  {/* Large Visual Website Preview Frame */}
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
                    aria-label={`Open ${demo.projectTitle} live demo`}
                    className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-black"
                  >
                    <img
                      src={demo.heroImage}
                      alt={demo.imageAlt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vizora-black via-vizora-black/25 to-transparent" />

                    {/* Simulated Website Header Overlay */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 px-3.5 py-2 rounded-xl bg-vizora-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between text-[11px]">
                      <span className="font-serif font-bold tracking-wider text-white">
                        {demo.clientConceptName}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-vizora-yellow">
                        {demo.accentTheme}
                      </span>
                    </div>

                    {/* Secondary Thumbnail Inset + Interactive Launch Badge */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-3">
                      <div className="px-3.5 py-2 rounded-xl bg-vizora-black/90 backdrop-blur-md border border-white/15">
                        <span className="block text-[10px] uppercase tracking-widest text-vizora-blue-light font-semibold">
                          {demo.industry}
                        </span>
                        <span className="text-xs font-medium text-white">
                          {demo.websiteType} · Concept Design
                        </span>
                      </div>

                      <div className="hidden sm:block w-24 h-16 rounded-xl overflow-hidden border-2 border-white/30 shadow-xl shrink-0">
                        <img
                          src={demo.secondaryImage}
                          alt={`${demo.projectTitle} secondary view`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details & Dual CTAs */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-vizora-blue/15 border border-vizora-blue/35 text-[11px] font-semibold text-vizora-blue-light">
                        {demo.industry}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-vizora-purple/15 border border-vizora-purple/35 text-[11px] font-semibold text-white">
                        {demo.websiteType}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-vizora-yellow transition-colors">
                      {demo.projectTitle}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {demo.shortDescription}
                    </p>

                    <ul className="space-y-2 mb-7">
                      {demo.designHighlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-vizora-yellow shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dual Action Buttons: View Demo + Create Something Similar */}
                  <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={demo.route}
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenDemo(demo.id);
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-vizora-black bg-vizora-blue hover:bg-vizora-blue-light shadow-blue-glow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
                    >
                      <span>View Demo</span>
                      <ArrowUpRight className="w-4 h-4 text-vizora-black" />
                    </a>

                    <button
                      type="button"
                      onClick={() =>
                        onStartProject({
                          profession: demo.profession,
                          websiteType: demo.preselectWebsiteType,
                          designStyle: demo.preselectDesignStyle,
                          projectContext: `Inspired by ${demo.projectTitle} (${demo.number})`,
                        })
                      }
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-vizora-yellow/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
                    >
                      <span>Create Something Similar</span>
                      <ArrowRight className="w-3.5 h-3.5 text-vizora-yellow" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Live Client Website Modal Preview */}
      {liveModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Live preview of ${liveModalProject.projectTitle}`}
          className="fixed inset-0 z-50 bg-vizora-black/90 backdrop-blur-xl p-3 sm:p-6 flex flex-col"
        >
          <div className="max-w-7xl w-full mx-auto bg-vizora-black-elevated border border-vizora-yellow/40 rounded-3xl overflow-hidden flex flex-col flex-1 shadow-2xl">
            <div className="px-4 sm:px-6 py-3.5 bg-[#0B0A09] border-b border-white/15 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full bg-vizora-yellow text-vizora-black text-[10px] font-bold uppercase tracking-widest">
                  Live Client Website
                </span>
                <span className="font-serif font-bold text-white text-sm sm:text-base">
                  {liveModalProject.projectTitle}
                </span>
                <span className="hidden md:inline text-xs font-mono text-slate-400">
                  ({liveModalProject.liveUrl})
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={liveModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-vizora-blue hover:bg-vizora-blue-light text-vizora-black text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Open Full Screen in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5 text-vizora-black" />
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
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-vizora-yellow text-vizora-black text-xs font-bold uppercase tracking-wider hover:bg-vizora-yellow-soft transition-colors"
                >
                  <span>Build Mine Like This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setLiveModalProject(null)}
                  aria-label="Close live preview"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
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
