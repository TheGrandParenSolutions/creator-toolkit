import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import commonjs from "vite-plugin-commonjs";
import svgr from "vite-plugin-svgr";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode = "production" }) => {
  const isDevelopment = false;

  return {
    base: '/',
    server: {
      open: true, // Automatically open the browser when the server starts
      port: 3000, // Define the development server port
      headers: {
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Embedder-Policy": "require-corp",
      },
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
      exclude: ["some-heavy-library", "@ffmpeg/ffmpeg", "@ffmpeg/util"], // Exclude libraries if unnecessary during development
    },
    esbuild: {
      jsxInject: `import React from 'react'`, // Automatic React import for JSX
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode), // Define environment variables
    },
    resolve: {
      alias: {
        "@src": "/src",
      },
    },
  };
});
