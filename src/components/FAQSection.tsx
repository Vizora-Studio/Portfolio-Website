import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/vizoraData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-vizora-black text-white editorial-grid-lines overflow-hidden border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 mb-5">
            <HelpCircle className="w-3.5 h-3.5 text-vizora-yellow" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-vizora-yellow">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4">
            Answers to Common Project Questions.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about how Vizora designs and builds custom portfolio and
            business websites.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-vizora-black-elevated border-vizora-blue/60 shadow-editorial-dark'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/25'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow rounded-2xl"
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-white">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-vizora-blue text-vizora-yellow rotate-180'
                          : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={isOpen ? 'px-6 pb-6 pt-1 border-t border-white/10' : 'hidden'}
                >
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
