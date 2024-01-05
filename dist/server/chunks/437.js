exports.id=437,exports.ids=[437],exports.modules={38015:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,53579,23)),Promise.resolve().then(s.t.bind(s,30619,23)),Promise.resolve().then(s.t.bind(s,81459,23)),Promise.resolve().then(s.t.bind(s,13456,23)),Promise.resolve().then(s.t.bind(s,50847,23)),Promise.resolve().then(s.t.bind(s,57303,23))},83940:(e,t,s)=>{Promise.resolve().then(s.bind(s,14988))},23843:(e,t,s)=>{Promise.resolve().then(s.bind(s,90045)),Promise.resolve().then(s.bind(s,32487))},3394:(e,t,s)=>{"use strict";s.d(t,{$f:()=>i,Mz:()=>l,U_:()=>n,V$:()=>c,XO:()=>a,kI:()=>o,vc:()=>d});let r=()=>"https://elifsplayground.netlify.app/",a=()=>!1,l=({path:e,param:t,value:s})=>{let a=new URL(r()+e);return a.searchParams.has(t)?a.searchParams.set(t,s):a.searchParams.append(t,s),a.pathname+a.search},i=({path:e,param:t})=>{let s=new URL(r()+e);return s.searchParams.has(t)?s.searchParams.delete(t):console.error('URL does not contain a "'+t+'" parameter'),s.pathname+s.search},n=e=>`/post?id=${e}`,o=e=>{let t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});return}console.error("Cannot find element id: "+e)},d=e=>e.getHours()>12?(e.getHours()-12).toLocaleString("en-US",{minimumIntegerDigits:2})+":"+e.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2})+" PM":e.getHours().toLocaleString("en-US",{minimumIntegerDigits:2})+":"+e.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2})+" AM",c=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+function(e){let t=e%10,s=e%100;return 1===t&&11!==s?e+"st":2===t&&12!==s?e+"nd":3===t&&13!==s?e+"rd":e.toLocaleString("en-US",{minimumIntegerDigits:2})+"th"}(e.getDate())+" "+e.getFullYear()},90045:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(53854),a=s(66609);let l=()=>(0,r.jsxs)("a",{className:"items-center flex-row h-full w-fit text-lg space-x-4 animate-slideInLeft",href:"/",children:[(0,r.jsxs)("div",{className:"h-2/5 aspect-square grid grid-cols-2 gap-1 animate-logo [&>*]:h-full [&>*]:w-full [&>*]:bg-teal-400",children:[r.jsx("div",{}),r.jsx("div",{className:"animate-logoPulse"}),r.jsx("div",{}),r.jsx("div",{})]}),(0,r.jsxs)("h1",{className:"font-semibold items-center uppercase whitespace-nowrap",children:[r.jsx("span",{className:"text-teal-400",children:"ELIFS "}),"PLAYGROUND"]})]});var i=s(75548),n=s.n(i);let o=e=>(0,r.jsxs)(n(),{href:e.href,target:e.target,className:"flex flex-col group h-full justify-center [&>*]:ease-in-out [&>*]:duration-500",children:[r.jsx("p",{className:"text-sm md:text-md text-center group-hover:text-teal-400",children:e.label}),r.jsx("div",{className:"h-0.5 w-0 group-hover:w-full bg-teal-400"})]}),d=()=>{let{data:e,status:t}=(0,a.useSession)();return(0,r.jsxs)("div",{className:"absolute w-full flex [&>*]:flex flex-col md:flex-row justify-evenly md:justify-between h-[12vh] md:h-[6vh] items-center px-4 z-20 bg-neutral-950/90 md:bg-neutral-950/60 md:backdrop-blur",children:[r.jsx(l,{}),(0,r.jsxs)("div",{className:"flex-row space-x-4 h-full animate-slideInRight",children:[[{href:"https://github.com/II-ELIF-II",target:"_blank",label:"Github"},{href:"https://bsky.app/profile/iielifii.bsky.social",target:"_blank",label:"Bluesky"},{href:"https://www.linkedin.com/in/clarence-jacob-agcaoili-80b157239/",target:"_blank",label:"LinkedIn"},{href:"#PostList",target:"_self",label:"About Me"}].map(e=>r.jsx(o,{...e},e.label)),e?.user.isAdmin&&r.jsx(o,{href:"/admin",target:"_self",label:"Admin"}),e&&r.jsx(o,{href:"/logout",target:"_self",label:"Logout"})]})]})}},32487:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(53854),a=s(19504);let l=({ErrorMain:e,ErrorMessage:t})=>r.jsx("div",{className:"animate-openWindow px-2 max-w-xs md:max-w-2xl flex m-auto bg-neutral-950 border border-solid border-teal-400 drop-shadow-glow",children:(0,r.jsxs)("div",{className:"flex flex-row overflow-hidden",children:[r.jsx("div",{className:"flex pr-2 my-2 animate-pulse",children:r.jsx("p",{className:"w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-red-500/80 text-neutral-950 font-bold uppercase text-right text-sm md:text-lg",children:"ERROR"})}),(0,r.jsxs)("div",{className:"flex flex-col my-2",children:[r.jsx(a.Z,{TextMain:e}),r.jsx("p",{className:"h-fit text-sm md:text-xl px-3 py-2 text-justify font-light",children:t})]})]})})},19504:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(53854);let a=({TextMain:e})=>(0,r.jsxs)("div",{className:"flex h-fit bg-teal-500 px-3 py-2 uppercase text-neutral-800 text-xl md:text-4xl font-bold",children:[r.jsx("h1",{children:e}),r.jsx("p",{className:"-mt-0.5 md:-mt-1 animate-pulse",children:"_"})]})},14988:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AuthProvider:()=>l});var r=s(53854),a=s(66609);let l=({children:e,session:t})=>r.jsx(a.SessionProvider,{session:t,children:e})},36273:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u,metadata:()=>m});var r=s(4656),a=s(40186),l=s.n(a);s(5023);var i=s(95153);let n=(0,i.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\ProviderComp.tsx`),{__esModule:o,$$typeof:d}=n;n.default;let c=(0,i.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\ProviderComp.tsx#AuthProvider`),m={title:"ELIFS PLAYGROUND",description:"A little corner in the internet for me to post and share my coding adventures and misadventures!"};function u({children:e}){return r.jsx("html",{lang:"en",className:"scroll-smooth snap-y select-none relative",children:r.jsx("body",{className:`${l().className} bg-neutral-950 text-neutral-50 overflow-x-hidden relative`,children:r.jsx(c,{children:e})})})}},31130:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(4656),a=s(25419),l=s(86662),i=s(95153);let n=(0,i.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\MiscComps\CardComps\ErrorCardComp.tsx`),{__esModule:o,$$typeof:d}=n,c=n.default,m=()=>(0,r.jsxs)("div",{className:"flex w-screen min-h-screen overflow-x-hidden",children:[r.jsx(a.ZP,{}),r.jsx("div",{className:"flex min-h-screen w-full",children:r.jsx(c,{ErrorMain:"404 page not found",ErrorMessage:"The page or content you requested may have been moved, removed, renamed, or is temporarily unavailable."})}),r.jsx(l.Z,{})]})},33747:(e,t,s)=>{"use strict";s.d(t,{zj:()=>r});let r=()=>"https://elifsplayground.netlify.app/"},25419:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>o});var r=s(95153);let a=(0,r.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\HeaderComps\HeaderBarComp.tsx`),{__esModule:l,$$typeof:i}=a,n=a.default,o=n},86662:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(4656);let a=({bgURL:e})=>(0,r.jsxs)("div",{className:"absolute  w-full h-full pointer-events-none -z-10 [&>*]:absolute [&>*]:w-full [&>*]:h-full",children:[e&&r.jsx("img",{src:e,loading:"lazy",alt:"TEMP",className:"opacity-10 object-cover"}),r.jsx("div",{className:"bg-grid"}),r.jsx("div",{className:"bg-topography"}),r.jsx("div",{className:"bg-plus"}),r.jsx("div",{className:"bg-gradient-to-br from-neutral-900 via-transparent to-teal-950"})]})},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(31323);let a=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},5023:()=>{}};