import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { DemoRouteId, InquiryPreselection } from '../types';
import { FEATURED_DEMOS } from '../data/vizoraData';

interface DemoToolbarProps {
  currentDemoId: DemoRouteId;
  onBackToStudio: () => void;
  onSelectDemo: (demoId: DemoRouteId) => void;
  onCreateSimilar: (preselection: InquiryPreselection) => void;
}

export const DemoToolbar: React.FC<DemoToolbarProps> = ({
  currentDemoId,
  onBackToStudio,
  onSelectDemo,
  onCreateSimilar,
}) => {
  const activeDemo =
    FEATURED_DEMOS.find((d) => d.id === currentDemoId) || FEATURED_DEMOS[0];

  return (
    <div className="sticky top-0 z-50 bg-vizora-black/95 backdrop-blur-xl border-b border-vizora-blue/40 text-white px-4 sm:px-6 py-2.5 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Back to Vizora Studio + Actual Logo Badge */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToStudio}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-vizora-yellow" />
            <span>Back to Vizora</span>
          </button>

          <div className="hidden md:flex items-center gap-2.5 pl-2 border-l border-white/15">
            <div className="h-7 px-1.5 py-0.5 rounded bg-[#FAF9F5] flex items-center">
              <img
                src="/assets/vizora-logo-original.jpeg"
                alt="Vizora Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="text-xs">
              <span className="font-mono uppercase tracking-wider text-vizora-yellow font-bold">
                {activeDemo.number}
              </span>
              <span className="text-slate-400 mx-1.5">·</span>
              <span className="text-slate-200 font-medium">
                Vizora Concept Demo ({activeDemo.websiteType})
              </span>
            </div>
          </div>
        </div>

        {/* Center: Switch Between All 4 Demo Websites */}
        <div className="flex items-center gap-1 bg-white/[0.05] p-1 rounded-full border border-white/10 overflow-x-auto">
          {FEATURED_DEMOS.map((demo) => {
            const isCurrent = demo.id === currentDemoId;
            const shortLabel =
              demo.id === 'model-portfolio'
                ? '01 Model'
                : demo.id === 'makeup-artist'
                ? '02 Makeup'
                : demo.id === 'photographer'
                ? '03 Photo'
                : '04 Studio';
            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => onSelectDemo(demo.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                  isCurrent
                    ? 'bg-vizora-blue text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {shortLabel}
              </button>
            );
          })}
        </div>

        {/* Right: Create Something Similar CTA */}
        <button
          type="button"
          onClick={() =>
            onCreateSimilar({
              profession: activeDemo.profession,
              websiteType: activeDemo.preselectWebsiteType,
              designStyle: activeDemo.preselectDesignStyle,
              projectContext: `Requesting a website similar to ${activeDemo.projectTitle}`,
            })
          }
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-vizora-black bg-vizora-yellow hover:bg-vizora-yellow-soft transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Create Something Similar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
