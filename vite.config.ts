import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// TypeScript doesn't know 'process' exists in this file context without @types/node.
// We declare it here to allow 'tsc' to successfully compile the project.
declare var process: any;

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // We set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // This performs a literal string replacement for 'process.env.API_KEY' in the source code.
      // This satisfies the Gemini SDK's requirement for environment variable access.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY || '')
    }
  };
});