import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    server: {
        host: true,
        port: 4321,
    },
    vite: {
        server: {
            watch: {
                // Fondamentale per Docker: attiva il controllo periodico dei file
                usePolling: true,
                interval: 100,
            },
            // Assicura che l'Hot Module Replacement sappia dove collegarsi
            hmr: {
                clientPort: 4321
            }
        }
    }
});