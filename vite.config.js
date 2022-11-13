/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react'
export default {
    root: 'src',
    publicDir: 'assets',
    base: '/ppopkki.js/',
    build: {
        assetsDir: 'public',
        outDir: '../dist'
    },
    plugins: [
        react(),
    ]
}