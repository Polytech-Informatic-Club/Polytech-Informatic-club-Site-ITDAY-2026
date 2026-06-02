/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#F8FAFC', // Slate 50 sleek light theme background
        darkCard: 'rgba(255, 255, 255, 0.7)',
        neonGreen: {
          DEFAULT: '#059669', // Emerald Green for high contrast on light backgrounds
          muted: '#10B981',
        },
        neonPurple: {
          DEFAULT: '#6D28D9', // Violet Purple for premium contrast
          muted: '#8B5CF6',
        },
        neonBlue: {
          DEFAULT: '#0369A1', // Deep Sky Blue for sleek contrast
          muted: '#0EA5E9',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
