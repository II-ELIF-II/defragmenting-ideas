"use client";

import postSummaryParams from "@/types/postSummaryParams";
import PaginatorComp from "./PaginatorComp";
import PostCardFillerComp from "./PostCardFillerComp";
import PostCardComp from "./PostCardComp";
import ErrorCardComp from "../MiscComps/ErrorCardComp";

const PostList = ({Posts, Page, Pages}: {Posts: Array<postSummaryParams>, Page: number, Pages: number}) => {
  const fillerComps = new Array<JSX.Element>;
  for (let i = 0; i < (4 - Posts.length); i++) { 
    fillerComps.push(<PostCardFillerComp key={Posts.length + i} Index={Posts.length + i}/>); 
  }

  return(
    <>
      <ul className="flex grow flex-col lg:flex-row h-full -mt-[12vh] md:mt-0 z-10 overflow-hidden snap-start">
        { (Posts.length != 0) ? Posts.map((post: postSummaryParams, index: number) => (<PostCardComp key={post.id} Post={post} Index={index}/>)) : <div className="md: absolute flex w-screen h-screen z-50 pointer-events-none"><ErrorCardComp error={'404 nothing found'} errorMessage={'There seems to be no information that matches the provided search parameters.'}/></div>}
        { fillerComps }
      </ul>
      <PaginatorComp Page={Page} Pages={Pages}/>
    </>
  );
};

export default PostList;