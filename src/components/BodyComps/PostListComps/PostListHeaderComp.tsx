"use client";

import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const PostListHeaderComp = ({setOpenSearchModal}: {setOpenSearchModal: Dispatch<SetStateAction<boolean>>}) => {
  
  const searchParams = useSearchParams();

  return(
    <div className="md:absolute top-0 w-full flex flex-col md:flex-row justify-evenly md:justify-between h-24 md:h-12 items-center z-20 bg-neutral-950/80 md:bg-neutral-950/60 md:backdrop-blur pointer-events-auto">
      <h2 className="pl-4 text-sm lg:text-md animate-slideInLeft uppercase">
        <span className="text-teal-400 font-semibold">&#47;&#47; </span>Feel free to <span className="text-teal-400 font-semibold">browse</span> my other works!
      </h2>
      <div className="flex pr-4 [&>*]:ease-in-out [&>*]:duration-500">
        <button type="button" onClick={() => setOpenSearchModal(true)} className={((searchParams.size != 0) ? "rounded-l border-r-2 border-teal-400" : "rounded") + " grow py-1 pl-4 pr-6 flex justify-center items-center text-md bg-teal-600 hover:bg-teal-400 active:bg-teal-700"}>
          <div className="h-full [&>*]:h-full [&>*]:p-1 [&>*]:text-neutral-50/90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <p>Search</p>
        </button>
        {(searchParams.size != 0) && <a href="/#PostList" className="px-3 rounded-r flex justify-center items-center text-md bg-red-800 hover:bg-red-600 active:bg-red-900">
          <div className="h-full [&>*]:h-full [&>*]:p-1 [&>*]:text-neutral-50/90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"/>
            </svg>
          </div>
        </a>}
      </div>
    </div>
  );
};

export default PostListHeaderComp;