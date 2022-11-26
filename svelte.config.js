import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';

const dev = "production" === "development";

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs', // was build, but we want to deploy to GitHub Pages
			assets: 'docs', // was build, but we want to deploy to GitHub Pages
			fallback: 'index.html',
			precompress: false
		}),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/svelte-ionic-base",
        },
		// hydrate the <div id="svelte"> element in src/app.html	
		// target: "#svelte",	
		alias: {
			'$ionic': 'src/lib/ionic',
			'$ionpage': 'src/lib/ionic/svelte/components/IonPage.svelte',
			'$interfaces': 'src/interfaces',
			'$services': 'src/services',
			'$stores': 'src/stores',
		}

	}
};

export default config;
