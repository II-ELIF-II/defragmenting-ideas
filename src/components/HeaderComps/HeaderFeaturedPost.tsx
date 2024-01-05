import FeaturedThumbnailComp from "./FeaturedComps/FeaturedThumbnailComp";
import FeaturedCardComp from "./FeaturedComps/FeaturedCardComp";
import tagParams from "@/types/tagParams";
import postSummaryParams from "@/types/postSummaryParams";


const HeaderFeaturedPost = ({Post}: {Post: postSummaryParams}) => {
  const Tags = Object.keys(Post.PostTag).map(index => { return Post.PostTag[Number(index)].Tag; }) as Array<tagParams>;

  return(
    <div className="group w-full flex flex-col grow overflow-hidden pointer-events-none z-10">
      <FeaturedThumbnailComp postID={Post.id} postThumb={Post.thumbnail}/>
      <div className="absolute flex flex-col h-full w-full mt-[6vh] md:mt-[0vh] md:w-7/12 justify-center z-20">
        <h2 className="lg:pl-4 animate-slideInLeft text-3xl first-letter:text-4xl md:text-5xl md:first-letter:text-6xl text-center md:text-left mb-16">MY NAME&apos;S <span className="text-teal-400 font-semibold text-4xl md:text-6xl">ELIF_ </span><span className="-ml-2 font-semibold text-4xl lg:text-6xl">!</span><br></br>WELCOME TO MY <span className="font-semibold text-4xl lg:text-6xl">PLAYGROUND!</span></h2>
        <h3 className="lg:mx-4 animate-slideInBottom text-2xl md:text-4xl text-center md:text-left mb-4">
          <span className="text-teal-400 font-semibold">&#47;&#47;</span> Check out my latest work:
        </h3>
        <FeaturedCardComp Post={Post} Tags={Tags}/>
      </div>
    </div>
  );
};

export default HeaderFeaturedPost