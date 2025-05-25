import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
const aliasEntries = [
  'interfaces',
  'pages',
  'components',
  'enums',
  'constants',
  'layouts',
  'services',
  'hooks',
  'stores',
  'helpers',
].map((dir) => ({
  find: dir,
  replacement: path.resolve(__dirname, `src/${dir}`),
}));

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/email-manager/' : '/',
  plugins: [react()],
  resolve: {
    alias: aliasEntries,
  },
  server: {
    port: 4000,
    open: true,
  },
}));
