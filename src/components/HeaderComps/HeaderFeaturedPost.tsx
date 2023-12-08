import { getEnvironment } from "@/app/utilities";
import TagComp from "../BodyComps/TagComp";

const getFeaturedSummary = async() => {
  const res = await fetch(getEnvironment().concat("/api/postSumFeatured"),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
};

const HeaderFeaturedPost = async() => {
  const post = await getFeaturedSummary();
  const creationDate = new Date(post[0].createdAt)

  return(
    <div className="group w-full flex flex-col grow overflow-hidden pointer-events-none z-10">
      <div className="flex h-full w-full drop-shadow-lgCustom">
        <div className="absolute cursor-pointer h-full z-10 clip-right-slash pointer-events-auto animate-slideInRight overflow-hidden w-full">
          <div className="h-full animate-cameraMoves opacity-30 lg:opacity-100 ease-in-out duration-500">
            <img src={post[0].thumbnail} draggable="false" className="object-cover h-full translate-x-1/4 blur-sm group-hover:blur-none ease-in-out duration-500 scale-105 group-hover:scale-125 grayscale-[70%] group-hover:grayscale-0" alt="temp"></img>
          </div>
        </div>
        <div className="absolute cursor-pointer h-full z-0 clip-right-slash-deeper animate-slideInRight bg-teal-700 w-full"></div>
      </div>
      <div className="absolute flex flex-col h-full w-full mt-[12vh] lg:mt-0 lg:w-7/12 justify-center scale-100 z-20">
        <h2 className="lg:pl-4 animate-slideInLeft text-4xl first-letter:text-5xl lg:text-5xl lg:first-letter:text-6xl text-center lg:text-left mb-16 scale-90 sm:scale-100">MY NAME&apos;S <span className="text-teal-400 font-semibold text-5xl lg:text-6xl">ELIF_ </span><span className="-ml-2 font-semibold text-5xl lg:text-6xl">!</span><br></br>WELCOME TO MY <span className="font-semibold text-5xl lg:text-6xl">PLAYGROUND!</span></h2>
        <h3 className="lg:mx-4 animate-slideInBottom text-2xl lg:text-4xl text-center lg:text-left mb-4">
          <span className="text-teal-400 font-semibold">&#47;&#47;</span> Check out my latest work:
        </h3>
        
        <div className="cursor-pointer backdrop-blur-sm animate-slideInBottom flex flex-col mx-5 pb-2 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-900/40 pointer-events-auto transition-all group-hover:bg-neutral-900/60 ease-in-out duration-600 group-hover:-translate-y-2 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-neutral-950/50">
          <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40"><span className="text-teal-400 font-semibold">&#92;&gt; </span>{post[0].title}</h1>
          <div className="flex flex-wrap gap-2 mt-1 text-sm px-2 py-1 font-semibold">
            <TagComp/>
            <TagComp/>
            <TagComp/>
          </div>
          <p className="text-xs text-neutral-400 px-3 my-1 whitespace-pre-wrap">{creationDate.getUTCFullYear()}-{creationDate.getUTCMonth() + 1}-{creationDate.getUTCDate()}</p>
          <p className="text-sm md:text-md xl:text-lg mb-1 px-3 text-justify indent-12">{post[0].summary}</p>
          <p className="absolute bottom-0 right-0 text-sm uppercase mr-2 mb-1 opacity-20 text-neutral-400 font-extralight">ID&#58;&#92;&gt; {post[0].id}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderFeaturedPost