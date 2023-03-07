import resolve from "@rollup/plugin-node-resolve";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
    publicDir: false,
    define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    },
    plugins: [
        resolve(),
        cssInjectedByJsPlugin(),
        react(),
    ],
    build: {
        reportCompressedSize: true,
        lib: {
            entry: {
                index: "src/index.ts",
            },
            formats: ["cjs"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
        },
    },
});
