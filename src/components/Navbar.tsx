import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InquiryPreselection, PageRouteId } from '../types';

interface NavbarProps {
  onNavigateSection: (sectionId: string, pageRoute?: PageRouteId) => void;
  onStartProject: (preselection?: InquiryPreselection) => void;
  activeSection?: string;
  activePage?: PageRouteId;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateSection,
  onStartProject,
  activeSection = 'hero',
  activePage = 'home',
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

  const navLinks: {
    label: string;
    id: string;
    page: PageRouteId;
    href: string;
  }[] = [
    { label: 'HOME', id: 'hero', page: 'home', href: '#hero' },
    { label: 'SERVICES', id: 'services', page: 'services', href: '#services' },
    { label: 'OUR WORK', id: 'work', page: 'work', href: '#work' },
    { label: 'WHO WE HELP', id: 'who-we-help', page: 'who-we-help', href: '#who-we-help' },
    { label: 'PROCESS', id: 'process', page: 'process', href: '#process' },
    { label: 'ABOUT', id: 'about', page: 'about', href: '#about' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    page: PageRouteId
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigateSection(sectionId, page);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#F5EBDD]/95 backdrop-blur-xl border-b border-[#C99A52]/25 shadow-[0_10px_30px_-12px_rgba(73,56,43,0.1)] py-3.5'
          : 'bg-gradient-to-b from-[#F5EBDD]/90 via-[#F5EBDD]/60 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Left: Vizora Logo & Studio Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero', 'home')}
          className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52] rounded-xl py-1"
          aria-label="Vizora Creative Web Design Studio — Home"
        >
          {/* Sculptural Winged V Emblem + Official Vizora Logo Badge */}
          <div className="relative flex items-center gap-2">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFF9F0] border border-[#C99A52]/40 shadow-[0_6px_18px_-4px_rgba(168,120,48,0.25)] flex items-center justify-center p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/vizora-logo-original.jpeg"
                alt="Vizora Official Logo"
                className="w-full h-full object-contain select-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-serif tracking-[0.14em] text-xl sm:text-2xl font-medium text-[#211C19] leading-none group-hover:text-[#9A6B28] transition-colors">
              VIZORA
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[#49382B] font-sans font-medium mt-1">
              CREATIVE WEB DESIGN STUDIO
            </span>
          </div>
        </a>

        {/* Center: Editorial Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 xl:gap-9"
        >
          {navLinks.map((link) => {
            const isActive =
              activePage !== 'home'
                ? activePage === link.page
                : activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id, link.page)}
                className={`relative py-2 text-[11px] xl:text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52] rounded ${
                  isActive
                    ? 'text-[#A67635]'
                    : 'text-[#211C19] hover:text-[#A67635]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C99A52] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Primary CTA Pill — Start Your Project */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onStartProject()}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#211C19]"
          >
            <span>START YOUR PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#211C19] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-xl bg-[#FFF9F0] border border-[#C99A52]/40 text-[#211C19] hover:bg-[#E7D2B8]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52]"
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
        className={`lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#F5EBDD]/98 backdrop-blur-2xl border-t border-[#C99A52]/30 transition-all duration-300 flex flex-col justify-between p-6 overflow-y-auto ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-3'
        }`}
      >
        <div className="flex flex-col gap-2">
          <div className="pb-3 mb-2 border-b border-[#C99A52]/25 flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#A67635] font-bold">
              Vizora Studio Navigation
            </span>
            <span className="text-[11px] text-[#49382B]">
              Bespoke Digital Experiences
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id, link.page)}
              className="text-xl font-serif font-medium tracking-wide text-[#211C19] hover:text-[#A67635] py-3.5 px-4 rounded-xl hover:bg-[#FFF9F0] transition-all flex items-center justify-between border-b border-[#C99A52]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A52]"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-[#C99A52]" />
            </a>
          ))}

          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] bg-champagne-gold-pill flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#211C19]"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#211C19]" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#C99A52]/25 text-center">
          <p className="text-sm font-serif italic text-[#49382B]">
            “Your Talent Deserves a Website as Exceptional as You.”
          </p>
        </div>
      </div>
    </header>
  );
};
