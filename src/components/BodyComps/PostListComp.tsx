import postSummaryParams from "@/types/postSummaryParams";
import PaginatorComp from "../MiscComps/PaginatorComp";
import PostListCardComp from "./PostListCardComp";
import ErrorCardComp from "../MiscComps/CardComps/ErrorCardComp";
import { getPostsSummary } from "@/lib/getPostsSummary";
import postSearchParams from "@/types/postSearchParams";

const PostListComp = async({SearchParams}: {SearchParams: postSearchParams}) => {

  const {page, pages, posts}: {page: number, pages: number, posts: Array<postSummaryParams>} = await getPostsSummary(SearchParams);
  const fillerCards = new Array<JSX.Element>;
  const errorTitle = '404 nothing found';
  const errorMessage = 'There seems to be no information that matches the provided search parameters.';
  
  for (let i = 0; i < (4 - posts.length); i++) { 
    fillerCards.push(<PostListCardComp key={posts.length + i} Index={posts.length + i}/>); 
  }

  return(
    <>
      <ul className="flex flex-col md:flex-row grow h-full -mt-[12vh] md:mt-0 z-10 overflow-hidden snap-start">
        { (posts.length != 0) ? posts.map((post: postSummaryParams, index: number) => (<PostListCardComp key={post.id} Post={post} Index={index}/>)) : <div className="md:absolute flex w-screen h-screen z-50 pointer-events-none"><ErrorCardComp ErrorMain={errorTitle} ErrorMessage={errorMessage}/></div> }
        { fillerCards }
      </ul>
      <PaginatorComp URLPath={''} URLParam={'page'} Page={page} Pages={pages}/>
    </>
  );
};

export default PostListComp;