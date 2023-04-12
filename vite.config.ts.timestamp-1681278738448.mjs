// vite.config.ts
import react from "file:///C:/Users/Leon/Desktop/rsschool/rss-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/Leon/Desktop/rsschool/rss-react/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src"
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTests.ts",
    coverage: {
      enabled: true,
      provider: "c8",
      reporter: "text",
      all: true,
      include: ["src//"],
      exclude: [
        "src/.{ts,tsx}",
        "src/setupTests.ts",
        "src/vite-env.d.ts",
        "src/assets",
        "src/enum",
        "src/routes",
        "src/types",
        "**/index.ts",
        "src/main.tsx"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZW9uXFxcXERlc2t0b3BcXFxccnNzY2hvb2xcXFxccnNzLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZW9uXFxcXERlc2t0b3BcXFxccnNzY2hvb2xcXFxccnNzLXJlYWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MZW9uL0Rlc2t0b3AvcnNzY2hvb2wvcnNzLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cclxuXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgc3JjOiAnL3NyYycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgc2V0dXBGaWxlczogJy4vc3JjL3Rlc3RzL3NldHVwVGVzdHMudHMnLFxyXG4gICAgY292ZXJhZ2U6IHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgcHJvdmlkZXI6ICdjOCcsXHJcbiAgICAgIHJlcG9ydGVyOiAndGV4dCcsXHJcbiAgICAgIGFsbDogdHJ1ZSxcclxuICAgICAgaW5jbHVkZTogWydzcmMvLyddLFxyXG4gICAgICBleGNsdWRlOiBbXHJcbiAgICAgICAgJ3NyYy8ue3RzLHRzeH0nLFxyXG4gICAgICAgICdzcmMvc2V0dXBUZXN0cy50cycsXHJcbiAgICAgICAgJ3NyYy92aXRlLWVudi5kLnRzJyxcclxuICAgICAgICAnc3JjL2Fzc2V0cycsXHJcbiAgICAgICAgJ3NyYy9lbnVtJyxcclxuICAgICAgICAnc3JjL3JvdXRlcycsXHJcbiAgICAgICAgJ3NyYy90eXBlcycsXHJcbiAgICAgICAgJyoqL2luZGV4LnRzJyxcclxuICAgICAgICAnc3JjL21haW4udHN4JyxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFHN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsU0FBUyxDQUFDLE9BQU87QUFBQSxNQUNqQixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
