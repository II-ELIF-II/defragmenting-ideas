"use client";

import postSummaryParams from "@/types/postSummaryParams";
import PaginatorComp from "../MiscComps/PaginatorComp";
import PostListCardComp from "./PostListComps/PostListCardComp";
import ErrorCardComp from "../MiscComps/CardComps/ErrorCardComp";
import tagParams from "@/types/tagParams";
import PostListHeaderComp from "./PostListComps/PostListHeaderComp";
import ModalCardComp from "../MiscComps/CardComps/ModalCardComp";
import SearchTagComp from "./SearchTagComp";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { scrollToElement, urlParamHandler, urlParamRemove } from "@/app/utilities";
import postListSearchParams from "@/types/postListSearchParams";

const PostListComp = ({SearchParams, Posts, Pages, Tags}: {SearchParams: postListSearchParams, Posts: Array<postSummaryParams>, Pages: number, Tags: Array<tagParams>}) => {

  const router = useRouter();
  const searchParams = useSearchParams();

  //Scroll to post list if there are search parameters
  useEffect(() => {
    if(searchParams.size != 0)
      scrollToElement('PostList');
  }, [searchParams]);

  //Filler Cards Logic
  const fillerCards = new Array<JSX.Element>;
  const errorTitle = '404 nothing found';
  const errorMessage = 'There seems to be no information that matches the provided search parameters.';
  for (let i = 0; i < (4 - Posts.length); i++) { 
    fillerCards.push(<PostListCardComp key={Posts.length + i} Index={Posts.length + i}/>); 
  }
  
  //Search Functions
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [currentQuery, setCurrentQuery] = useState(SearchParams.query);
  const [currentTag, setCurrentTag] = useState(SearchParams.tag);

  const handleQuerySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Close the modal
    setOpenSearchModal(false);

    let url = '?' + searchParams;
    const hasQuery = searchParams.has('query'); 
    const hasTag = searchParams.has('tag');

    //Check if query and tag is same
    if(hasTag && currentTag === Number(searchParams.get('tag')) 
    && hasQuery && currentQuery === searchParams.get('query')) 
      return; //Do nothing

    //Check if only tag but is same but has no query input
    if(hasTag && !hasQuery && currentTag === Number(searchParams.get('tag')) && currentQuery === '') 
      return; //Do nothing

    //Check if only query but is same
    if(!hasTag && hasQuery && currentQuery === searchParams.get('query') && currentTag === 0)
      return; //Do nothing

    //Check if query is already a param
    if(currentQuery !== '') url = urlParamHandler({path: url, param: 'query', value: currentQuery});
    //Remove query param if no query is provided
    if(hasQuery && currentQuery == '') url = urlParamRemove({path: url, param: 'query'});

    //Check if tag is already a param
    if(currentTag !== 0) url = urlParamHandler({path: url, param: 'tag', value: currentTag});
    //Remove tag param if no tag is selected
    if(hasTag && currentTag == 0 ) url = urlParamRemove({path: url, param: 'tag'});

    //Do a search
    router.push(url, {scroll: false});
  };

  return(
    <div className="relative w-full flex flex-col grow border-t border-teal-400">
      
      <ModalCardComp TextMain="Search Directory" TextSide="Search" IsOpen={openSearchModal} setIsOpen={setOpenSearchModal}>
        <p className="text-sm">Input Query: </p>

        <form onSubmit={(e) => handleQuerySubmit(e)} className="flex flex-col md:flex-row [&>*]:py-1 [&>*]:ease-in-out [&>*]:duration-500">
          <div className="w-full flex bg-neutral-700/40 hover:bg-neutral-600/50 focus-within:bg-teal-700/50 focus-within:hover:bg-teal-700/50">
            <input type="text" placeholder="Looking for something?" maxLength={81} value={currentQuery} onChange={(e) => setCurrentQuery(e.target.value)} className="px-2 grow bg-transparent outline-none"/>
            { currentQuery && <button type="button" onClick={() => setCurrentQuery('')} className="mr-3 opacity-80 h-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button> }
          </div>
          <input type="submit" value="Search" className="px-8 bg-teal-700 hover:bg-teal-600 active:bg-teal-800 mt-2 md:mt-0 cursor-pointer"/>
        </form>

        <p className="text-sm">Tags: </p>
        <div className="flex flex-wrap gap-2 max-h-56 overflow-x-auto">
          { Tags.map((tag: tagParams) => (<SearchTagComp key={tag.id} Tag={tag} CurrentTag={currentTag} setCurrentTag={setCurrentTag}/>)) }
        </div>
      </ModalCardComp>

      <PostListHeaderComp setOpenSearchModal={setOpenSearchModal}/>
      <ul className="flex flex-col xl:flex-row grow h-full overflow-hidden z-10">
        { (Posts.length != 0) ? Posts.map((post: postSummaryParams, index: number) => (<PostListCardComp key={post.id} Post={post} Index={index}/>)) : <div className="md:absolute flex w-screen h-screen z-50 pointer-events-none"><ErrorCardComp ErrorMain={errorTitle} ErrorMessage={errorMessage}/></div> }
        { fillerCards }
      </ul>
      <PaginatorComp URLPath={''} URLParam={'page'} Page={SearchParams.page} Pages={Pages}/>
    </div>
  );
};

export default PostListComp;