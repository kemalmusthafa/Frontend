(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[314],{8173:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let r=n(9920),i=n(1452),o=n(7437),a=i._(n(2265)),l=r._(n(4887)),s=r._(n(8321)),u=n(497),d=n(7103),c=n(3938);n(2301);let f=n(291),m=r._(n(1241)),p=n(7616),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,n,r,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function v(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:s,decoding:u,className:d,style:c,fetchPriority:f,placeholder:m,loading:g,unoptimized:y,fill:b,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:x,setShowAltText:j,sizesInput:S,onLoad:C,onError:E,...P}=e,O=(0,a.useCallback)(e=>{e&&(E&&(e.src=e.src),e.complete&&h(e,m,w,_,x,y,S))},[n,m,w,_,x,E,y,S]),M=(0,p.useMergedRef)(t,O);return(0,o.jsx)("img",{...P,...v(f),loading:g,width:s,height:l,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:i,srcSet:r,src:n,ref:M,onLoad:e=>{h(e.currentTarget,m,w,_,x,y,S)},onError:e=>{j(!0),"empty"!==m&&x(!0),E&&E(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...v(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=g||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:s}=e,p=(0,a.useRef)(l);(0,a.useEffect)(()=>{p.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[v,w]=(0,a.useState)(!1),[_,x]=(0,a.useState)(!1),{props:j,meta:S}=(0,u.getImgProps)(e,{defaultLoader:m.default,imgConf:i,blurComplete:v,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:x,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(b,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7616:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=n(2265);function i(e,t){let n=(0,r.useRef)(()=>{}),i=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),i.current()):(n.current=o(e,r),i.current=o(t,r))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext({})},687:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(2301);let r=n(1564),i=n(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:h,width:v,height:y,fill:b=!1,style:w,overrideSrc:_,onLoad:x,onLoadingComplete:j,placeholder:S="empty",blurDataURL:C,fetchPriority:E,decoding:P="async",layout:O,objectFit:M,objectPosition:z,lazyBoundary:R,lazyRoot:k,...I}=e,{imgConf:A,showAltText:N,blurComplete:D,defaultLoader:T}=t,F=A||i.imageConfigDefault;if("allSizes"in F)l=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);l={...F,allSizes:e,deviceSizes:t}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=I.loader||T;delete I.loader,delete I.srcSet;let U="__next_img_default"in L;if(U){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let q="",B=a(v),G=a(y);if((n=d)&&"object"==typeof n&&(o(n)||void 0!==n.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,q=e.src,!b){if(B||G){if(B&&!G){let t=B/e.width;G=Math.round(e.height*t)}else if(!B&&G){let t=G/e.height;B=Math.round(e.width*t)}}else B=e.width,G=e.height}}let W=!m&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:q)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),U&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0);let H=a(h),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:z}:{},N?{}:{color:"transparent"},w),X=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:s,blurHeight:u,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+S+'")',$=X?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},J=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:n,quality:o,width:s[d]})}}({config:l,src:d,unoptimized:f,width:B,quality:H,sizes:c,loader:L});return{props:{...I,loading:W?"lazy":p,fetchPriority:E,width:B,height:G,decoding:P,className:g,style:{...V,...$},sizes:J.sizes,srcSet:J.srcSet,src:_||J.src},meta:{unoptimized:f,priority:m,placeholder:S,fill:b}}}},8321:(e,t,n)=>{"use strict";var r=n(357);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return f}});let i=n(9920),o=n(1452),a=n(7437),l=o._(n(2265)),s=i._(n(5960)),u=n(2901),d=n(6590),c=n(687);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2301);let p=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:n}=t;return e.reduce(m,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,n=(0,l.useContext)(u.AmpStateContext),r=(0,l.useContext)(d.HeadManagerContext);return(0,a.jsx)(s.default,{reduceComponentsToState:g,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:(e,t)=>{"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,s=i?40*i:n,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(9920)._(n(2265)),i=n(7103),o=r.default.createContext(i.imageConfigDefault)},7103:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},1241:(e,t)=>{"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},291:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext(null)},5960:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},1932:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2265),i=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(r);!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let o=r.forwardRef(function(e,t){let{style:n={},className:o="",autoFill:a=!1,play:l=!0,pauseOnHover:s=!1,pauseOnClick:u=!1,direction:d="left",speed:c=50,delay:f=0,loop:m=0,gradient:p=!1,gradientColor:g="white",gradientWidth:h=200,onFinish:v,onCycleComplete:y,onMount:b,children:w}=e,[_,x]=r.useState(0),[j,S]=r.useState(0),[C,E]=r.useState(1),[P,O]=r.useState(!1),M=r.useRef(null),z=t||M,R=r.useRef(null),k=r.useCallback(()=>{if(R.current&&z.current){let e=z.current.getBoundingClientRect(),t=R.current.getBoundingClientRect(),n=e.width,r=t.width;("up"===d||"down"===d)&&(n=e.height,r=t.height),a&&n&&r?E(r<n?Math.ceil(n/r):1):E(1),x(n),S(r)}},[a,z,d]);r.useEffect(()=>{if(P&&(k(),R.current&&z.current)){let e=new ResizeObserver(()=>k());return e.observe(z.current),e.observe(R.current),()=>{e&&e.disconnect()}}},[k,z,P]),r.useEffect(()=>{k()},[k,w]),r.useEffect(()=>{O(!0)},[]),r.useEffect(()=>{"function"==typeof b&&b()},[]);let I=r.useMemo(()=>a?j*C/c:j<_?_/c:j/c,[a,_,j,C,c]),A=r.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||s?"paused":"running","--pause-on-click":!l||s&&!u||u?"paused":"running","--width":"up"===d||"down"===d?"100vh":"100%","--transform":"up"===d?"rotate(-90deg)":"down"===d?"rotate(90deg)":"none"}),[n,l,s,u,d]),N=r.useMemo(()=>({"--gradient-color":g,"--gradient-width":"number"==typeof h?"".concat(h,"px"):h}),[g,h]),D=r.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===d?"normal":"reverse","--duration":"".concat(I,"s"),"--delay":"".concat(f,"s"),"--iteration-count":m?"".concat(m):"infinite","--min-width":a?"auto":"100%"}),[l,d,I,f,m,a]),T=r.useMemo(()=>({"--transform":"up"===d?"rotate(90deg)":"down"===d?"rotate(-90deg)":"none"}),[d]),F=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>i.default.createElement(r.Fragment,{key:t},r.Children.map(w,e=>i.default.createElement("div",{style:T,className:"rfm-child"},e)))),[T,w]);return P?i.default.createElement("div",{ref:z,style:A,className:"rfm-marquee-container "+o},p&&i.default.createElement("div",{style:N,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:y,onAnimationEnd:v},i.default.createElement("div",{className:"rfm-initial-child-container",ref:R},r.Children.map(w,e=>i.default.createElement("div",{style:T,className:"rfm-child"},e))),F(C-1)),i.default.createElement("div",{className:"rfm-marquee",style:D},F(C))):null});t.default=o},1357:()=>{}}]);