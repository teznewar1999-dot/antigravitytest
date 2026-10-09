/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#FFB800',
          amber: '#F59E0B',
          dark: '#080811',
          card: '#121224',
          cardHover: '#1A1A32',
          purple: '#7C3AED',
          pink: '#EC4899',
          crimson: '#E11D48',
          neonCyan: '#06B6D4'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'sound-bar-1': 'soundBar 1.2s ease-in-out infinite',
        'sound-bar-2': 'soundBar 0.9s ease-in-out infinite 0.2s',
        'sound-bar-3': 'soundBar 1.4s ease-in-out infinite 0.4s',
        'sound-bar-4': 'soundBar 1.0s ease-in-out infinite 0.1s',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        soundBar: {
          '0%, 100%': { height: '6px' },
          '50%': { height: '24px' },
        }
      }
    },
  },
  plugins: [],
}
