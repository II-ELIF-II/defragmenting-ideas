(()=>{var e={};e.id=165,e.ids=[165],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},67494:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>d});var s=r(67096),a=r(16132),l=r(37284),n=r.n(l),i=r(32564),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,31130)),"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,36273)),"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,31130)),"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=[],x="/_not-found",m={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},38015:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,53579,23)),Promise.resolve().then(r.t.bind(r,30619,23)),Promise.resolve().then(r.t.bind(r,81459,23)),Promise.resolve().then(r.t.bind(r,13456,23)),Promise.resolve().then(r.t.bind(r,50847,23)),Promise.resolve().then(r.t.bind(r,57303,23))},25610:(e,t,r)=>{Promise.resolve().then(r.bind(r,14988))},73734:(e,t,r)=>{Promise.resolve().then(r.bind(r,17821)),Promise.resolve().then(r.bind(r,32487))},17821:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(53854),a=r(66609),l=r(36591),n=r(75548),i=r.n(n);let o=e=>(0,s.jsxs)(i(),{href:e.href,target:e.target,className:"flex flex-col group h-full justify-center [&>*]:ease-in-out [&>*]:duration-500",children:[s.jsx("p",{className:"text-sm md:text-md text-center group-hover:text-teal-400 tracking-wider",children:e.label}),s.jsx("div",{className:"h-0.5 w-0 group-hover:w-full bg-teal-400"})]}),d=()=>{let{data:e,status:t}=(0,a.useSession)();return(0,s.jsxs)("div",{className:"absolute w-full flex [&>*]:flex flex-col md:flex-row justify-evenly md:justify-between h-24 md:h-12 items-center px-4 z-20 bg-neutral-950/90 md:bg-neutral-950/60 md:backdrop-blur",children:[s.jsx(l.Z,{LogoSize:"h-6",TextStyle:"font-semibold tracking-widest"}),(0,s.jsxs)("div",{className:"flex-row space-x-4 h-full animate-slideInRight",children:[[{href:"https://github.com/II-ELIF-II",target:"_blank",label:"Github"},{href:"https://bsky.app/profile/iielifii.bsky.social",target:"_blank",label:"Bluesky"},{href:"https://www.linkedin.com/in/clarence-jacob-agcaoili-80b157239/",target:"_blank",label:"LinkedIn"},{href:"#AboutMe",target:"_self",label:"About Me"}].map(e=>s.jsx(o,{...e},e.label)),e?.user.isAdmin&&s.jsx(o,{href:"/admin",target:"_self",label:"Admin"}),e&&s.jsx(o,{href:"/logout",target:"_self",label:"Logout"})]})]})}},36591:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(53854),a=r(66598);let l=({LogoSize:e,TextStyle:t})=>(0,s.jsxs)("a",{className:"h-full items-center flex-row space-x-4 animate-slideInLeft",href:"/",children:[(0,s.jsxs)("div",{className:e+" aspect-square grid grid-cols-2 gap-1 animate-logo [&>*]:h-full [&>*]:w-full [&>*]:bg-teal-400",children:[s.jsx("div",{}),s.jsx("div",{className:"animate-logoPulse"}),s.jsx("div",{}),s.jsx("div",{})]}),(0,s.jsxs)("h1",{className:t+" text-lg flex items-center uppercase whitespace-nowrap",children:[s.jsx("span",{className:"text-teal-400 mr-2",children:"ELIFS "}),s.jsx(a.Z,{StartDelay:1e3,Text:"Playground",Errors:"tpimf"})]})]})},32487:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(53854),a=r(19504);let l=({children:e,ErrorMain:t,ErrorMessage:r})=>s.jsx("div",{className:"animate-openWindow px-2 max-w-xs md:max-w-2xl flex m-auto bg-neutral-950/70 border border-solid border-teal-400 drop-shadow-glowTeal",children:(0,s.jsxs)("div",{className:"flex flex-row overflow-hidden",children:[s.jsx("div",{className:"flex pr-2 my-2 animate-pulse",children:s.jsx("p",{className:"w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-red-500/80 text-neutral-950 font-bold uppercase text-right text-sm md:text-lg",children:"ERROR"})}),(0,s.jsxs)("div",{className:"flex flex-col my-2",children:[s.jsx(a.Z,{TextMain:t}),s.jsx("p",{className:"h-fit text-sm md:text-xl px-3 py-2 text-justify font-light tracking-wider",children:r}),e]})]})})},19504:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(53854),a=r(66598);let l=({TextMain:e})=>s.jsx("div",{className:"flex h-fit bg-teal-500 px-3 py-2 uppercase text-neutral-800 text-xl md:text-4xl font-bold tracking-wider",children:s.jsx("h1",{children:s.jsx(a.Z,{StartDelay:1e3,Text:e})})})},66598:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(53854),a=r(34218);let l=({StartDelay:e,Text,Delay:t,Errors:r})=>{let[s,l]=(0,a.useState)("");return(0,a.useEffect)(()=>{setTimeout(()=>{let e=0,s=0,a=r,n="",i=Text.slice(0,-a.length).concat(a),o=setInterval(()=>{e<Text.length?(0==a.length?l(n+=Text.charAt(e)):l(n+=i.charAt(e)),e++):s<a.length?(l(n=n.slice(0,-1)),s++):e<Text.length+a.length?(l(n+=Text.charAt(Text.length-a.length)),a=a.slice(0,-1)):clearInterval(o)},t);return()=>{clearInterval(o)}},e)},[e,Text,t,r]),s},n=({StartDelay:e,Prefix:t,PrefixStyle:r,Text,TextStyle:a,Delay:n,Errors:i,Cursor:o})=>{let d=l({StartDelay:e||0,Text:Text,Delay:n||100,Errors:i||""});return(0,s.jsxs)("span",{children:[s.jsx("span",{className:r,children:t||""}),s.jsx("span",{className:a,children:d}),s.jsx("span",{className:"animate-typewriterCursor ml-0.5",children:o||"_"})]})}},14988:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AuthProvider:()=>l});var s=r(53854),a=r(66609);let l=({children:e,session:t})=>s.jsx(a.SessionProvider,{session:t,children:e})},36273:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>x});var s=r(4656),a=r(68625),l=r.n(a),n=r(95153);let i=(0,n.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\ProviderComp.tsx`),{__esModule:o,$$typeof:d}=i;i.default;let c=(0,n.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\ProviderComp.tsx#AuthProvider`);r(5023);let x={title:"ELIFS PLAYGROUND",description:"A little corner in the internet for me to post and share my coding adventures and misadventures!",icons:{icon:"/favicon.ico"}};function m({children:e}){return(0,s.jsxs)("html",{lang:"en",className:"scroll-smooth snap-y select-none relative",children:[(0,s.jsxs)("head",{children:[s.jsx("meta",{name:"google-site-verification",content:"oVN-kcUbuE64IE6k9hdfy0Z7YzbpvK-VnhBzzwEt0FM"}),s.jsx("meta",{name:"theme-color",content:"#0d9488"})]}),s.jsx("body",{className:`${l().className} bg-neutral-950 text-neutral-50 overflow-x-hidden relative`,children:s.jsx(c,{children:e})})]})}},31130:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(4656),a=r(71141),l=r(86662),n=r(95153);let i=(0,n.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\MiscComps\CardComps\ErrorCardComp.tsx`),{__esModule:o,$$typeof:d}=i,c=i.default,x=()=>(0,s.jsxs)("div",{className:"flex w-screen min-h-screen overflow-x-hidden",children:[s.jsx(a.ZP,{}),s.jsx("div",{className:"flex min-h-screen w-full",children:s.jsx(c,{ErrorMain:"404 page not found",ErrorMessage:"The page or content you requested may have been moved, removed, renamed, or is temporarily unavailable."})}),s.jsx(l.Z,{})]})},71141:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>o});var s=r(95153);let a=(0,s.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\HeaderComp.tsx`),{__esModule:l,$$typeof:n}=a,i=a.default,o=i},86662:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(4656);let a=({BackgroundURL:e})=>(0,s.jsxs)("div",{className:"absolute w-full h-full pointer-events-none -z-10 [&>*]:absolute [&>*]:w-full [&>*]:h-full",children:[e&&s.jsx("img",{src:e,loading:"lazy",alt:"TEMP",className:"opacity-10 object-cover"}),s.jsx("div",{className:"bg-grid"}),s.jsx("div",{className:"bg-topography"}),s.jsx("div",{className:"bg-plus"}),s.jsx("div",{className:"bg-gradient-to-br from-neutral-900 via-transparent to-teal-950"})]})},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(31323);let a=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[271,470],()=>r(67494));module.exports=s})();