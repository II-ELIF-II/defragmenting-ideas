'use client';

import postParams from "@/types/postParams";
import tagParams from "@/types/tagParams";
import { Dispatch, SetStateAction } from "react";

const AdminTagComp = ({tag, newPost, setNewPost}: {tag: tagParams, newPost :postParams, setNewPost: Dispatch<SetStateAction<postParams>>}) => {

  const checkInTagArray = () => {
    let match = false;
    newPost.PostTag.forEach(ntag => {
      if(ntag.id === tag.id)
        match = true;
    });
    return match;
  };

  const RemoveFromTagArray = () => {
    let index = -1;
    newPost.PostTag.forEach(ntag => {
      if(ntag.id === tag.id)
        index = newPost.PostTag.indexOf(ntag);
    });
    if (index !== -1)
      newPost.PostTag.splice(index, 1);
  };

  return(
    <label className="group flex place-items-center rounded overflow-hidden text-sm cursor-pointer">
      <input type="checkbox" className="peer/tag absolute scale-0" defaultChecked={checkInTagArray()} onChange={(e) => {
        if (e.target.checked && !(newPost.PostTag.length > 2))
        {
          newPost.PostTag.push(tag);
          setNewPost({...newPost});
          return;
        }
        
        RemoveFromTagArray();
        setNewPost({...newPost});

        if (newPost.PostTag.length > 2)
          e.target.checked = false;

      }}/>
      <span className="bg-teal-700 group-hover:bg-teal-600 peer-checked/tag:bg-orange-700 px-1.5 py-1.5 ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -m-0.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
      </span> 
      <p className="h-full w-full pl-2 pr-2 pt-1 bg-teal-600 group-hover:bg-teal-500 peer-checked/tag:bg-orange-600 ease-in-out duration-500">{tag.name}</p>
    </label>
  )
};

export default AdminTagComp;