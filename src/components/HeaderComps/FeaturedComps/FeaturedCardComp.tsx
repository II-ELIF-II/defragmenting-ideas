"use client";
import { createPostUrl } from "@/app/utilities";
import TagComp from "@/components/BodyComps/TagComp";
import { useRouter } from "next/navigation";

const FeaturedCardComp = ({postID, postTitle, postSummary, postCDate}: {postID: string, postTitle: string, postSummary: string, postCDate: Date}) => {

  const router = useRouter();
  
  return(
    <div onClick={() => router.push(createPostUrl(postID))} className="cursor-pointer backdrop-blur-sm animate-slideInBottom flex flex-col mx-5 pb-2 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-900/40 pointer-events-auto transition-all group-hover:bg-neutral-900/60 ease-in-out duration-600 group-hover:-translate-y-2 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-neutral-950/50">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40"><span className="text-teal-400 font-semibold">&#92;&gt; </span>{postTitle}</h1>
      <div className="flex flex-wrap gap-2 mt-1 text-sm px-2 py-1 font-semibold">
        <TagComp/>
        <TagComp/>
        <TagComp/>
      </div>
      <p className="text-xs text-neutral-400 px-3 my-1 whitespace-pre-wrap">{postCDate.getUTCFullYear()}-{postCDate.getUTCMonth() + 1}-{postCDate.getUTCDate()}</p>
      <p className="text-sm md:text-md xl:text-lg mb-1 px-3 text-justify indent-12">{postSummary}</p>
      <p className="absolute bottom-0 right-0 text-sm uppercase mr-2 mb-1 opacity-20 text-neutral-400 font-extralight">ID&#58;&#92;&gt; {postID}</p>
    </div>
  );
};

export default FeaturedCardComp;