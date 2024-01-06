"use client";

import PostCardGradientComp from "./PostCardComps/PostCardGradientComp";
import PostCardSummaryComp from "./PostCardComps/PostCardSummaryComp";
import PostCardHeaderComp from "./PostCardComps/PostCardHeaderComp";
import PostCardBackground from "./PostCardComps/PostCardBackground";
import TagComp from "../MiscComps/TagComp";

import postSummaryParams from "@/types/postSummaryParams";
import postTagParams from "@/types/postTagParams";
import tagParams from "@/types/tagParams";

import { createPostUrl } from "@/app/utilities";
import { useRouter } from "next/navigation";

const PostCardComp = ({Post, Index}: {Post?: postSummaryParams, Index: number}) => {
  const router = useRouter();

  const post = {
    id: Post?.id || 'ERR_R_404_ID_PARAM_MISSING',
    title: Post?.title || 'ER_MISSING_TITLE',
    thumbnail: Post?.thumbnail || '',
    summary: Post?.summary || '',
    createdAt: Post ? (new Date(Post?.createdAt).getUTCFullYear()) + '-' + (new Date(Post?.createdAt).getUTCMonth() + 1) + '-' + (new Date(Post?.createdAt).getUTCDate()) : 'ER_MISSING_DATE',
    updatedAt: Post?.updatedAt || '',
    PostTag: Post?.PostTag || new Array<postTagParams>,
  } as postSummaryParams;

  const tags = Object.keys(post.PostTag).map(index => { return post.PostTag[Number(index)].Tag; }) as Array<tagParams>;
  const delay = ['md:animation-delay-m400', 'md:animation-delay-m300', 'md:animation-delay-m200', 'md:animation-delay-m100'];
  const summaryStyle = "w-full h-fit text-md xl:text-lg px-3 pt-2 pb-4 text-justify indent-12 font-light tracking-wider";

  return(
    <li onClick={() => (Post ? router.push(createPostUrl(post.id)) : '')} className={ (Post ? 'cursor-pointer flex ' : 'cursor-default hidden md:flex ') + delay[Index] + ` animate-slideInBottom md:animate-slideInTop relative w-full min-h-screen md:min-h-full flex-col grow origin-top-right group overflow-hidden ease-in-out duration-500 [&>*]:ease-in-out [&>*]:duration-500 hover:z-10 md:hover:drop-shadow-glowSM`}>
      <PostCardBackground TextURL={post.thumbnail} Index={Index}/>
      <PostCardGradientComp/>
      <div className="relative grow flex flex-col top-0">
        <PostCardHeaderComp TextDate={post.createdAt} TextTitle={post.title}/>
        <div className="mt-auto h-fit flex flex-col w-full border-t-4 border-neutral-950/20">
          <div className="flex flex-wrap gap-2 text-sm p-2 font-semibold bg-diagonal-stripes ease-in-out duration-500">
            {tags.map((tag: tagParams) => (<TagComp key={tag.id} Tag={tag}/>))}
          </div>
          <PostCardSummaryComp TextId={post.id}>
            {Post ? <p className={summaryStyle}>{post.summary}</p> : <p className={summaryStyle}><span className="bg-teal-600 py-0.5 px-2 font-bold text-neutral-800 ">ERROR :</span> The parameters for this article could not be found, this article may have been corrupted, lost, or it simply does not exist. <br/>&zwnj;<br/>&zwnj;<br/>&zwnj;</p>}
          </PostCardSummaryComp>
        </div>
      </div>
    </li>
  );
};

export default PostCardComp;