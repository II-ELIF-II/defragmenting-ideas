import FeaturedThumbnailComp from "./FeaturedComps/FeaturedThumbnailComp";
import FeaturedCardComp from "./FeaturedComps/FeaturedCardComp";
import tagParams from "@/types/tagParams";
import postSummaryParams from "@/types/postSummaryParams";


const HeaderFeaturedPost = ({Post, Tags}: {Post: postSummaryParams, Tags: tagParams[]}) => {

  return(
    <div className="group w-full flex flex-col grow overflow-hidden pointer-events-none z-10">
      <FeaturedThumbnailComp postID={Post.id} postThumb={Post.thumbnail}/>
      <div className="absolute flex flex-col h-full w-full mt-[12vh] lg:mt-0 lg:w-7/12 justify-center scale-100 z-20">
        <h2 className="lg:pl-4 animate-slideInLeft text-4xl first-letter:text-5xl lg:text-5xl lg:first-letter:text-6xl text-center lg:text-left mb-16 scale-90 sm:scale-100">MY NAME&apos;S <span className="text-teal-400 font-semibold text-5xl lg:text-6xl">ELIF_ </span><span className="-ml-2 font-semibold text-5xl lg:text-6xl">!</span><br></br>WELCOME TO MY <span className="font-semibold text-5xl lg:text-6xl">PLAYGROUND!</span></h2>
        <h3 className="lg:mx-4 animate-slideInBottom text-2xl lg:text-4xl text-center lg:text-left mb-4">
          <span className="text-teal-400 font-semibold">&#47;&#47;</span> Check out my latest work:
        </h3>
        <FeaturedCardComp Post={Post} Tags={Tags}/>
      </div>
    </div>
  );
};

export default HeaderFeaturedPost