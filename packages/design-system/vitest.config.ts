import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["./**/*.test.{ts,tsx}"],
    environment: "jsdom",
  },
  plugins: [react()],
});
