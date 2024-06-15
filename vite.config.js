// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    exclude: [...configDefaults.exclude, 'tests'],
  },
});
