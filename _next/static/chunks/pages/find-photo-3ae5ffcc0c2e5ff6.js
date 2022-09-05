(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{2032:function(e,n,t){"use strict";var r,i;e.exports=(null==(r=t.g.process)?void 0:r.env)&&"object"===typeof(null==(i=t.g.process)?void 0:i.env)?t.g.process:t(3329)},2059:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/find-photo",function(){return t(501)}])},5855:function(e,n,t){"use strict";t.d(n,{Z:function(){return d},y:function(){return h}});var r=t(1527),i=t(6224),s=t.n(i),c=t(690),a=t.n(c),o=t(541);function l(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{type:"image/png",sizes:"16x16",rel:"icon",href:"".concat(o.O,"/favicon/favicon-16.png")}),(0,r.jsx)("link",{type:"image/png",sizes:"32x32",rel:"icon",href:"".concat(o.O,"/favicon/favicon-32.png")}),(0,r.jsx)("link",{type:"image/png",sizes:"96x96",rel:"icon",href:"".concat(o.O,"/favicon/favicon-96.png")})]})}function u(){return(0,r.jsx)("header",{className:"py-8",children:(0,r.jsxs)("div",{className:"flex items-baseline justify-between mx-auto",children:[(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)("a",{className:"text-xl font-bold gradient-link",title:"Go to Homepage",children:"Ilya Amelevich"})}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"flex space-x-6 text-sm font-semibold",children:[(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/about",children:(0,r.jsx)("a",{className:"gradient-link",children:"About Me"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/report",children:(0,r.jsx)("a",{className:"gradient-link",children:"Report"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"/find-photo",children:(0,r.jsx)("a",{className:"gradient-link",children:"Find free photo"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"https://www.linkedin.com/in/ilya-amelevich-9a8443b6/",children:(0,r.jsx)("a",{className:"gradient-link",target:"_blank",children:(0,r.jsx)("i",{className:"fa-brands fa-linkedin"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(a(),{href:"https://github.com/iamelevich",children:(0,r.jsx)("a",{className:"gradient-link",children:(0,r.jsx)("i",{className:"fa-brands fa-github"})})})})]})})]})})}var h="Ilya Amelevich personal blog";function d(e){var n=e.children,t=e.home;return(0,r.jsxs)("div",{className:"container max-w-2xl mx-auto md:px-2",children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)(l,{}),(0,r.jsx)("meta",{name:"description",content:"Ilya Amelevich personal blog"}),(0,r.jsx)("meta",{name:"og:title",content:h}),(0,r.jsx)("script",{src:"https://kit.fontawesome.com/301fc2a094.js",crossOrigin:"anonymous",defer:!0})]}),(0,r.jsx)(u,{}),(0,r.jsx)("main",{children:n}),!t&&(0,r.jsx)("div",{className:"my-6",children:(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)("a",{className:"gradient-link",children:"\u2190 Back to home"})})})]})}},541:function(e,n,t){"use strict";function r(e){for(var n,t=e.length;0!=t;){var r;n=Math.floor(Math.random()*t),t--,r=[e[n],e[t]],e[t]=r[0],e[n]=r[1]}return e}t.d(n,{O:function(){return i},T:function(){return r}});var i="/uol-web-development-final-project"},501:function(e,n,t){"use strict";function r(e,n,t,r,i,s,c){try{var a=e[s](c),o=a.value}catch(l){return void t(l)}a.done?n(o):Promise.resolve(o).then(r,i)}t.r(n),t.d(n,{default:function(){return b}});var i=t(6026),s=t(6436),c=t.n(s),a=t(1527),o=t(5107),l=t(959);var u=function(e,n){var t=(0,i.Z)(l.useState(e),2),r=t[0],s=t[1];return l.useEffect((function(){var t=setTimeout((function(){s(e)}),n);return function(){clearTimeout(t)}}),[e,n]),r},h=t(6224),d=t.n(h),f=t(5855),m=t(8206),x=t.n(m),p=t(690),v=t.n(p);function g(e){var n=e.data;return(0,a.jsxs)("div",{className:"flex flex-wrap mt-4",children:[(0,a.jsxs)("p",{className:"text-slate-400 text-center mb-4",children:["Totaly found ",n.total," images. But show there maximum 10. To get more - visit"," ",(0,a.jsx)("a",{href:"https://unsplash.com",target:"_blank",className:"gradient-link",rel:"noreferrer",children:"unsplash.com"})]}),n.results.map((function(e,n){return(0,a.jsxs)("div",{className:"group relative mb-3",children:[(0,a.jsx)(v(),{href:e.links.html,children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)(x(),{src:e.urls.regular,width:e.width,height:e.height,blurDataURL:e.blur_hash,alt:e.alt_description,className:"group-hover:shadow-inner group-hover:opacity-75"})})}),(0,a.jsxs)("div",{className:"absolute top-0 right-0 text-white p-3 bg-black opacity-75 invisible group-hover:visible",children:["by"," ",(0,a.jsx)(v(),{href:e.user.links.html,children:(0,a.jsx)("a",{className:"gradient-link",target:"_blank",children:e.user.name})})]}),e.description?(0,a.jsx)("p",{className:"text-white text-center absolute bottom-1.5 left-0 p-3 m-0 w-full bg-black opacity-75 invisible group-hover:visible",children:e.description}):""]},e.id)}))]})}var j=t(2032);function b(){var e,n=(0,i.Z)(l.useState(""),2),t=n[0],s=n[1],h=u(t,500),m=(0,o.useQuery)(["searchPhotos",h],(e=c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.unsplash.com/search/photos?query=".concat(h,"&client_id=").concat(j.env.NEXT_PUBLIC_UNSPLASH_TOKEN)).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.error(e),new Error((e.errors||[]).join(" \n"))}))})));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,s){var c=e.apply(n,t);function a(e){r(c,i,s,a,o,"next",e)}function o(e){r(c,i,s,a,o,"throw",e)}a(void 0)}))}),{enabled:h.length>=3}),x=m.isLoading,p=m.isError,v=m.error,b=m.isSuccess,w=m.data;return(0,a.jsxs)(f.Z,{children:[(0,a.jsx)(d(),{children:(0,a.jsx)("title",{children:"Find free photo"})}),(0,a.jsxs)("section",{children:[(0,a.jsxs)("h1",{className:"text-center pb-1 text-xl font-extrabold leading-tight md:text-2xl",children:["Search for photos with"," ",(0,a.jsx)("a",{className:"gradient-link text-slate-500",href:"https://unsplash.com",children:"Unsplash"})]}),(0,a.jsx)("input",{type:"text",className:"invalid:text-pink-600 peer mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black",placeholder:"Type to search (min 3 symbols)",minLength:3,onChange:function(e){var n=e.target.value;return s(n)},value:t}),(0,a.jsx)("p",{className:"invisible peer-invalid:visible text-pink-600 text-sm",children:"Should contain at least 3 symbols"})]}),(0,a.jsx)("section",{children:x?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"motion-safe:animate-spin h-20 fill-slate-400 mx-auto",children:(0,a.jsx)("path",{d:"M258.9 412.3c-16.7 33.8-31 35.7-34.9 35.7s-18.1-1.9-34.9-35.7c11.4-3.9 23.1-8.4 34.9-13.5c11.8 5.1 23.4 9.7 34.9 13.5zM252.8 312c-9.7 5.8-19.3 11.2-28.8 16c-9.4-4.8-19-10.2-28.8-16c-12.1-7.3-23.6-14.8-34.2-22.4c-.7-10.8-1-22-1-33.6s.4-22.7 1-33.6c10.6-7.6 22.1-15.1 34.2-22.4c9.7-5.8 19.3-11.2 28.8-16c9.4 4.8 19 10.2 28.8 16c12.1 7.3 23.6 14.8 34.2 22.4c.7 10.8 1 22 1 33.6s-.4 22.7-1 33.6c-10.6 7.6-22.1 15.1-34.2 22.4zm184.8 72c20.7-37.1 9.4-82.8-23.6-128c33-45.2 44.3-90.9 23.6-128c-20.2-36.3-62.5-49.3-115.2-43.2C300.4 32.7 266.8 0 224 0s-76.4 32.7-98.4 84.8c-52.7-6.1-95 6.8-115.2 43.2C-10.3 165.1 1 210.8 34 256C1 301.2-10.3 346.9 10.4 384c20.2 36.3 62.5 49.3 115.2 43.2c22 52.1 55.7 84.8 98.4 84.8s76.4-32.7 98.4-84.8c52.7 6.1 95-6.8 115.2-43.2zm-67.8-79.2c18.9 30.2 14.2 44 11.9 48.1c-1.6 2.9-8.4 13-40.2 11.7c2.8-13.1 5-26.9 6.7-41.2c7.6-6.1 14.8-12.3 21.6-18.6zm11.9-145.7c2.3 4.2 7 17.9-11.9 48.1c-6.8-6.3-14-12.5-21.6-18.6c-1.7-14.3-3.9-28-6.7-41.2c31.8-1.4 38.6 8.7 40.2 11.7zM224 64c3.9 0 18.1 1.9 34.9 35.7c-11.4 3.9-23.1 8.4-34.9 13.5c-11.8-5.1-23.4-9.7-34.9-13.5C205.9 65.9 220.1 64 224 64zM106.5 147.5c-2.8 13.1-5 26.9-6.7 41.2c-7.6 6.1-14.8 12.3-21.6 18.6C59.4 177 64 163.3 66.3 159.1c1.6-2.9 8.4-13 40.2-11.7zM66.3 352.9c-2.3-4.2-7-17.9 11.9-48.1c6.8 6.3 14 12.5 21.6 18.6c1.7 14.2 3.9 28 6.7 41.2c-31.8 1.4-38.6-8.7-40.2-11.7zM224 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"})}):p?(0,a.jsxs)("div",{className:"text-center bg-pink-300 p-5 rounded-lg text-slate-700",children:["Something went wrong: ",v.message]}):b?(0,a.jsx)(g,{data:w}):(0,a.jsx)("div",{className:"h-20"})})]})}},3329:function(e){!function(){var n={308:function(e){var n,t,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(r){try{return n.call(null,e,0)}catch(r){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{t="function"===typeof clearTimeout?clearTimeout:s}catch(e){t=s}}();var a,o=[],l=!1,u=-1;function h(){l&&a&&(l=!1,a.length?o=a.concat(o):u=-1,o.length&&d())}function d(){if(!l){var e=c(h);l=!0;for(var n=o.length;n;){for(a=o,o=[];++u<n;)a&&a[u].run();u=-1,n=o.length}a=null,l=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===s||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function m(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];o.push(new f(e,n)),1!==o.length||l||c(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={exports:{}},c=!0;try{n[e](s,s.exports,r),c=!1}finally{c&&delete t[e]}return s.exports}r.ab="//";var i=r(308);e.exports=i}()}},function(e){e.O(0,[709,206,774,888,179],(function(){return n=2059,e(e.s=n);var n}));var n=e.O();_N_E=n}]);