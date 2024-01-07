"use client";

import { scrollToElement, urlParamHandler, urlParamRemove } from "@/app/utilities";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

import ModalCardComp from "../MiscComps/CardComps/ModalCardComp";
import SearchTagComp from "./SearchTagComp";

import tagParams from "@/types/tagParams";

const PostListHeaderComp = ({CurrentQuery, Tag, Tags}: {CurrentQuery: string, Tag: tagParams, Tags: Array<tagParams>}) => {
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [queryData, setQueryData] = useState(CurrentQuery);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [tagData, setTagData] = useState(Tag?.id || 0);

  const handleQuerySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Close the modal
    setOpenSearchModal(false);

    let url = '?' + searchParams;
    const hasQuery = searchParams.has('query'); 
    const hasTag = searchParams.has('tag');

    //Check if query and tag is same
    if(hasTag && tagData === Number(searchParams.get('tag')) 
    && hasQuery && queryData === searchParams.get('query')) 
      return; //Do nothing

    //Check if only tag but is same
    if(hasTag && !hasQuery && tagData === Number(searchParams.get('tag'))) {
      return; //Do nothing
    }

    //Check if only query but is same
    if(!hasTag && hasQuery && queryData === searchParams.get('query'))
      return; //Do nothing

    //Check if query is already a param
    if(queryData !== '') url = urlParamHandler({path: url, param: 'query', value: queryData});
    //Remove query param if no query is provided
    if(hasQuery && queryData == '') url = urlParamRemove({path: url, param: 'query'});

    //Check if tag is already a param
    if(tagData !== 0) url = urlParamHandler({path: url, param: 'tag', value: tagData});
    //Remove tag param if no tag is selected
    if(hasTag && tagData == 0 ) url = urlParamRemove({path: url, param: 'tag'});

    //Do a search
    router.push(url, {scroll: false});
  };

  useEffect(() => {
    if(searchParams.size != 0)
      scrollToElement('PostList');
  }, [searchParams]);

  return(
    <div className="sticky md:absolute top-0 w-full flex flex-col md:flex-row justify-evenly md:justify-between h-[12vh] lg:h-[6vh] items-center z-20 bg-neutral-950/80 md:bg-neutral-950/60 md:backdrop-blur pointer-events-auto">

      <ModalCardComp TextMain="Search Directory" TextSide="Search" IsOpen={openSearchModal} setIsOpen={setOpenSearchModal}>
        <p className="text-sm">Input Query: </p>

        <form onSubmit={(e) => handleQuerySubmit(e)} className="flex flex-col md:flex-row [&>*]:py-1 [&>*]:ease-in-out [&>*]:duration-500">
          <div className="w-full flex bg-neutral-700/40 hover:bg-neutral-600/50 focus-within:bg-teal-700/50 focus-within:hover:bg-teal-700/50">
            <input type="text" placeholder="Looking for something?" value={queryData} maxLength={81} onChange={(e) => setQueryData(e.target.value)} className="px-2 grow bg-transparent outline-none"/>
            { queryData && <button type="button" onClick={() => setQueryData('')} className="mr-3 opacity-80 h-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button> }
          </div>
          <input type="submit" value="Search" className="px-8 bg-teal-700 hover:bg-teal-600 active:bg-teal-800 mt-2 md:mt-0 cursor-pointer"/>
        </form>

        <p className="text-sm">Tags: </p>
        <div className="flex flex-wrap gap-2 max-h-56 overflow-x-auto">
          { Tags.map((tag: tagParams) => (<SearchTagComp key={tag.id} Tag={tag} tagData={tagData} setTagData={setTagData}/>)) }
        </div>
      </ModalCardComp>

      <h1 className="pl-4 text-sm lg:text-md animate-slideInLeft uppercase"><span className="text-teal-400 font-semibold">&#47;&#47; </span>Feel free to <span className="text-teal-400 font-semibold">browse</span> my other works!</h1>
      <button type="button" onClick={() => setOpenSearchModal(true)} className="mr-2 py-1 px-4 flex justify-center items-center gap-2 text-md rounded bg-teal-600 hover:bg-teal-400 active:bg-teal-700 transition-all ease-in-out duration-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <p>Search</p>
      </button>
    </div>
  );
};

export default PostListHeaderComp;