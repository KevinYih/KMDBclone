import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/tmdb": {
        target: "http://localhost:8000", // backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tmdb/, "/tmdb"), // 请根据你的后端路由情况调整
      },
      "/signup": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/login": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
