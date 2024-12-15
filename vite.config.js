import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Simulate browser environment with jsdom
    globals: true, // Global variables like `describe`, `it`, `expect`, etc.
    setupFiles: "./setupTests.js", // Path to setup file (for jest-dom and other setups)
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "lcov", "json-summary"], // Text output in terminal, lcov for HTML report
      include: ["src/**/*.js", "src/**/*.jsx"],
      exclude: ["src/main.jsx", "src/App.jsx"],
      reportsDirectory: "./coverage", // Directory where coverage reports will be stored
    },
  },
});
