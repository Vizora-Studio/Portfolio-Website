import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Globe, Layout, Sparkles, Box, Layers } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { DemoRouteId, InquiryPreselection } from '../types';

interface HeroProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
  onExploreWork: () => void;
  onOpenDemo: (demoId: DemoRouteId) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreWork,
  onOpenDemo,
}) => {
  const [activePreview, setActivePreview] = useState<
    'khadija-3d' | 'khadija-classic' | 'makeup' | 'business'
  >('khadija-3d');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-luxury-obsidian editorial-grid-lines"
    >
      {/* 3D Three.js Background with Royal Blue, Purple & Selective Yellow */}
      <Hero3DCanvas />

      {/* Controlled Ambient Royal-Blue, Purple & Selective Yellow Lighting */}
      <div
        className="absolute -top-28 -left-32 w-[540px] h-[540px] bg-vizora-blue/22 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-32 w-[560px] h-[560px] bg-vizora-purple/22 rounded-full blur-[170px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[640px] h-[160px] bg-vizora-yellow/[0.06] rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto pt-3 lg:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Editorial Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Supporting Service Line Pill with Luxury Gold Accent */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-vizora-yellow/35 shadow-yellow-glow mb-6 animate-reveal-up">
              <span className="w-2 h-2 rounded-full bg-vizora-yellow animate-pulse" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-vizora-yellow">
                Bespoke Portfolio · 3D Interactive · Business Websites
              </span>
            </div>

            {/* Actual Vizora Logo Signature Luxury Plaque */}
            <div className="mb-7 inline-flex items-center gap-4 p-3 pr-6 rounded-2xl luxury-royal-frame border border-white/15">
              <div className="h-14 sm:h-16 px-3 py-1.5 rounded-xl bg-[#FAF9F5] border-2 border-vizora-yellow/60 shadow-[0_0_25px_-5px_rgba(255,214,41,0.35)] flex items-center justify-center shrink-0">
                <img
                  src="/assets/vizora-logo-original.jpeg"
                  alt="VIZORA Creative Web Design Studio Logo"
                  className="h-full w-auto object-contain block"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-vizora-yellow">
                    VIZORA LUXURY DIGITAL STUDIO
                  </span>
                </div>
                <p className="font-serif italic text-sm sm:text-base text-white leading-snug mt-0.5">
                  “Your Vision. Your Website. Your Next Opportunity.”
                </p>
                <span className="text-[11px] text-slate-300 mt-0.5">
                  Classic Editorial Portfolios · 3D Motion Flagships · Business Websites
                </span>
              </div>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[3.95rem] font-bold tracking-tight text-white leading-[1.06] mb-6">
              Your Talent Deserves a{' '}
              <span className="relative inline-block">
                <span className="text-blue-purple-gradient">Website</span>
                <span
                  className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-gradient-to-r from-vizora-blue via-vizora-yellow to-vizora-purple rounded-full"
                  aria-hidden="true"
                />
              </span>{' '}
              as Exceptional as You.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal mb-7">
              We craft luxury editorial websites, immersive 3D portfolio experiences, and
              high-converting business websites for models, makeup artists, photographers, salons,
              and ambitious brands ready to captivate clients at first glance.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-7">
              <button
                type="button"
                onClick={() => onStartProject()}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-vizora-black bg-vizora-blue hover:bg-vizora-blue-light shadow-blue-glow border border-vizora-yellow/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
              >
                <span className="w-2 h-2 rounded-full bg-vizora-black" aria-hidden="true" />
                <span>Let&apos;s Build Your Website</span>
                <ArrowRight className="w-4 h-4 text-vizora-black transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white bg-white/[0.06] hover:bg-white/[0.12] border border-vizora-yellow/40 hover:border-vizora-yellow transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
              >
                <Layout className="w-4 h-4 text-vizora-yellow" />
                <span>Explore Live Client Work</span>
              </button>
            </div>

            {/* Direct Live Client Proof Strip */}
            <div className="w-full p-3.5 rounded-2xl bg-vizora-black-elevated/95 border border-white/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-full bg-vizora-yellow/15 border border-vizora-yellow/40 text-[10px] font-mono font-bold uppercase tracking-wider text-vizora-yellow shrink-0">
                  LIVE CLIENT WORK
                </span>
                <span className="text-xs text-slate-200 font-medium">
                  Explore both editions we built for model <strong className="text-white">Khadija Farhat</strong>:
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://khadija-portfolio-og.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-vizora-blue hover:text-vizora-black border border-vizora-blue/45 text-[11px] font-semibold text-white transition-colors"
                >
                  <span>1. Simple Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-vizora-yellow" />
                </a>
                <a
                  href="https://khadija-3d-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-vizora-purple/30 hover:bg-vizora-purple border border-vizora-purple/50 text-[11px] font-semibold text-white transition-colors"
                >
                  <span>2. 3D Portfolio</span>
                  <ArrowUpRight className="w-3 h-3 text-vizora-yellow" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Live Client & Concept Website Compositions (6 cols) */}
          <div className="lg:col-span-6 relative">
            {/* Ambient Backlight Behind Previews */}
            <div
              className="absolute inset-2 bg-gradient-to-tr from-vizora-blue/25 via-vizora-purple/25 to-vizora-yellow/10 rounded-3xl blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Interactive Preview Switcher Tabs */}
            <div className="relative z-20 flex flex-wrap items-center justify-between gap-1.5 mb-3.5 bg-vizora-black-elevated/95 backdrop-blur-xl border border-white/15 p-1.5 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 w-full">
                <button
                  type="button"
                  onClick={() => setActivePreview('khadija-3d')}
                  className={`px-2.5 py-2 rounded-xl text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 ${
                    activePreview === 'khadija-3d'
                      ? 'bg-vizora-blue text-vizora-black shadow-blue-glow border border-vizora-yellow/50'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Box className="w-3 h-3 shrink-0" />
                  <span className="truncate">Khadija 3D</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActivePreview('khadija-classic')}
                  className={`px-2.5 py-2 rounded-xl text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 ${
                    activePreview === 'khadija-classic'
                      ? 'bg-vizora-blue text-vizora-black shadow-blue-glow border border-vizora-yellow/50'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Layers className="w-3 h-3 shrink-0" />
                  <span className="truncate">Khadija Simple</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActivePreview('makeup')}
                  className={`px-2.5 py-2 rounded-xl text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all ${
                    activePreview === 'makeup'
                      ? 'bg-vizora-purple text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Makeup Artist
                </button>
                <button
                  type="button"
                  onClick={() => setActivePreview('business')}
                  className={`px-2.5 py-2 rounded-xl text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-all ${
                    activePreview === 'business'
                      ? 'bg-vizora-blue text-vizora-black shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Business Site
                </button>
              </div>
            </div>

            {/* Layered Dimensional Website Stack */}
            <div className="relative pt-1 pb-6">
              <div className="relative rounded-2xl overflow-hidden bg-vizora-black-card border border-vizora-yellow/35 transition-all duration-500 luxury-double-border">
                {/* Browser Top Bar */}
                <div className="bg-[#0F0D0B] px-4 py-2.5 border-b border-white/12 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-vizora-blue" />
                    <span className="w-2.5 h-2.5 rounded-full bg-vizora-purple" />
                    <span className="w-2.5 h-2.5 rounded-full bg-vizora-yellow" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] text-slate-200 font-mono truncate">
                    <Globe className="w-3 h-3 text-vizora-yellow shrink-0" />
                    <span className="truncate">
                      {activePreview === 'khadija-3d' && 'https://khadija-3d-portfolio.vercel.app'}
                      {activePreview === 'khadija-classic' && 'https://khadija-portfolio-og.vercel.app'}
                      {activePreview === 'makeup' && 'atelierelara.beauty — Bridal & Editorial MUA'}
                      {activePreview === 'business' && 'maisonlumiere.salon — Beauty Studio'}
                    </span>
                  </div>

                  {activePreview === 'khadija-3d' || activePreview === 'khadija-classic' ? (
                    <a
                      href={
                        activePreview === 'khadija-3d'
                          ? 'https://khadija-3d-portfolio.vercel.app/'
                          : 'https://khadija-portfolio-og.vercel.app/'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-vizora-yellow text-vizora-black text-[10px] font-bold uppercase tracking-wider hover:bg-vizora-yellow-soft transition-colors shrink-0"
                    >
                      <span>Visit Live</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        onOpenDemo(activePreview === 'makeup' ? 'makeup-artist' : 'beauty-studio')
                      }
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-vizora-yellow hover:underline shrink-0"
                    >
                      <span>Open Demo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* PREVIEW 1: Khadija 3D Portfolio (Live Client Website) */}
                {activePreview === 'khadija-3d' && (
                  <div className="bg-[#0C0B09] text-white">
                    <a
                      href="https://khadija-3d-portfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/10] overflow-hidden group bg-black"
                    >
                      <img
                        src="/images/khadija/khadija-3d-website-preview.jpg"
                        alt="Khadija Farhat Live 3D Portfolio Website Screenshot"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vizora-black via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-vizora-black/90 backdrop-blur-md border border-vizora-yellow/50 text-[10px] font-bold uppercase tracking-widest text-vizora-yellow flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-vizora-yellow" />
                        <span>Live Client Flagship · 3D &amp; Motion</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-vizora-black/90 backdrop-blur-md border border-white/15">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-vizora-yellow block">
                            KHADIJA FARHAT · 3D SPATIAL PORTFOLIO
                          </span>
                          <span className="text-xs font-medium text-white">
                            360° 3D Orbit Carousel · Motion Reels · Couture Series
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-vizora-blue text-vizora-black text-[11px] font-bold uppercase tracking-wider shrink-0">
                          <span>Launch Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </a>
                  </div>
                )}

                {/* PREVIEW 2: Khadija Simple Editorial Portfolio (Live Client Website) */}
                {activePreview === 'khadija-classic' && (
                  <div className="bg-[#0C0B09] text-white">
                    <a
                      href="https://khadija-portfolio-og.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[16/10] overflow-hidden group bg-black"
                    >
                      <img
                        src="/images/khadija/khadija-og-website-preview.jpg"
                        alt="Khadija Farhat Live Simple Editorial Model Portfolio Website Screenshot"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vizora-black via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-vizora-black/90 backdrop-blur-md border border-vizora-yellow/50 text-[10px] font-bold uppercase tracking-widest text-vizora-yellow flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-vizora-yellow" />
                        <span>Live Client Website · Simple Editorial</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl bg-vizora-black/90 backdrop-blur-md border border-white/15">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-vizora-yellow block">
                            KHADIJA FARHAT · CLASSIC MODEL PORTFOLIO
                          </span>
                          <span className="text-xs font-medium text-white">
                            Editorial Bio · Selected Work · Bridal &amp; Fashion Bookings
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-vizora-blue text-vizora-black text-[11px] font-bold uppercase tracking-wider shrink-0">
                          <span>Launch Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </a>
                  </div>
                )}

                {/* PREVIEW 3: Makeup Artist Concept Demo */}
                {activePreview === 'makeup' && (
                  <div className="grid grid-cols-12 bg-[#FAF8F5] text-vizora-black">
                    <div className="col-span-7 p-5 sm:p-6 flex flex-col justify-between border-r border-black/10">
                      <div>
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-slate-500 mb-4 pb-2 border-b border-black/10">
                          <span className="font-serif text-vizora-black font-bold">ATELIER ELARA</span>
                          <span>Bridal · Editorial · Packages</span>
                        </div>
                        <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-vizora-purple font-bold mb-1.5">
                          Bridal &amp; Editorial Makeup Artist
                        </span>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-2 text-vizora-black">
                          Luminous Skin &amp; Couture Bridal Artistry
                        </h2>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          Includes bridal beauty packages, transformation galleries, and date
                          availability inquiry forms.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-black/10">
                        <div className="bg-black/[0.04] p-2 rounded-lg">
                          <span className="block text-[9px] uppercase text-slate-500">
                            Signature Menu
                          </span>
                          <span className="text-xs font-semibold text-vizora-black">
                            Bridal &amp; Red Carpet
                          </span>
                        </div>
                        <div className="bg-vizora-purple text-white p-2 rounded-lg flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => onOpenDemo('makeup-artist')}
                            className="text-xs font-semibold flex items-center gap-1 w-full justify-between"
                          >
                            <span>View MUA Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-vizora-yellow" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 relative min-h-[260px] sm:min-h-[300px]">
                      <img
                        src="/images/makeup-bridal.jpg"
                        alt="Premium makeup artist website preview featuring bridal beauty portrait"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute bottom-3 left-3 right-3 px-2.5 py-1.5 rounded-lg bg-vizora-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-[10px] text-white">
                        <span className="font-medium">03 / Makeup Artist Site</span>
                        <span className="text-vizora-yellow">Concept Demo</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* PREVIEW 4: Business Website Concept Demo */}
                {activePreview === 'business' && (
                  <div className="grid grid-cols-12 bg-[#141210] text-white">
                    <div className="col-span-7 p-5 sm:p-6 flex flex-col justify-between border-r border-white/10">
                      <div>
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-4 pb-2 border-b border-white/10">
                          <span className="font-serif text-white font-bold">MAISON LUMIÈRE</span>
                          <span>Treatments · Pricing · Visit</span>
                        </div>
                        <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-vizora-yellow mb-1.5">
                          Salon &amp; Small Business Website
                        </span>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-2">
                          Architectural Hair &amp; Dermal Studio
                        </h2>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          Complete business website with categorized service menus, studio hours,
                          location details, and client appointment requests.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
                        <div className="bg-white/[0.05] p-2 rounded-lg">
                          <span className="block text-[9px] uppercase text-slate-400">
                            Business Features
                          </span>
                          <span className="text-xs font-semibold text-white">
                            Service Menu &amp; Booking
                          </span>
                        </div>
                        <div className="bg-vizora-blue text-white p-2 rounded-lg flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => onOpenDemo('beauty-studio')}
                            className="text-xs font-semibold flex items-center gap-1 w-full justify-between"
                          >
                            <span>View Studio Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-vizora-yellow" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 relative min-h-[260px] sm:min-h-[300px]">
                      <img
                        src="/images/beauty-salon.jpg"
                        alt="Professional beauty studio business website preview"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute bottom-3 left-3 right-3 px-2.5 py-1.5 rounded-lg bg-vizora-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-[10px] text-white">
                        <span className="font-medium">04 / Business Website</span>
                        <span className="text-vizora-yellow">Concept Demo</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dual Live Client Showcase Cards Below Main Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3.5 relative z-30">
                {/* Live Client Card 1: Khadija Simple Editorial Portfolio */}
                <a
                  href="https://khadija-portfolio-og.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-left p-3.5 rounded-xl bg-vizora-black-elevated/95 border border-vizora-blue/40 hover:border-vizora-yellow transition-all duration-300 flex items-center gap-3.5 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
                >
                  <img
                    src="/images/khadija/khadija-emerald-dupatta-portrait.jpg"
                    alt="Khadija Farhat Simple Editorial Model Portfolio"
                    className="w-14 h-14 rounded-lg object-cover object-top shrink-0 border border-vizora-yellow/40"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-vizora-yellow">
                        Client Site 01 · Simple Portfolio
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-vizora-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p className="font-serif text-sm font-semibold text-white truncate mt-0.5">
                      Khadija — Editorial Model Site
                    </p>
                    <p className="text-[11px] text-slate-300 font-mono truncate">
                      khadija-portfolio-og.vercel.app
                    </p>
                  </div>
                </a>

                {/* Live Client Card 2: Khadija 3D Portfolio */}
                <a
                  href="https://khadija-3d-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-left p-3.5 rounded-xl bg-vizora-black-elevated/95 border border-vizora-purple/50 hover:border-vizora-yellow transition-all duration-300 flex items-center gap-3.5 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
                >
                  <img
                    src="/images/khadija/khadija-red-saree-runway.jpg"
                    alt="Khadija Farhat 3D Interactive Model Portfolio"
                    className="w-14 h-14 rounded-lg object-cover object-top shrink-0 border border-vizora-yellow/40"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-vizora-purple-light">
                        Client Site 02 · 3D Portfolio
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-vizora-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p className="font-serif text-sm font-semibold text-white truncate mt-0.5">
                      Khadija — 3D &amp; Motion Flagship
                    </p>
                    <p className="text-[11px] text-slate-300 font-mono truncate">
                      khadija-3d-portfolio.vercel.app
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Capability Ribbon + Scroll Indicator */}
      <div className="relative z-10 pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto w-full text-[11px] uppercase tracking-[0.2em] text-slate-300">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-vizora-blue" />
            <span>Classic Editorial Portfolios</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-vizora-purple" />
            <span>Immersive 3D WebGL Portfolios</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-vizora-yellow" />
            <span>High-Converting Business Websites</span>
          </span>
        </div>

        <a
          href="#work"
          className="inline-flex items-center gap-2 text-vizora-yellow hover:underline font-bold"
        >
          <span>See Live Client Websites Below</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
