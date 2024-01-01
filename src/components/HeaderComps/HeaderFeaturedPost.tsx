import { getEnvironment } from "@/app/utilities";
import FeaturedThumbnailComp from "./FeaturedComps/FeaturedThumbnailComp";
import FeaturedCardComp from "./FeaturedComps/FeaturedCardComp";

const getFeaturedSummary = async() => {
  const res = await fetch(getEnvironment().concat("/api/postSumFeatured"),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed");
  }

  return res.json();
};

const HeaderFeaturedPost = async() => {
  const [post] = await getFeaturedSummary();
  const creationDate = new Date(post.createdAt)

  return(
    <div className="group w-full flex flex-col grow overflow-hidden pointer-events-none z-10">
      <FeaturedThumbnailComp postID={post.id} postThumb={post.thumbnail}/>
      <div className="absolute flex flex-col h-full w-full mt-[12vh] lg:mt-0 lg:w-7/12 justify-center scale-100 z-20">
        <h2 className="lg:pl-4 animate-slideInLeft text-4xl first-letter:text-5xl lg:text-5xl lg:first-letter:text-6xl text-center lg:text-left mb-16 scale-90 sm:scale-100">MY NAME&apos;S <span className="text-teal-400 font-semibold text-5xl lg:text-6xl">ELIF_ </span><span className="-ml-2 font-semibold text-5xl lg:text-6xl">!</span><br></br>WELCOME TO MY <span className="font-semibold text-5xl lg:text-6xl">PLAYGROUND!</span></h2>
        <h3 className="lg:mx-4 animate-slideInBottom text-2xl lg:text-4xl text-center lg:text-left mb-4">
          <span className="text-teal-400 font-semibold">&#47;&#47;</span> Check out my latest work:
        </h3>
        <FeaturedCardComp postID={post.id} postTitle={post.title} postSummary={post.summary} postCDate={creationDate}/>
      </div>
    </div>
  );
};

export default HeaderFeaturedPost