import React from 'react';
import { Fingerprint, Eye, MessageSquareShare, ArrowRight, Globe, Check } from 'lucide-react';
import { InquiryPreselection } from '../types';

interface WhyWebsiteMattersProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
}

export const WhyWebsiteMatters: React.FC<WhyWebsiteMattersProps> = ({ onStartProject }) => {
  const benefits = [
    {
      number: '01',
      title: 'Your Own Digital Identity',
      description:
        'A professional website designed around your personality, visual style, and goals.',
      icon: Fingerprint,
    },
    {
      number: '02',
      title: 'A Stronger First Impression',
      description:
        'A polished online presence where potential clients can explore your work and understand what you offer.',
      icon: Eye,
    },
    {
      number: '03',
      title: 'A Clear Path to Inquiries',
      description:
        'Contact forms, project inquiries, and booking integrations when appropriate.',
      icon: MessageSquareShare,
    },
  ];

  return (
    <section
      id="why-website"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-vizora-paper text-vizora-black editorial-grid-lines-light overflow-hidden border-t border-vizora-paper-border"
    >
      {/* Subtle Top Accent Line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-vizora-blue via-vizora-purple to-vizora-yellow"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Website Preview & Visual Comparison (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-vizora-black text-white shadow-editorial-light border border-vizora-black/15">
              {/* Browser Header */}
              <div className="bg-[#11111C] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-vizora-blue" />
                  <span className="w-2.5 h-2.5 rounded-full bg-vizora-purple" />
                  <span className="w-2.5 h-2.5 rounded-full bg-vizora-yellow" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] text-[11px] font-mono text-slate-200">
                  <Globe className="w-3 h-3 text-vizora-yellow" />
                  <span>yourname.studio</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-vizora-blue-light font-semibold">
                  Dedicated Website
                </span>
              </div>

              {/* Editorial Preview Composition */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/images/model-campaign.jpg"
                  alt="Editorial fashion campaign presented inside a dedicated custom portfolio website"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vizora-black via-vizora-black/30 to-transparent" />

                {/* Overlay Website Navigation & Structured Presentation */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-vizora-black/80 backdrop-blur-md border border-white/15">
                  <span className="font-serif text-xs sm:text-sm tracking-[0.2em] font-bold text-white">
                    PORTFOLIO &amp; SERVICES
                  </span>
                  <div className="flex items-center gap-3 text-[11px] text-slate-300">
                    <span>Selected Work</span>
                    <span className="hidden sm:inline">Packages</span>
                    <span className="px-2.5 py-1 rounded-full bg-vizora-blue text-white font-semibold text-[10px]">
                      Inquire
                    </span>
                  </div>
                </div>

                {/* Bottom Structured Callout Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-vizora-black/90 backdrop-blur-xl border border-white/15">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-vizora-yellow font-semibold mb-1">
                        Curated &amp; Distraction-Free
                      </span>
                      <p className="font-serif text-base sm:text-lg font-bold text-white">
                        Every image, service package, and contact detail in one controlled space.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-[11px] text-slate-300 shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-vizora-yellow" />
                        <span>Full-resolution galleries</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-vizora-yellow" />
                        <span>Structured service details</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contrast Note: Social Feed vs Dedicated Website */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white border border-vizora-paper-border">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                  Social Media Feeds
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Posts disappear down the timeline, bios only fit a few lines, and clients must
                  hunt through DMs for services or availability.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-vizora-black text-white border border-vizora-blue/40">
                <span className="text-[10px] font-bold uppercase tracking-widest text-vizora-yellow block mb-1">
                  Your Vizora Website
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  An organized, permanent home where your best work, biography, offerings, and
                  inquiry form are always front and center.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Persuasive Copy & Three Key Benefits (6 cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vizora-blue/10 border border-vizora-blue/25 mb-5">
              <span className="w-2 h-2 rounded-full bg-vizora-blue" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vizora-blue">
                Why Your Own Website Matters
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-vizora-black leading-[1.12] mb-5">
              Your Work Deserves More Than a Social Media Feed.
            </h2>

            <p className="text-base sm:text-lg text-vizora-paper-muted leading-relaxed mb-8">
              Social platforms are useful for daily updates, but they were never designed to present
              a serious creative portfolio or a structured service business. A dedicated website
              gives you a controlled space to present your work, services, identity, and contact
              information—without competing algorithms or distractions.
            </p>

            {/* Three Key Benefits */}
            <div className="space-y-4 mb-9">
              {benefits.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.number}
                    className="group p-5 rounded-2xl bg-white border border-vizora-paper-border hover:border-vizora-blue transition-all duration-300 shadow-sm flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-vizora-black text-white flex items-center justify-center shrink-0 group-hover:bg-vizora-blue transition-colors">
                      <IconComponent className="w-5 h-5 text-vizora-yellow" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono font-bold text-vizora-blue">
                          {item.number}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-vizora-black">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-vizora-paper-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => onStartProject()}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white bg-vizora-blue hover:bg-vizora-blue-deep shadow-blue-glow transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-black"
            >
              <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
              <span>Discuss Your Website</span>
              <ArrowRight className="w-4 h-4 text-vizora-yellow transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
