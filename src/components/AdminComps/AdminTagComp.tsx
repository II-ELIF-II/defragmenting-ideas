'use client';

import postParams from "@/types/postParams";
import tagParams from "@/types/tagParams";
import { Dispatch, SetStateAction } from "react";
import TagIconComp from "../MiscComps/TagComps/TagIconComp";
import TagNameComp from "../MiscComps/TagComps/TagNameComp";

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
    <label className="group/tag flex place-items-center rounded overflow-hidden text-sm cursor-pointer [&>*]:ease-in-out [&>*]:duration-500">
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
      <TagIconComp OptionalStyle="peer-checked/tag:bg-orange-700/70"/>
      <TagNameComp OptionalStyle="peer-checked/tag:bg-orange-600/70">{tag.name}</TagNameComp>
    </label>
  )
};

export default AdminTagComp;