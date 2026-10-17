import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Ruler, Sparkles } from 'lucide-react';
import { DemoToolbar } from './DemoToolbar';
import { DemoRouteId, InquiryPreselection } from '../types';

interface ModelPortfolioDemoProps {
  onBackToStudio: () => void;
  onSelectDemo: (demoId: DemoRouteId) => void;
  onCreateSimilar: (preselection: InquiryPreselection) => void;
}

export const ModelPortfolioDemo: React.FC<ModelPortfolioDemoProps> = ({
  onBackToStudio,
  onSelectDemo,
  onCreateSimilar,
}) => {
  const [unitSystem, setUnitSystem] = useState<'imperial' | 'metric'>('metric');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'runway' | 'editorial' | 'campaign'>('all');
  const [sampleInquirySent, setSampleInquirySent] = useState(false);

  const compStats =
    unitSystem === 'metric'
      ? [
          { label: 'Height', value: '180 cm' },
          { label: 'Bust', value: '82 cm' },
          { label: 'Waist', value: '61 cm' },
          { label: 'Hips', value: '89 cm' },
          { label: 'Shoe', value: '39 EU' },
          { label: 'Eyes / Hair', value: 'Hazel / Espresso' },
        ]
      : [
          { label: 'Height', value: "5'11\"" },
          { label: 'Bust', value: '32"' },
          { label: 'Waist', value: '24"' },
          { label: 'Hips', value: '35"' },
          { label: 'Shoe', value: '8.5 US' },
          { label: 'Eyes / Hair', value: 'Hazel / Espresso' },
        ];

  const portfolioWorks = [
    {
      id: 'w1',
      title: 'L’Architecture du Bleu — Autumn/Winter Lookbook',
      category: 'campaign',
      season: 'AW26 Campaign Concept',
      location: 'Paris, France',
      image: '/images/model-editorial.jpg',
      aspect: 'aspect-[3/4]',
      caption: 'Tailored obsidian wool coat and cobalt silk drape study.',
    },
    {
      id: 'w2',
      title: 'Travertine Solitude — Museum Monograph',
      category: 'editorial',
      season: 'Editorial Spread Concept',
      location: 'Milan, Italy',
      image: '/images/model-campaign.jpg',
      aspect: 'aspect-[4/3]',
      caption: 'Structured royal blue trench silhouette inside travertine colonnade.',
    },
    {
      id: 'w3',
      title: 'Nocturne Tailor — Studio Chiaroscuro',
      category: 'runway',
      season: 'Couture Fitting Concept',
      location: 'London, UK',
      image: '/images/photographer-editorial.jpg',
      aspect: 'aspect-[4/3]',
      caption: 'Asymmetric architectural suiting captured in directional key light.',
    },
    {
      id: 'w4',
      title: 'Atelier Silk & Indigo Fitting Archive',
      category: 'editorial',
      season: 'Lookbook Archive Concept',
      location: 'New York, USA',
      image: '/images/fashion-stylist.jpg',
      aspect: 'aspect-[4/3]',
      caption: 'Backstage wardrobe curation and editorial moodboard study.',
    },
  ];

  const filteredWorks =
    galleryFilter === 'all'
      ? portfolioWorks
      : portfolioWorks.filter((w) => w.category === galleryFilter);

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#F7F6F2] font-sans">
      <DemoToolbar
        currentDemoId="model-portfolio"
        onBackToStudio={onBackToStudio}
        onSelectDemo={onSelectDemo}
        onCreateSimilar={onCreateSimilar}
      />

      {/* Demo Internal Editorial Header */}
      <header className="border-b border-white/10 px-4 sm:px-8 py-6 bg-[#0A0908]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-vizora-yellow block">
              VIZORA CONCEPT DEMO 01 · LUXURY MODEL PORTFOLIO
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.18em] uppercase font-bold text-white mt-1">
              ANYA LAURENT
            </h1>
          </div>
          <nav aria-label="Model Demo Navigation" className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-slate-300">
            <a href="#demo-compcard" className="hover:text-vizora-yellow transition-colors">
              Comp Card
            </a>
            <a href="#demo-gallery" className="hover:text-vizora-yellow transition-colors">
              Selected Campaigns
            </a>
            <a href="#demo-profile" className="hover:text-vizora-yellow transition-colors">
              Biography
            </a>
            <a
              href="#demo-inquire"
              className="px-4 py-2 rounded-full bg-vizora-blue text-vizora-black font-bold hover:bg-vizora-blue-light transition-colors"
            >
              Casting &amp; Bookings
            </a>
          </nav>
        </div>
      </header>

      {/* Oversized Fashion Editorial Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/15 text-[11px] uppercase tracking-[0.2em] text-vizora-yellow mb-6">
              <span>Paris · Milan · New York · London</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.03] tracking-tight text-white mb-6">
              Poise, Form &amp; Editorial Presence.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              International fashion and runway model specializing in architectural tailoring, haute
              couture presentations, and high-fashion print monographs. (Fictional Concept Portfolio
              designed by Vizora).
            </p>

            {/* Interactive Digital Comp Card Module */}
            <div
              id="demo-compcard"
              className="p-6 rounded-2xl bg-[#13110F] border border-white/15 mb-8"
            >
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-vizora-blue-light" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                    Digital Comp Card Measurements
                  </span>
                </div>
                <div className="inline-flex rounded-full bg-white/[0.06] p-0.5 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setUnitSystem('metric')}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase transition-colors ${
                      unitSystem === 'metric'
                        ? 'bg-vizora-blue text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Metric (CM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnitSystem('imperial')}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase transition-colors ${
                      unitSystem === 'imperial'
                        ? 'bg-vizora-blue text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Imperial (IN)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {compStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                  >
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </span>
                    <span className="font-serif text-base font-bold text-white mt-0.5 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#demo-inquire"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-vizora-blue hover:bg-vizora-blue-light text-white transition-colors"
              >
                <span>Inquire for Casting</span>
                <ArrowUpRight className="w-4 h-4 text-vizora-yellow" />
              </a>
              <button
                type="button"
                onClick={() =>
                  onCreateSimilar({
                    profession: 'Model or fashion creator',
                    websiteType: 'Portfolio website',
                    designStyle: 'Luxury and editorial',
                    projectContext: 'Build a model portfolio website like Anya Laurent (Demo 01)',
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-[0.16em] bg-white/[0.06] hover:bg-white/[0.12] border border-vizora-yellow/50 text-vizora-yellow transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Build My Model Website With Vizora</span>
              </button>
            </div>
          </div>

          {/* Right Oversized Portrait Composition */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/images/model-editorial.jpg"
                alt="Anya Laurent High-Fashion Editorial Portrait"
                className="w-full h-[500px] sm:h-[620px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-vizora-yellow block">
                    LOOK 01 · AUTUMN MONOGRAPH
                  </span>
                  <p className="font-serif text-xl text-white font-semibold">
                    Cobalt Silk &amp; Tailored Wool Study
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-black/80 border border-white/20 text-[10px] uppercase tracking-widest text-slate-300">
                  Concept Editorial
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Campaign & Editorial Gallery */}
      <section id="demo-gallery" className="py-20 px-4 sm:px-8 bg-[#0E0C0A] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-vizora-blue-light block mb-2">
                CURATED BOOK &amp; TEAR SHEETS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                Selected Editorial &amp; Campaign Work
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {(['all', 'editorial', 'campaign', 'runway'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-colors ${
                    galleryFilter === cat
                      ? 'bg-vizora-blue text-vizora-black'
                      : 'bg-white/[0.05] text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWorks.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-[#15120F] border border-white/10 flex flex-col justify-between"
              >
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-[10px] font-mono uppercase tracking-wider text-vizora-yellow">
                    {item.season}
                  </div>
                </div>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-300">{item.caption}</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0">
                    {item.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile & Agency Collaboration Inquiry */}
      <section id="demo-profile" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-vizora-yellow block mb-2">
              PROFESSIONAL PROFILE
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Representation &amp; Specialties
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              This section demonstrates how Vizora structures a model’s biography, agency
              representation contacts, travel availability, and booking specialties for casting
              directors and brands.
            </p>
            <div className="space-y-3 text-xs text-slate-200">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                <span className="text-slate-400 uppercase">Base Location</span>
                <span className="font-semibold">Paris &amp; New York (Passport Ready)</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                <span className="text-slate-400 uppercase">Specialties</span>
                <span className="font-semibold">Runway · Haute Couture · Print · Beauty</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between">
                <span className="text-slate-400 uppercase">Comp Card PDF</span>
                <span className="text-vizora-yellow font-semibold">Included on Client Sites</span>
              </div>
            </div>
          </div>

          <div
            id="demo-inquire"
            className="lg:col-span-7 p-8 rounded-3xl bg-[#13110F] border border-vizora-blue/40"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-vizora-blue-light block mb-1">
              SAMPLE CASTING &amp; COLLABORATION INQUIRY MODULE
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Direct Booking &amp; Agency Inquiry
            </h3>
            <p className="text-xs text-slate-300 mb-6">
              On your finished Vizora model portfolio, casting directors and brands can submit shoot
              dates, usage scope, and location details directly to you or your mother agency.
            </p>

            {sampleInquirySent ? (
              <div className="p-6 rounded-2xl bg-vizora-blue/15 border border-vizora-blue text-white">
                <div className="flex items-center gap-2 font-serif text-lg font-bold mb-2">
                  <CheckCircle2 className="w-5 h-5 text-vizora-yellow" />
                  <span>Demo Casting Inquiry Preview Triggered</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  This is a concept demonstration of how inquiries work on a Vizora model website.
                  Want Vizora to build a custom portfolio like this for you?
                </p>
                <button
                  type="button"
                  onClick={() =>
                    onCreateSimilar({
                      profession: 'Model or fashion creator',
                      websiteType: 'Portfolio website',
                      designStyle: 'Luxury and editorial',
                    })
                  }
                  className="px-6 py-3 rounded-full bg-vizora-yellow text-vizora-black text-xs font-bold uppercase tracking-wider"
                >
                  Create My Model Portfolio With Vizora →
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSampleInquirySent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Casting Director / Brand Name"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs text-white placeholder:text-slate-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Production Email"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs text-white placeholder:text-slate-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Booking Type (Runway, Editorial, Lookbook)"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs text-white placeholder:text-slate-500"
                  />
                  <input
                    type="text"
                    placeholder="Proposed Shoot Dates & City"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs text-white placeholder:text-slate-500"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full bg-vizora-blue hover:bg-vizora-blue-light text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Test Demo Inquiry Button
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onCreateSimilar({
                        profession: 'Model or fashion creator',
                        websiteType: 'Portfolio website',
                        designStyle: 'Luxury and editorial',
                      })
                    }
                    className="text-xs font-semibold text-vizora-yellow hover:underline"
                  >
                    Want this website for your modeling career? Inquire with Vizora →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
