if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,t)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Eeq8ZYNYUgdIqZgmBhk9x/_buildManifest.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/Eeq8ZYNYUgdIqZgmBhk9x/_ssgManifest.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/0deee8c6a6ea60bcc878733d71ac1b07de82948f.9b4be49d025a7a97ab50.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/10e12c8755a140a5ec6d080c445146519f2c8132.366f4344b7fe41ed8995.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/1bfc9850.91cbd4044e98e7ee3c43.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/1f75043bf99247e2a41ecc9e95a21eeb8f9b65c3.ce8791459896a0a3ea94.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/252f366e.b156416499efbd21f204.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/31664189.1f39e9fd1210f0141263.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/6728d85a.3839e5a3c6247db8d457.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.41fafc57ce9394eedb1e.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/78e521c3.69a227f7061863dc09a5.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/ae51ba48.d8976b4f04448b4be093.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/bbeee5af9568d034f30a4d1c0ea1b754db588e95.5c3b22bc5e17b1375a1c.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/bee240a3.55ca0270d7270051306a.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/d7eeaac4.407fbf77db1cf520fda3.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/effa34c9.09b1e82fb363c86af279.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/ff239f9d.b94ff93b872893b59d44.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/framework.b1290caeda235fc7bf40.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/main-b8b49ee5a864464d2444.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/_app-d668d424237d87779e6c.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/_error-c0fe479c1dcf4b248f03.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/builder-f80b4f7cf536071f5619.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/category/%5Bid%5D-310cc039a16eed6e57da.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/create-4a6645463edec36f98e8.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/editor-d8d9d94f4a0ae2ca358f.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/index-3608812186444d4efddf.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/maintenence-92c81393fe0cefb86546.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/notfound-74203d16e405342579d9.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/post/%5Bid%5D/%5Buser_id%5D-b0a6466633bd03e36b53.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/pages/user/%5Buuid%5D-5a0e6ed37fd624467c27.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/polyfills-0a3f5575d2f25aee06a0.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/css/a4e2694d5fb5946fb80f.css",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/arrow-icon.a3ffce484dccacd485443d537d01906d.png",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/bg-image-1.6ebfcf03326229a2e9dd13758183ef20.jpg",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/bg-image-2.2117e07663aff2ff5082fb71d4f0eac5.jpg",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/bg-image-3.b8287066d78250c75fc90ea0af1b1b62.jpg",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/bg-image-4.9d1917269205c41575d558e9acd49905.jpg",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/light-close.84015eee31c1ff709721c5a065e03945.png",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/shape-01.37be672c794c10c950522b2a40f63a9c.png",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/shape-02.5c8c4ae5ab91ad858f28a8a50dfc4fea.png",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/slick.295183786cd8a138986521d9f388a286.woff",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/_next/static/media/slickd41d.a4e97f5a2a64f0ab132323fbeb33ae29.eot",revision:"Eeq8ZYNYUgdIqZgmBhk9x"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/maintenence.png",revision:"3154bba84c8df4340f11b57e74b513e9"},{url:"/logo.png",revision:"ecc7883eb3be80d3abc9dcefadd7b24d"},{url:"/manifest.json",revision:"5d5b9c78dd3e1a9d065bd14ab864b1d6"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
