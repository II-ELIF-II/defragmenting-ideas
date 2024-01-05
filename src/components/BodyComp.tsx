import BodyHeaderComp from "./BodyComps/BodyHeaderComp";
import postSearchParams from "@/types/postSearchParams";
import postSearchResultsParams from "@/types/postSearchResultsParams";
import postSummaryParams from "@/types/postSummaryParams";
import { getPostsSummary } from "@/lib/getPostsSummary";
import BackgroundComp from "./MiscComps/BackgroundComp";
import PostList from "./BodyComps/PostList";

const BodyComp = async(searchParams: postSearchParams) => {

  let {page, pages, posts}: {page: number, pages: number, posts: Array<postSummaryParams>} = await getPostsSummary(searchParams);

  const postSearchParams = {
    page: page, 
    pages: pages,
    query: searchParams.query,
  } as postSearchResultsParams;

  return (
    <div id="PostList" className="relative min-h-screen h-fit flex flex-col overflow-y-clip">
      <BodyHeaderComp {...postSearchParams}/>
      <PostList Posts={posts} Page={page} Pages={pages}/>
      <BackgroundComp />
    </div>
  );
};

export default BodyComp;