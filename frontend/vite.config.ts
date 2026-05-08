import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({

    base: "/static/",

    server: {
        host: 'localhost',
        port: 5173,
        strictPort: true,
        hmr: true,
    },

    build: {
        outDir: path.resolve(__dirname, '../backend/static'),
        emptyOutDir: false,
        manifest: "manifest.json",
        rollupOptions: {

            input: {
                style: 'src/style.css',
                main: 'src/main.ts',

                // specify path to your files here
                counter: 'src/counter.ts',
            },
            output: {
                entryFileNames: '[name]-[hash].js',
                chunkFileNames: '[name]-[hash].js',
                assetFileNames: '[name]-[hash].[ext]'
            },
        },
    },
})