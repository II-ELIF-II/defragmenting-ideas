"use client";

import PostCardGradientComp from "./PostListCardComps/PostCardGradientComp";
import PostCardSummaryComp from "./PostListCardComps/PostCardSummaryComp";
import PostCardHeaderComp from "./PostListCardComps/PostCardHeaderComp";
import PostCardBackground from "./PostListCardComps/PostCardBackground";
import TagComp from "../../MiscComps/TagComp";

import postSummaryParams from "@/types/postSummaryParams";
import postTagParams from "@/types/postTagParams";
import tagParams from "@/types/tagParams";

import { createPostUrl } from "@/app/utilities";
import { useRouter } from "next/navigation";

const PostListCardComp = ({Post, Index}: {Post?: postSummaryParams, Index: number}) => {
  const router = useRouter();

  const post = {
    id: Post?.id || 'ERR_R_404_ID_PARAM_MISSING',
    title: Post?.title || 'ER_MISSING_TITLE',
    thumbnail: Post?.thumbnail || '',
    summary: Post?.summary || '',
    createdAt: Post?.createdAt || '',
    updatedAt: Post?.updatedAt || '',
    PostTag: Post?.PostTag || new Array<postTagParams>,
  } as postSummaryParams;

  const tags = Object.keys(post.PostTag).map(index => { return post.PostTag[Number(index)].Tag; }) as Array<tagParams>;
  const delay = ['xl:animation-delay-m400', 'xl:animation-delay-m300', 'xl:animation-delay-m200', 'xl:animation-delay-m100'];
  const summaryStyle = "w-full h-fit text-md px-3 pt-2 pb-4 text-justify indent-12 font-light tracking-wider";
  
  return(
    <li onClick={() => (Post ? router.push(createPostUrl(post.id)) : '')} className={ (Post ? 'cursor-pointer flex ' : 'cursor-default hidden xl:flex ') + delay[Index] + `  animate-slideInBottom xl:animate-slideInTop relative w-full md:max-w-[25%] min-h-screen xl:min-h-full flex-col grow group hover:z-10 xl:hover:drop-shadow-glowTealSM overflow-hidden ease-in-out duration-500`}>
      <PostCardBackground Title={post.title} ImageURL={post.thumbnail} Index={Index}/>
      <PostCardGradientComp/>
      <div className="relative grow flex flex-col justify-between h-screen xl:h-full overflow-hidden">
        <PostCardHeaderComp TextDate={post.createdAt} TextTitle={post.title}/>
        <div className="min-h-[25vh] flex flex-col w-full border-t-4 border-neutral-950/20">
          <div className="flex flex-wrap gap-2 text-sm p-2 font-semibold bg-diagonal-stripes ease-in-out duration-500">
            {tags.map((tag: tagParams) => (<TagComp key={tag.id} Tag={tag}/>))}
          </div>
          <PostCardSummaryComp>
            {Post ? <p className={summaryStyle}>{post.summary}</p> : <p className={summaryStyle}><span className="bg-teal-600 py-0.5 px-2 font-bold text-neutral-800 ">ERROR :</span> The parameters for this article could not be found, this article may have been corrupted, lost, or it simply does not exist. <br/>&zwnj;<br/>&zwnj;<br/>&zwnj;</p>}
          </PostCardSummaryComp>
          <p className="absolute bottom-1 right-2 text-sm uppercase opacity-20 text-neutral-400 font-extralight">{`ID:\\> ` + post.id}</p>
        </div>
      </div>
    </li>
  );
};

export default PostListCardComp;