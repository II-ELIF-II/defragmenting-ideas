"use client";

import { createPostUrl } from "@/app/utilities";
import TagComp from "../MiscComps/TagComp";
import { useRouter } from "next/navigation";
import postSummaryParams from "@/types/postSummaryParams";
import tagParams from "@/types/tagParams";

const CardComp = ({Post}: {Post: postSummaryParams}) => {
  const router = useRouter();

  const creationDate = new Date(Post.createdAt);
  let tags = new Array<tagParams>;

  if (Post.PostTag)
  {
    Post.PostTag.forEach(Tag => {
      tags.push(Tag.Tag);
    });
  }
  
  return(
    <li onClick={() => router.push(createPostUrl(Post.id))} className="relative flex flex-col grow w-full min-h-screen lg:min-h-full animate-slideInRight origin-top-right cursor-pointer group overflow-hidden snap-center lg:snap-align-none ease-in-out duration-500 hover:z-10 md:hover:shadow-2xl md:hover:shadow-neutral-950/100">
      <div className="absolute h-full group-hover:animate-cameraMoves ease-in-out duration-500">
        <img src={Post.thumbnail} alt="TEMP" loading="lazy" draggable="false" className="object-cover h-screen lg:h-full grow scale-110 group-hover:scale-125 grayscale-[70%] group-hover:grayscale-0 ease-in-out duration-500"/>
      </div>
      <div className="absolute h-2/3 group-hover:h-1/3 bottom-0 w-full bg-gradient-to-b from-transparent to-teal-950 opacity-90 group-hover:opacity-50 ease-in-out duration-500 pointer-events-none"></div>
      <div className="absolute h-1/5 group-hover:h-1/6 top-0 w-full bg-gradient-to-t from-transparent to-teal-950 opacity-90 group-hover:opacity-50 ease-in-out duration-500 pointer-events-none"></div>
      <div className="relative flex flex-col top-0 h-full w-full">
        <div className="flex flex-col justify-around gap-3 mt-[12vh] lg:mt-[6vh]">
          <div className="w-fit mt-3 bg-teal-500 px-2 py-1 text-xl font-semibold">{creationDate.getUTCFullYear()}-{creationDate.getUTCMonth() + 1}-{creationDate.getUTCDate()}</div>
          <div className="w-fit text-3xl mr-8 px-3 py-2 bg-neutral-950/40 md:backdrop-blur-sm font-semibold border-l-8 border-teal-500"><span className="text-teal-400 font-semibold">&#92;&gt; </span>{Post.title}</div>
        </div>
        <div className="mt-auto h-fit bottom-0 flex flex-col w-full border-t-4 border-neutral-950/20">
          <div className="flex flex-wrap gap-2 text-sm p-2 font-semibold bg-diagonal-stripes ease-in-out duration-500">
            {tags.map((tag: tagParams) => (<TagComp key={tag.id} tag={tag}/>))}
          </div>
          <div className="bg-gradient-to-r from-neutral-950/40 to-neutral-950/60 md:backdrop-blur-sm md:group-hover:backdrop-blur-md ease-in-out duration-500">
            <p className="w-full h-fit flex text-md xl:text-lg px-3 pt-2 pb-4 text-justify indent-12">{Post.summary}</p>
            <p className="absolute bottom-0 right-0 text-sm uppercase mr-2 mb-1 opacity-20 text-neutral-400 font-extralight">ID&#58;&#92;&gt; {Post.id}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardComp;