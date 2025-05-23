import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFFE55',
        },
        brand: { link: '#004B87', accent: '#FF6B6B', linkHover: '#333' },
        blue: {
          DEFAULT: '#2563eb',
        },
      },
    },
  },
  plugins: [forms(), typography()],
} satisfies Config;
export default config;
