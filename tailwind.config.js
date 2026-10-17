/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vizora: {
          blue: {
            DEFAULT: '#C5A059', // Haute Couture Brushed Gold
            light: '#DFC184',   // Luminous Champagne Gold
            deep: '#9E7B3B',    // Deep Antique Brass
            surface: 'rgba(197, 160, 89, 0.12)',
          },
          black: {
            DEFAULT: '#0B0A09', // Warm Atelier Obsidian
            elevated: '#13110F', // Sculpted Espresso Noir
            card: '#181512',    // Gallery Velvet Charcoal
            surface: '#211D19', // Warm Bronze-Charcoal
            border: 'rgba(230, 207, 163, 0.14)',
          },
          yellow: {
            DEFAULT: '#E6CFA3', // Soft Champagne Pearl
            soft: '#F3E5C8',    // Pale Silk Champagne
            surface: 'rgba(230, 207, 163, 0.14)',
          },
          purple: {
            DEFAULT: '#8C6249', // Warm Couture Rose-Bronze
            light: '#B88E72',   // Luminous Amber-Bronze
            deep: '#694632',    // Deep Espresso Bronze
            surface: 'rgba(140, 98, 73, 0.14)',
          },
          paper: {
            DEFAULT: '#F6F2EA', // Museum Alabaster Linen
            pure: '#FCFBF8',    // Warm Silk Ivory
            warm: '#EDE6DA',    // Travertine Stone
            ink: '#12100E',     // Deep Gallery Ink
            muted: '#5C544B',   // Warm Editorial Taupe
            border: '#DFD6C7',  // Fine Museum Matting Hairline
          }
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        editorial: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 28s linear infinite',
        'spin-reverse': 'spin-reverse 36s linear infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2.5s infinite',
        'pulse-subtle': 'pulse-subtle 5s ease-in-out infinite',
        'reveal-up': 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'blue-glow': '0 12px 36px -6px rgba(197, 160, 89, 0.32)',
        'purple-glow': '0 12px 36px -6px rgba(184, 142, 114, 0.28)',
        'yellow-glow': '0 8px 28px -6px rgba(230, 207, 163, 0.26)',
        'editorial-dark': '0 28px 65px -15px rgba(0, 0, 0, 0.82), 0 0 0 1px rgba(230, 207, 163, 0.12)',
        'editorial-light': '0 24px 50px -12px rgba(18, 16, 14, 0.08), 0 0 0 1px rgba(18, 16, 14, 0.07)',
      }
    },
  },
  plugins: [],
}
