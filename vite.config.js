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
      statements: 60, // Minimum % of statements that must be covered
      branches: 60, // Minimum % of branches that must be covered
      functions: 60, // Minimum % of functions that must be covered
      lines: 60, // Minimum % of lines that must be covered
    },
  },
});
