import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";

// https://vite.dev/config/
export default defineConfig({
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [react(), nitro()],
});
