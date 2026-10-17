import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Camera, Scissors, MapPin, Clock, Check } from 'lucide-react';
import { WHO_WE_BUILD_FOR } from '../data/vizoraData';
import { DemoRouteId, InquiryPreselection } from '../types';

interface WhoWeBuildForProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
  onOpenDemo: (demoId: DemoRouteId) => void;
}

export const WhoWeBuildFor: React.FC<WhoWeBuildForProps> = ({
  onStartProject,
  onOpenDemo,
}) => {
  const [models, makeup, photographers, salons, fashionCreatives, smallBusinesses] =
    WHO_WE_BUILD_FOR;

  return (
    <section
      id="who-we-help"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-vizora-paper text-vizora-black editorial-grid-lines-light overflow-hidden border-t border-vizora-paper-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vizora-purple/10 border border-vizora-purple/25 mb-5">
            <span className="w-2 h-2 rounded-full bg-vizora-purple" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vizora-purple">
              Who We Build For
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-vizora-black leading-[1.08] mb-5">
            Every Profession Has a Story.{' '}
            <span className="text-blue-purple-gradient">Let&apos;s Give Yours a Website.</span>
          </h2>

          <p className="text-base sm:text-lg text-vizora-paper-muted leading-relaxed">
            A model needs comp-card measurements and editorial galleries; a salon needs treatment
            menus, pricing, and location details. We design each website around the unique visual
            language and client journey of your profession.
          </p>
        </div>

        {/* ROW 1: Asymmetric Editorial Pair — 01 Models (7 cols) + 02 Makeup Artists (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* 1. Models & Fashion Creators — Dark Editorial Comp-Card Spread */}
          <div className="lg:col-span-7 rounded-3xl bg-vizora-black text-white overflow-hidden shadow-editorial-light border border-vizora-black flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
              <div className="sm:col-span-6 relative min-h-[320px] sm:min-h-full">
                <img
                  src={models.image}
                  alt={models.imageAlt}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vizora-black via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-vizora-black/90" />
                {/* Comp-Card Overlay Spec Sheet */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-vizora-black/90 backdrop-blur-md border border-white/15">
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-vizora-yellow font-semibold mb-1.5">
                    Built-In Digital Comp Card Element
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                    <div className="bg-white/[0.06] px-2 py-1 rounded">
                      <span className="text-slate-400 block">HEIGHT</span>
                      <span className="font-semibold text-white">5&apos;11&quot; / 180</span>
                    </div>
                    <div className="bg-white/[0.06] px-2 py-1 rounded">
                      <span className="text-slate-400 block">EYES</span>
                      <span className="font-semibold text-white">Hazel Green</span>
                    </div>
                    <div className="bg-white/[0.06] px-2 py-1 rounded">
                      <span className="text-slate-400 block">SHOE</span>
                      <span className="font-semibold text-white">39 EU</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] font-mono uppercase tracking-[0.22em] text-vizora-yellow mb-2">
                    01 · FASHION &amp; RUNWAY
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                    {models.title}
                  </h3>
                  <p className="text-xs text-vizora-blue-light font-medium mb-3">
                    {models.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {models.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {models.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-vizora-yellow shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      onStartProject({
                        profession: models.profession,
                        websiteType: models.websiteType,
                        designStyle: models.designStyle,
                      })
                    }
                    className="w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-white bg-vizora-blue hover:bg-vizora-blue-light transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Build Model Portfolio</span>
                    <ArrowRight className="w-3.5 h-3.5 text-vizora-yellow" />
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://khadija-portfolio-og.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-full text-[11px] font-semibold uppercase tracking-wider text-vizora-yellow bg-white/[0.06] hover:bg-white/[0.12] border border-vizora-yellow/35 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Simple Live Site</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href="https://khadija-3d-portfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white bg-vizora-purple/30 hover:bg-vizora-purple border border-vizora-purple/50 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>3D Live Site</span>
                      <ArrowUpRight className="w-3 h-3 text-vizora-yellow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Makeup Artists & Beauty Professionals — Luminous Ivory & Plum Editorial Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white border-2 border-vizora-purple/20 shadow-editorial-light overflow-hidden flex flex-col justify-between">
            <div className="relative h-60 overflow-hidden">
              <img
                src={makeup.image}
                alt={makeup.imageAlt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vizora-black/75 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-vizora-purple text-white text-[10px] font-bold uppercase tracking-widest">
                02 · Bridal &amp; Editorial MUA
              </div>
              {/* Simulated Package Pill on Image */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/95 text-vizora-black text-xs shadow-md">
                <span className="font-serif font-bold">Bridal &amp; Event Packages</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-vizora-purple">
                  Before / After + Inquiry
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-vizora-black mb-1.5">
                  {makeup.title}
                </h3>
                <p className="text-xs font-semibold text-vizora-purple mb-3">
                  {makeup.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-vizora-paper-muted leading-relaxed mb-4">
                  {makeup.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {makeup.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-vizora-black">
                      <Sparkles className="w-3.5 h-3.5 text-vizora-purple shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-vizora-paper-border flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    onStartProject({
                      profession: makeup.profession,
                      websiteType: makeup.websiteType,
                      designStyle: makeup.designStyle,
                    })
                  }
                  className="flex-1 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-white bg-vizora-purple hover:bg-vizora-purple-deep transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Build Makeup Website</span>
                  <ArrowRight className="w-3.5 h-3.5 text-vizora-yellow" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenDemo('makeup-artist')}
                  className="py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-vizora-black bg-vizora-paper hover:bg-vizora-paper-warm border border-vizora-paper-border transition-colors inline-flex items-center gap-1"
                >
                  <span>Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-vizora-purple" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Full-Bleed Cinema Showcase — 03 Photographers & Videographers */}
        <div className="rounded-3xl bg-[#0B0B13] text-white border border-vizora-black/15 shadow-editorial-light overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-vizora-yellow mb-3">
                  <Camera className="w-3.5 h-3.5 text-vizora-blue-light" />
                  <span>03 · VISUAL STORYTELLERS</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
                  {photographers.title}
                </h3>
                <p className="text-xs sm:text-sm text-vizora-blue-light font-medium mb-4">
                  {photographers.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {photographers.description}
                </p>

                {/* Category Filter Pills Preview */}
                <div className="mb-6">
                  <span className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2">
                    Example Portfolio Gallery Structure:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Fashion Editorial', 'Portraiture', 'Commercial Campaigns', 'Motion & Film', 'Studio Lighting'].map(
                      (tag, i) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${
                            i === 0
                              ? 'bg-vizora-blue text-white'
                              : 'bg-white/[0.06] text-slate-300 border border-white/10'
                          }`}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onStartProject({
                      profession: photographers.profession,
                      websiteType: photographers.websiteType,
                      designStyle: photographers.designStyle,
                    })
                  }
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-white bg-vizora-blue hover:bg-vizora-blue-light transition-colors"
                >
                  <span>Build Photography Website</span>
                  <ArrowRight className="w-3.5 h-3.5 text-vizora-yellow" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenDemo('photographer')}
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-white bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 transition-colors"
                >
                  <span>{photographers.demoLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-vizora-yellow" />
                </button>
              </div>
            </div>

            {/* Dual Frame Contact-Sheet Visual Composition (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 bg-black">
              <div className="relative min-h-[260px] sm:min-h-[340px] border-b sm:border-b-0 sm:border-r border-white/10 overflow-hidden group">
                <img
                  src={photographers.image}
                  alt={photographers.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-slate-200 border border-white/10">
                  SERIES 01 · ARCHITECTURAL FASHION
                </div>
              </div>
              <div className="relative min-h-[260px] sm:min-h-[340px] overflow-hidden group">
                <img
                  src={photographers.secondaryImage}
                  alt="Monochrome portrait study in photographer portfolio"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-vizora-yellow border border-white/10">
                  SERIES 02 · MONOCHROME STUDY
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: Three Distinct Editorial Layouts — 04 Salons, 05 Fashion Creatives, 06 Small Businesses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 4. Salons & Beauty Studios — Architectural Service Menu Layout (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-vizora-paper-border shadow-editorial-light overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-52 overflow-hidden">
                <img
                  src={salons.image}
                  alt={salons.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-vizora-black/85 text-vizora-yellow text-[10px] font-mono uppercase tracking-wider">
                  04 · SALONS &amp; STUDIOS
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-vizora-black mb-1">
                  {salons.title}
                </h3>
                <p className="text-xs font-semibold text-vizora-blue mb-3">
                  {salons.subtitle}
                </p>
                <p className="text-xs text-vizora-paper-muted leading-relaxed mb-4">
                  {salons.description}
                </p>

                {/* Simulated Service Menu Preview Box */}
                <div className="p-3.5 rounded-2xl bg-vizora-paper border border-vizora-paper-border mb-4">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 pb-2 mb-2 border-b border-vizora-paper-border">
                    <span className="flex items-center gap-1">
                      <Scissors className="w-3 h-3 text-vizora-blue" />
                      Service Menu Preview
                    </span>
                    <span>Booking Ready</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="font-medium text-vizora-black">Signature Facial &amp; Glow</span>
                      <span className="font-mono text-slate-600">60 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-vizora-black">Couture Blowout &amp; Style</span>
                      <span className="font-mono text-slate-600">45 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-vizora-paper-border flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  onStartProject({
                    profession: salons.profession,
                    websiteType: salons.websiteType,
                    designStyle: salons.designStyle,
                  })
                }
                className="flex-1 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-vizora-blue hover:bg-vizora-blue-deep transition-colors text-center"
              >
                Build Salon Site
              </button>
              <button
                type="button"
                onClick={() => onOpenDemo('beauty-studio')}
                className="py-3 px-3.5 rounded-full text-xs font-semibold text-vizora-black bg-vizora-paper hover:bg-vizora-paper-warm border border-vizora-paper-border transition-colors inline-flex items-center gap-1"
              >
                <span>Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-vizora-blue" />
              </button>
            </div>
          </div>

          {/* 5. Fashion & Creative Professionals — Atelier Lookbook Layout (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-vizora-black text-white border border-vizora-purple/40 shadow-editorial-light overflow-hidden flex flex-col justify-between">
            <div>
              <div className="p-6 pb-4">
                <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-vizora-yellow mb-2">
                  05 · CREATIVE DIRECTION
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  {fashionCreatives.title}
                </h3>
                <p className="text-xs text-vizora-purple-light font-medium mb-3">
                  {fashionCreatives.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {fashionCreatives.description}
                </p>
              </div>

              <div className="px-6">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-white/15">
                  <img
                    src={fashionCreatives.image}
                    alt={fashionCreatives.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-vizora-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-[10px]">
                    <span className="text-white font-medium">Lookbooks · Styling · Press Kit</span>
                    <span className="text-vizora-yellow">Editorial Grid</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-5 mt-4 border-t border-white/10 flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  onStartProject({
                    profession: fashionCreatives.profession,
                    websiteType: fashionCreatives.websiteType,
                    designStyle: fashionCreatives.designStyle,
                  })
                }
                className="flex-1 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-vizora-purple hover:bg-vizora-purple-light transition-colors text-center"
              >
                Build Creative Site
              </button>
              <button
                type="button"
                onClick={() => onOpenDemo('model-portfolio')}
                className="py-3 px-3.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 transition-colors inline-flex items-center gap-1"
              >
                <span>Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-vizora-yellow" />
              </button>
            </div>
          </div>

          {/* 6. Small Businesses — Storefront & Business Vitrine Layout (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-vizora-paper-border shadow-editorial-light overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-52 overflow-hidden">
                <img
                  src={smallBusinesses.image}
                  alt={smallBusinesses.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-vizora-blue text-white text-[10px] font-mono uppercase tracking-wider">
                  06 · SMALL BUSINESSES
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-vizora-black mb-1">
                  {smallBusinesses.title}
                </h3>
                <p className="text-xs font-semibold text-vizora-blue mb-3">
                  {smallBusinesses.subtitle}
                </p>
                <p className="text-xs text-vizora-paper-muted leading-relaxed mb-4">
                  {smallBusinesses.description}
                </p>

                {/* Simulated Business Info Block */}
                <div className="p-3.5 rounded-2xl bg-vizora-paper border border-vizora-paper-border space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-vizora-black font-medium">
                    <MapPin className="w-3.5 h-3.5 text-vizora-blue shrink-0" />
                    <span>Studio Location, Map &amp; Directions</span>
                  </div>
                  <div className="flex items-center gap-2 text-vizora-black font-medium">
                    <Clock className="w-3.5 h-3.5 text-vizora-purple shrink-0" />
                    <span>Service Descriptions, Hours &amp; Direct Contact</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-vizora-paper-border flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  onStartProject({
                    profession: smallBusinesses.profession,
                    websiteType: smallBusinesses.websiteType,
                    designStyle: smallBusinesses.designStyle,
                  })
                }
                className="flex-1 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-vizora-black hover:bg-vizora-blue transition-colors text-center"
              >
                Build Business Site
              </button>
              <button
                type="button"
                onClick={() => onOpenDemo('beauty-studio')}
                className="py-3 px-3.5 rounded-full text-xs font-semibold text-vizora-black bg-vizora-paper hover:bg-vizora-paper-warm border border-vizora-paper-border transition-colors inline-flex items-center gap-1"
              >
                <span>Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-vizora-blue" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
