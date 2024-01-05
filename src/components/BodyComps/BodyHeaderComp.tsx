"use client";

import postSearchResultsParams from "@/types/postSearchResultsParams";
import { useRouter, useSearchParams } from "next/navigation";
import { scrollToElement, sleep, urlParamHandler, urlParamRemove } from "@/app/utilities";
import { FormEvent, useEffect, useState } from "react";
import tagParams from "@/types/tagParams";
import SearchTagComp from "./SearchTagComp";
import ModalCardComp from "../MiscComps/CardComps/ModalCardComp";

const BodyHeaderComp = ({Params, Tag, Tags}: {Params: postSearchResultsParams, Tag: tagParams, Tags: Array<tagParams>}) => {
  
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [queryData, setQueryData] = useState(Params.query.toString());
  const [openSearchModal, setOpenSearchModal] = useState(false);
  // const [viewAnimSearch, setViewAnimSearch] = useState(false);
  const [tagData, setTagData] = useState(0);

  const handleQuerySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenSearchModal(false);
    let url = '?' + searchParams;
    if(queryData != '') url = urlParamHandler({path: url, param: 'query', value: queryData});
    if(queryData == '' && searchParams.has('query')) url = urlParamRemove({path: url, param: 'query'});
    if(tagData != 0) url = urlParamHandler({path: url, param: 'tag', value: tagData});
    if(tagData == 0 && searchParams.has('tag')) url = urlParamRemove({path: url, param: 'tag'});
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
          <div className="w-full px-2 flex gap-2 bg-neutral-700/40 hover:bg-neutral-600/50 focus-within:bg-teal-700/50 focus-within:hover:bg-teal-700/50">
            <input type="text" placeholder="Looking for something?" value={queryData} maxLength={81} onChange={(e) => setQueryData(e.target.value)} className="grow bg-transparent outline-none"/>
            { queryData && <button type="button" onClick={() => setQueryData('')} className="rotate-0 hover:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button> }
          </div>
          <input type="submit" value="Search" className="px-8 bg-teal-600 hover:bg-teal-400 active:bg-teal-700 mt-2 md:mt-0"/>
        </form>

        <p className="text-sm">Tags: </p>
        <div className="flex flex-wrap gap-2 max-h-56 overflow-x-auto">
          <SearchTagComp Tag={{id: 0, name: 'None'}} SelectedTag={Tag} setTagData={setTagData}/>
          { Tags.map((tTag: tagParams) => (<SearchTagComp key={tTag.id} Tag={tTag} SelectedTag={Tag} setTagData={setTagData}/>)) }
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

export default BodyHeaderComp;