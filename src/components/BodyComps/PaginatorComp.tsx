"use client";

import { urlQueryParamAssembler } from "@/app/utilities";
import postSearchResultsParams from "@/types/postSearchResultsParams";
import { useRouter } from "next/navigation";

const PaginatorComp = (params: postSearchResultsParams) => {
  const router = useRouter();
  
  const disablePrev = Number(params.page) <= 1; 
  const disableNext = Number(params.page) >= Number(params.pages);

  const buttonNextAndPrevClass = "h-[4vh] px-2 flex justify-center items-center border-teal-400 disabled:border-neutral-50/10 text-teal-400 disabled:text-neutral-50/10 hover:bg-teal-700/30 disabled:hover:bg-neutral-700/30 ease-in-out duration-500"
  const buttonPageClass = "h-[4vh] px-4 flex justify-center items-center border-t border-neutral-50/10 disabled:border-teal-400 disabled:text-teal-400 hover:bg-teal-700/30 ease-in-out duration-500";

  //Function: Builds an array of integers from A to B.
  //Purpose: Determines what and how many page buttons to display.
  const getStartExtra = (page: Number) => {
    if (Number(page) <= 2)
      return Math.min(Number(params.pages), Number(params.page) + 4);
    else
      return Math.min(Number(params.pages), Number(params.page) + 2);
  };

  const getMaxExtra = (page: Number) => {
    if (Number(page) >= Number(params.pages) - 1)
      return Math.max(1, Number(params.page) - 4);
    else
      return Math.max(1, Number(params.page) - 2);
  };

  const pages = Array.from(
    { length: Math.max(1, (getStartExtra(params.page) - getMaxExtra(params.page)) + 1) },
    (_value, index) => getMaxExtra(params.page) + index
  );

  //Function: Redirects to first page if query is out of bounds.
  //Purpose: Minimize out of bounds params.
  if((params.page > params.pages) && params.pages != 0)
    router.push(urlQueryParamAssembler({page: 1, query: params.query}), {scroll: false})

  return(
    <div className="relative w-full h-[6vh] flex justify-center items-center">
      <div className="flex justify-center items-center z-10 animate-slideInBottom">
        
        <button disabled={disablePrev} onClick={() => router.push(urlQueryParamAssembler({page: 1, query: params.query}), {scroll: false})} className={buttonNextAndPrevClass + " border-t"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
          </p>
        </button>

        <button disabled={disablePrev} onClick={() => router.push(urlQueryParamAssembler({page: Number(params.page) - 1, query: params.query}), {scroll: false})} className={buttonNextAndPrevClass + " border-t border-r"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </p>
        </button>

        {pages.map((page: Number) => (
          <button key={Number(page)} disabled={params.page==page} onClick={() => router.push(urlQueryParamAssembler({page: page, query: params.query}), {scroll: false})} className={buttonPageClass}>
            <p>{page.toString()}</p>
          </button>
        ))}

        <button disabled={disableNext} onClick={() => router.push(urlQueryParamAssembler({page: Number(params.page) + 1, query: params.query}), {scroll: false})} className={buttonNextAndPrevClass + " border-t border-l"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </p>
        </button>
        
        <button disabled={disableNext} onClick={() => router.push(urlQueryParamAssembler({page: params.pages, query: params.query}), {scroll: false})}className={buttonNextAndPrevClass + " border-t"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </p>
        </button>
      </div>
      <div className="absolute bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-950/50 w-full h-full"></div>
    </div>
  );
};

export default PaginatorComp;