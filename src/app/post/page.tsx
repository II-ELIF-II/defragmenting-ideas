import { getEnvironment } from "@/app/utilities";
import { notFound } from 'next/navigation';
import { getPost } from "@/lib/getPost";

import PostDisplayComp from "@/components/PostComps/PostDisplayComp";
import HeaderComp from "@/components/HeaderComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";

import postParams from "@/types/postParams";
import tagParams from "@/types/tagParams";
import FooterComp from "@/components/FooterComp";

export async function generateMetadata(Params: any) {
  const {params, searchParams} = Params;

  if(!searchParams.id)
    return notFound();
  
  const {post, tags} = await getPost(searchParams.id);

  if(!post)
    return notFound();

  post.createdAt = new Date(post.createdAt);

  return {
    metadataBase: new URL(getEnvironment()),
    icons: {
      icon: '/favicon.ico'
    },
    title: "ELIFS PLAYGROUND | " + post.title,
    description: post.summary,
    publishedTime: post.createdAt,
    openGraph: {
      images: post.thumbnail,
      title: "ELIFS PLAYGROUND | " + post.title,
      description: post.summary,
      publishedTime: post.createdAt,
    },
  };
};

const Post = async(Params: any) => {
  const {params, searchParams} = Params;

  if(!searchParams.id)
    return notFound();

  const {post, tags}: {post: postParams, tags: tagParams[]} = await getPost(searchParams.id);

  if(!post)
    return notFound();

  post.createdAt = new Date(post.createdAt);
  post.updatedAt = new Date(post.updatedAt);
  post.PostTag = tags;

  return (
    <div className="absolute top-0 flex flex-col w-screen min-h-screen overflow-x-hidden">
      <HeaderComp/>
      <div className="animate-slideInTop md:animate-slideInTopWithRotation flex flex-col items-center w-screen min-h-screen md:mt-5 md:mb-18">
        <PostDisplayComp Post={post}/>
      </div>
      <FooterComp/>
      <BackgroundComp BackgroundURL = {post.thumbnail}/>
    </div>
  );
};

export default Post;