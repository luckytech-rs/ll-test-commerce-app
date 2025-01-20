import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Use jsdom to simulate browser behavior
    globals: true, // Automatically inject `describe`, `it`, `expect`, etc.
    setupFiles: './test/setup.ts',
  },
});
