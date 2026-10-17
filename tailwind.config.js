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
            light: '#4770FF',
            deep: '#0E35CC',
            surface: 'rgba(23, 75, 255, 0.10)',
          },
          black: {
            DEFAULT: '#08080D',
            elevated: '#0F0F18',
            card: '#131320',
            surface: '#19192A',
            border: 'rgba(255, 255, 255, 0.09)',
          },
          yellow: {
            DEFAULT: '#FFD629',
            soft: '#FFE36E',
            surface: 'rgba(255, 214, 41, 0.12)',
          },
          purple: {
            DEFAULT: '#7027E8',
            light: '#9359F2',
            deep: '#5115B5',
            surface: 'rgba(112, 39, 232, 0.12)',
          },
          paper: {
            DEFAULT: '#F7F6F2',
            pure: '#FFFFFF',
            warm: '#EFECE6',
            ink: '#08080D',
            muted: '#4A4A5A',
            border: '#E2DFD7',
          }
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        editorial: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
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
        'blue-glow': '0 10px 35px -5px rgba(23, 75, 255, 0.45)',
        'purple-glow': '0 10px 35px -5px rgba(112, 39, 232, 0.4)',
        'yellow-glow': '0 8px 25px -5px rgba(255, 214, 41, 0.35)',
        'editorial-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'editorial-light': '0 24px 50px -12px rgba(8, 8, 13, 0.09), 0 0 0 1px rgba(8, 8, 13, 0.06)',
      }
    },
  },
  plugins: [],
}
