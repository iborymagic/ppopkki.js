/** @type {import('vite').UserConfig} */
import ttsc from 'ttypescript';
import typescript from '@rollup/plugin-typescript';
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
        typescript({
            typescript: ttsc
        })
    ]
}