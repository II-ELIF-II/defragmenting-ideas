import { getFeaturedSummary } from "@/lib/getFeaturedSummary";
import HeaderBarComp from "./HeaderComps/HeaderBarComp"
import HeaderFeaturedPost from "./HeaderComps/HeaderFeaturedPost"
import BackgroundComp from "./MiscComps/BackgroundComp"
import { getPostTags } from "@/lib/getPostTags";
import postParams from "@/types/postParams";
import tagParams from "@/types/tagParams";
import postSummaryParams from "@/types/postSummaryParams";

const HeaderComp = async() => {

  const Post = await getFeaturedSummary() as postSummaryParams;
  Post.createdAt = new Date(Post.createdAt);

  let Tags = new Array<tagParams>;
  
  if (Post.PostTag)
  {
    Post.PostTag.forEach(Tag => {
      Tags.push(Tag.Tag);
    });
  }
  
  return(
    <header id="primary" className="relative h-screen flex flex-col overflow-hidden">
      <HeaderBarComp/>
      <HeaderFeaturedPost Post={Post} Tags={Tags}/>
      <BackgroundComp useImage={true} bgURL={Post.thumbnail}/>
    </header>
  )
}

export default HeaderComp