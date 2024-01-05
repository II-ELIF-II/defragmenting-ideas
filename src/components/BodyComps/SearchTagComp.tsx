'use client';

import tagParams from "@/types/tagParams";
import { Dispatch, SetStateAction } from "react";

const SearchTagComp = ({Tag, SelectedTag, setTagData}: {Tag: tagParams, SelectedTag: tagParams, setTagData: Dispatch<SetStateAction<number>>}) => {

  const selectedTag = SelectedTag || {id: 0, name: 'None'};

  return(
    <label className="group h-fit w-fit flex place-items-center rounded overflow-hidden text-sm cursor-pointer [&>*]:ease-in-out [&>*]:duration-500">
      <input type="radio" name="tag" className="peer/tag absolute scale-0" defaultChecked={Tag.id == selectedTag.id} onChange={() => setTagData(Tag.id)}/>
      <span className="bg-teal-700 group-hover:bg-teal-600 peer-checked/tag:bg-orange-700 px-1.5 py-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -m-0.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
      </span> 
      <p className="py-1 w-full pl-2 pr-2 bg-teal-600 group-hover:bg-teal-500 peer-checked/tag:bg-orange-600">{Tag.name}</p>
    </label>
  )
};

export default SearchTagComp;