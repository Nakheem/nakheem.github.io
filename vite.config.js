import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Site is served from a custom domain (naknak.ca) at the root.
  base: '/',
  build: {
    // Matches Netlify's "Publish directory" setting. Git-ignored; Netlify
    // rebuilds it on every push, so it is never committed.
    outDir: 'build',
    emptyOutDir: true,
  },
})
