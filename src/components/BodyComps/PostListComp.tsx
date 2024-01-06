"use client";

import postSummaryParams from "@/types/postSummaryParams";
import PaginatorComp from "./PaginatorComp";
import PostCardComp from "./PostCardComp";
import ErrorCardComp from "../MiscComps/CardComps/ErrorCardComp";

const PostListComp = ({Posts, Page, Pages}: {Posts: Array<postSummaryParams>, Page: number, Pages: number}) => {
  const fillerCards = new Array<JSX.Element>;
  const errorTitle = '404 nothing found';
  const errorMessage = 'There seems to be no information that matches the provided search parameters.';
  for (let i = 0; i < (4 - Posts.length); i++) { 
    fillerCards.push(<PostCardComp key={Posts.length + i} Index={Posts.length + i}/>); 
  }

  return(
    <>
      <ul className="flex flex-col md:flex-row grow h-full -mt-[12vh] md:mt-0 z-10 overflow-hidden snap-start">
        { (Posts.length != 0) ? Posts.map((post: postSummaryParams, index: number) => (<PostCardComp key={post.id} Post={post} Index={index}/>)) : <div className="md:absolute flex w-screen h-screen z-50 pointer-events-none"><ErrorCardComp ErrorMain={errorTitle} ErrorMessage={errorMessage}/></div> }
        { fillerCards }
      </ul>
      <PaginatorComp Page={Page} Pages={Pages}/>
    </>
  );
};

export default PostListComp;