import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração compatível com Windows (corrige paths relativos)
export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    port: 5173,
    open: true,
  },
});