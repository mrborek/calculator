import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig(({ command, mode }) => {
  if (command === "serve") {
    // Development server configuration for demo
    return {
      root: "demo",
      server: {
        port: 3000,
        open: true,
      },
      resolve: {
        alias: {
          "@": resolve(__dirname, "src"),
        },
      },
    };
  } else if (mode === "playground") {
    // Playground mode for development
    return {
      build: {
        outDir: "playground-dist",
        lib: {
          entry: resolve(__dirname, "src/playground.ts"),
          name: "Playground",
          formats: ["es"],
          fileName: "playground.s",
        },
        rollupOptions: {
          external: [],
        },
      },
    };
  } else {
    // Build configuration for library
    return {
      plugins: [
        dts({
          insertTypesEntry: true,
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "CalculatorLib",
          formats: ["es", "umd"],
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          external: [],
          output: {
            globals: {},
          },
        },
      },
      test: {
        globals: true,
        environment: "node",
      },
    };
  }
});
