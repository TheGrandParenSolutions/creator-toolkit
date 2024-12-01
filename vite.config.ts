import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import commonjs from "vite-plugin-commonjs";
import svgr from "vite-plugin-svgr";
import Sitemap from "vite-plugin-sitemap";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode = "production" }) => {
  const isDevelopment = false;

  return {
    server: {
      open: true, // Automatically open the browser when the server starts
      port: 3000, // Define the development server port
    },
    plugins: [
      react(), // React plugin with SWC for faster compilation
      tsconfigPaths(), // Support for TypeScript paths defined in tsconfig
      commonjs(), // Handle commonjs modules
      svgr({
        include: "**/*.svg",
        svgrOptions: {
          exportType: "default",
        },
      }),
      Sitemap({
        hostname: "https://www.creator-toolkit.com", // Your website's URL
        dynamicRoutes: [
          "/", // Home page
          "/youtube-downloader",
          "/thumbnail-test",
          "/pricing",
          "/login",
          "/signup",
          // Add other dynamic routes here
        ],
      }),
      viteCompression({
        algorithm: "gzip", // Compress assets using gzip
        threshold: 1024, // Compress files larger than 1KB
      }),
    ],
    build: {
      target: "esnext", // Use modern JS syntax for better performance
      sourcemap: isDevelopment, // Generate source maps only in development
      cssCodeSplit: true, // Enable CSS code splitting for smaller bundles
      minify: isDevelopment ? false : "esbuild", // Disable minification in development
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("@mantine")) return "mantine";
              if (id.includes("react")) return "react-vendors";
              return "vendor";
            }
          },
        },
      },
      assetsInlineLimit: 4096, // Inline assets smaller than 4KB to reduce requests
      chunkSizeWarningLimit: 500, // Avoid warnings for larger chunks
    },
    optimizeDeps: {
      include: ["react", "react-dom"], // Pre-bundle dependencies for faster dev server
      exclude: ["some-heavy-library"], // Exclude libraries if unnecessary during development
    },
    esbuild: {
      jsxInject: `import React from 'react'`, // Automatic React import for JSX
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode), // Define environment variables
    },
  };
});
