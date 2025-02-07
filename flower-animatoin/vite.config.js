import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            'three': path.resolve(__dirname, 'node_modules/three/build/three.module.js'),
            'three/examples/jsm/controls/OrbitControls': path.resolve(__dirname, 'node_modules/three/examples/jsm/controls/OrbitControls.js') // Correct path!
        }
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true
        }
    }
});