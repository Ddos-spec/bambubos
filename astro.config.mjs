// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Ganti dengan URL GitHub Pages Anda nanti (contoh: https://username.github.io)
  site: 'https://bambubos.github.io', 
  
  // PENTING: Ganti '/bambubos' dengan nama repository GitHub Anda.
  // Jika nama repo Anda 'bambu-project', ubah jadi '/bambu-project'.
  // Jika ini dikosongkan, style/gambar mungkin tidak muncul di GitHub Pages.
  base: '/bambubos',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});