/** @type {import('vite').UserConfig} */
import tscc from 'ttypescript';
import typescript from '@rollup/plugin-typescript'
export default {
    root: 'src',
    publicDir: 'assets',
    base: '/ppopkki.js/',
    build: {
        assetsDir: 'public',
        outDir: '../dist'
    },
    plugins: [
        typescript({tscc})
    ]
}