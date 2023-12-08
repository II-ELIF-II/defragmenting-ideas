"use client";

import paginatorParams from "@/types/paginatorParams";
import { useRouter } from "next/navigation";

const PaginatorComp = (params: paginatorParams) => {
  const router = useRouter();
  
  const disableSkipToFirst = Number(params.page) <= 1; 
  const disableSkipToLast = Number(params.page) >= Number(params.pages);

  const buttonNextAndPrevClass = "h-[4vh] px-2 flex justify-center items-center border-teal-400 disabled:border-neutral-50/10 text-teal-400 disabled:text-neutral-50/10 hover:bg-teal-700/30 disabled:hover:bg-neutral-700/30 ease-in-out duration-500"
  const pages = Array.from({length: Number(params.pages)}, (_, i) => i + 1).slice(Math.max(0, Number(params.page) - 2), Number(params.page) + 2);

  return(
    <div className="relative w-full h-[6vh] flex justify-center items-center">
      <div className="flex justify-center items-center z-10">
        
        <button disabled={disableSkipToFirst} onClick={() => router.push(`?page=1`, {scroll: false})} className={buttonNextAndPrevClass + " border-t"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
          </p>
        </button>

        <button disabled={disableSkipToFirst} onClick={() => router.push(`?page=${Number(params.page) - 1}`, {scroll: false})} className={buttonNextAndPrevClass + " border-t border-r"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </p>
        </button>

        {pages.map((page: Number) => (
          <button key={Number(page)} disabled={params.page==page} onClick={() => router.push(`?page=${page}`, {scroll: false})} className="h-[4vh] px-4 flex justify-center items-center border-t border-neutral-50/10 disabled:border-teal-400 disabled:text-teal-400 hover:bg-teal-700/30 ease-in-out duration-500">
            <p>{page.toString()}</p>
          </button>
        ))}
        
        <button disabled={disableSkipToLast} onClick={() => router.push(`?page=${Number(params.page) + 1}`, {scroll: false})} className={buttonNextAndPrevClass + " border-t border-l"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </p>
        </button>
        
        <button disabled={disableSkipToLast} onClick={() => router.push(`?page=${params.pages}`, {scroll: false})}className={buttonNextAndPrevClass + " border-t"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </p>
        </button>
      </div>
      <div className="absolute bg-grid w-full h-full"></div>
      <div className="absolute bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-neutral-950/50 w-full h-full"></div>
    </div>
  )
}

export default PaginatorComp