import BodyHeaderComp from "./BodyComps/BodyHeaderComp";
import BackgroundComp from "./MiscComps/BackgroundComp";
import PostListComp from "./BodyComps/PostListComp";

import postSearchResultsParams from "@/types/postSearchResultsParams";
import postSummaryParams from "@/types/postSummaryParams";
import postSearchParams from "@/types/postSearchParams";
import tagParams from "@/types/tagParams";

import { getPostsSummary } from "@/lib/getPostsSummary";
import { getTags } from "@/lib/getTags";
import { getTag } from "@/lib/getTag";
import { getFeaturedSummary } from "@/lib/getFeaturedSummary";
import HeaderFeaturedPost from "./HeaderComps/HeaderFeaturedPost";

const BodyComp = async({searchParams}: {searchParams: postSearchParams}) => {

  const {page, pages, posts}: {page: number, pages: number, posts: Array<postSummaryParams>} = await getPostsSummary(searchParams);
  const tag = await getTag(searchParams.tag) as tagParams;
  const tags = await getTags() as Array<tagParams>;

  const Post = await getFeaturedSummary() as postSummaryParams;
  
  const postSearchParams = {
    page: page, 
    pages: pages,
    query: searchParams.query,
    tag: searchParams.tag,
  } as postSearchResultsParams;
  
  return (
    <main className="relative flex flex-col min-h-screen h-fit overflow-y-clip">
      <div id="Primary" className="relative h-screen flex flex-col overflow-hidden">
        <HeaderFeaturedPost Post={Post}/>
        <BackgroundComp bgURL={Post.thumbnail}/>
      </div>
      <div id="PostList" className="relative min-h-screen h-fit flex flex-col overflow-y-clip">
        <BodyHeaderComp Params={postSearchParams} Tag={tag} Tags={tags}/>
        <PostListComp Posts={posts} Page={page} Pages={pages}/>
        <BackgroundComp />
      </div>
    </main>
  );
};

export default BodyComp;