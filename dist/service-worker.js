if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const c=e=>n(e,l),u={module:{uri:l},exports:o,require:c};s[l]=Promise.all(r.map((e=>u[e]||c(e)))).then((e=>(i(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"dottask"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/38.4f591904.css",revision:null},{url:"/css/629.1069a4ec.css",revision:null},{url:"/css/870.873a8b1d.css",revision:null},{url:"/css/chunk-vendors.e6b10078.css",revision:null},{url:"/index.html",revision:"77af75dce184b266a547f3ec65ee7fd9"},{url:"/js/38.850f82a3.js",revision:null},{url:"/js/629.788bd77c.js",revision:null},{url:"/js/870.f1edb4eb.js",revision:null},{url:"/js/95.98a0031b.js",revision:null},{url:"/js/app.9ecfc588.js",revision:null},{url:"/js/chunk-vendors.173f2438.js",revision:null},{url:"/manifest.json",revision:"1cde72a4da9970eefa12121e5c0c99be"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map