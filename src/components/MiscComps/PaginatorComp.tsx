"use client";

import { urlParamHandler } from "@/app/utilities";
import { useRouter, useSearchParams } from "next/navigation";

const PaginatorComp = ({URLPath, URLParam, Page, Pages}: {URLPath :string, URLParam :string, Page: number, Pages: number}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const disablePrev = Number(Page) <= 1; 
  const disableNext = Number(Page) >= Number(Pages);

  const buttonNextAndPrevClass = "h-10 px-2 aspect-square flex justify-center items-center border-teal-400 disabled:border-neutral-50/10 text-teal-400 disabled:text-neutral-50/10 hover:bg-teal-700/30 disabled:hover:bg-neutral-700/30 ease-in-out duration-500"
  const buttonPageClass = "text-lg h-10 px-4 aspect-square flex justify-center items-center border-t border-neutral-50/10 disabled:border-teal-400 disabled:text-teal-400 hover:bg-teal-700/30 ease-in-out duration-500";

  //Function: Builds an array of integers from A to B.
  //Purpose: Determines what and how many page buttons to display.
  const getStartExtra = (page: Number) => {
    if (Number(page) <= 2)
      return Math.min(Number(Pages), Number(Page) + 4);
    else
      return Math.min(Number(Pages), Number(Page) + 2);
  };

  const getMaxExtra = (page: Number) => {
    if (Number(page) >= Number(Pages) - 1)
      return Math.max(1, Number(Page) - 4);
    else
      return Math.max(1, Number(Page) - 2);
  };

  const pages = Array.from(
    { length: Math.max(1, (getStartExtra(Page) - getMaxExtra(Page)) + 1) },
    (_value, index) => getMaxExtra(Page) + index
  );

  //Function: Redirects to first page if query is out of bounds.
  //Purpose: Minimize out of bounds params.
  if((Page > Pages) && Page != 1)
    router.push(urlParamHandler({path: URLPath + '?' + searchParams, param: URLParam, value: 1}), {scroll: false});

  return(
    <div className="relative w-full h-14 flex justify-center items-center overflow-hidden">
      <div className="flex justify-center items-center z-10 animate-slideInBottom">
        
        <button disabled={disablePrev} onClick={() => router.push(urlParamHandler({path: URLPath + '?' + searchParams, param: URLParam, value: 1}) , {scroll: false}) } className={buttonNextAndPrevClass + " border-t"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
          </p>
        </button>

        <button disabled={disablePrev} onClick={() => router.push(urlParamHandler({path: URLPath + '?' + searchParams, param: URLParam, value: Number(Page) - 1}), {scroll: false})} className={buttonNextAndPrevClass + " border-t border-r"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </p>
        </button>

        {pages.map((page: Number) => (
          <button key={Number(page)} disabled={Page==page} onClick={() => router.push(urlParamHandler({path: URLPath + '?' + searchParams, param: URLParam, value: Number(page)}), {scroll: false})} className={buttonPageClass}>
            <p>{page.toString()}</p>
          </button>
        ))}

        <button disabled={disableNext} onClick={() => router.push(urlParamHandler({path: URLPath + '?' + searchParams, param: URLParam, value: Number(Page) + 1}), {scroll: false})} className={buttonNextAndPrevClass + " border-t border-l"}>
          <p className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </p>
        </button>
        
        <button disabled={disableNext} onClick={() => router.push(urlParamHandler({path: URLPath + '?' + searchParams, param: URLParam, value: Number(Pages)}), {scroll: false})}className={buttonNextAndPrevClass + " border-t"}>
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