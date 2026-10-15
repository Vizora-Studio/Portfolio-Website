import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-vizora-midnight"
    >
      {/* 3D Three.js Celestial Orbit Canvas in Background */}
      <Hero3DCanvas />

      {/* Atmospheric Lighting Sweeps */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-vizora-blue/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-vizora-violet/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-vizora-gold/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Animated Status Line */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-vizora-gold/30 shadow-gold-glow mb-8 transition-all duration-1000 opacity-100 translate-y-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-vizora-gold animate-ping" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-vizora-gold-light">
            FASHION • BEAUTY • EDITORIAL CASTING
          </span>
          <Sparkles className="w-3.5 h-3.5 text-vizora-gold" />
        </div>

        {/* Central 3D Brand Artwork Centerpiece */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mb-10 w-full max-w-xl group perspective-1000 transition-all duration-1000 delay-150 opacity-100 scale-100"
          style={{
            perspective: '1200px',
          }}
        >
          {/* Orbital Ring Rings around Logo */}
          <div
            className="absolute -inset-4 sm:-inset-8 rounded-3xl border border-vizora-gold/25 pointer-events-none animate-pulse-glow"
            style={{
              transform: `rotate(${tilt.y * 0.5}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          />
          <div
            className="absolute -inset-8 sm:-inset-14 rounded-full border border-vizora-blue/20 pointer-events-none border-dashed animate-spin-slow opacity-60"
          />

          {/* Dimensional Luxury Cameo Cradling the Authentic Logo */}
          <div
            className="relative rounded-3xl p-3 sm:p-5 bg-[#FAF8F3] border-2 border-vizora-gold/50 shadow-2xl overflow-hidden transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(24px)`,
              boxShadow: `
                ${-tilt.y * 3}px ${tilt.x * 3}px 60px -10px rgba(217, 164, 65, 0.4),
                0 30px 80px -15px rgba(0, 0, 0, 0.95),
                0 0 0 1px rgba(217, 164, 65, 0.6)
              `,
            }}
          >
            {/* Dynamic Specular Glare reacting to mouse cursor */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 65%)`,
              }}
            />

            {/* Inner Double Gold Hairline Bevel */}
            <div className="relative rounded-2xl overflow-hidden border border-vizora-gold/30 bg-[#FAF8F3] p-1.5 sm:p-2">
              <img
                src="/assets/vizora-logo-original.jpeg"
                alt="VIZORA — Creative Portfolios, Easy Bookings, Real Opportunities"
                className="w-full h-auto max-h-[290px] object-contain block mx-auto select-none transform transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />

              {/* Shimmer light sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            </div>

            {/* Floating 3D status badge on card corner */}
            <div
              className="absolute bottom-3 right-6 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-vizora-midnight/90 border border-vizora-gold/50 text-[10px] uppercase tracking-wider text-vizora-gold-light shadow-xl backdrop-blur-md"
              style={{
                transform: 'translateZ(30px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Verified Creator Guild</span>
            </div>
          </div>
        </div>

        {/* Hero Headline */}
        <h1
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1] transition-all duration-1000 delay-300 opacity-100 translate-y-0"
        >
          Your Talent Deserves a{' '}
          <span className="text-gold-gradient underline decoration-vizora-gold/30 decoration-1 underline-offset-8">
            Bigger Stage.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          className="font-sans text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-all duration-1000 delay-500 opacity-100 translate-y-0"
        >
          Curate your digital comp card and beauty book. Get discovered by luxury fashion houses,
          editorial magazines, and top casting directors for runway and campaign bookings.
        </p>

        {/* Action CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto transition-all duration-1000 delay-700 opacity-100 translate-y-0"
        >
          {/* Primary CTA: Explore Talent */}
          <a
            href="#explore"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-vizora-midnight bg-gradient-to-r from-vizora-gold via-vizora-gold-light to-vizora-gold shadow-gold-glow hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-vizora-midnight" />
            <span>Explore Talent Roster</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA: Cast Talent */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-vizora-gold/50 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Cast Talent With Us</span>
            <Sparkles className="w-4 h-4 text-vizora-gold" />
          </button>
        </div>

        {/* Live Metrics Quick Bar */}
        <div
          className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 text-center transition-all duration-1000 delay-900 opacity-100 translate-y-0"
        >
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              500+
            </div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-0.5">
              Verified Models &amp; MUAs
            </div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-vizora-gold-light tracking-tight">
              100%
            </div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-0.5">
              Direct Campaign Inquiries
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              0%
            </div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-0.5">
              Agency Fee Traps
            </div>
          </div>
        </div>
      </div>

      {/* Tasteful Scroll Indicator */}
      <div className="mt-12 flex justify-center">
        <a
          href="#vision"
          className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-vizora-gold transition-colors duration-300 group focus:outline-none"
          aria-label="Scroll to Vision section"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium opacity-60 group-hover:opacity-100 transition-opacity">
            Explore Vision
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-vizora-gold/60 flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-vizora-gold animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
