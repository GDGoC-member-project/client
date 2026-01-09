import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
        svgr(),
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes("node_modules")) return;
                    if (
                        id.includes("/react/") ||
                        id.includes("/react-dom/") ||
                        id.includes("/scheduler/") ||
                        id.includes("/use-sync-external-store/")
                    ) {
                        return "react";
                    }
                    if (id.includes("react-router") || id.includes("react-router-dom"))
                        return "router";
                    if (id.includes("/motion/") || id.includes("framer-motion")) return "motion";
                    if (id.includes("/formik/") || id.includes("/yup/")) return "forms";
                    if (id.includes("/lucide-react/")) return "icons";
                    if (
                        id.includes("/@tiptap/") ||
                        id.includes("/@tiptap-pm/") ||
                        id.includes("/prosemirror") ||
                        id.includes("/@tiptap/pm") ||
                        id.includes("/lowlight/") ||
                        id.includes("/highlight.js/")
                    ) {
                        return "editor";
                    }
                    if (id.includes("/clsx/") || id.includes("/tailwind-merge/")) return "ui-utils";
                    return "vendor";
                },
            },
        },
    },
    resolve: {
        dedupe: ["react", "react-dom"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    base: "/",
});
