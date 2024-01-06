'use client';

import { MouseEvent, Dispatch, SetStateAction } from "react";

import TagIconComp from "../MiscComps/TagComps/TagIconComp";
import TagNameComp from "../MiscComps/TagComps/TagNameComp";

import tagParams from "@/types/tagParams";

const SearchTagComp = ({Tag, tagData, setTagData}: {Tag: tagParams, tagData: number, setTagData: Dispatch<SetStateAction<number>>}) => {

  const handleTagChange = ({e, id}: {e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>, id: number}) => {
    if(Tag.id !== tagData) {
      setTagData(id);
    } else {
      setTagData(0);
      e.currentTarget.checked = false;
    }
  }

  return(
    <label className="group/tag flex place-items-center rounded overflow-hidden text-sm cursor-pointer [&>*]:ease-in-out [&>*]:duration-500">
      <input type="radio" name="tag" className="peer/tag absolute scale-0" defaultChecked={Tag.id === tagData} onClick={(e) => handleTagChange({e: e, id: Tag.id}) }/>
      <TagIconComp OptionalStyle="peer-checked/tag:bg-orange-700/70"/>
      <TagNameComp OptionalStyle="peer-checked/tag:bg-orange-600/70">{Tag.name}</TagNameComp>
    </label>
  )
};

export default SearchTagComp;