import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  host: true,
  hmr: {
    overlay: false,
  },
    proxy: {
      "/api": {
        target: "https://real-estate-backend-9oyt.onrender.com",
        secure: false,
      },
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
    
  },

  plugins: [react()],
});


