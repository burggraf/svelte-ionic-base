if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(a[b])return;let n={};const u=e=>s(e,b),f={module:{uri:b},exports:n,require:u};a[b]=Promise.all(i.map((e=>f[e]||u(e)))).then((e=>(c(...e),n)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout-a3be0d01.css",revision:"861bc4f1d752c3bde62447bfe1a1b854"},{url:"_app/immutable/assets/_page-f7148aff.css",revision:"090eefcd93587eff7de1a437caaf896a"},{url:"_app/immutable/chunks/_layout-0c1946ce.js",revision:"be9b28aa0581d97256b6626107203622"},{url:"_app/immutable/chunks/_layout-46df6f71.js",revision:"8032ad20d8cbf8edbdb70f23f48dcf2e"},{url:"_app/immutable/chunks/0-a0a81dc0.js",revision:"a088f25f5ce1c6a52837f5a4c6f84ea2"},{url:"_app/immutable/chunks/1-4e1534d6.js",revision:"579e7049ec1193b545ec3bc39821fbce"},{url:"_app/immutable/chunks/2-c3ed947c.js",revision:"c6a4afc2695438762ee3a125f48e5470"},{url:"_app/immutable/chunks/3-18aebbac.js",revision:"6cb575fa691465ec99e18c302f6b2a18"},{url:"_app/immutable/chunks/4-ab1f7604.js",revision:"92d992c763be1a78a41326efd8ef3138"},{url:"_app/immutable/chunks/5-4d8b2a73.js",revision:"00e01c685681f919ab5d0123a97b3e1d"},{url:"_app/immutable/chunks/index10-bfc8eede.js",revision:"5b108f28c4e0fbb838064d84e95974d3"},{url:"_app/immutable/chunks/input-shims-0c3a6d3a.js",revision:"429bff4fd893b2be864ce85339efcc64"},{url:"_app/immutable/chunks/ios.transition-ba2cd50a.js",revision:"cbbe5e0da720dd9bd403e080c940e6f6"},{url:"_app/immutable/chunks/md.transition-f4f70b2b.js",revision:"250cd2fd70aa4c810365a27573b4201b"},{url:"_app/immutable/chunks/navigation-ab0a9986.js",revision:"b795bbd4d55ea88b7570852f25b83e4c"},{url:"_app/immutable/chunks/preload-helper-9b728935.js",revision:"de04f62ea9e9e41ef698ffb30bed96ed"},{url:"_app/immutable/chunks/singletons-cae1e39e.js",revision:"ba0081ec79a58da218f0e24aa66e6d6f"},{url:"_app/immutable/chunks/status-tap-6164d47c.js",revision:"fc641b7a716d21a0a9ec38eff967c698"},{url:"_app/immutable/chunks/stores-99bcc85a.js",revision:"f3a9db324c00503853de13d99fbdb1f6"},{url:"_app/immutable/chunks/supabase.auth.service-5f0ff607.js",revision:"6f4a8c07e4b54969e6b4c6648ba0efbb"},{url:"_app/immutable/chunks/swipe-back-947fc33c.js",revision:"8d27d0d36597be82c8c45d3b8961f0c6"},{url:"_app/immutable/chunks/swiper.bundle-515826a6.js",revision:"56e2ddf2ab6277053390c40a03074e35"},{url:"_app/immutable/chunks/workbox-window.prod.es5-5729c1a5.js",revision:"b8c9397a5a7bdb9aee024d2c57d41845"},{url:"_app/immutable/components/error.svelte-38c46f39.js",revision:"4bddc2e2b0135fe747853176fff6edb3"},{url:"_app/immutable/components/pages/_layout.svelte-907da2b7.js",revision:"a46bc0666134da743db9b34d2baf9063"},{url:"_app/immutable/components/pages/_page.svelte-c08ee4c9.js",revision:"223c68efe8a4fc0c1e9b4da2bb5a7606"},{url:"_app/immutable/components/pages/info/_page.svelte-bdd35d84.js",revision:"a2910a56d07bd1198eef3a7aeca1cb5c"},{url:"_app/immutable/components/pages/profile/_page.svelte-57a7f7b7.js",revision:"1d0691d1bc7439611c027e063389e361"},{url:"_app/immutable/components/pages/settings/_page.svelte-d552d57a.js",revision:"ea79737b970320ceea30eec9f09e00df"},{url:"_app/immutable/modules/pages/_layout.ts-c99f3d13.js",revision:"59c9dfa75babd8faad6b437f8a9ae491"},{url:"_app/immutable/start-9a8625f2.js",revision:"aa28d853f28d64aeb7865d24ecd232e2"},{url:"index.html",revision:"994359683bf92a86d22eeaf99e5c840c"},{url:"favicon.ico",revision:"95e494407fda114ee74ae2016a049613"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"7e84e4c949eb32cabd42f4f2ff61f6fb"},{url:"icon-192.png",revision:"65a72b56180981fe742f77d68127d72e"},{url:"icon-512.png",revision:"be3f28723d28353254e25bba3547a2e2"},{url:"manifest.webmanifest",revision:"d0d4152885e35c355d9204f18b382542"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
