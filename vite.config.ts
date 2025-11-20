import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // base must be the repo name for GitHub project pages
  base: '/Personal-Website/',
  plugins: [react(), tailwindcss()],
});
