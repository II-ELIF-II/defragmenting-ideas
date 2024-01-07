import FeaturedThumbnailComp from "./FeaturedComps/FeaturedThumbnailComp";
import FeaturedCardComp from "./FeaturedComps/FeaturedCardComp";
import tagParams from "@/types/tagParams";
import postSummaryParams from "@/types/postSummaryParams";


const FeaturedPost = ({FeaturedPost}: {FeaturedPost: postSummaryParams}) => {
  const tags = Object.keys(FeaturedPost.PostTag).map(index => { return FeaturedPost.PostTag[Number(index)].Tag; }) as Array<tagParams>;

  return(
    <div className="group w-full flex flex-col grow overflow-hidden pointer-events-none z-10">
      <FeaturedThumbnailComp postID={FeaturedPost.id} postThumb={FeaturedPost.thumbnail}/>
      <div className="absolute flex flex-col h-full w-full mt-[6vh] md:mt-[0vh] md:w-7/12 justify-center z-20">
        <h1 className="lg:pl-4 animate-slideInLeft text-3xl first-letter:text-4xl md:text-5xl md:first-letter:text-6xl text-center md:text-left mb-8 md:mb-16 tracking-widest">MY NAME&apos;S <span className="text-teal-400 font-semibold text-4xl md:text-6xl drop-shadow-glowTealXS">ELIF<span className="animate-typewriterCursor">_</span></span><span className="-ml-2 font-semibold text-4xl lg:text-6xl"> !</span><br></br>WELCOME TO MY <span className="font-semibold text-4xl lg:text-6xl">PLAYGROUND!</span></h1>
        <p className="lg:mx-4 animate-slideInBottom text-2xl md:text-4xl text-center md:text-left mb-4">
          <span className="text-teal-400 font-semibold tracking-wider">&#47;&#47;</span> Check out my latest work:
        </p>
        <FeaturedCardComp Post={FeaturedPost} Tags={tags}/>
      </div>
    </div>
  );
};

export default FeaturedPost