import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            'three': 'three/build/three.module.js'
        }
    },
    build: { // This is the VERY IMPORTANT part for OrbitControls
        commonjsOptions: {
            transformMixedEsModules: true  // Essential for OrbitControls
        }
    }
});