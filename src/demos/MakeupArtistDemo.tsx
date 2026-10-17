import React, { useState } from 'react';
import { Sparkles, Check, Calendar, Star, ArrowRight } from 'lucide-react';
import { DemoToolbar } from './DemoToolbar';
import { DemoRouteId, InquiryPreselection } from '../types';

interface MakeupArtistDemoProps {
  onBackToStudio: () => void;
  onSelectDemo: (demoId: DemoRouteId) => void;
  onCreateSimilar: (preselection: InquiryPreselection) => void;
}

export const MakeupArtistDemo: React.FC<MakeupArtistDemoProps> = ({
  onBackToStudio,
  onSelectDemo,
  onCreateSimilar,
}) => {
  const [selectedTransformation, setSelectedTransformation] = useState<'bridal' | 'editorial'>(
    'bridal'
  );
  const [demoBooked, setDemoBooked] = useState(false);

  const transformations = {
    bridal: {
      title: 'Signature Glass-Skin Bridal Radiance',
      beforeNotes:
        'Pre-prep consultation: barrier hydration ritual, custom undertone matching, and humidity-resistant primer layering for 14-hour ceremony wear.',
      afterNotes:
        'Soft-focus champagne cheekbone illumination, individual silk lash placement, neutral rose-velvet lip definition, and flash-photography tested finish.',
      image: '/images/makeup-bridal.jpg',
      duration: '90 Min Bridal Session + Touch-Up Kit',
    },
    editorial: {
      title: 'Couture Velvet Plum & Studio Editorial',
      beforeNotes:
        'Backstage skin prep: lymphatic sculpting massage, sheer satin complexion base designed for macro studio strobes.',
      afterNotes:
        'High-pigment cobalt-violet lid wash, feathered brow architecture, and sculpted satin skin balance for beauty campaigns.',
      image: '/images/makeup-studio.jpg',
      duration: 'Half-Day / Full-Day Set Direction',
    },
  };

  const packages = [
    {
      name: 'The Couture Bride Experience',
      tag: 'Bridal Signature',
      details: [
        'In-studio bridal preview & skin consultation session',
        'Wedding-day luxury skin preparation & bespoke makeup artistry',
        'Custom deluxe touch-up kit for ceremony & reception',
        'On-location travel coordination available',
      ],
    },
    {
      name: 'Bridal Party & Event Glamour',
      tag: 'Group & Red Carpet',
      details: [
        'Cohesive, camera-ready makeup for bridesmaids & mothers of the couple',
        'Red carpet, gala, and milestone portrait session beauty',
        'Individual lash customization & complexion perfecting',
      ],
    },
    {
      name: 'Editorial & Brand Production',
      tag: 'Commercial / Print',
      details: [
        'Half-day and full-day key makeup artistry for fashion & beauty shoots',
        'Lookbook concept development & face-chart planning',
        'On-set continuity and high-resolution skin texture balance',
      ],
    },
  ];

  const activeTrans = transformations[selectedTransformation];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-vizora-black font-sans">
      <DemoToolbar
        currentDemoId="makeup-artist"
        onBackToStudio={onBackToStudio}
        onSelectDemo={onSelectDemo}
        onCreateSimilar={onCreateSimilar}
      />

      {/* Makeup Artist Concept Header */}
      <header className="border-b border-black/10 bg-white px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-vizora-purple font-bold block">
              VIZORA CONCEPT DEMO 02 · MAKEUP ARTIST WEBSITE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-vizora-black mt-0.5">
              ATELIER ELARA
            </h1>
          </div>
          <nav aria-label="Makeup Artist Demo Navigation" className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.18em] text-slate-600">
            <a href="#mua-transformations" className="hover:text-vizora-purple transition-colors">
              Before &amp; After
            </a>
            <a href="#mua-packages" className="hover:text-vizora-purple transition-colors">
              Bridal Packages
            </a>
            <a href="#mua-testimonials" className="hover:text-vizora-purple transition-colors">
              Sample Notes
            </a>
            <a
              href="#mua-inquire"
              className="px-4 py-2 rounded-full bg-vizora-purple text-white font-semibold hover:bg-vizora-purple-deep transition-colors"
            >
              Check Date Availability
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Split Composition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vizora-purple/10 border border-vizora-purple/25 text-xs font-semibold text-vizora-purple mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Luxury Bridal &amp; Editorial Makeup Artistry</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-bold text-vizora-black leading-[1.08] mb-6">
              Radiant Skin. Timeless Bridal &amp; Editorial Beauty.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Designed for modern brides, red-carpet clients, and fashion campaigns. Explore curated
              beauty transformations, transparent bridal packages, and date availability inquiries.
              (Concept Demo Website by Vizora).
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#mua-inquire"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.16em] text-white bg-vizora-purple hover:bg-vizora-purple-deep transition-colors"
              >
                <Calendar className="w-4 h-4 text-vizora-yellow" />
                <span>Inquire for Bridal / Event Date</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  onCreateSimilar({
                    profession: 'Makeup artist or beauty professional',
                    websiteType: 'Portfolio website',
                    designStyle: 'Luxury and editorial',
                    projectContext: 'Build a makeup artist website like Atelier Elara (Demo 02)',
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-vizora-black bg-white border-2 border-vizora-purple/30 hover:border-vizora-purple transition-colors"
              >
                <span>Build My Makeup Website With Vizora</span>
                <ArrowRight className="w-4 h-4 text-vizora-purple" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7 rounded-3xl overflow-hidden shadow-xl border border-black/10">
              <img
                src="/images/makeup-bridal.jpg"
                alt="Bridal beauty portrait with luminous skin"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
            </div>
            <div className="col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-black/10">
                <img
                  src="/images/makeup-studio.jpg"
                  alt="Editorial makeup workstation and model transformation"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-5 rounded-2xl bg-vizora-black text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-vizora-yellow block mb-1">
                  ARTISTRY FOCUS
                </span>
                <p className="font-serif text-base font-bold mb-1">
                  Bridal · Red Carpet · Editorial
                </p>
                <p className="text-xs text-slate-300">
                  Skin-first artistry crafted for both natural daylight and studio photography.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before-and-After Transformation Breakdown Showcase */}
      <section
        id="mua-transformations"
        className="py-20 px-4 sm:px-8 bg-vizora-black text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-vizora-yellow block mb-2">
                BEFORE &amp; AFTER ARTISTRY BREAKDOWN
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                Transformation &amp; Skin Prep Showcase
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSelectedTransformation('bridal')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedTransformation === 'bridal'
                    ? 'bg-vizora-purple text-white'
                    : 'bg-white/10 text-slate-300 hover:bg-white/15'
                }`}
              >
                01 · Bridal Glow Breakdown
              </button>
              <button
                type="button"
                onClick={() => setSelectedTransformation('editorial')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedTransformation === 'editorial'
                    ? 'bg-vizora-purple text-white'
                    : 'bg-white/10 text-slate-300 hover:bg-white/15'
                }`}
              >
                02 · Editorial Velvet Look
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#141210] border border-white/12 p-6 sm:p-10">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15">
              <img
                src={activeTrans.image}
                alt={activeTrans.title}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-vizora-purple/25 border border-vizora-purple/50 text-xs font-mono text-vizora-yellow">
                {activeTrans.duration}
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                {activeTrans.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                    STEP 01 · BEFORE / SKIN PREPARATION
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {activeTrans.beforeNotes}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-vizora-purple/15 border border-vizora-purple/40">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vizora-yellow block mb-2">
                    STEP 02 · AFTER / FINISHED ARTISTRY
                  </span>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">
                    {activeTrans.afterNotes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages & Sample Testimonials */}
      <section id="mua-packages" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-vizora-purple font-bold block mb-2">
            SERVICE PACKAGES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vizora-black">
            Curated Beauty &amp; Bridal Offerings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="p-7 rounded-3xl bg-white border border-black/10 shadow-editorial-light flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-vizora-purple/10 text-vizora-purple text-[10px] font-bold uppercase tracking-widest mb-4">
                  {pkg.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-vizora-black mb-4">
                  {pkg.name}
                </h3>
                <ul className="space-y-2.5 mb-6">
                  {pkg.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-vizora-purple shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#mua-inquire"
                className="w-full py-3 rounded-full bg-vizora-black text-white text-xs font-bold uppercase tracking-widest text-center hover:bg-vizora-purple transition-colors"
              >
                Request Package Quote
              </a>
            </div>
          ))}
        </div>

        {/* Clearly Labeled Sample Client Notes */}
        <div
          id="mua-testimonials"
          className="p-8 rounded-3xl bg-white border border-vizora-purple/25 mb-16"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <h3 className="font-serif text-2xl font-bold text-vizora-black">
              Client Kind Words Layout Preview
            </h3>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-semibold">
              Sample Concept Content — Supplied by Client on Real Projects
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="p-5 rounded-2xl bg-[#FAF8F5] border border-black/5">
              <div className="flex items-center gap-1 text-vizora-purple mb-2">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-[10px] font-mono uppercase text-slate-500 ml-2">
                  [Sample Testimonial Layout]
                </span>
              </div>
              <p className="text-xs sm:text-sm italic text-slate-700">
                “My bridal makeup felt weightless all day and photographed beautifully from our
                morning ceremony through the evening reception.”
              </p>
            </blockquote>
            <blockquote className="p-5 rounded-2xl bg-[#FAF8F5] border border-black/5">
              <div className="flex items-center gap-1 text-vizora-purple mb-2">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-[10px] font-mono uppercase text-slate-500 ml-2">
                  [Sample Testimonial Layout]
                </span>
              </div>
              <p className="text-xs sm:text-sm italic text-slate-700">
                “Having a dedicated bridal &amp; editorial website makes it effortless for brides to
                review packages and submit their wedding date details.”
              </p>
            </blockquote>
          </div>
        </div>

        {/* Appointment Inquiry Section */}
        <div
          id="mua-inquire"
          className="p-8 sm:p-10 rounded-3xl bg-vizora-black text-white border border-vizora-purple/40"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-vizora-yellow block mb-1">
            DEMO APPOINTMENT INQUIRY MODULE
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
            Bridal &amp; Appointment Date Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            Test how prospective brides and clients can request their event date and makeup package.
          </p>

          {demoBooked ? (
            <div className="p-6 rounded-2xl bg-vizora-purple/20 border border-vizora-purple">
              <p className="font-serif text-lg font-bold text-white mb-2">
                Sample Bridal Date Inquiry Preview Complete!
              </p>
              <p className="text-xs text-slate-200 mb-4">
                Ready for Vizora to design and build a custom website like this for your makeup
                artistry brand?
              </p>
              <button
                type="button"
                onClick={() =>
                  onCreateSimilar({
                    profession: 'Makeup artist or beauty professional',
                    websiteType: 'Portfolio website',
                    designStyle: 'Luxury and editorial',
                  })
                }
                className="px-6 py-3 rounded-full bg-vizora-yellow text-vizora-black text-xs font-bold uppercase tracking-wider"
              >
                Start My Makeup Artist Website With Vizora →
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDemoBooked(true);
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <input
                type="text"
                required
                placeholder="Client Name"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder:text-slate-400"
              />
              <input
                type="text"
                required
                placeholder="Event Date & Venue Location"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-vizora-purple hover:bg-vizora-purple-light text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Test Date Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
