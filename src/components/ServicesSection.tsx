import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/vizoraData';
import { DemoRouteId, InquiryPreselection } from '../types';

interface ServicesSectionProps {
  onStartProject: (preselection?: InquiryPreselection) => void;
  onOpenDemo: (demoId: DemoRouteId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onStartProject,
  onOpenDemo,
}) => {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-vizora-black text-white editorial-grid-lines overflow-hidden"
    >
      {/* Ambient Royal Blue & Purple Glows */}
      <div
        className="absolute top-1/4 -right-40 w-[480px] h-[480px] bg-vizora-blue/15 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-40 w-[480px] h-[480px] bg-vizora-purple/15 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 mb-5">
            <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-vizora-yellow">
              Our Services
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-5">
            Your Vision. Our Design.{' '}
            <span className="text-blue-purple-gradient">Your Digital Presence.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you need a striking portfolio to present your creative work or a complete
            business website to welcome clients, every Vizora project is custom-designed around your
            profession and goals.
          </p>
        </div>

        {/* Editorial Numbered Service Showcases */}
        <div className="space-y-12 sm:space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={service.id}
                className="group relative rounded-3xl bg-vizora-black-elevated/90 border border-white/10 hover:border-vizora-blue/50 transition-all duration-500 overflow-hidden shadow-editorial-dark"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Editorial Image Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] overflow-hidden ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vizora-black via-vizora-black/25 to-transparent" />

                    {/* Top Number Badge */}
                    <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-vizora-black/85 backdrop-blur-md border border-white/15 flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-vizora-yellow">
                        SERVICE {service.number}
                      </span>
                    </div>

                    {/* Interactive Demo / Live Client Preview Badge */}
                    <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-vizora-black/90 backdrop-blur-xl border border-white/15 flex items-center justify-between gap-2">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-vizora-yellow font-semibold">
                          {service.id === 'portfolio-websites'
                            ? 'Live Client Model Portfolios'
                            : 'Live Concept Example'}
                        </span>
                        <span className="font-mono text-xs text-white">
                          {service.previewUrlLabel}
                        </span>
                      </div>
                      {service.id === 'portfolio-websites' ? (
                        <div className="flex items-center gap-1.5">
                          <a
                            href="https://khadija-portfolio-og.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-vizora-blue hover:bg-vizora-blue-light text-[11px] font-bold text-white transition-colors"
                          >
                            <span>Simple</span>
                            <ArrowUpRight className="w-3 h-3 text-vizora-yellow" />
                          </a>
                          <a
                            href="https://khadija-3d-portfolio.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-vizora-purple hover:bg-vizora-purple-light text-[11px] font-bold text-white transition-colors"
                          >
                            <span>3D Site</span>
                            <ArrowUpRight className="w-3 h-3 text-vizora-yellow" />
                          </a>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onOpenDemo(service.demoRoute)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-vizora-blue text-xs font-semibold text-white transition-colors"
                        >
                          <span>View Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-vizora-yellow" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Service Content & Feature List Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-3xl sm:text-4xl font-bold text-vizora-yellow">
                            {service.number}
                          </span>
                          <span className="h-6 w-[1px] bg-white/15" aria-hidden="true" />
                          <span className="text-xs uppercase tracking-[0.2em] text-vizora-blue-light font-semibold">
                            Custom Design &amp; Development
                          </span>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-vizora-purple/20 border border-vizora-purple/40 text-[11px] font-semibold text-white">
                          Custom Scope · Request a Quote
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
                        Service {service.number} — {service.title}
                      </h3>

                      <p className="text-sm sm:text-base font-medium text-vizora-yellow mb-4">
                        {service.audience}
                      </p>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {service.summary}
                      </p>

                      {/* Included Capabilities */}
                      <div className="mb-8">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3.5">
                          What We Include:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/[0.03] border border-white/[0.06] px-3.5 py-2.5 rounded-xl"
                            >
                              <CheckCircle2 className="w-4 h-4 text-vizora-blue-light shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          onStartProject({
                            websiteType: service.websiteType,
                            designStyle: service.designStyle,
                            projectContext: `Interested in ${service.title}`,
                          })
                        }
                        className="group/btn inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white bg-vizora-blue hover:bg-vizora-blue-light shadow-blue-glow transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
                      >
                        <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
                        <span>{service.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4 text-vizora-yellow transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          onStartProject({
                            websiteType: service.websiteType,
                            projectContext: `Requesting a custom quote for ${service.title}`,
                          })
                        }
                        className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 hover:text-vizora-yellow transition-colors underline underline-offset-4"
                      >
                        Request a Quote →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Website Redesign Callout Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-vizora-blue/15 via-vizora-purple/15 to-vizora-black-elevated border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-vizora-yellow block mb-1">
              Already Have an Outdated Website?
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              We also redesign existing portfolio and business websites.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Share your current URL in our project inquiry form and we will craft a modern,
              mobile-first redesign tailored to your brand.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              onStartProject({
                websiteType: 'Website redesign',
                projectContext: 'Interested in redesigning an existing website',
              })
            }
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-vizora-black bg-vizora-yellow hover:bg-vizora-yellow-soft transition-colors"
          >
            <span>Request a Redesign Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
