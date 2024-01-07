import PostListHeaderComp from "./BodyComps/PostListHeaderComp";
import BackgroundComp from "./MiscComps/BackgroundComp";
import PostListComp from "./BodyComps/PostListComp";

import postSummaryParams from "@/types/postSummaryParams";
import postSearchParams from "@/types/postSearchParams";
import tagParams from "@/types/tagParams";

import { getTags } from "@/lib/getTags";
import { getTag } from "@/lib/getTag";
import { getFeaturedSummary } from "@/lib/getFeaturedSummary";
import FeaturedPost from "./BodyComps/FeaturedPost";
import { Suspense } from "react";
import BasicCardComp from "./MiscComps/CardComps/BasicCardComp";

const BodyComp = async({searchParams}: {searchParams: postSearchParams}) => {

  // TO DO:
  // Make a better suspense comp for PostList

  const tag = await getTag(searchParams.tag) as tagParams;
  const tags = await getTags() as Array<tagParams>;
  const featuredPost = await getFeaturedSummary() as postSummaryParams;
  
  return (
    <main className="relative flex flex-col min-h-screen h-fit overflow-y-clip">
      <div id="Primary" className="relative h-screen flex flex-col overflow-hidden">
        <FeaturedPost FeaturedPost={featuredPost}/>
        <BackgroundComp BackgroundURL={featuredPost.thumbnail}/>
      </div>
      <div id="PostList" className="relative min-h-screen h-fit flex flex-col overflow-y-clip">
        <PostListHeaderComp CurrentQuery={searchParams.query} Tag={tag} Tags={tags}/>
        <Suspense fallback={<BasicCardComp TextMain="Requesting Data..." TextSide="Data Gathering">test</BasicCardComp>}>
          <PostListComp SearchParams={searchParams}/>
        </Suspense>
        <BackgroundComp/>
      </div>
    </main>
  );
};

export default BodyComp;