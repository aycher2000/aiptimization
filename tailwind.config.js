/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0e0e0e',
        text: '#e0e0e0',
        accent: '#00ff88',
        accentDark: '#00cc6e',
        card: '#1a1a1a',
        border: '#2f2f2f',
        soft: '#181818',
      },
      boxShadow: {
        glow: '0 0 10px rgba(0, 255, 136, 0.5), 0 0 20px rgba(0, 255, 136, 0.3)',
        neon: '0 0 15px rgba(0,255,136,0.75)',
        deep: '0 4px 20px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        flicker: 'flicker 2s infinite',
        float: 'float 4s ease-in-out infinite',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}