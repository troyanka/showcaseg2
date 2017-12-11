"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","fa92388149939cd14590d2c3e7ecd691"],["/static/css/main.0aecafe6.css","82e18bb98bb26dc10d5c351dd69daefb"],["/static/js/main.436c49e2.js","341f2c85f1d41a57890a83dd4573f3bc"],["/static/media/1-s.77dade5e.jpg","77dade5ee358ec57bc81f1f29411a49b"],["/static/media/1.6bcc4939.jpg","6bcc4939296414b99df0bf491240f105"],["/static/media/2-s.a6b46068.jpg","a6b4606825277cb21905eff52b40fb66"],["/static/media/2.e60130d3.jpg","e60130d3d124b81ee0d2fe02b76113c6"],["/static/media/3-s.3fc36895.jpg","3fc368952dbd303e4191fa0c817b64bc"],["/static/media/3.b5e2ffbc.jpg","b5e2ffbcf2481095f987651d68337ad6"],["/static/media/4-s.62316668.jpg","623166686fcf21a6cebc477961607264"],["/static/media/4.b88a7fbf.jpg","b88a7fbfd30b257e1193a46797cecae8"],["/static/media/5-s.0916b42d.jpg","0916b42d5a8bf70dcee7d60bf11e1673"],["/static/media/5.668f3ef4.jpg","668f3ef429449d7ddac8457f5dbf0ea3"],["/static/media/Kaspersky_Magic_Quadrant_2016.788ff2af.pdf","788ff2af24ff6e17b8dabcac4a0d49c8"],["/static/media/Q4_16_KSV_New_Customer.0f192fad.pdf","0f192fad3bd5ba997c459fdfee8a98a6"],["/static/media/Q4_16_VSB_Customer_Provantage.6a09a387.pdf","6a09a387da15ed018d3614cb380b9bfb"],["/static/media/announcementVideoBackground.8400f8c6.jpg","8400f8c609b8dccf66e4da1cbc16162f"],["/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/static/media/office-365-hero-950x180_1.f2834a66.jpg","f2834a66d8f9a5eb4bcc7f5c8aebf8f3"],["/static/media/posterTest.486477d3.jpg","486477d3f5749d157385eae3987d92fd"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});