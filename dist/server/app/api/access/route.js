"use strict";(()=>{var e={};e.id=609,e.ids=[609],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},98320:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>g,originalPathname:()=>P,patchFetch:()=>v,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>h});var r={};a.r(r),a.d(r,{POST:()=>c});var s=a(10884),n=a(16132),o=a(21040),i=a(27021),u=a(95798);async function c(e){try{let t=await e.json();if(process.env.POST_KEY!==t.password)return u.Z.json({message:"Error!"},{status:401});switch(t.type){case 0:let a=await i._.post.create({data:{title:t.title,thumbnail:t.thumbnail,summary:t.summary,content:t.content}});return u.Z.json({newPost:a},{status:200});case 1:let r=await i._.tag.create({data:{name:t.name}});return u.Z.json({newTag:r},{status:200})}}catch(e){return u.Z.json({message:"Error!"},{status:500})}}let p=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/access/route",pathname:"/api/access",filename:"route",bundlePath:"app/api/access/route"},resolvedPagePath:"E:\\Work\\Projects\\defragmenting-ideas\\src\\app\\api\\access\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:m,headerHooks:g,staticGenerationBailout:h}=p,P="/api/access/route";function v(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:d})}},27021:(e,t,a)=>{a.d(t,{_:()=>n});let r=require("@prisma/client"),s=global,n=s.prisma??new r.PrismaClient({log:["query"]})}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,107],()=>a(98320));module.exports=r})();