import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        dmsans: ['var(--font-dmsans)'],
        poppins700: ['var(--font-poppins_700)'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;
