import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from 'vite-tsconfig-paths';
import commonjs from 'vite-plugin-commonjs';
export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  plugins: [react(), tsconfigPaths(), commonjs()],
});
