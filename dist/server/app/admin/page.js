(()=>{var e={};e.id=3,e.ids=[3],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},59202:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var r=s(67096),a=s(16132),n=s(37284),o=s.n(n),l=s(32564),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);s.d(t,i);let d=["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,73386)),"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\admin\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,36273)),"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,99405)),"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\admin\\page.tsx"],u="/admin/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},65827:(e,t,s)=>{Promise.resolve().then(s.bind(s,97753)),Promise.resolve().then(s.bind(s,90045))},51018:(e,t,s)=>{"use strict";e.exports=s(27804)},97753:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(53854),a=s(71863),n=s(51018);let o=e=>{let t=(0,n.useRouter)();return(0,r.jsxs)("div",{onClick:()=>t.push(`/post?id=${e.id}`),className:"relative group cursor-pointer bg-neutral-950 border border-solid border-teal-600 md:drop-shadow-glow overflow-hidden aspect-square md:aspect-auto",children:[r.jsx("img",{src:e.thumbnail,alt:"TEMP",className:"absolute top-0 h-full w-full object-cover"}),r.jsx("div",{className:"absolute bottom-0 w-full h-1/2 bg-gradient-to-b to-neutral-950 from-transparent pointer-events-none"}),r.jsx("div",{className:"absolute top-0 w-full h-1/3 bg-gradient-to-t to-teal-800 from-transparent pointer-events-none opacity-30 group-hover:opacity-40 group-hover:h-2/3 transition-all ease-in-out duration-600"}),(0,r.jsxs)("div",{className:"absolute w-full top-0 bg-neutral-950/50 md:-translate-y-full md:group-hover:translate-y-0 flex transition-all ease-in-out duration-600 z-10",children:[(0,r.jsxs)("button",{type:"button",onClick:s=>{s.stopPropagation(),t.push(`admin/editorPost?id=${e.id}`)},className:"flex justify-center items-center w-full gap-2 text-xl py-1 px-2 text-md bg-yellow-500 transition-all ease-in-out duration-600 hover:bg-yellow-400 active:bg-yellow-700",children:[r.jsx("p",{children:"Edit"}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})})]}),(0,r.jsxs)("button",{type:"button",onClick:s=>{s.stopPropagation(),t.push(`admin/editorPost?id=${e.id}`)},className:"flex justify-center items-center w-full gap-2 text-xl py-1 px-2 text-md bg-red-800 transition-all ease-in-out duration-600 hover:bg-red-600 active:bg-red-900",children:[r.jsx("p",{children:"Delete"}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})})]})]}),r.jsx("div",{className:"relative flex flex-col justify-end h-full",children:(0,r.jsxs)("div",{className:"w-fit bg-neutral-950/40 md:backdrop-blur-sm text-lg md:text-xl px-3 py-2 font-semibold border-l-8 border-teal-500",children:[r.jsx("span",{className:"text-teal-400 font-semibold",children:"\\> "}),e.title,r.jsx(a.Z,{cDate:new Date(e.createdAt),uDate:new Date(e.updatedAt)})]})})]})},l=({postResults:e,postQuery:t})=>{let s=(0,n.useRouter)(),a=1>=Number(e.page),l=Number(e.page)>=Number(e.pages),i="h-[4vh] px-2 flex justify-center items-center border-teal-400 disabled:border-neutral-50/10 text-teal-400 disabled:text-neutral-50/10 hover:bg-teal-700/30 disabled:hover:bg-neutral-700/30 ease-in-out duration-500",d=t=>Number(t)>=Number(e.pages)-1?Math.max(1,Number(e.page)-7):Math.max(1,Number(e.page)-2),c=Array.from({length:Math.max(1,(2>=Number(e.page)?Math.min(Number(e.pages),Number(e.page)+7):Math.min(Number(e.pages),Number(e.page)+2))-d(e.page)+1)},(t,s)=>d(e.page)+s);return e.page>e.pages&&0!=e.pages&&s.push(`admin?postPage=1&postQuery=${t}`,{scroll:!1}),(0,r.jsxs)("div",{className:"flex flex-col justify-between md:max-h-[90vh]",children:[r.jsx("div",{className:"flex justify-center py-4",children:(0,r.jsxs)("div",{className:"animate-slideInTop md:animate-slideInRight md:h-[81vh] grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 px-4",children:[(0,r.jsxs)("button",{type:"button",onClick:()=>s.push("/admin/editorPost"),className:" relative group flex items-center justify-center bg-neutral-950 border border-solid border-orange-600 md:drop-shadow-glowOrange aspect-square md:aspect-auto",children:[r.jsx("div",{className:"absolute bottom-0 w-full h-1/2 bg-gradient-to-b to-neutral-950 from-transparent pointer-events-none"}),r.jsx("div",{className:"absolute top-0 w-full h-1/3 bg-gradient-to-t to-orange-800 from-transparent pointer-events-none opacity-30 group-hover:opacity-40 group-hover:h-2/3 transition-all ease-in-out duration-600"}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"p-8 w-full h-full opacity-20",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})]}),e.posts.map(e=>r.jsx(o,{...e},e.id))]})}),(0,r.jsxs)("div",{className:"relative w-full h-[6vh] flex justify-center items-center overflow-hidden",children:[(0,r.jsxs)("div",{className:"flex justify-center items-center z-10 animate-slideInBottom",children:[r.jsx("button",{disabled:a,onClick:()=>s.push(`admin?postPage=1&postQuery=${t}`,{scroll:!1}),className:i+" border-t",children:r.jsx("p",{className:"flex justify-center items-center",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-5",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"})})})}),r.jsx("button",{disabled:a,onClick:()=>s.push(`admin?postPage=${e.page-1}&postQuery=${t}`,{scroll:!1}),className:i+" border-t border-r",children:r.jsx("p",{className:"flex justify-center items-center",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-5",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})})}),c.map(a=>r.jsx("button",{disabled:e.page==a,onClick:()=>s.push(`admin?postPage=${a}&postQuery=${t}`,{scroll:!1}),className:"h-[4vh] px-4 flex justify-center items-center border-t border-neutral-50/10 disabled:border-teal-400 disabled:text-teal-400 hover:bg-teal-700/30 ease-in-out duration-500",children:r.jsx("p",{children:a.toString()})},Number(a))),r.jsx("button",{disabled:l,onClick:()=>s.push(`admin?postPage=${e.page+1}&postQuery=${t}`,{scroll:!1}),className:i+" border-t border-l",children:r.jsx("p",{className:"flex justify-center items-center",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-5",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})}),r.jsx("button",{disabled:l,onClick:()=>s.push(`admin?postPage=${e.pages}&postQuery=${t}`,{scroll:!1}),className:i+" border-t",children:r.jsx("p",{className:"flex justify-center items-center",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-5",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"})})})})]}),r.jsx("div",{className:"absolute bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-950/50 w-full h-full"})]})]})};var i=s(34218),d=s(66609);let c=({tag:e,tagUpdateHandler:t})=>(0,r.jsxs)("div",{className:"group/tag flex place-items-center rounded overflow-hidden text-sm",children:[r.jsx("span",{className:"h-full bg-teal-700 group-hover/tag:bg-teal-600 px-1.5 py-1.5 ease-in-out duration-500",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-5 h-5 -m-0.5",children:[r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6h.008v.008H6V6Z"})]})}),r.jsx("p",{className:"h-full w-full pl-2 pr-2 pt-1 bg-teal-600 group-hover/tag:bg-teal-500 ease-in-out duration-500",children:e.name}),r.jsx("button",{type:"button",onClick:()=>t(e),className:"h-full px-1 bg-yellow-500 hover:bg-yellow-400 ease-in-out duration-500",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})})}),r.jsx("button",{type:"button",onClick:()=>t(e),className:"h-full px-1 bg-red-600 hover:bg-red-400 ease-in-out duration-500",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})})})]}),u=({tagResults:e})=>{let t=(0,n.useRouter)(),{data:s,status:a}=(0,d.useSession)(),o=async()=>{let e={userId:s?.user.id,tagName:prompt("Enter tag name:","")};await fetch("/api/admin/createTag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t.refresh()},l=async e=>{let r=!1,a={userId:s?.user.id,tagId:Number(e.id),tagName:""};do{if(a.tagName=prompt(`Enter tag name ${r&&"(Invalid Input)"}:`,`${e.name}`),!a.tagName)return;r=!0}while(a.tagName.length>25||""===a.tagName);await fetch("/api/admin/updateTag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),t.refresh()};return r.jsx("div",{className:"flex flex-col justify-between",children:(0,r.jsxs)("div",{className:"animate-slideInTop md:animate-slideInRight grid grid-cols-2 md:grid-cols-8 gap-3 p-2",children:[(0,r.jsxs)("button",{type:"button",onClick:()=>o(),className:"flex place-items-center hover:bg-orange-400 bg-orange-600 rounded overflow-hidden ease-in-out duration-500 text-sm",children:[r.jsx("span",{className:"bg-neutral-900/30 px-1.5 py-1.5 mr-1",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-5 h-5 -m-0.5",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}),r.jsx("p",{className:"pl-1 pr-2",children:"Create Tag"})]}),e.map(e=>r.jsx(c,{tag:e,tagUpdateHandler:l},e.id))]})})},p=({postResults:e,postQuery:t,tagResults:s})=>{let[a,n]=(0,i.useState)(0);return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col pt-[12vh] md:pt-[6vh]",children:[(0,r.jsxs)("ul",{className:"w-full flex flex-row gap-2 h-[8vh] md:h-[4vh] items-center px-4 z-20 bg-neutral-800/40 md:backdrop-blur text-sm",children:[(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"managePosts",name:"windowManager",className:"hidden peer",defaultChecked:!0}),r.jsx("label",{htmlFor:"managePosts",onClick:()=>n(0),className:"hover:text-teal-400 peer-checked:text-teal-400 ease-in-out duration-500 cursor-pointer",children:"Manage Posts"}),r.jsx("div",{className:"h-0.5 w-0 peer-checked:w-full bg-teal-400 ease-in-out duration-500"})]}),(0,r.jsxs)("li",{children:[r.jsx("input",{type:"radio",id:"manageTags",name:"windowManager",className:"hidden peer"}),r.jsx("label",{htmlFor:"manageTags",onClick:()=>n(1),className:"hover:text-teal-400 peer-checked:text-teal-400 ease-in-out duration-500 cursor-pointer",children:"Manage Tags"}),r.jsx("div",{className:"h-0.5 w-0 peer-checked:w-full bg-teal-400 ease-in-out duration-500"})]})]}),0===a&&r.jsx(l,{postResults:e,postQuery:t}),1===a&&r.jsx(u,{tagResults:s})]})}},71863:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var r=s(53854),a=s(3394);let n=({cDate:e,uDate:t})=>{let s=e.toString()!==t.toString();return(0,r.jsxs)("div",{className:"flex flex-col md:flex-row gap-1 md:gap-3 text-sm mt-3",children:[(0,r.jsxs)("div",{children:[r.jsx("p",{className:"text-xs text-teal-400",children:"Created on:"}),r.jsx("p",{className:"",children:(0,a.vc)(e)+" | "+(0,a.V$)(e)})]}),s&&(0,r.jsxs)("div",{className:"md:border-l border-solid border-teal-400 md:pl-3",children:[r.jsx("p",{className:"text-xs text-teal-400",children:"Updated on:"}),r.jsx("p",{className:"",children:(0,a.vc)(t)+" | "+(0,a.V$)(t)})]})]})}},73386:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(4656),a=s(33747),n=s(95153);let o=(0,n.createProxy)(String.raw`E:\Work\Projects\defragmenting-ideas\src\components\AdminComps\AdminPanelComp.tsx`),{__esModule:l,$$typeof:i}=o,d=o.default;var c=s(25419),u=s(86662);let p=async e=>{let{params:t,searchParams:s}=e,n={postPage:parseInt(s.postPage)||1,postQuery:s.postQuery||""},o=async({postPage:e,postQuery:t})=>{let s=await fetch((0,a.zj)().concat(`/api/admin/getMinPosts?page=${e}&query=${t}`),{cache:"no-store"});if(!s.ok)throw Error("Failed");return s.json()},l=async()=>{let e=await fetch((0,a.zj)().concat("/api/getTags"),{cache:"no-store"});if(!e.ok)throw Error("Failed");return e.json()},i=await o(n),p=await l();return(0,r.jsxs)("div",{className:"min-h-screen min-w-screen flex flex-col",children:[r.jsx(c.ZP,{}),r.jsx(d,{postResults:i,postQuery:n.postQuery,tagResults:p}),r.jsx(u.Z,{})]})},m=p}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[271,358,515],()=>s(59202));module.exports=r})();