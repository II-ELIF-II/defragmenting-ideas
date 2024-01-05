import BodyHeaderComp from "./BodyComps/BodyHeaderComp";
import postSearchParams from "@/types/postSearchParams";
import postSearchResultsParams from "@/types/postSearchResultsParams";
import postSummaryParams from "@/types/postSummaryParams";
import { getPostsSummary } from "@/lib/getPostsSummary";
import BackgroundComp from "./MiscComps/BackgroundComp";
import PostListComp from "./BodyComps/PostListComp";
import { getTag } from "@/lib/getTag";
import tagParams from "@/types/tagParams";
import { getTags } from "@/lib/getTags";

const BodyComp = async({searchParams}: {searchParams: postSearchParams}) => {

  const {page, pages, posts}: {page: number, pages: number, posts: Array<postSummaryParams>} = await getPostsSummary(searchParams);
  const tag = await getTag(searchParams.tag) as tagParams;
  const tags = await getTags() as Array<tagParams>;

  const postSearchParams = {
    page: page, 
    pages: pages,
    query: searchParams.query,
    tag: searchParams.tag,
  } as postSearchResultsParams;
  
  return (
    <div id="PostList" className="relative min-h-screen h-fit flex flex-col overflow-y-clip">
      <BodyHeaderComp Params={postSearchParams} Tag={tag} Tags={tags}/>
      <PostListComp Posts={posts} Page={page} Pages={pages}/>
      <BackgroundComp />
    </div>
  );
};

export default BodyComp;