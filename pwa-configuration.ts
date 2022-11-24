
const pwaManifest = {
    name: 'Ionic Svelte',
    short_name: 'Ionic Svelte Demo',
    description: 'Coolness in Vite Svelte and Ionic',
    theme_color: '#ffffff',
    icons: [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
        }
    ]
}


const ionicSvelteDirectories = [
    'assets/json/*', 'assets/img/*', 'assets/img/slides/*',
    'assets/img/ionic/*']

const pwaConfiguration = {
    srcDir: './build',
    outDir: './build', // to ensure sw.js and workbox are in build - not according to docs, but works nevertheless? 
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'assets/*', ...ionicSvelteDirectories],
    base: '/',
    scope: '/',
    manifest: pwaManifest
}

export { pwaConfiguration }
