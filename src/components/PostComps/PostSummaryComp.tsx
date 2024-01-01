"use client";

import { useState } from "react";

const PostSummaryComp = ({summary}: {summary: string}) => {
  
  const toggleSummary = () => {
    if(showSummary)
      setShowSummary(false);
    else
      setShowSummary(true);
  }

  const [showSummary, setShowSummary] = useState(true);

  return(
    <label className="animate-slideInBottom flex flex-col mx-1.5 my-5 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-800/40 transition-all duration-500">
      <input onClick={() => toggleSummary()} className="peer/showSummary absolute scale-0" type="checkbox" defaultChecked/>
      <div className="block max-h-9 w-full overflow-hidden transition-all duration-500 peer-checked/showSummary:max-h-96">
        <div className="flex h-9 cursor-pointer justify-between items-center text-md md:text-lg xl:text-xl px-2 bg-neutral-800/60">
          <h3><span className="text-teal-400 font-semibold">&#92;&gt; </span>Summary</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={(!showSummary && ("-scale-y-100")) + " w-6 h-6 ease-in-out duration-500"}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <p className={(!showSummary && ("opacity-0")) + " text-sm text-justify overflow-hidden transition-all duration-500 px-2 py-2"}>{summary}</p>
      </div>
    </label>
  );
};

export default PostSummaryComp;