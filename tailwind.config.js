/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#151515',
        stone: '#292927',
        burgundy: '#632D35',
        gold: '#C5A46D',
        parchment: '#E7D9B9',
        mystic: '#536E85',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
