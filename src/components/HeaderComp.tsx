import { getFeaturedSummary } from "@/lib/getFeaturedSummary";
import HeaderBarComp from "./HeaderComps/HeaderBarComp"
import HeaderFeaturedPost from "./HeaderComps/HeaderFeaturedPost"
import BackgroundComp from "./MiscComps/BackgroundComp"
import tagParams from "@/types/tagParams";
import postSummaryParams from "@/types/postSummaryParams";

const HeaderComp = async() => {

  const Post = await getFeaturedSummary() as postSummaryParams;
  Post.createdAt = new Date(Post.createdAt);

  return(
    <header id="primary" className="relative h-screen flex flex-col overflow-hidden">
      <HeaderBarComp/>
      <HeaderFeaturedPost Post={Post}/>
      <BackgroundComp bgURL={Post.thumbnail}/>
    </header>
  )
}

export default HeaderComp