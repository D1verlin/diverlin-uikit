import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { fileURLToPath, URL } from 'node:url';

const entrypoints = {
  index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
  actions: fileURLToPath(new URL('./src/actions.ts', import.meta.url)),
  inputs: fileURLToPath(new URL('./src/inputs.ts', import.meta.url)),
  layout: fileURLToPath(new URL('./src/layout.ts', import.meta.url)),
  navigation: fileURLToPath(new URL('./src/navigation.ts', import.meta.url)),
  feedback: fileURLToPath(new URL('./src/feedback.ts', import.meta.url)),
  'data-display': fileURLToPath(new URL('./src/data-display.ts', import.meta.url)),
  effects: fileURLToPath(new URL('./src/effects.ts', import.meta.url)),
};

export default defineConfig({
  plugins: [
    dts({
      include: ['src'],
      outDir: 'dist',
      rollupTypes: false,
    }),
  ],
  build: {
    lib: {
      entry: entrypoints,
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
      cssFileName: 'styles',
    },
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
