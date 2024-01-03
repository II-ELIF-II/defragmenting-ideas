'use client';

import tagParams from "@/types/tagParams";

const TagManagerTagComp = ({tag, tagUpdateHandler}: {tag: tagParams, tagUpdateHandler: any}) => {
  return(
    <div className="group/tag flex place-items-center rounded overflow-hidden text-sm">
      <span className="bg-teal-700 group-hover/tag:bg-teal-600 px-1.5 py-1.5 ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -m-0.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
      </span> 
      <p className="h-full w-full pl-1 pr-2 pt-1 bg-teal-600 group-hover/tag:bg-teal-500 ease-in-out duration-500">{tag.name}</p>
      <button type="button" onClick={() => tagUpdateHandler(tag)} className="h-full px-1 bg-teal-700 group-hover/tag:bg-teal-600 ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      </button>
    </div>
  )
}

export default TagManagerTagComp;