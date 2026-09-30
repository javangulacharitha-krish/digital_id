import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // jsPDF + html2canvas are large; raise the warning threshold so the
    // build output stays clean. For production you'd code-split further.
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy PDF/canvas libs into their own chunk
          'pdf-libs': ['jspdf', 'html2canvas'],
          // React runtime in its own chunk for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
