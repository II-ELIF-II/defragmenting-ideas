(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{9035:function(e,t,l){Promise.resolve().then(l.bind(l,3525)),Promise.resolve().then(l.bind(l,26))},3525:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return x}});var s=l(7437),a=l(2749),r=l(6923),n=l(1396),i=l.n(n),c=e=>(0,s.jsxs)(i(),{href:e.href,target:e.target,className:"flex flex-col group h-full justify-center [&>*]:ease-in-out [&>*]:duration-500",children:[(0,s.jsx)("p",{className:"text-sm md:text-md text-center group-hover:text-teal-400 tracking-wider",children:e.label}),(0,s.jsx)("div",{className:"h-0.5 w-0 group-hover:w-full bg-teal-400"})]}),x=()=>{let{data:e,status:t}=(0,a.useSession)();return(0,s.jsxs)("div",{className:"absolute w-full flex [&>*]:flex flex-col md:flex-row justify-evenly md:justify-between h-24 md:h-12 items-center px-4 z-20 bg-neutral-950/90 md:bg-neutral-950/60 md:backdrop-blur",children:[(0,s.jsx)(r.Z,{LogoSize:"h-6",TextStyle:"font-semibold tracking-widest"}),(0,s.jsxs)("div",{className:"flex-row space-x-4 h-full animate-slideInRight",children:[[{href:"https://github.com/II-ELIF-II",target:"_blank",label:"Github"},{href:"https://bsky.app/profile/iielifii.bsky.social",target:"_blank",label:"Bluesky"},{href:"https://www.linkedin.com/in/clarence-jacob-agcaoili-80b157239/",target:"_blank",label:"LinkedIn"},{href:"#AboutMe",target:"_self",label:"About Me"}].map(e=>(0,s.jsx)(c,{...e},e.label)),(null==e?void 0:e.user.isAdmin)&&(0,s.jsx)(c,{href:"/admin",target:"_self",label:"Admin"}),e&&(0,s.jsx)(c,{href:"/logout",target:"_self",label:"Logout"})]})]})}},6923:function(e,t,l){"use strict";var s=l(7437),a=l(5517);t.Z=e=>{let{LogoSize:t,TextStyle:l}=e;return(0,s.jsxs)("a",{className:"h-full items-center flex-row space-x-4 animate-slideInLeft",href:"/",children:[(0,s.jsxs)("div",{className:t+" aspect-square grid grid-cols-2 gap-1 animate-logo [&>*]:h-full [&>*]:w-full [&>*]:bg-teal-400",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{className:"animate-logoPulse"}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]}),(0,s.jsxs)("h1",{className:l+" text-lg flex items-center uppercase whitespace-nowrap",children:[(0,s.jsx)("span",{className:"text-teal-400 mr-2",children:"ELIFS "}),(0,s.jsx)(a.Z,{StartDelay:1e3,Text:"Playground",Errors:"tpimf"})]})]})}},26:function(e,t,l){"use strict";l.r(t);var s=l(7437),a=l(3147);t.default=e=>{let{children:t,ErrorMain:l,ErrorMessage:r}=e;return(0,s.jsx)("div",{className:"animate-openWindow px-2 max-w-xs md:max-w-2xl flex m-auto bg-neutral-950/70 border border-solid border-teal-400 drop-shadow-glowTeal",children:(0,s.jsxs)("div",{className:"flex flex-row overflow-hidden",children:[(0,s.jsx)("div",{className:"flex pr-2 my-2 animate-pulse",children:(0,s.jsx)("p",{className:"w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-red-500/80 text-neutral-950 font-bold uppercase text-right text-sm md:text-lg",children:"ERROR"})}),(0,s.jsxs)("div",{className:"flex flex-col my-2",children:[(0,s.jsx)(a.Z,{TextMain:l}),(0,s.jsx)("p",{className:"h-fit text-sm md:text-xl px-3 py-2 text-justify font-light tracking-wider",children:r}),t]})]})})}},3147:function(e,t,l){"use strict";var s=l(7437),a=l(5517);t.Z=e=>{let{TextMain:t}=e;return(0,s.jsx)("div",{className:"flex h-fit bg-teal-500 px-3 py-2 uppercase text-neutral-800 text-xl md:text-4xl font-bold tracking-wider",children:(0,s.jsx)("h1",{children:(0,s.jsx)(a.Z,{StartDelay:1e3,Text:t})})})}},5517:function(e,t,l){"use strict";var s=l(7437),a=l(2265);let r=e=>{let{StartDelay:t,Text,Delay:l,Errors:s}=e,[r,n]=(0,a.useState)("");return(0,a.useEffect)(()=>{setTimeout(()=>{let e=0,t=0,a=s,r="",i=Text.slice(0,-a.length).concat(a),c=setInterval(()=>{e<Text.length?(0==a.length?n(r+=Text.charAt(e)):n(r+=i.charAt(e)),e++):t<a.length?(n(r=r.slice(0,-1)),t++):e<Text.length+a.length?(n(r+=Text.charAt(Text.length-a.length)),a=a.slice(0,-1)):clearInterval(c)},l);return()=>{clearInterval(c)}},t)},[t,Text,l,s]),r};t.Z=e=>{let{StartDelay:t,Prefix:l,PrefixStyle:a,Text,TextStyle:n,Delay:i,Errors:c,Cursor:x}=e,d=r({StartDelay:t||0,Text:Text,Delay:i||100,Errors:c||""});return(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{className:a,children:l||""}),(0,s.jsx)("span",{className:n,children:d}),(0,s.jsx)("span",{className:"animate-typewriterCursor ml-0.5",children:x||"_"})]})}}},function(e){e.O(0,[749,396,971,472,744],function(){return e(e.s=9035)}),_N_E=e.O()}]);