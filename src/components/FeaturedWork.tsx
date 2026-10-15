import React from 'react';
import { ArrowUpRight, TrendingUp, Tag } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

interface FeaturedWorkProps {
  onOpenBooking: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenBooking }) => {

  return (
    <section
      id="featured"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] text-vizora-midnight overflow-hidden border-y border-vizora-gold/25 scroll-mt-16"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-vizora-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-vizora-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-vizora-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-vizora-gold-dark">
                Curated Case Studies
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Featured Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl font-light">
              An editorial gallery of landmark collaborations conceived, directed, and brought
              to life through the Vizora ecosystem.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 text-white hover:bg-vizora-blue transition-colors shadow-md"
            >
              <span>Submit Project Brief</span>
              <ArrowUpRight className="w-4 h-4 text-vizora-gold" />
            </button>
          </div>
        </div>

        {/* Editorial Case Study Cards */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-ivory-card overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Showcase (7 cols) */}
                <div className={`lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] overflow-hidden bg-slate-900 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Creator Byline on Image */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-vizora-gold font-mono block">
                        ART DIRECTION &amp; EXECUTION
                      </span>
                      <span className="font-serif font-bold text-lg sm:text-xl">
                        {project.creator}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-widest text-slate-300 font-mono block">
                        COMPLETED
                      </span>
                      <span className="font-mono text-sm font-semibold">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Details Column (5 cols) */}
                <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Discipline Badge */}
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-vizora-gold-dark mb-4">
                      <span>{project.discipline}</span>
                      <span>•</span>
                      <span>Case 0{idx + 1}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-vizora-blue transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light mb-8">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700"
                        >
                          <Tag className="w-3 h-3 text-vizora-gold-dark" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metric & Action */}
                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-vizora-blue font-serif text-2xl font-bold">
                        <TrendingUp className="w-5 h-5 text-vizora-gold-dark" />
                        <span>{project.impactMetric}</span>
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">
                        {project.metricLabel}
                      </div>
                    </div>

                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-vizora-blue transition-colors py-2"
                    >
                      <span>Inquire On Style</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Footnote */}
        <div className="mt-12 text-center text-xs text-slate-500 font-serif italic">
          “Case studies represent real aesthetic deliverables produced across the Vizora network.”
        </div>
      </div>
    </section>
  );
};
