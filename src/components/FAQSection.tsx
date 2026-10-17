import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/vizoraData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#FFF9F0] text-[#211C19] border-t border-[#C99A52]/25 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-[1px] bg-[#C99A52]" aria-hidden="true" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.26em] text-[#9A6B28]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-10 h-[1px] bg-[#C99A52]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#211C19] leading-[1.1] mb-4">
            Answers to Common{' '}
            <span className="italic text-[#A8762E]">Project Questions.</span>
          </h2>

          <p className="font-serif text-lg sm:text-xl text-[#49382B] max-w-2xl mx-auto">
            Everything you need to know about commissioning a custom portfolio,
            3D showcase, or business website with Vizora.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={item.question}
                className={`rounded-[24px] border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#F5EBDD] border-[#C99A52] shadow-champagne-card'
                    : 'bg-[#F5EBDD]/55 border-[#C99A52]/30 hover:border-[#C99A52]/60'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52] rounded-[24px]"
                  >
                    <span className="font-serif text-xl sm:text-2xl font-normal text-[#211C19]">
                      {item.question}
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 border ${
                        isOpen
                          ? 'bg-champagne-gold-pill border-[#A67635] text-[#211C19] rotate-180'
                          : 'bg-[#FFF9F0] border-[#C99A52]/40 text-[#49382B]'
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
                  className={
                    isOpen
                      ? 'px-6 sm:px-8 pb-6 pt-2 border-t border-[#C99A52]/25'
                      : 'hidden'
                  }
                >
                  <p className="text-sm sm:text-base text-[#49382B] leading-relaxed">
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
