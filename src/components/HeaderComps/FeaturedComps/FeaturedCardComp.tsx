"use client";
import { createPostUrl } from "@/app/utilities";
import TagComp from "@/components/MiscComps/TagComp";
import postSummaryParams from "@/types/postSummaryParams";
import tagParams from "@/types/tagParams";
import { useRouter } from "next/navigation";

const FeaturedCardComp = ({Post, Tags}: {Post: postSummaryParams, Tags: tagParams[]}) => {

  const router = useRouter();
  
  return(
    <div onClick={() => router.push(createPostUrl(Post.id))} className="cursor-pointer md:backdrop-blur-sm animate-slideInBottom flex flex-col mx-5 pb-2 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-900/80 md:bg-neutral-900/40 pointer-events-auto transition-all md:group-hover:bg-neutral-900/60 ease-in-out duration-600 group-hover:-translate-y-2 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-2 md:group-hover:shadow-xl md:group-hover:shadow-neutral-950/50">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40"><span className="text-teal-400 font-semibold">&#92;&gt; </span>{Post.title}</h1>
      <div className="flex flex-wrap gap-2 mt-1 text-sm px-2 py-1 font-semibold">
        {Tags.map((Tag: tagParams) => (<TagComp key={Tag.id} Tag={Tag}/>))}
      </div>
      <p className="text-xs text-neutral-400 px-3 my-1 whitespace-pre-wrap">{new Date(Post.createdAt).getUTCFullYear()}-{new Date(Post.createdAt).getUTCMonth() + 1}-{new Date(Post.createdAt).getUTCDate()}</p>
      <p className="text-sm md:text-md xl:text-lg mb-1 px-3 text-justify indent-12">{Post.summary}</p>
      <p className="absolute bottom-0 right-0 text-sm uppercase mr-2 mb-1 opacity-20 text-neutral-400 font-extralight">ID&#58;&#92;&gt; {Post.id}</p>
    </div>
  );
};

export default FeaturedCardComp;