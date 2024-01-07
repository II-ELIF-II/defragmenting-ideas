"use client";
import { createPostUrl } from "@/app/utilities";
import TagComp from "@/components/MiscComps/TagComp";
import PostDateComp from "@/components/PostComps/PostDateComp";
import postSummaryParams from "@/types/postSummaryParams";
import tagParams from "@/types/tagParams";
import { useRouter } from "next/navigation";

const FeaturedCardComp = ({Post, Tags}: {Post: postSummaryParams, Tags: tagParams[]}) => {

  const router = useRouter();
  
  return(
    <div onClick={() => router.push(createPostUrl(Post.id))} className="relative cursor-pointer md:backdrop-blur-sm animate-slideInBottom flex flex-col mx-5 pb-2 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-900/80 md:bg-neutral-900/40 pointer-events-auto transition-all md:group-hover:bg-neutral-900/60 ease-in-out duration-600 group-hover:-translate-y-2 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-2 md:group-hover:shadow-xl md:group-hover:shadow-neutral-950/50">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40 tracking-wider"><span className="text-teal-400 font-semibold">&#92; &gt; </span>{Post.title}</h1>
      <div className="flex px-2 mt-2 items-center">
        <PostDateComp cDate={new Date(Post.createdAt)}/>
        <div className="ml-3 pl-3 border-l border-teal-400 flex flex-wrap h-fit gap-2">
          {Tags.map((Tag: tagParams) => (<TagComp key={Tag.id} Tag={Tag}/>))}
        </div>
      </div>
      <p className="mt-2 mb-1 px-2 text-[0.9rem] md:text-md xl:text-lg text-justify indent-12 tracking-wider">{Post.summary}</p>
      <p className="absolute bottom-0 right-0 text-sm uppercase mr-2 mb-1 opacity-20 text-neutral-400 font-extralight">ID&#58;&#92;&gt; {Post.id}</p>
    </div>
  );
};

export default FeaturedCardComp;