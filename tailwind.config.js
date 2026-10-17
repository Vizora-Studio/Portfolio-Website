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
          ivory: '#F5EBDD',      // Dominant Champagne Ivory
          cream: '#FFF9F0',      // Soft Cream Surface
          beige: '#E7D2B8',      // Warm Beige Architectural Stone
          gold: {
            DEFAULT: '#C99A52',  // Champagne Gold
            light: '#E3BF82',    // Sunlit Gold Highlight
            deep: '#A37431',     // Antique Burnished Gold
            border: 'rgba(201, 154, 82, 0.32)',
          },
          charcoal: '#211C19',   // Deep Charcoal Primary Ink
          brown: '#49382B',      // Warm Dark Brown Editorial Copy
          blush: {
            DEFAULT: '#F3E3DD',  // Soft Blush Pink Editorial Surface
            deep: '#C48B7E',     // Rose Terracotta Accent
            border: '#E5CFC7',
          },
          brand: {
            blue: '#174BFF',     // Official Vizora Royal Blue
            black: '#08080D',    // Official Vizora Black
            yellow: '#FFD629',   // Official Vizora Yellow
            purple: '#7027E8',   // Official Vizora Purple
          },
          // Preserved tokens for concept demos & compatibility
          blue: {
            DEFAULT: '#C99A52',
            light: '#E3BF82',
            deep: '#A37431',
            surface: 'rgba(201, 154, 82, 0.14)',
          },
          black: {
            DEFAULT: '#211C19',
            elevated: '#2A231F',
            card: '#332A25',
            surface: '#3D332D',
            border: 'rgba(231, 210, 184, 0.22)',
          },
          yellow: {
            DEFAULT: '#E7D2B8',
            soft: '#FFF9F0',
            surface: 'rgba(231, 210, 184, 0.2)',
          },
          purple: {
            DEFAULT: '#8C6249',
            light: '#B88E72',
            deep: '#49382B',
            surface: 'rgba(73, 56, 43, 0.12)',
          },
          paper: {
            DEFAULT: '#F5EBDD',
            pure: '#FFF9F0',
            warm: '#E7D2B8',
            ink: '#211C19',
            muted: '#49382B',
            border: '#DECAB2',
          }
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        editorial: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
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
        'gold-pill': '0 14px 34px -8px rgba(182, 130, 56, 0.38), inset 0 1px 0 0 rgba(255, 250, 240, 0.65)',
        'gold-pill-hover': '0 18px 40px -8px rgba(182, 130, 56, 0.52), inset 0 1px 0 0 rgba(255, 250, 240, 0.8)',
        'champagne-card': '0 22px 50px -16px rgba(73, 56, 43, 0.11), 0 0 0 1px rgba(201, 154, 82, 0.22)',
        'champagne-elevated': '0 32px 70px -18px rgba(33, 28, 25, 0.16), 0 0 0 1px rgba(201, 154, 82, 0.28)',
        'blue-glow': '0 12px 36px -6px rgba(201, 154, 82, 0.32)',
        'purple-glow': '0 12px 36px -6px rgba(73, 56, 43, 0.22)',
        'yellow-glow': '0 8px 28px -6px rgba(231, 210, 184, 0.35)',
        'editorial-dark': '0 28px 65px -15px rgba(33, 28, 25, 0.45), 0 0 0 1px rgba(201, 154, 82, 0.22)',
        'editorial-light': '0 24px 50px -12px rgba(73, 56, 43, 0.09), 0 0 0 1px rgba(201, 154, 82, 0.2)',
      }
    },
  },
  plugins: [],
}
