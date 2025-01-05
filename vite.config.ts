import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import { qrcode } from 'vite-plugin-qrcode';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    react(),
    qrcode(),
    tsconfigPaths(),
    Pages({ dirs: [{ dir: 'src/pages', baseRoute: '/xenovrs-demo/' }] }),
  ],
  server: {
    host: '0.0.0.0',
  },
  base: '/xenovrs-demo/',
});
