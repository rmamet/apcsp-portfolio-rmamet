import { defineConfig } from "vite";

// Export the Vite configuration
export default defineConfig({
  // Base public path for serving the app
  base: "/", // Ensure that this matches the base URL you want for your site
  // Other configuration options can go here
  build: {
    outDir: "dist", // Specify the output directory
    rollupOptions: {
      input: {
        main: "./src/main.js", // Entry point for your main JavaScript file (if you have one)
        // You can include more entry points here if necessary
      },
    },
  },
  server: {
    open: true, // Automatically open the browser
    port: 3000, // Port for the development server
    // Optionally, you can add more server options here
  },
});
