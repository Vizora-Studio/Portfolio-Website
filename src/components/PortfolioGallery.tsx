import React, { useState } from 'react';
import { Sparkles, MapPin, CheckCircle, ArrowRight, ExternalLink, Ruler } from 'lucide-react';
import { CATEGORIES, CREATORS } from '../data/portfolioData';
import { CategoryId, CreatorPortfolio } from '../types';

interface PortfolioGalleryProps {
  onSelectCreator: (creator: CreatorPortfolio) => void;
  onOpenBooking: () => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onSelectCreator,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredCreators = CREATORS.filter((c) =>
    activeCategory === 'all' ? true : c.category === activeCategory
  );

  return (
    <section
      id="explore"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-vizora-midnight text-white overflow-hidden scroll-mt-16"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-vizora-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-vizora-violet/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vizora-gold/10 border border-vizora-gold/30 text-[11px] font-semibold uppercase tracking-[0.25em] text-vizora-gold-light mb-4">
              <span>Talent &amp; Casting Directory</span>
              <Sparkles className="w-3 h-3 text-vizora-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Explore Models, MUAs &amp; Creatives
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl font-light">
              Discover vetted runway models, celebrity makeup artists, hair sculptors, and
              fashion photographers commanding the vanguard of beauty and style.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 transition-all hover:scale-105"
            >
              <span>Submit Casting Brief</span>
              <ArrowRight className="w-3.5 h-3.5 text-vizora-gold" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryId)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vizora-gold ${
                  isActive
                    ? 'bg-gradient-to-r from-vizora-gold to-vizora-gold-light text-vizora-midnight shadow-gold-glow'
                    : 'bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreators.map((creator) => {
            const isHovered = hoveredCard === creator.id;
            return (
              <div
                key={creator.id}
                onMouseEnter={() => setHoveredCard(creator.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onSelectCreator(creator)}
                className="group relative rounded-2xl sm:rounded-3xl bg-vizora-midnight-card border border-white/10 hover:border-vizora-gold/40 shadow-luxury-card hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden cursor-pointer"
                style={{
                  transform: isHovered ? 'translateY(-6px)' : 'none',
                }}
              >
                {/* Visual Cover Header */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={creator.coverImage}
                    alt={creator.featuredProjectTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vizora-midnight-card via-vizora-midnight-card/30 to-transparent" />

                  {/* Specialty Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-vizora-midnight/80 border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-vizora-gold-light backdrop-blur-md">
                    {creator.specialty}
                  </div>

                  {/* Featured Badge */}
                  {creator.isFeatured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-vizora-blue/80 border border-vizora-blue/50 text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                      <Sparkles className="w-2.5 h-2.5 text-vizora-gold" />
                      <span>Casting Pick</span>
                    </div>
                  )}

                  {/* Model Height badge if model */}
                  {creator.modelStats && (
                    <div className="absolute bottom-12 right-4 flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/75 border border-vizora-gold/40 text-[10px] font-mono text-vizora-gold-light backdrop-blur-sm">
                      <Ruler className="w-3 h-3 text-vizora-gold" />
                      <span>{creator.modelStats.height}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between -mt-10 relative z-10">
                  <div>
                    {/* Creator Identity Row */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="relative">
                        <img
                          src={creator.avatar}
                          alt={creator.name}
                          className="w-14 h-14 rounded-xl object-cover border-2 border-vizora-gold shadow-md"
                        />
                        {creator.isVerified && (
                          <div className="absolute -bottom-1 -right-1 bg-vizora-midnight rounded-full p-0.5">
                            <CheckCircle className="w-3.5 h-3.5 fill-vizora-gold text-vizora-midnight" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-white group-hover:text-vizora-gold transition-colors">
                          {creator.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="font-mono text-vizora-gold-light/90">{creator.handle}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {creator.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4 font-light">
                      {creator.shortBio}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {creator.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {creator.skills.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.02] text-[10px] text-slate-400">
                          +{creator.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">
                      {creator.availableFor[0]}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-vizora-gold group-hover:translate-x-1 transition-transform">
                      <span>View Comp Card</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Content Identification Notice */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <p>
            ✦ <span className="font-semibold text-slate-300">Exemplar Casting Showcase:</span> Talent profiles, measurements, and tear sheets above illustrate Vizora&apos;s digital comp card architecture. Real runway models, MUAs, and session stylists are onboarded via the Vizora Talent Guild application.
          </p>
        </div>
      </div>
    </section>
  );
};
