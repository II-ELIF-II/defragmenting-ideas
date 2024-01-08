"use client";

import adminPanelPostParams from "@/types/admin/adminPanelPostParams";
import PostDateComp from "../../PostComps/PostDateComp";
import { useRouter } from "next/navigation";

const AdminPostCardComp = (post: adminPanelPostParams) => {
  
  const router = useRouter();

  return(
    <div onClick={() => router.push(`/post?id=${post.id}`)} className="relative group cursor-pointer bg-neutral-950 border border-solid border-teal-600 md:drop-shadow-glow overflow-hidden aspect-square md:aspect-auto">

      <img src={post.thumbnail} alt="TEMP" className="absolute top-0 h-full w-full object-cover"/>
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b to-neutral-950 from-transparent pointer-events-none"/>
      <div className="absolute top-0 w-full h-1/3 bg-gradient-to-t to-teal-800 from-transparent pointer-events-none opacity-30 group-hover:opacity-40 group-hover:h-2/3 transition-all ease-in-out duration-600"/>
     
      <div className="absolute w-full top-0 bg-neutral-950/50 md:-translate-y-full md:group-hover:translate-y-0 flex transition-all ease-in-out duration-600 z-10">
        <button type="button" onClick={(e) => {
          e.stopPropagation();
          router.push(`admin/editorPost?id=${post.id}`);
        }
          } className="flex justify-center items-center w-full gap-2 text-xl py-1 px-2 text-md bg-yellow-500 transition-all ease-in-out duration-600 hover:bg-yellow-400 active:bg-yellow-700">
          <p>Edit</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </button>
        <button type="button" onClick={(e) => {
          e.stopPropagation();
          router.push(`admin/editorPost?id=${post.id}`);
        }
          } className="flex justify-center items-center w-full gap-2 text-xl py-1 px-2 text-md bg-red-800 transition-all ease-in-out duration-600 hover:bg-red-600 active:bg-red-900">
          <p>Delete</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </div>

      <div className="relative flex flex-col justify-end h-full">
        <div className="w-full bg-neutral-950/40 md:backdrop-blur-sm text-lg md:text-xl px-3 py-2 font-semibold border-l-8 border-teal-500">
          <h4 className="pb-3"><span className="text-teal-400 font-semibold">&#92; &gt; </span>{post.title}</h4>
          <PostDateComp cDate={new Date(post.createdAt)} uDate={new Date(post.updatedAt)}/>
        </div>
      </div>
    </div>
  );
};

export default AdminPostCardComp;