import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Ignite-React-Fundamentos/', // Caminho relativo do seu repositório GitHub
});
