import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	// base must be the repo name for GitHub project pages
	base: './',
	plugins: [react(), tailwindcss()],
});
