import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	// base must be the repo name for GitHub project pages
	base: './',
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	optimizeDeps: {
		// Force pre-bundling of lucide-react to avoid "Outdated Optimize Dep" 504 errors
		include: ['lucide-react'],
	},
});
