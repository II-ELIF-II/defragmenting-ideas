"use strict";(()=>{var e={};e.id=91,e.ids=[91],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},72774:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>g,originalPathname:()=>P,patchFetch:()=>w,requestAsyncStorage:()=>l,routeModule:()=>m,serverHooks:()=>c,staticGenerationAsyncStorage:()=>p,staticGenerationBailout:()=>h});var r={};a.r(r),a.d(r,{POST:()=>d});var i=a(10884),s=a(16132),n=a(21040),o=a(27021),u=a(95798);async function d(e){try{let t=await e.json();if(!t.userId||!t.title||!t.thumbnail||!t.summary||!t.content)return u.Z.json({message:"Error!"},{status:401});let a=await o._.user.findFirst({select:{id:!0,isAdmin:!0,name:!1,email:!1,password:!1,emailVerified:!1,image:!1,createdAt:!1,updatedAt:!1},where:{id:t.userId}});if(!a||!a.isAdmin)return u.Z.json({message:"Error!"},{status:401});return""===t.id?await o._.post.create({data:{title:t.title,thumbnail:t.thumbnail,summary:t.summary,content:t.content,PostTag:{create:t.PostTag.map(e=>({tagId:e.id}))}}}):await o._.$transaction([o._.postTag.deleteMany({where:{postId:t.id}}),o._.post.update({where:{id:t.id},data:{title:t.title,thumbnail:t.thumbnail,summary:t.summary,content:t.content,PostTag:{create:t.PostTag.map(e=>({tagId:e.id}))}}})]),u.Z.json(t,{status:200})}catch(e){return u.Z.json({message:"Error!"},{status:500})}}let m=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/admin/managePost/route",pathname:"/api/admin/managePost",filename:"route",bundlePath:"app/api/admin/managePost/route"},resolvedPagePath:"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\api\\admin\\managePost\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:p,serverHooks:c,headerHooks:g,staticGenerationBailout:h}=m,P="/api/admin/managePost/route";function w(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:p})}},27021:(e,t,a)=>{a.d(t,{_:()=>s});let r=require("@prisma/client"),i=global,s=i.prisma??new r.PrismaClient({log:["query"]})}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,107],()=>a(72774));module.exports=r})();