import React, { useState } from 'react';
import { Camera, ArrowUpRight, Aperture, Film, CheckCircle2 } from 'lucide-react';
import { DemoToolbar } from './DemoToolbar';
import { DemoRouteId, InquiryPreselection } from '../types';

interface PhotographerDemoProps {
  onBackToStudio: () => void;
  onSelectDemo: (demoId: DemoRouteId) => void;
  onCreateSimilar: (preselection: InquiryPreselection) => void;
}

export const PhotographerDemo: React.FC<PhotographerDemoProps> = ({
  onBackToStudio,
  onSelectDemo,
  onCreateSimilar,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'fashion' | 'monochrome' | 'architectural'
  >('all');
  const [activeProjectDetails, setActiveProjectDetails] = useState<string | null>('p1');
  const [commissionSubmitted, setCommissionSubmitted] = useState(false);

  const projects = [
    {
      id: 'p1',
      number: 'SERIES 01',
      title: 'Chiaroscuro in Concrete — Autumn Tailoring Study',
      category: 'fashion',
      format: 'Medium Format Digital · 100MP',
      lighting: 'Single Hard Fresnel Key + Cobalt Ambient Fill',
      location: 'Berlin Loft Studio',
      image: '/images/photographer-editorial.jpg',
      summary:
        'A study of sculptural tailoring and sharp architectural shadow across raw industrial concrete.',
    },
    {
      id: 'p2',
      number: 'SERIES 02',
      title: 'The Painter’s North Light — Monochrome Portrait Monograph',
      category: 'monochrome',
      format: 'Silver Gelatin Inspired B&W · 80mm Planar',
      lighting: 'Natural North-Facing Window Daylight',
      location: 'Copenhagen Atelier',
      image: '/images/photographer-study.jpg',
      summary:
        'Intimate environmental portraiture documenting artists inside their working studios.',
    },
    {
      id: 'p3',
      number: 'SERIES 03',
      title: 'Travertine Arches & Cobalt Form',
      category: 'architectural',
      format: 'Medium Format · Tilt-Shift 45mm',
      lighting: 'Late Afternoon Direct Sun Beam',
      location: 'Milan Modernist Colonnade',
      image: '/images/model-campaign.jpg',
      summary:
        'Exploring scale, geometry, and bold color blocks inside monumental stone architecture.',
    },
    {
      id: 'p4',
      number: 'SERIES 04',
      title: 'Obsidian & Silk Editorial Portrait',
      category: 'fashion',
      format: 'Studio Medium Format · 110mm f/2',
      lighting: 'Soft Octabank Key + Rim Accent',
      location: 'Paris Studio B',
      image: '/images/model-editorial.jpg',
      summary:
        'Lookbook and print campaign portraiture crafted for luxury fashion houses and designers.',
    },
  ];

  const visibleProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0B0A09] text-white font-sans">
      <DemoToolbar
        currentDemoId="photographer"
        onBackToStudio={onBackToStudio}
        onSelectDemo={onSelectDemo}
        onCreateSimilar={onCreateSimilar}
      />

      {/* Minimalist Gallery Header */}
      <header className="border-b border-white/10 px-4 sm:px-8 py-6 bg-[#0B0A09]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Aperture className="w-6 h-6 text-vizora-blue-light" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-vizora-yellow block">
                VIZORA CONCEPT DEMO 03 · PHOTOGRAPHER PORTFOLIO
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.15em] uppercase">
                SOREN LINDQVIST STUDIO
              </h1>
            </div>
          </div>

          <nav aria-label="Photographer Demo Navigation" className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-[0.18em] text-slate-300">
            <a href="#photo-series" className="hover:text-vizora-yellow transition-colors">
              Selected Series
            </a>
            <a href="#photo-specs" className="hover:text-vizora-yellow transition-colors">
              Specialties
            </a>
            <a
              href="#photo-booking"
              className="px-4 py-2 rounded-full bg-white text-vizora-black font-bold hover:bg-vizora-yellow transition-colors"
            >
              Commission &amp; Booking
            </a>
          </nav>
        </div>
      </header>

      {/* Full-Width Cinema Visual Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-16">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black">
          <img
            src="/images/photographer-editorial.jpg"
            alt="Full-width fashion and architectural photography hero composition"
            className="w-full h-[460px] sm:h-[580px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/35 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-vizora-black/80 border border-vizora-yellow/40 text-vizora-yellow text-[10px] font-mono uppercase tracking-[0.22em] mb-3">
                Fashion · Portraiture · Architectural Commissions
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.06]">
                Light, Shadow &amp; Medium-Format Precision.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#photo-booking"
                className="px-6 py-3.5 rounded-full bg-vizora-blue hover:bg-vizora-blue-light text-vizora-black text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Request Production Brief
              </a>
              <button
                type="button"
                onClick={() =>
                  onCreateSimilar({
                    profession: 'Photographer or videographer',
                    websiteType: 'Portfolio website',
                    designStyle: 'Minimal and elegant',
                    projectContext:
                      'Build a photographer portfolio website like Soren Lindqvist (Demo 03)',
                  })
                }
                className="px-6 py-3.5 rounded-full bg-vizora-yellow text-vizora-black text-xs font-bold uppercase tracking-widest hover:bg-vizora-yellow-soft transition-colors"
              >
                Build My Photo Portfolio With Vizora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects & Image Categories */}
      <section id="photo-series" className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-vizora-blue-light block mb-2">
              EXHIBITION ARCHIVE &amp; SERIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Categorized Project Galleries
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: 'all', label: 'All Commissions' },
                { id: 'fashion', label: 'Fashion Editorial' },
                { id: 'monochrome', label: 'Monochrome Studies' },
                { id: 'architectural', label: 'Architectural Space' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                  selectedCategory === tab.id
                    ? 'bg-vizora-blue text-vizora-black font-bold'
                    : 'bg-white/[0.05] text-slate-300 hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {visibleProjects.map((proj) => {
            const isExpanded = activeProjectDetails === proj.id;
            return (
              <article
                key={proj.id}
                className="rounded-3xl bg-[#13110F] border border-white/10 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-black">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-vizora-yellow mb-3">
                        <span>{proj.number}</span>
                        <span className="uppercase">{proj.category}</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {proj.summary}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveProjectDetails(isExpanded ? null : proj.id)
                        }
                        className="text-xs font-mono uppercase tracking-wider text-vizora-blue-light hover:text-vizora-yellow mb-4 inline-flex items-center gap-1"
                      >
                        <span>
                          {isExpanded ? 'Hide Technical Specs' : 'Inspect Technical Project Details'}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {isExpanded && (
                        <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2 text-xs font-mono">
                          <div className="flex justify-between">
                            <span className="text-slate-400">CAMERA / FORMAT:</span>
                            <span className="text-white">{proj.format}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">LIGHTING SETUP:</span>
                            <span className="text-white">{proj.lighting}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">LOCATION:</span>
                            <span className="text-vizora-yellow">{proj.location}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <a
                        href="#photo-booking"
                        className="text-xs font-bold uppercase tracking-widest text-white hover:text-vizora-yellow"
                      >
                        Request Similar Shoot →
                      </a>
                      <span className="text-[11px] font-mono text-slate-400">
                        Vizora Concept Gallery
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Specialties & Production Booking Inquiry */}
      <section id="photo-specs" className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div
          id="photo-booking"
          className="p-8 sm:p-12 rounded-3xl bg-[#141210] border border-vizora-blue/40 grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-5">
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-vizora-yellow block mb-2">
              PRODUCTION &amp; BOOKING INQUIRY
            </span>
            <h3 className="font-serif text-3xl font-bold text-white mb-3">
              Commission a Shoot or Request Day Rates
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              See how Vizora equips photographers and videographers with structured production
              briefs for fashion lookbooks, portrait sessions, and commercial campaigns.
            </p>
            <div className="space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-vizora-blue-light" />
                <span>Editorial &amp; Commercial Still Photography</span>
              </div>
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-vizora-purple-light" />
                <span>4K Motion &amp; Campaign Director’s Cuts</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {commissionSubmitted ? (
              <div className="p-6 rounded-2xl bg-vizora-blue/15 border border-vizora-blue">
                <div className="flex items-center gap-2 font-serif text-xl font-bold text-white mb-2">
                  <CheckCircle2 className="w-5 h-5 text-vizora-yellow" />
                  <span>Sample Photography Commission Preview Complete</span>
                </div>
                <p className="text-xs text-slate-200 mb-4">
                  Want a photography or videography website with this level of visual impact?
                </p>
                <button
                  type="button"
                  onClick={() =>
                    onCreateSimilar({
                      profession: 'Photographer or videographer',
                      websiteType: 'Portfolio website',
                      designStyle: 'Minimal and elegant',
                    })
                  }
                  className="px-6 py-3 rounded-full bg-vizora-yellow text-vizora-black text-xs font-bold uppercase tracking-wider"
                >
                  Build My Photography Website With Vizora →
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCommissionSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Producer / Client Name"
                    className="px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs text-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Contact Email"
                    className="px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Project Scope (Lookbook, Campaign, Portrait Series, Video)"
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs text-white"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-vizora-blue hover:bg-vizora-blue-light text-white text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Test Commission Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
