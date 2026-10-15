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
            DEFAULT: '#174BFF',
            glow: '#3B6BFF',
            deep: '#0D33B3',
            surface: 'rgba(23, 75, 255, 0.08)',
          },
          midnight: {
            DEFAULT: '#080B18',
            deep: '#04060E',
            card: '#0D1224',
            surface: '#12182F',
            elevated: '#171F3B',
            border: 'rgba(255, 255, 255, 0.08)',
          },
          violet: {
            DEFAULT: '#6D22F5',
            glow: '#8E4FFF',
            deep: '#4B10B8',
            surface: 'rgba(109, 34, 245, 0.08)',
          },
          gold: {
            DEFAULT: '#D9A441',
            light: '#F5D075',
            glow: '#FFE29A',
            dark: '#A67926',
            surface: 'rgba(217, 164, 65, 0.08)',
            border: 'rgba(217, 164, 65, 0.25)',
          },
          ivory: {
            DEFAULT: '#FAF8F3',
            pure: '#FFFFFF',
            muted: '#F0ECE1',
            border: '#E2DCD0',
            dark: '#2A2927',
          }
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'spin-reverse': 'spin-reverse 32s linear infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 3s infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(28px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(217, 164, 65, 0.35)',
        'blue-glow': '0 0 35px -5px rgba(23, 75, 255, 0.4)',
        'violet-glow': '0 0 35px -5px rgba(109, 34, 245, 0.4)',
        'luxury-card': '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'ivory-card': '0 20px 40px -15px rgba(30, 25, 20, 0.08), 0 0 0 1px rgba(217, 164, 65, 0.15)',
      }
    },
  },
  plugins: [],
}
