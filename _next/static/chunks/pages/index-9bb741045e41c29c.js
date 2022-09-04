(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1412:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},5702:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4547)}])},8498:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(1527),a=i(690),r=i.n(a);function o(e){var t=e.name,i=e.link;return(0,n.jsx)(r(),{href:i,children:(0,n.jsx)("a",{className:"text-slate-500 gradient-link",rel:"author",target:"_blank",children:t})})}},6546:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(1527),a=i(4049),r=i(8981);function o(e){var t=e.dateString,i=(0,a.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,r.Z)(i,"LLLL d, yyyy")})}},5855:function(e,t,i){"use strict";i.d(t,{Z:function(){return u},y:function(){return d}});var n=i(1527),a=i(6224),r=i.n(a),o=i(690),s=i.n(o);function l(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{type:"image/png",sizes:"16x16",rel:"icon",href:"./favicon/favicon-16.png"}),(0,n.jsx)("link",{type:"image/png",sizes:"32x32",rel:"icon",href:"./favicon/favicon-32.png"}),(0,n.jsx)("link",{type:"image/png",sizes:"96x96",rel:"icon",href:"./favicon/favicon-96.png"})]})}function c(){return(0,n.jsx)("header",{className:"py-8",children:(0,n.jsxs)("div",{className:"flex items-baseline justify-between mx-auto",children:[(0,n.jsx)(s(),{href:"./",children:(0,n.jsx)("a",{className:"text-xl font-bold gradient-link",title:"Go to Homepage",children:"Ilya Amelevich"})}),(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{className:"flex space-x-6 text-sm font-semibold",children:[(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"./about",children:(0,n.jsx)("a",{className:"gradient-link",children:"About Me"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"https://www.linkedin.com/in/ilya-amelevich-9a8443b6/",children:(0,n.jsx)("a",{className:"gradient-link",target:"_blank",children:(0,n.jsx)("i",{className:"fa-brands fa-linkedin"})})})})]})})]})})}var d="Ilya Amelevich personal blog";function u(e){var t=e.children,i=e.home;return(0,n.jsxs)("div",{className:"container max-w-2xl mx-auto md:px-2",children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)(l,{}),(0,n.jsx)("meta",{name:"description",content:"Ilya Amelevich personal blog"}),(0,n.jsx)("meta",{name:"og:title",content:d}),(0,n.jsx)("script",{src:"https://kit.fontawesome.com/301fc2a094.js",crossOrigin:"anonymous",defer:!0})]}),(0,n.jsx)(c,{}),(0,n.jsx)("main",{children:t}),!i&&(0,n.jsx)("div",{className:"my-6",children:(0,n.jsx)(s(),{href:"./",children:(0,n.jsx)("a",{className:"gradient-link",children:"\u2190 Back to home"})})})]})}},8496:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(1527),a=i(690),r=i.n(a);function o(e){var t=e.name,i=e.link;return(0,n.jsx)(r(),{href:i,children:(0,n.jsx)("a",{className:"text-slate-500 gradient-link",rel:"source",target:"_blank",children:t})})}},9838:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1412).Z,a=i(8693).Z,r=i(9947).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,s=e.unoptimized,l=void 0!==s&&s,g=e.priority,p=void 0!==g&&g,j=e.loading,A=e.lazyRoot,_=void 0===A?null:A,I=e.lazyBoundary,E=e.className,L=e.quality,R=e.width,C=e.height,Z=e.style,O=e.objectFit,P=e.objectPosition,q=e.onLoadingComplete,M=e.placeholder,W=void 0===M?"empty":M,B=e.blurDataURL,D=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=d.useContext(m.ImageConfigContext),H=d.useMemo((function(){var e=v||U||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return o({},e,{allSizes:t,deviceSizes:i})}),[U]),T=D,V=i?"responsive":"intrinsic";"layout"in T&&(T.layout&&(V=T.layout),delete T.layout);var F=k;if("loader"in T){if(T.loader){var G=T.loader;F=function(e){e.config;var t=c(e,["config"]);return G(t)}}delete T.loader}var J="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var X=w(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(B=B||X.blurDataURL,J=X.src,(!V||"fill"!==V)&&(C=C||X.height,R=R||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}var Q=!p&&("lazy"===j||"undefined"===typeof j);((t="string"===typeof t?t:J).startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Q=!1);y.has(t)&&(Q=!1);x&&(l=!0);var K,Y=a(d.useState(!1),2),$=Y[0],ee=Y[1],te=a(h.useIntersection({rootRef:_,rootMargin:I||"200px",disabled:!Q}),3),ie=te[0],ne=te[1],ae=te[2],re=!Q||ne,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:P},de=S(R),ue=S(C),fe=S(L);0;var he=Object.assign({},Z,ce),me="blur"!==W||$?{}:{backgroundSize:O||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===V)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof de&&"undefined"!==typeof ue){var ge=ue/de,pe=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===V?(oe.display="block",oe.position="relative",le=!0,se.paddingTop=pe):"intrinsic"===V?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",le=!0,se.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(de,"%27%20height=%27").concat(ue,"%27/%3e")):"fixed"===V&&(oe.display="inline-block",oe.position="relative",oe.width=de,oe.height=ue)}else 0;var xe={src:b,srcSet:void 0,sizes:void 0};re&&(xe=z({config:H,src:t,unoptimized:l,layout:V,width:de,quality:fe,sizes:i,loader:F}));var ve=t;0;var ye,be="imagesrcset",je="imagesizes";be="imageSrcSet",je="imageSizes";var we=(n(ye={},be,xe.srcSet),n(ye,je,xe.sizes),ye),ze=d.default.useLayoutEffect,Se=d.useRef(q),ke=d.useRef(t);d.useEffect((function(){Se.current=q}),[q]),ze((function(){ke.current!==t&&(ae(),ke.current=t)}),[ae,t]);var Ae=o({isLazy:Q,imgAttributes:xe,heightInt:ue,widthInt:de,qualityInt:fe,layout:V,className:E,imgStyle:he,blurStyle:me,loading:j,config:H,unoptimized:l,placeholder:W,loader:F,srcString:ve,onLoadingCompleteRef:Se,setBlurComplete:ee,setIntersection:ie,isVisible:re,noscriptSizes:i},T);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:oe},le?d.default.createElement("span",{style:se},K?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,d.default.createElement(N,Object.assign({},Ae))),p?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+xe.src+xe.srcSet+xe.sizes,rel:"preload",as:"image",href:xe.srcSet?void 0:xe.src},we))):null)};var o=i(2769).Z,s=i(4507).Z,l=i(8167).Z,c=i(4719).Z,d=l(i(959)),u=s(i(4357)),f=i(1773),h=i(757),m=i(9664),g=(i(8827),i(8236));var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0}||{},x=p.experimentalUnoptimized,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,r=new URL("".concat(t.path).concat(_(i))),o=r.searchParams;o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),a&&o.set("q",a.toString());return r.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,r=["f_auto","c_limit","w_"+n,"q_"+(a||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(_(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(_(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function z(e){var t=e.config,i=e.src,n=e.unoptimized,a=e.layout,o=e.width,s=e.quality,l=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var a=e.deviceSizes,o=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s,l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(n);s)c.push(parseInt(s[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,r(c));return{widths:o.filter((function(e){return e>=a[0]*u})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:a,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,a,l),u=d.widths,f=d.kind,h=u.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:u.map((function(e,n){return"".concat(c({config:t,src:i,quality:s,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:c({config:t,src:i,quality:s,width:u[h]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=j.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function A(e,t,i,n,a,r){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===n&&r(!0),null==a?void 0:a.current)){var i=e.naturalWidth,o=e.naturalHeight;a.current({naturalWidth:i,naturalHeight:o})}})))}var N=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,a=e.layout,r=e.className,s=e.imgStyle,l=e.blurStyle,u=e.isLazy,f=e.placeholder,h=e.loading,m=e.srcString,g=e.config,p=e.unoptimized,x=e.loader,v=e.onLoadingCompleteRef,y=e.setBlurComplete,b=e.setIntersection,j=e.onLoad,w=e.onError,S=(e.isVisible,e.noscriptSizes),k=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=u?"lazy":h,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},k,t,{decoding:"async","data-nimg":a,className:r,style:o({},s,l),ref:d.useCallback((function(e){b(e),(null==e?void 0:e.complete)&&A(e,m,0,f,v,y)}),[b,m,a,f,v,y]),onLoad:function(e){A(e.currentTarget,m,0,f,v,y),j&&j(e)},onError:function(e){"blur"===f&&y(!0),w&&w(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},k,z({config:g,src:m,unoptimized:p,layout:a,width:i,quality:n,sizes:S,loader:x}),{decoding:"async","data-nimg":a,style:s,className:r,loading:h}))))};function _(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4547:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return g},default:function(){return p}});var n=i(1527),a=i(6224),r=i.n(a),o=i(5855),s=i(690),l=i.n(s),c=i(6546),d=i(8206),u=i.n(d),f=i(8498),h=i(8496);var m={colors:function(e){for(var t,i=e.length;0!=i;){var n;t=Math.floor(Math.random()*i),i--,n=[e[t],e[i]],e[i]=n[0],e[t]=n[1]}return e}(["hover:text-cyan-400","hover:text-red-400","hover:text-green-400","hover:text-yellow-400","hover:text-violet-400","hover:text-fuchsia-400"]),getColor:function(){var e=this.colors.shift();return this.colors.push(e),e}},g=!0;function p(e){var t=e.allPostsData;return(0,n.jsxs)(o.Z,{home:!0,children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:o.y})}),(0,n.jsxs)("section",{className:"mb-8 text-center text-slate-600 italic",children:[(0,n.jsxs)("p",{children:["Hi! My name is ",(0,n.jsx)("strong",{children:"Ilya Amelevich"})," and I&#39m"," ",(0,n.jsx)("strong",{children:"Software Developer"})]}),(0,n.jsx)("p",{children:"Welcome to my blog"})]}),(0,n.jsx)("section",{children:(0,n.jsx)("ul",{children:t.map((function(e){var t=e.id,i=e.date,a=e.title,r=e.image,o=e.authorLink,s=e.authorName,d=e.firstParagraph,g=e.source,p=e.sourceName;return(0,n.jsxs)("li",{children:[(0,n.jsx)("h2",{className:"transition-colors duration-200 ease-in-out ".concat(m.getColor()," pb-2 text-3xl font-extrabold leading-tight md:text-4xl"),children:(0,n.jsx)(l(),{href:"./posts/".concat(t),children:(0,n.jsx)("a",{children:a})})}),(0,n.jsxs)("div",{className:"flex flex-row-reverse mb-1",children:[(0,n.jsxs)("small",{children:["by ",(0,n.jsx)(f.Z,{name:s,link:o})]}),(0,n.jsxs)("small",{className:"text-slate-600 mx-1",children:["posted on ",(0,n.jsx)(h.Z,{name:p,link:g})]}),(0,n.jsxs)("small",{className:"text-slate-600 italic mx-1",children:["In ",(0,n.jsx)(c.Z,{dateString:i})]})]}),(0,n.jsx)(u(),{src:r,alt:"Picture of the author",width:1400,height:523}),(0,n.jsx)("div",{className:"prose my-2",dangerouslySetInnerHTML:{__html:d}}),(0,n.jsx)("div",{className:"text-center py-2",children:(0,n.jsx)(l(),{href:"./posts/".concat(t),children:(0,n.jsx)("a",{className:"gradient-link",children:"Read More"})})})]},t)}))})})]})}},8206:function(e,t,i){e.exports=i(9838)}},function(e){e.O(0,[709,255,774,888,179],(function(){return t=5702,e(e.s=t);var t}));var t=e.O();_N_E=t}]);