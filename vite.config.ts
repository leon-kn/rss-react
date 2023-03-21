/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: 'text',
      all: true,
      include: ['src//'],
      exclude: [
        'src/.{ts,tsx}',
        'src/setupTests.ts',
        'src/vite-env.d.ts',
        'src/assets',
        'src/enum',
        'src/routes',
        'src/types',
        '**/index.ts',
      ],
    },
  },
});
