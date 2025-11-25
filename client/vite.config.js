import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      "siddhivinayak-construction.onrender.com"
    ],
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api": {
        target: "https://real-estate-backend-9oyt.onrender.com",
        secure: false,
        changeOrigin: true,
      },
    },
  },

  plugins: [react()],
});
