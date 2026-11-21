import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'DiverlinUI',
      formats: ['iife'],
      fileName: () => 'diverlin.global.js',
    },
    cssCodeSplit: false,
  },
});
