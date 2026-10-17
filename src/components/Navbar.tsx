import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InquiryPreselection } from '../types';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
  onStartProject: (preselection?: InquiryPreselection) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateSection,
  onStartProject,
  activeSection = 'hero',
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', id: 'hero', href: '#hero' },
    { label: 'Services', id: 'services', href: '#services' },
    { label: 'Our Work', id: 'work', href: '#work' },
    { label: 'Who We Help', id: 'who-we-help', href: '#who-we-help' },
    { label: 'Our Process', id: 'process', href: '#process' },
    { label: 'About', id: 'about', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-vizora-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-vizora-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Actual Vizora Logo on the Left */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow rounded-xl p-1"
          aria-label="Vizora Web Design Studio — Home"
        >
          <div className="relative h-11 sm:h-12 px-2.5 py-1 rounded-lg bg-[#FAF9F5] border border-vizora-yellow/40 shadow-[0_0_25px_-5px_rgba(197,160,89,0.4)] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src="/assets/vizora-logo-original.jpeg"
              alt="Vizora Official Logo"
              className="h-full w-auto object-contain select-none"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif tracking-[0.18em] text-base sm:text-lg font-bold text-white group-hover:text-vizora-yellow transition-colors">
                VIZORA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-vizora-yellow" aria-hidden="true" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-sans hidden sm:block">
              Creative Web Design Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md border border-white/[0.09] px-3 py-1.5 rounded-full"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-xs uppercase tracking-[0.14em] font-medium px-4 py-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow ${
                  isActive
                    ? 'bg-vizora-blue text-vizora-black font-bold shadow-blue-glow'
                    : 'text-slate-200 hover:text-white hover:bg-white/[0.07]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Primary CTA: Start Your Project */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onStartProject()}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-vizora-black bg-vizora-blue hover:bg-vizora-blue-light shadow-blue-glow transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-vizora-black" aria-hidden="true" />
            <span>Start Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-vizora-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="vizora-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="vizora-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-vizora-black/98 backdrop-blur-2xl border-t border-white/10 transition-all duration-300 flex flex-col justify-between p-6 overflow-y-auto ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-3'
        }`}
      >
        <div className="flex flex-col gap-2">
          <div className="pb-3 mb-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.22em] text-vizora-yellow font-semibold">
              Vizora Navigation
            </span>
            <span className="text-[11px] text-slate-400">
              Portfolio &amp; Business Websites
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-lg font-serif font-medium tracking-wide text-white hover:text-vizora-yellow py-3.5 px-4 rounded-xl hover:bg-white/[0.06] transition-all flex items-center justify-between border-b border-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-vizora-blue-light" />
            </a>
          ))}

          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] text-white bg-vizora-blue hover:bg-vizora-blue-light shadow-blue-glow flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-yellow"
            >
              <span className="w-2 h-2 rounded-full bg-vizora-yellow" aria-hidden="true" />
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 text-vizora-yellow" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-xs font-serif italic text-slate-300">
            “Your Vision. Your Website. Your Next Opportunity.”
          </p>
        </div>
      </div>
    </header>
  );
};
