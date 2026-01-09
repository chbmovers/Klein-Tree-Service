import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// TypeScript doesn't know 'process' exists in this file context without @types/node.
// We declare it here to allow 'tsc' to successfully compile the project.
declare var process: any;

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // base: './' ensures all assets are referenced relatively, 
    // fixing the blank screen issue on GitHub Pages.
    base: './',
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || '')
    }
  };
});