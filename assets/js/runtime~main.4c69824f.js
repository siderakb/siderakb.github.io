(()=>{"use strict";var e,t,r,a,o,n={},c={};function d(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=n,d.c=c,e=[],d.O=(t,r,a,o)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var c=!0,f=0;f<r.length;f++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](r[f])))?r.splice(f--,1):(c=!1,o<n&&(n=o));if(c){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,d.d(o,n),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"assets/js/"+({23:"be361a3f",53:"935f2afb",80:"b3c3c200",118:"7e842b5a",158:"d77a23ec",195:"c4f5d8e4",368:"a94703ab",388:"43562802",418:"29cafe68",505:"756882dd",518:"a7bd4aaa",529:"fd53114b",565:"e623a0ef",640:"e3722651",661:"5e95c892",671:"0e384e19",817:"14eb3368",890:"56f8e4ec",907:"fac6e9c1",918:"17896441"}[e]||e)+"."+{23:"67a5750b",53:"2f3c5b61",80:"018f0de2",118:"fccab525",158:"f026d3df",195:"4800e4ea",368:"283f9341",388:"e72d64a4",418:"aa3c88c4",505:"5ab7b18f",518:"a044987f",529:"438fff01",565:"b30b5d16",640:"85c7a8e8",661:"168dab34",671:"d4779c6a",772:"55c9905c",817:"5a021e11",890:"06814ab9",907:"a418faab",918:"06ece483"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="siderakb-website:",d.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var c,f;if(void 0!==r)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var l=i[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){c=l;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",o+r),c.src=e),a[e]=[t];var s=(t,r)=>{c.onerror=c.onload=null,clearTimeout(b);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),f&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/",d.gca=function(e){return e={17896441:"918",43562802:"388",be361a3f:"23","935f2afb":"53",b3c3c200:"80","7e842b5a":"118",d77a23ec:"158",c4f5d8e4:"195",a94703ab:"368","29cafe68":"418","756882dd":"505",a7bd4aaa:"518",fd53114b:"529",e623a0ef:"565",e3722651:"640","5e95c892":"661","0e384e19":"671","14eb3368":"817","56f8e4ec":"890",fac6e9c1:"907"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=d.p+d.u(t),c=new Error;d.l(n,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],c=r[1],f=r[2],i=0;if(n.some((t=>0!==e[t]))){for(a in c)d.o(c,a)&&(d.m[a]=c[a]);if(f)var u=f(d)}for(t&&t(r);i<n.length;i++)o=n[i],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(u)},r=self.webpackChunksiderakb_website=self.webpackChunksiderakb_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();