import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.API_URL": JSON.stringify(env.API_URL),
    },
    plugins: [react()],

    server: {
      port: 9999,
      proxy: {
        "/api": env.API_URL,
      },
    },
  };
});
