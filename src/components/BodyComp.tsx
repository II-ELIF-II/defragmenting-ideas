import BackgroundComp from "./MiscComps/BackgroundComp";
import FeaturedPost from "./BodyComps/FeaturedPost";
import PostListComp from "./BodyComps/PostListComp";

import postListSearchParams from "@/types/postListSearchParams";
import postSummaryParams from "@/types/postSummaryParams";
import tagParams from "@/types/tagParams";

import { getTags } from "@/lib/getTags";
import { getFeaturedSummary } from "@/lib/getFeaturedSummary";
import { getPostsSummary } from "@/lib/getPostsSummary";

const BodyComp = async({SearchParams}: {SearchParams: postListSearchParams}) => {

  const tags = await getTags() as Array<tagParams>;
  const featuredPost = await getFeaturedSummary() as postSummaryParams;
  const {pages, posts}: {pages: number, posts: Array<postSummaryParams>} = await getPostsSummary(SearchParams);
  
  return (
    <main className="relative flex flex-col min-h-screen h-fit overflow-y-clip">
      <div id="Primary" className="relative h-screen flex flex-col overflow-hidden animate-openWindow">
        <FeaturedPost FeaturedPost={featuredPost}/>
        <BackgroundComp BackgroundURL={featuredPost.thumbnail}/>
      </div>
      <div id="PostList" className="relative min-h-screen h-fit flex flex-col overflow-y-clip">
        <PostListComp SearchParams={SearchParams} Posts={posts} Pages={pages} Tags={tags}/>
        <BackgroundComp/>
      </div>
    </main>
  );
};

export default BodyComp;