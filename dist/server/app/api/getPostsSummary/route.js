"use strict";(()=>{var e={};e.id=442,e.ids=[442],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9655:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>p,originalPathname:()=>h,patchFetch:()=>y,requestAsyncStorage:()=>m,routeModule:()=>g,serverHooks:()=>l,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>P});var r={};a.r(r),a.d(r,{GET:()=>d});var s=a(10884),o=a(16132),i=a(21040),n=a(27021),u=a(95798);let d=async e=>{let{searchParams:t}=new URL(e.url),a=Number(t.get("page")),r=String(t.get("query")),s=Number(t.get("tag"));try{let[e,t]=await n._.$transaction([n._.post.findMany({skip:4*(a-1),take:4,select:{id:!0,title:!0,thumbnail:!0,summary:!0,content:!1,createdAt:!0,updatedAt:!0,PostTag:{select:{Tag:{select:{id:!0,name:!0}}}}},orderBy:{createdAt:"desc"},where:{title:r?{contains:r}:void 0,PostTag:0!=s?{some:{tagId:s}}:void 0}}),n._.post.count({where:{title:r?{contains:r}:void 0,PostTag:0!=s?{some:{tagId:s}}:void 0}})]);return u.Z.json({page:a,pages:Math.ceil(t/4),posts:e},{status:200})}catch(e){return console.log(e),u.Z.json({message:"Something went wrong!"},{status:500})}},g=new s.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/getPostsSummary/route",pathname:"/api/getPostsSummary",filename:"route",bundlePath:"app/api/getPostsSummary/route"},resolvedPagePath:"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\api\\getPostsSummary\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:m,staticGenerationAsyncStorage:c,serverHooks:l,headerHooks:p,staticGenerationBailout:P}=g,h="/api/getPostsSummary/route";function y(){return(0,i.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:c})}},27021:(e,t,a)=>{a.d(t,{_:()=>o});let r=require("@prisma/client"),s=global,o=s.prisma??new r.PrismaClient({log:["query"]})}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,107],()=>a(9655));module.exports=r})();