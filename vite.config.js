import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
// import vsharp from "vite-plugin-vsharp";
// import viteImagemin from 'vite-plugin-imagemin'

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
        // vsharp(),
        viteCompression(),
        // viteImagemin({
        //     gifsicle: {
        //       optimizationLevel: 7,
        //       interlaced: false,
        //     },
        //     optipng: {
        //       optimizationLevel: 7,
        //     },
        //     mozjpeg: {
        //       quality: 20,
        //     },
        //     pngquant: {
        //       quality: [0.8, 0.9],
        //       speed: 4,
        //     },
        //     svgo: {
        //       plugins: [
        //         {
        //           name: 'removeViewBox',
        //         },
        //         {
        //           name: 'removeEmptyAttrs',
        //           active: false,
        //         },
        //       ],
        //     },
        // }),
    ],
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
});
