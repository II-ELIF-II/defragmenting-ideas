"use client";

import adminPanelPostParams from "@/types/admin/adminPanelPostParams";
import adminPanelPostsParams from "@/types/admin/adminPanelPostsParams";
import PostCardComp from "./PostCardComp";
import { useRouter } from "next/navigation";

const PostManagerComp = ({postResults, postQuery}: {postResults: adminPanelPostsParams, postQuery: string}) => {

  const router = useRouter();
  
  const disablePrev = Number(postResults.page) <= 1; 
  const disableNext = Number(postResults.page) >= Number(postResults.pages);

  const buttonNextAndPrevClass = "h-[4vh] px-2 flex justify-center items-center border-teal-400 disabled:border-neutral-50/10 text-teal-400 disabled:text-neutral-50/10 hover:bg-teal-700/30 disabled:hover:bg-neutral-700/30 ease-in-out duration-500"
  const buttonPageClass = "h-[4vh] px-4 flex justify-center items-center border-t border-neutral-50/10 disabled:border-teal-400 disabled:text-teal-400 hover:bg-teal-700/30 ease-in-out duration-500";

  //Function: Builds an array of integers from A to B.
  //Purpose: Determines what and how many page buttons to display.
  const getStartExtra = (page: Number) => {
    if (Number(page) <= 2)
      return Math.min(Number(postResults.pages), Number(postResults.page) + 7);
    else
      return Math.min(Number(postResults.pages), Number(postResults.page) + 2);
  };

  const getMaxExtra = (page: Number) => {
    if (Number(page) >= Number(postResults.pages) - 1)
      return Math.max(1, Number(postResults.page) - 7);
    else
      return Math.max(1, Number(postResults.page) - 2);
  };

  const pages = Array.from(
    { length: Math.max(1, (getStartExtra(postResults.page) - getMaxExtra(postResults.page)) + 1) },
    (_value, index) => getMaxExtra(postResults.page) + index
  );

  //Function: Redirects to first page if query is out of bounds.
  //Purpose: Minimize out of bounds params.
  if((postResults.page > postResults.pages) && postResults.pages != 0)
    router.push(`admin?postPage=1&postQuery=${postQuery}`, {scroll: false})

  return(
    <div className="flex flex-col justify-between md:max-h-[90vh]">
      <div className="flex justify-center py-4">
        <div className="animate-slideInTop md:animate-slideInRight md:h-[81vh] grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 px-4">
          
          <button type="button" onClick={() => router.push(`/login/admin/editorPost`)} className=" relative group flex items-center justify-center bg-neutral-950 border border-solid border-orange-600 md:drop-shadow-glowOrange aspect-square md:aspect-auto">
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b to-neutral-950 from-transparent pointer-events-none"/>
            <div className="absolute top-0 w-full h-1/3 bg-gradient-to-t to-orange-800 from-transparent pointer-events-none opacity-30 group-hover:opacity-40 group-hover:h-2/3 transition-all ease-in-out duration-600"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="p-8 w-full h-full opacity-20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>

          {postResults.posts.map((post: adminPanelPostParams) => (<PostCardComp key={post.id} {...post}/>))}

        </div>
      </div>
      <div className="relative w-full h-[6vh] flex justify-center items-center overflow-hidden">
        <div className="flex justify-center items-center z-10 animate-slideInBottom">
          
          <button disabled={disablePrev} onClick={() => router.push(`admin?postPage=1&postQuery=${postQuery}`, {scroll: false})} className={buttonNextAndPrevClass + " border-t"}>
            <p className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
              </svg>
            </p>
          </button>

          <button disabled={disablePrev} onClick={() => router.push(`admin?postPage=${postResults.page - 1}&postQuery=${postQuery}`, {scroll: false})} className={buttonNextAndPrevClass + " border-t border-r"}>
            <p className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </p>
          </button>

          {pages.map((page: Number) => (
            <button key={Number(page)} disabled={postResults.page==page} onClick={() => router.push(`admin?postPage=${page}&postQuery=${postQuery}`, {scroll: false})} className={buttonPageClass}>
              <p>{page.toString()}</p>
            </button>
          ))}

          <button disabled={disableNext} onClick={() => router.push(`admin?postPage=${postResults.page + 1}&postQuery=${postQuery}`, {scroll: false})} className={buttonNextAndPrevClass + " border-t border-l"}>
            <p className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </p>
          </button>
          
          <button disabled={disableNext} onClick={() => router.push(`admin?postPage=${postResults.pages}&postQuery=${postQuery}`, {scroll: false})}className={buttonNextAndPrevClass + " border-t"}>
            <p className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            </p>
          </button>
        </div>
        <div className="absolute bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-950/50 w-full h-full"/>
      </div>
    </div>
  );
};

export default PostManagerComp;