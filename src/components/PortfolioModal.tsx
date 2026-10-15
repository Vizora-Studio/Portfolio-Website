import React, { useEffect } from 'react';
import { X, Sparkles, MapPin, CheckCircle, ArrowRight, Award, ExternalLink, Ruler } from 'lucide-react';
import { CreatorPortfolio } from '../types';

interface PortfolioModalProps {
  creator: CreatorPortfolio | null;
  onClose: () => void;
  onBookCreator: (creatorName: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  creator,
  onClose,
  onBookCreator,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (creator) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [creator, onClose]);

  if (!creator) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-vizora-midnight/85 backdrop-blur-xl overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-creator-name"
    >
      <div
        className="relative w-full max-w-4xl bg-vizora-midnight-card border border-vizora-gold/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-vizora-midnight/80 border border-white/20 text-slate-200 hover:text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-vizora-gold"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Cover Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img
            src={creator.coverImage}
            alt={creator.featuredProjectTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vizora-midnight-card via-vizora-midnight-card/40 to-transparent" />

          {/* Floating Category Tag */}
          <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-vizora-midnight/80 border border-vizora-gold/40 text-[11px] font-semibold uppercase tracking-wider text-vizora-gold-light backdrop-blur-md">
            {creator.specialty}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 sm:-mt-16 relative z-10">
          {/* Creator Profile Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-vizora-gold shadow-xl"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 id="modal-creator-name" className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {creator.name}
                  </h3>
                  {creator.isVerified && (
                    <span title="Verified Talent on Vizora" className="text-vizora-gold flex items-center">
                      <CheckCircle className="w-5 h-5 fill-vizora-gold text-vizora-midnight" />
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
                  <span className="font-mono text-vizora-gold-light">{creator.handle}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {creator.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onBookCreator(creator.name);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-vizora-midnight bg-gradient-to-r from-vizora-gold via-vizora-gold-light to-vizora-gold shadow-gold-glow hover:scale-105 transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book {creator.name.split(' ')[0]}</span>
              </button>
            </div>
          </div>

          {/* Model Stats / Physical Measurements Card (For Models) */}
          {creator.modelStats && (
            <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-vizora-gold/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-vizora-gold font-bold flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-vizora-gold" />
                  Verified Model Physical Specs &amp; Comp Card
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Casting Verified
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 text-center">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Height</span>
                  <span className="font-mono text-xs font-bold text-white mt-0.5 block">{creator.modelStats.height}</span>
                </div>
                {creator.modelStats.bust && (
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Bust/Chest</span>
                    <span className="font-mono text-xs font-bold text-white mt-0.5 block">{creator.modelStats.bust}</span>
                  </div>
                )}
                {creator.modelStats.waist && (
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Waist</span>
                    <span className="font-mono text-xs font-bold text-white mt-0.5 block">{creator.modelStats.waist}</span>
                  </div>
                )}
                {creator.modelStats.hips && (
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Hips</span>
                    <span className="font-mono text-xs font-bold text-white mt-0.5 block">{creator.modelStats.hips}</span>
                  </div>
                )}
                {creator.modelStats.eyes && (
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Eyes</span>
                    <span className="font-mono text-xs font-bold text-white mt-0.5 block">{creator.modelStats.eyes}</span>
                  </div>
                )}
                {creator.modelStats.hair && (
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Hair</span>
                    <span className="font-mono text-xs font-bold text-white mt-0.5 block">{creator.modelStats.hair}</span>
                  </div>
                )}
                {creator.modelStats.shoeSize && (
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Shoe Size</span>
                    <span className="font-mono text-xs font-bold text-white mt-0.5 block">{creator.modelStats.shoeSize}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Full Bio */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
              Talent Bio &amp; Runway Experience
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              {creator.fullBio}
            </p>
          </div>

          {/* Featured Campaign / Case Study Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase tracking-widest text-vizora-gold font-semibold">
                Featured Editorial / Campaign
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                Verified Tear Sheet <ExternalLink className="w-3 h-3" />
              </span>
            </div>
            <h5 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
              {creator.featuredProjectTitle}
            </h5>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {creator.featuredProjectDescription}
            </p>

            {/* Deliverables */}
            <div className="flex flex-wrap gap-2">
              {creator.deliverables.map((del) => (
                <span
                  key={del}
                  className="px-3 py-1 rounded-lg bg-vizora-blue/15 border border-vizora-blue/30 text-[11px] text-blue-200"
                >
                  {del}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio & Lookbook Selections */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
              Portfolio &amp; Lookbook Selections
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {creator.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl overflow-hidden border border-white/10 bg-slate-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3 bg-vizora-midnight/90 border-t border-white/10">
                    <p className="font-serif text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Awards Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs">
            <div>
              <span className="text-slate-400 uppercase tracking-widest block font-semibold mb-2">
                Specialized Competencies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {creator.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-slate-400 uppercase tracking-widest block font-semibold mb-2">
                Magazine Covers &amp; Industry Honors
              </span>
              <div className="flex flex-col gap-1.5 text-slate-300">
                {creator.awards.map((award, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-vizora-gold" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rate Guide Disclaimer */}
          {(creator.dayRateGuide || creator.hourlyRateGuide) && (
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
              <span>Day Rate Reference: <strong className="text-white font-mono">{creator.dayRateGuide || creator.hourlyRateGuide}</strong></span>
              <button
                onClick={() => {
                  onClose();
                  onBookCreator(creator.name);
                }}
                className="text-vizora-gold-light hover:underline font-semibold flex items-center gap-1"
              >
                Inquire on Shoot &amp; Campaign Availability <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
