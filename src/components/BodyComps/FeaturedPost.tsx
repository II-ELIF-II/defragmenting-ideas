import FeaturedThumbnailComp from "./FeaturedComps/FeaturedThumbnailComp";
import FeaturedCardComp from "./FeaturedComps/FeaturedCardComp";
import tagParams from "@/types/tagParams";
import postSummaryParams from "@/types/postSummaryParams";


const FeaturedPost = ({FeaturedPost}: {FeaturedPost: postSummaryParams}) => {
  const tags = Object.keys(FeaturedPost.PostTag).map(index => { return FeaturedPost.PostTag[Number(index)].Tag; }) as Array<tagParams>;

  return(
    <div className="group w-full flex flex-col grow overflow-hidden pointer-events-none z-10">
      <FeaturedThumbnailComp postID={FeaturedPost.id} postThumb={FeaturedPost.thumbnail}/>
      <div className="absolute flex flex-col h-full w-full justify-center z-20">
        <h1 className="px-4 uppercase text-3xl first-letter:text-4xl lg:text-5xl lg:first-letter:text-6xl 3xl:text-7xl 3xl:first-letter:text-8xl text-center lg:text-left tracking-widest">
          {`My name's `}
          <span className="text-teal-400 font-semibold text-4xl lg:text-6xl 3xl:text-7xl drop-shadow-glowTealXS">{`ELIF`}<span className="animate-typewriterCursor">{`_`}</span></span>
          <span className="-ml-2 font-semibold text-4xl lg:text-6xl 3xl:text-7xl"> !</span>
        </h1>
        <h2 className="px-4 animate-slideInLeft text-3xl first-letter:text-4xl lg:text-5xl lg:first-letter:text-6xl 3xl:text-7xl 3xl:first-letter:text-8xl text-center lg:text-left mb-8 lg:mb-16 tracking-widest">
          {`WELCOME TO MY `}<span className="font-semibold text-4xl lg:text-6xl 3xl:text-7xl">{`PLAYGROUND!`}</span>
        </h2>
        <p className="lg:mx-4 animate-slideInBottom text-2xl lg:text-4xl 3xl:text-5xl text-center lg:text-left mb-4">
          <span className="text-teal-400 font-semibold tracking-wider drop-shadow-glowTealXS">{`\\\\`}</span> {`Check out my latest work:`}
        </p>
        <FeaturedCardComp Post={FeaturedPost} Tags={tags}/>
      </div>
    </div>
  );
};

export default FeaturedPost