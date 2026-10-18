import React, { useEffect, useRef } from 'react';
import '../atmosphere.css';

/**
 * Site-wide atmospheric background.
 *
 * One fixed, decorative layer behind all page content. It extends the hero's
 * sunlit architectural environment across the whole site using the project's
 * own scenery photographs (siblings of the hero scene, without the laptop and
 * hero props):
 *
 *   arch-studio  – always-on base, matches the hero's wall / floor / table
 *   gallery      – open hall with arches, tree window & curtains (mid page)
 *   salon        – vase, travertine table & arched windows (later sections)
 *
 * The scenery stays fixed in the viewport and cross-fades / pans slowly as the
 * visitor scrolls, so the page feels like moving through one continuous space
 * (no tiling, no per-section images, no seams). Five soft pastel lights are
 * layered on top and fade in/out with scroll progress.
 *
 * Rendering: one passive scroll listener feeds one requestAnimationFrame loop
 * that eases toward the target scroll progress and stops when settled. Only
 * `opacity` and `transform` are written directly to the DOM nodes — no React
 * state, no re-renders while scrolling. Styling lives in atmosphere.css.
 */

interface Scene {
  id: 'arch' | 'gallery' | 'salon';
  src: string;
  /** Trapezoid [fadeInStart, fullIn, fullUntil, fadeOutEnd] over scroll progress. `null` = always visible base. */
  window: [number, number, number, number] | null;
  /** Horizontal pan in px from progress 0 → 1. */
  panX: number;
  /** Vertical pan in px from progress 0 → 1. */
  panY: number;
}

const SCENES: Scene[] = [
  { id: 'arch', src: '/images/champagne-arch-studio-bg.jpg', window: null, panX: -50, panY: -30 },
  { id: 'gallery', src: '/images/champagne-atelier-gallery-bg.jpg', window: [0.06, 0.2, 0.46, 0.6], panX: 70, panY: -40 },
  { id: 'salon', src: '/images/champagne-atelier-salon-bg.jpg', window: [0.48, 0.62, 0.8, 0.94], panX: -70, panY: -40 },
];

interface Light {
  id: 'blue' | 'blush' | 'lavender' | 'champagne' | 'sage';
  center: number;
  spread: number;
  peak: number;
  driftX: number;
  driftY: number;
}

// Section progression (approx. page progress):
// Featured 0.08–0.2 · Services 0.2–0.32 · Who 0.32–0.46 · Why 0.46–0.56
// Process 0.56–0.68 · About 0.68–0.8 · FAQ/Form 0.8–0.92 · CTA 0.92–1
const LIGHTS: Light[] = [
  { id: 'blue', center: 0.14, spread: 0.2, peak: 0.5, driftX: -140, driftY: 160 },
  { id: 'blush', center: 0.3, spread: 0.2, peak: 0.55, driftX: 120, driftY: -120 },
  { id: 'lavender', center: 0.5, spread: 0.2, peak: 0.45, driftX: -160, driftY: 120 },
  { id: 'sage', center: 0.58, spread: 0.18, peak: 0.4, driftX: 140, driftY: -100 },
  { id: 'champagne', center: 0.88, spread: 0.28, peak: 0.65, driftX: -100, driftY: -140 },
];

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const smooth = (t: number) => t * t * (3 - 2 * t);

const sceneWeight = (w: Scene['window'], p: number) => {
  if (!w) return 1;
  const [a, b, c, d] = w;
  if (p <= a || p >= d) return 0;
  if (p < b) return smooth((p - a) / (b - a));
  if (p <= c) return 1;
  return smooth(1 - (p - c) / (d - c));
};

export const AtmosphericBackground: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sceneNodes = Array.from(root.querySelectorAll<HTMLElement>('[data-scene]'));
    const lightNodes = Array.from(root.querySelectorAll<HTMLElement>('[data-light]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let target = 0;
    let current = 0;
    let frame = 0;

    const readProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? clamp01(window.scrollY / max) : 0;
    };

    const paint = (p: number) => {
      SCENES.forEach((scene, i) => {
        const node = sceneNodes[i];
        if (!node) return;
        node.style.opacity = sceneWeight(scene.window, p).toFixed(3);
        node.style.transform = `translate3d(${(p * scene.panX).toFixed(1)}px, ${(p * scene.panY).toFixed(1)}px, 0) scale(1.1)`;
      });
      LIGHTS.forEach((light, i) => {
        const node = lightNodes[i];
        if (!node) return;
        const d = (p - light.center) / light.spread;
        node.style.opacity = (Math.exp(-d * d) * light.peak).toFixed(3);
        node.style.transform = `translate3d(${((p - 0.5) * light.driftX).toFixed(1)}px, ${((p - 0.5) * light.driftY).toFixed(1)}px, 0)`;
      });
    };

    const tick = () => {
      frame = 0;
      if (reduceMotion.matches) {
        current = target;
        paint(current);
        return;
      }
      current += (target - current) * 0.07; // gentle easing
      if (Math.abs(target - current) < 0.0005) current = target;
      paint(current);
      if (current !== target) frame = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = readProgress();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    target = current = readProgress();
    paint(current);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    reduceMotion.addEventListener?.('change', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reduceMotion.removeEventListener?.('change', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="atmosphere" aria-hidden="true">
      {/* Ivory foundation (visible only while images load) */}
      <div className="atmosphere__base" />
      {/* Hero-sibling architectural scenery, cross-fading with scroll */}
      {SCENES.map(scene => (
        <img
          key={scene.id}
          data-scene={scene.id}
          src={scene.src}
          alt=""
          decoding="async"
          draggable={false}
          className={`atmosphere__scene atmosphere__scene--${scene.id}`}
        />
      ))}
      {/* Ivory veil: keeps the scenery recognisable but foreground text readable */}
      <div className="atmosphere__veil" />
      {/* Scroll-responsive pastel lighting */}
      {LIGHTS.map(light => (
        <div
          key={light.id}
          data-light={light.id}
          className={`atmosphere__light atmosphere__light--${light.id}`}
        />
      ))}
      <div className="atmosphere__vignette" />
    </div>
  );
};
