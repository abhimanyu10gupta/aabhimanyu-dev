import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        bgWave: ''
      },
      fontFamily: {
        dance: ['var(--font-dance)'],
        cinzel: ['var(--font-cinzel)'],
        play: ['var(--font-play)'],
        caveat: ['var(--font-caveat)'],

      },
    },
  },
  plugins: [],
};
export default config;
