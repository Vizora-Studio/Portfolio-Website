import React, { useState } from 'react';
import { MapPin, Clock, Scissors, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { DemoToolbar } from './DemoToolbar';
import { DemoRouteId, InquiryPreselection } from '../types';

interface BeautyStudioDemoProps {
  onBackToStudio: () => void;
  onSelectDemo: (demoId: DemoRouteId) => void;
  onCreateSimilar: (preselection: InquiryPreselection) => void;
}

export const BeautyStudioDemo: React.FC<BeautyStudioDemoProps> = ({
  onBackToStudio,
  onSelectDemo,
  onCreateSimilar,
}) => {
  const [menuCategory, setMenuCategory] = useState<'hair' | 'skin' | 'bridal'>('hair');
  const [selectedService, setSelectedService] = useState<string>('Architectural Cut & Silk Finish');
  const [appointmentRequested, setAppointmentRequested] = useState(false);

  const serviceMenu = {
    hair: [
      {
        name: 'Architectural Cut & Silk Finish',
        duration: '60 min',
        price: '$110 (Sample Price)',
        desc: 'Precision dry-and-wet sculptural cut, botanical scalp ritual, and signature glass blowout.',
      },
      {
        name: 'Luminous Dimensional Gloss & Balayage',
        duration: '150 min',
        price: '$240 (Sample Price)',
        desc: 'Custom hand-painted placement with bond-building treatment and tonal gloss.',
      },
      {
        name: 'Couture Event & Editorial Styling',
        duration: '60 min',
        price: '$125 (Sample Price)',
        desc: 'Modern chignons, sculptural waves, or sleek red-carpet preparation.',
      },
    ],
    skin: [
      {
        name: 'Cellular Glass-Skin Barrier Facial',
        duration: '75 min',
        price: '$165 (Sample Price)',
        desc: 'Lymphatic sculpting massage, enzymatic resurfacing, and hyaluronic oxygen infusion.',
      },
      {
        name: 'LED Collagen & Cryo-Sculpt Ritual',
        duration: '60 min',
        price: '$145 (Sample Price)',
        desc: 'Targeted red-light phototherapy paired with cooling cryo-globes for instant lift.',
      },
    ],
    bridal: [
      {
        name: 'In-Salon Bridal Hair & Skin Prep Suite',
        duration: '180 min',
        price: 'Custom Suite Quote',
        desc: 'Private suite reservation for bride and bridal party with refreshments and dedicated stylists.',
      },
      {
        name: 'Pre-Wedding Dermal & Gloss Program',
        duration: '3 Sessions',
        price: '$390 (Sample Price)',
        desc: 'Three-part skin luminosity and hair gloss schedule leading up to your wedding week.',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-vizora-black font-sans">
      <DemoToolbar
        currentDemoId="beauty-studio"
        onBackToStudio={onBackToStudio}
        onSelectDemo={onSelectDemo}
        onCreateSimilar={onCreateSimilar}
      />

      {/* Salon Business Website Header */}
      <header className="bg-white border-b border-black/10 px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-vizora-blue font-bold block">
              VIZORA CONCEPT DEMO 04 · BEAUTY STUDIO &amp; SMALL BUSINESS WEBSITE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-vizora-black">
              MAISON LUMIÈRE STUDIO
            </h1>
          </div>

          <nav aria-label="Beauty Studio Demo Navigation" className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.16em] text-slate-700">
            <a href="#studio-services" className="hover:text-vizora-blue transition-colors">
              Services &amp; Pricing
            </a>
            <a href="#studio-about" className="hover:text-vizora-blue transition-colors">
              Our Studio
            </a>
            <a href="#studio-location" className="hover:text-vizora-blue transition-colors">
              Hours &amp; Location
            </a>
            <a
              href="#studio-booking"
              className="px-4 py-2 rounded-full bg-vizora-blue text-white font-semibold hover:bg-vizora-blue-deep transition-colors"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      </header>

      {/* Business Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-vizora-blue/10 text-vizora-blue text-xs font-bold uppercase tracking-widest mb-5">
              Hair · Dermal Aesthetics · Bridal Suite
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-vizora-black leading-[1.08] mb-5">
              A Sanctuary for Modern Hair &amp; Skin Rituals.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              This concept website demonstrates how Vizora designs clear, inviting websites for
              salons, beauty studios, and small businesses—complete with treatment menus, transparent
              sample pricing, location details, and online appointment requests.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#studio-booking"
                className="px-7 py-4 rounded-full bg-vizora-blue hover:bg-vizora-blue-deep text-white text-xs font-bold uppercase tracking-[0.16em] transition-colors"
              >
                Request an Appointment
              </a>
              <button
                type="button"
                onClick={() =>
                  onCreateSimilar({
                    profession: 'Salon or beauty studio',
                    websiteType: 'Business website',
                    designStyle: 'Modern and professional',
                    projectContext:
                      'Build a salon or small business website like Maison Lumière (Demo 04)',
                  })
                }
                className="px-6 py-4 rounded-full bg-vizora-black text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-vizora-purple transition-colors inline-flex items-center gap-2"
              >
                <span>Build My Business Website With Vizora</span>
                <ArrowRight className="w-4 h-4 text-vizora-yellow" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-black/10">
              <img
                src="/images/beauty-salon.jpg"
                alt="Maison Lumière luxury salon interior with arched mirrors"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-vizora-black/90 backdrop-blur-md text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-vizora-yellow block">
                    ARCHITECTURAL STUDIO SPACE
                  </span>
                  <span className="font-serif text-base font-bold">
                    Designed for Calm, Unhurried Appointments
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono">
                  Concept Demo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services & Pricing Section */}
      <section id="studio-services" className="py-16 px-4 sm:px-8 bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-vizora-blue font-bold block mb-2">
                TRANSPARENT SERVICE MENU
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-vizora-black">
                Services &amp; Sample Pricing
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: 'hair', label: 'Hair & Gloss' },
                  { id: 'skin', label: 'Dermal & Facials' },
                  { id: 'bridal', label: 'Bridal Suite' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setMenuCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    menuCategory === tab.id
                      ? 'bg-vizora-blue text-white'
                      : 'bg-[#F7F5F0] text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceMenu[menuCategory].map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-2xl bg-[#F7F5F0] border border-black/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-vizora-blue font-bold mb-2">
                    <span>{item.duration}</span>
                    <span>{item.price}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-vizora-black mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <a
                  href="#studio-booking"
                  onClick={() => setSelectedService(item.name)}
                  className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-vizora-black text-white text-xs font-semibold hover:bg-vizora-blue transition-colors"
                >
                  <span>Select This Service</span>
                  <Scissors className="w-3.5 h-3.5 text-vizora-yellow" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Introduction, Location & Booking */}
      <section id="studio-about" className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Location & Hours Card */}
          <div id="studio-location" className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/images/small-business.jpg"
                alt="Boutique studio reception and retail shelf"
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/10 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-vizora-black">
                Studio Location &amp; Hours (Concept Sample)
              </h3>
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-vizora-blue shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-vizora-black">Sample Studio Address</span>
                  <span>240 Mercer Gallery District (Fictional Concept Location)</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-vizora-purple shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-vizora-black">Opening Hours</span>
                  <span>Tuesday – Saturday: 9:30 AM – 7:30 PM · Sunday – Monday: By Request</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Appointment Booking Box */}
          <div
            id="studio-booking"
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-vizora-black text-white flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-vizora-yellow mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ONLINE APPOINTMENT REQUEST DEMO</span>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-2">
                Request Your Studio Appointment
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Selected Treatment:{' '}
                <strong className="text-vizora-yellow">{selectedService}</strong>
              </p>

              {appointmentRequested ? (
                <div className="p-6 rounded-2xl bg-vizora-blue/20 border border-vizora-blue">
                  <div className="flex items-center gap-2 font-serif text-xl font-bold mb-2">
                    <CheckCircle2 className="w-5 h-5 text-vizora-yellow" />
                    <span>Sample Salon Appointment Request Preview Complete!</span>
                  </div>
                  <p className="text-xs text-slate-200 mb-4">
                    Want Vizora to design a custom website like this for your salon, studio, or
                    small business?
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      onCreateSimilar({
                        profession: 'Salon or beauty studio',
                        websiteType: 'Business website',
                        designStyle: 'Modern and professional',
                      })
                    }
                    className="px-6 py-3 rounded-full bg-vizora-yellow text-vizora-black text-xs font-bold uppercase tracking-wider"
                  >
                    Create My Business Website With Vizora →
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAppointmentRequested(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder:text-slate-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder:text-slate-400"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Preferred Day & Time Window"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-full bg-vizora-blue hover:bg-vizora-blue-light text-white text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    Test Appointment Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
