import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
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
    { label: 'Home', href: '#hero' },
    { label: 'Vision', href: '#vision' },
    { label: 'Talent Roster', href: '#explore' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Featured Work', href: '#featured' },
    { label: 'Why Vizora', href: '#why-vizora' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-vizora-midnight/85 backdrop-blur-xl border-b border-vizora-gold/20 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-vizora-gold rounded-lg p-1"
          aria-label="Vizora Home"
        >
          {/* Logo Emblem Icon */}
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-vizora-gold/20 to-vizora-blue/20 p-[1px] shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src="/assets/vizora-emblem-isolated.png"
              alt="Vizora Emblem"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif tracking-widest text-lg font-bold text-white group-hover:text-vizora-gold transition-colors">
                VIZORA
              </span>
              <span className="text-vizora-gold text-xs leading-none">✦</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans hidden sm:block">
              Models &amp; Fashion Artists
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] px-4 py-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-vizora-midnight bg-gradient-to-r from-vizora-gold via-vizora-gold-light to-vizora-gold shadow-gold-glow hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Talent</span>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-vizora-gold"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[65px] bg-[#080B18] shadow-2xl transition-all duration-300 flex flex-col p-6 z-50 border-t border-vizora-gold/25 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-2 my-auto">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif font-semibold tracking-wide text-white hover:text-vizora-gold py-3 px-4 rounded-xl hover:bg-white/[0.08] active:bg-white/[0.1] transition-all flex items-center justify-between border-b border-white/[0.08]"
              style={{ transitionDelay: `${idx * 30}ms` }}
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-vizora-gold" />
            </a>
          ))}

          <div className="pt-6 mt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-vizora-midnight bg-gradient-to-r from-vizora-gold to-vizora-gold-light shadow-gold-glow flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Fashion Talent</span>
            </button>
          </div>
        </div>

        <div className="pt-6 text-center border-t border-white/10 mt-auto">
          <p className="text-[11px] text-slate-400 uppercase tracking-widest font-mono">
            Creative Portfolios • Easy Bookings • Real Opportunities
          </p>
        </div>
      </div>
    </header>
  );
};
