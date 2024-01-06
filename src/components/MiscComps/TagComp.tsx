'use client';

import { urlParamHandler } from "@/app/utilities";
import { MouseEvent } from 'react';
import tagParams from "@/types/tagParams";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import TagIconComp from "./TagComps/TagIconComp";
import TagNameComp from "./TagComps/TagNameComp";

const TagComp = ({Tag}: {Tag: tagParams}) => {
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTagClick = ({e, param, value} : {e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, param: string, value: any}) => {
    e.stopPropagation();
    router.push(urlParamHandler({path: '?' + (pathname != '/' ? '' : searchParams), param: param, value: value}), {scroll: false});
  }

  return(
    <button onClick={(e) => handleTagClick({e: e, param:'tag', value: Tag.id}) } className="group/tag flex place-items-center rounded overflow-hidden text-sm cursor-pointer drop-shadow-lgCustom [&>*]:ease-in-out [&>*]:duration-500">
      <TagIconComp/>
      <TagNameComp>{Tag.name}</TagNameComp>
    </button>
  )
}

export default TagComp;