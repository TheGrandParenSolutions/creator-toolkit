import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from 'vite-tsconfig-paths';
import commonjs from 'vite-plugin-commonjs';
import svgr from 'vite-plugin-svgr';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  plugins: [react(), tsconfigPaths(), commonjs(), svgr({
    include: '**/*.svg',
    svgrOptions: {
      exportType: 'default',
    }
  }),
  Sitemap({
    hostname: 'https://www.creator-toolkit.com', // Your website's URL
    dynamicRoutes: [
      '/', // Home page
      '/youtube-downloader',
      '/thumbnail-test',
      '/pricing',
      '/login',
      '/signup',
      // Add other dynamic routes here
    ],
  }),],
});
