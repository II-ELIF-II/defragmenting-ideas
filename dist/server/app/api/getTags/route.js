"use strict";(()=>{var e={};e.id=677,e.ids=[677],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},82916:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>m,originalPathname:()=>v,patchFetch:()=>P,requestAsyncStorage:()=>d,routeModule:()=>p,serverHooks:()=>c,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>h});var r={};a.r(r),a.d(r,{GET:()=>g});var s=a(10884),o=a(16132),n=a(21040),i=a(27021),u=a(95798);let g=async()=>{try{let e=await i._.tag.findMany();return u.Z.json(e,{status:200})}catch(e){return console.log(e),u.Z.json({message:"Something went wrong!"},{status:500})}},p=new s.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/getTags/route",pathname:"/api/getTags",filename:"route",bundlePath:"app/api/getTags/route"},resolvedPagePath:"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\api\\getTags\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:c,headerHooks:m,staticGenerationBailout:h}=p,v="/api/getTags/route";function P(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:l})}},27021:(e,t,a)=>{a.d(t,{_:()=>o});let r=require("@prisma/client"),s=global,o=s.prisma??new r.PrismaClient({log:["query"]})}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,107],()=>a(82916));module.exports=r})();