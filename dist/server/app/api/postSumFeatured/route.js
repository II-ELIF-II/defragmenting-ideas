"use strict";(()=>{var e={};e.id=138,e.ids=[138],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},69570:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>g,originalPathname:()=>v,patchFetch:()=>y,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>h});var a={};r.r(a),r.d(a,{GET:()=>d});var o=r(10884),s=r(16132),u=r(21040),n=r(27021),i=r(95798);let d=async()=>{try{let e=await n._.post.findMany({take:1,select:{id:!0,title:!0,thumbnail:!0,summary:!0,content:!1,createdAt:!0,updatedAt:!0},orderBy:{createdAt:"desc"}});return i.Z.json(e,{status:200})}catch(e){return console.log(e),i.Z.json({message:"Something went wrong!"},{status:500})}},p=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/postSumFeatured/route",pathname:"/api/postSumFeatured",filename:"route",bundlePath:"app/api/postSumFeatured/route"},resolvedPagePath:"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\api\\postSumFeatured\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:m,headerHooks:g,staticGenerationBailout:h}=p,v="/api/postSumFeatured/route";function y(){return(0,u.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},27021:(e,t,r)=>{r.d(t,{_:()=>s});let a=require("@prisma/client"),o=global,s=o.prisma??new a.PrismaClient({log:["query"]})}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[271,107],()=>r(69570));module.exports=a})();