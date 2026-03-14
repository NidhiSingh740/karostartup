/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#020617',      // Deepest Midnight Blue/Black
        neonGreen: '#4ade80',   // High-vis Green
        neonBlue: '#3b82f6',    // Electric Blue
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(90deg, #3b82f6 0%, #4ade80 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}