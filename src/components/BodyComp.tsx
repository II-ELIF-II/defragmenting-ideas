import { getEnvironment } from "@/app/utilities";
import CardBarComp from "./BodyComps/CardBarComp";
import CardComp from "./BodyComps/CardComp";
import postSearchParams from "@/types/postSearchParams";
import PaginatorComp from "./BodyComps/PaginatorComp";
import postSearchResultsParams from "@/types/postSearchResultsParams";
import postSummaryParams from "@/types/postSummaryParams";
import { getPostsSummary } from "@/lib/getPostsSummary";

const BodyComp = async(searchParams: postSearchParams) => {

  let {page, pages, posts}: {page: number, pages: number, posts: Array<postSummaryParams>} = await getPostsSummary(searchParams);

  const postSearchResultsParams = {
    page: Number(page), 
    pages: Number(pages),
    query: searchParams.query,
  } as postSearchResultsParams;

  return (
    <div id="PostList" className="relative min-h-screen h-fit flex flex-col bg-gradient-to-tl from-neutral-900 to-neutral-800 overflow-y-clip">
      <CardBarComp {...postSearchResultsParams}/>
      <ul className="flex grow flex-col lg:flex-row h-full -mt-[12vh] lg:-mt-[6vh] z-10 overflow-hidden ">
        {posts.map((post: postSummaryParams) => (<CardComp key={post.id} Post={post}/>))}
      </ul>
      <PaginatorComp {...postSearchResultsParams}/>
      <div className="absolute bg-grid w-full h-full"></div>
    </div>
  );
};

export default BodyComp;