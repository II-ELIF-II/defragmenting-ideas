"use client";

import adminPanelPostParams from "@/types/admin/adminPanelPostParams";
import adminPanelPostsParams from "@/types/admin/adminPanelPostsParams";
import PostManagerCardComp from "./PostManagerComps/PostManagerCardComp";
import { useRouter } from "next/navigation";
import PaginatorComp from "../MiscComps/PaginatorComp";

const PostManagerComp = ({postResults, postQuery}: {postResults: adminPanelPostsParams, postQuery: string}) => {

  const router = useRouter();
  
  return(
    <div className="flex flex-col justify-between md:max-h-[90vh]">
      <div className="flex justify-center py-4">
        <div className="animate-slideInTop md:animate-slideInRight md:h-[81vh] grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 px-4">
          
          <button type="button" onClick={() => router.push(`/admin/editorPost`)} className=" relative group flex items-center justify-center bg-neutral-950 border border-solid border-orange-600 md:drop-shadow-glowOrange aspect-square md:aspect-auto">
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b to-neutral-950 from-transparent pointer-events-none"/>
            <div className="absolute top-0 w-full h-1/3 bg-gradient-to-t to-orange-800 from-transparent pointer-events-none opacity-30 group-hover:opacity-40 group-hover:h-2/3 transition-all ease-in-out duration-600"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="p-8 w-full h-full opacity-20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>

          {postResults.posts.map((post: adminPanelPostParams) => (<PostManagerCardComp key={post.id} {...post}/>))}

        </div>
      </div>
      <PaginatorComp URLPath={'/admin'} URLParam={'postPage'} Page={postResults.page} Pages={postResults.pages}/>
    </div>
  );
};

export default PostManagerComp;