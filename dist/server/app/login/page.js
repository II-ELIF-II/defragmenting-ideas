(()=>{var e={};e.id=626,e.ids=[626],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},38794:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var l=s(67096),a=s(16132),r=s(37284),i=s.n(r),n=s(32564),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,52407)),"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\login\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,36273)),"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,99405)),"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\login\\page.tsx"],u="/login/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new l.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},38015:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,53579,23)),Promise.resolve().then(s.t.bind(s,30619,23)),Promise.resolve().then(s.t.bind(s,81459,23)),Promise.resolve().then(s.t.bind(s,13456,23)),Promise.resolve().then(s.t.bind(s,50847,23)),Promise.resolve().then(s.t.bind(s,57303,23))},83940:(e,t,s)=>{Promise.resolve().then(s.bind(s,14988))},29146:(e,t,s)=>{Promise.resolve().then(s.bind(s,89296))},20830:(e,t,s)=>{Promise.resolve().then(s.bind(s,90045)),Promise.resolve().then(s.bind(s,8726))},51018:(e,t,s)=>{"use strict";e.exports=s(27804)},89296:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var l=s(53854),a=s(26896),r=s(34218),i=s(66609),n=s(51018),o=s(90045);let d=()=>{let[e,t]=(0,r.useState)({email:"",password:""}),[s,d]=(0,r.useState)(""),c=(0,n.useRouter)(),{data:u,status:m}=(0,i.useSession)(),x=async t=>{t.preventDefault();try{let t=await (0,i.signIn)("credentials",{...e,redirect:!1});if(t?.error){d("Invalid Credentials");return}c.replace("/admin")}catch(e){console.log(e)}};return u&&u.user.isAdmin&&c.replace("/admin"),(0,l.jsxs)("div",{className:"flex flex-col min-h-screen min-w-screen",children:[l.jsx(o.default,{}),l.jsx("div",{className:"animate-openWindow px-2 max-w-xs md:max-w-2xl flex m-auto bg-neutral-950 border border-solid border-teal-400 drop-shadow-glow",children:(0,l.jsxs)("div",{className:"flex flex-row overflow-hidden",children:[l.jsx("div",{className:"flex pr-2 my-2 animate-pulse",children:l.jsx("p",{className:"w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-neutral-50/80 text-neutral-950 font-bold uppercase md:text-right text-sm md:text-lg",children:"LOGIN"})}),(0,l.jsxs)("div",{className:"flex flex-col my-2",children:[(0,l.jsxs)("div",{className:"flex h-fit bg-teal-400/80 px-3 py-2",children:[l.jsx("h1",{className:"uppercase text-neutral-800 text-xl md:text-4xl font-bold",children:"User Authentication"}),l.jsx("p",{className:"-mt-1 uppercase text-neutral-800 text-xl md:text-4xl font-bold animate-pulse",children:"_"})]}),(0,l.jsxs)("form",{onSubmit:x,className:"flex flex-col h-fit text-sm md:text-xl pt-2 text-justify",children:[(0,l.jsxs)("div",{className:"grid grid-cols-4 px-3 gap-y-2 items-center",children:[l.jsx("label",{htmlFor:"email",className:"text-sm w-fit",children:"Email:"}),l.jsx("input",{type:"email",id:"email",name:"email",placeholder:"",value:e.email,required:!0,onChange:s=>t({...e,email:s.target.value}),className:"col-span-3 px-2 py-1 text-sm text-neutral-300 w-full bg-neutral-800/80 outline-none focus:bg-teal-700/50  ease-in-out duration-500"}),l.jsx("label",{htmlFor:"password",className:"text-sm w-fit",children:"Password:"}),l.jsx("input",{type:"password",id:"password",name:"password",placeholder:"",value:e.password,required:!0,onChange:s=>t({...e,password:s.target.value}),className:"col-span-3 px-2 py-1 text-sm text-neutral-300 w-full bg-neutral-800/80 outline-none focus:bg-teal-700/50  ease-in-out duration-500"})]}),(0,l.jsxs)("div",{className:"flex flex-row-reverse justify-between items-end",children:[l.jsx("input",{type:"submit",id:"submit",name:"submit",value:"Authorize",className:"w-fit cursor-pointer text-sm mt-2 py-1 px-4 text-md bg-teal-600 transition-all ease-in-out duration-600 hover:bg-teal-400 active:bg-teal-700"}),s&&l.jsx("p",{className:"mt-2 py-1 px-2 text-sm font-bold text-neutral-800 bg-red-500/80 animate-slideInRight w-fit",children:s})]})]})]})]})}),l.jsx(a.Z,{})]})}},90045:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var l=s(53854),a=s(66609);let r=()=>(0,l.jsxs)("a",{className:"flex items-center flex-row h-full w-fit text-lg space-x-4 animate-slideInLeft",href:"/",children:[(0,l.jsxs)("div",{className:"h-2/5 aspect-square grid grid-cols-2 gap-1 animate-logo",children:[l.jsx("div",{className:"h-full w-full bg-teal-400"}),l.jsx("div",{className:"h-full w-full bg-teal-400 animate-logoPulse"}),l.jsx("div",{className:"h-full w-full bg-teal-400"}),l.jsx("div",{className:"h-full w-full bg-teal-400"})]}),(0,l.jsxs)("h1",{className:"font-semibold items-center uppercase whitespace-nowrap",children:[l.jsx("span",{className:"text-teal-400",children:"ELIFS "}),"PLAYGROUND"]})]});var i=s(75548),n=s.n(i);let o=e=>(0,l.jsxs)(n(),{href:e.href,target:e.target,className:"flex flex-col group h-full justify-center",children:[l.jsx("p",{className:"text-sm md:text-md text-center group-hover:text-teal-400 ease-in-out duration-500",children:e.label}),l.jsx("div",{className:"h-0.5 w-0 group-hover:w-full bg-teal-400 ease-in-out duration-500"})]}),d=()=>{let{data:e,status:t}=(0,a.useSession)();return(0,l.jsxs)("div",{className:"absolute w-full flex flex-col md:flex-row justify-evenly md:justify-between h-[12vh] md:h-[6vh] items-center px-4 z-20 bg-neutral-950/90 md:bg-neutral-950/60 md:backdrop-blur",children:[l.jsx(r,{}),(0,l.jsxs)("div",{className:"flex flex-row space-x-4 h-full animate-slideInRight",children:[[{href:"https://github.com/II-ELIF-II",target:"_blank",label:"Github"},{href:"https://bsky.app/profile/iielifii.bsky.social",target:"_blank",label:"Bluesky"},{href:"https://www.linkedin.com/in/clarence-jacob-agcaoili-80b157239/",target:"_blank",label:"LinkedIn"},{href:"#PostList",target:"_self",label:"About Me"}].map(e=>l.jsx(o,{...e},e.label)),e?.user.isAdmin&&l.jsx(o,{href:"/admin",target:"_self",label:"Admin"}),e&&l.jsx(o,{href:"/logout",target:"_self",label:"Logout"})]})]})}},26896:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s(53854);let a=({bgURL:e})=>(0,l.jsxs)("div",{className:"absolute w-full h-full pointer-events-none -z-10",children:[e&&l.jsx("img",{src:e,loading:"lazy",alt:"TEMP",className:"absolute w-full h-full opacity-10 object-cover"}),l.jsx("div",{className:"absolute bg-grid w-full h-full"}),l.jsx("div",{className:"absolute bg-topography w-full h-full"}),l.jsx("div",{className:"absolute bg-plus w-full h-full"}),l.jsx("div",{className:"absolute bg-gradient-to-br from-neutral-900 via-transparent to-teal-950 w-full h-full"})]})},8726:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var l=s(53854);let a=({error:e,errorMessage:t})=>l.jsx("div",{className:"animate-openWindow px-2 max-w-xs md:max-w-2xl flex m-auto bg-neutral-950 border border-solid border-teal-400 drop-shadow-glow",children:(0,l.jsxs)("div",{className:"flex flex-row overflow-hidden",children:[l.jsx("div",{className:"flex pr-2 my-2 animate-pulse",children:l.jsx("p",{className:"w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-red-500/80 text-neutral-950 font-bold uppercase md:text-right text-sm md:text-lg",children:"ERROR"})}),(0,l.jsxs)("div",{className:"flex flex-col my-2",children:[(0,l.jsxs)("div",{className:"flex h-fit bg-teal-400/80 px-3 py-2",children:[l.jsx("h1",{className:"uppercase text-neutral-800 text-xl md:text-4xl font-bold",children:e}),l.jsx("p",{className:"-mt-1 uppercase text-neutral-800 text-xl md:text-4xl font-bold animate-pulse",children:"_"})]}),l.jsx("p",{className:"h-fit text-sm md:text-xl px-3 py-2 text-justify",children:t})]})]})})},14988:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AuthProvider:()=>r});var l=s(53854),a=s(66609);let r=({children:e,session:t})=>l.jsx(a.SessionProvider,{session:t,children:e})},36273:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m,metadata:()=>u});var l=s(4656),a=s(40186),r=s.n(a);s(5023);var i=s(95153);let n=(0,i.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\ProviderComp.tsx`),{__esModule:o,$$typeof:d}=n;n.default;let c=(0,i.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\ProviderComp.tsx#AuthProvider`),u={title:"ELIFS PLAYGROUND",description:"A little corner in the internet for me to post and share my coding adventures and misadventures!"};function m({children:e}){return l.jsx("html",{lang:"en",className:"scroll-smooth snap-y select-none relative",children:l.jsx("body",{className:`${r().className} bg-neutral-950 text-neutral-50 overflow-x-hidden relative`,children:l.jsx(c,{children:e})})})}},52407:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>r,default:()=>o});var l=s(95153);let a=(0,l.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\app\login\page.tsx`),{__esModule:r,$$typeof:i}=a,n=a.default,o=n},99405:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var l=s(4656),a=s(25419),r=s(86662),i=s(95153);let n=(0,i.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\MiscComps\ErrorCardComp.tsx`),{__esModule:o,$$typeof:d}=n,c=n.default,u=()=>(0,l.jsxs)("div",{className:"flex w-screen min-h-screen overflow-x-hidden",children:[l.jsx(a.ZP,{}),l.jsx("div",{className:"flex min-h-screen w-full",children:l.jsx(c,{error:"404 page not found",errorMessage:"The page or content you requested may have been moved, removed, renamed, or is temporarily unavailable."})}),l.jsx(r.Z,{})]})},25419:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>o});var l=s(95153);let a=(0,l.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\HeaderComps\HeaderBarComp.tsx`),{__esModule:r,$$typeof:i}=a,n=a.default,o=n},86662:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var l=s(4656);let a=({bgURL:e})=>(0,l.jsxs)("div",{className:"absolute w-full h-full pointer-events-none -z-10",children:[e&&l.jsx("img",{src:e,loading:"lazy",alt:"TEMP",className:"absolute w-full h-full opacity-10 object-cover"}),l.jsx("div",{className:"absolute bg-grid w-full h-full"}),l.jsx("div",{className:"absolute bg-topography w-full h-full"}),l.jsx("div",{className:"absolute bg-plus w-full h-full"}),l.jsx("div",{className:"absolute bg-gradient-to-br from-neutral-900 via-transparent to-teal-950 w-full h-full"})]})},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var l=s(31323);let a=e=>{let t=(0,l.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),l=t.X(0,[271,358],()=>s(38794));module.exports=l})();