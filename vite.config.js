import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx'
            ],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        viteCompression(),
    ],
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
});
