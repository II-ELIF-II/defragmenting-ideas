import { getEnvironment } from "@/app/utilities";
import TagComp from "@/components/MiscComps/TagComp";
import HeaderComp from "@/components/HeaderComps/HeaderBarComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import PostDisplayComp from "@/components/PostComps/PostDisplayComp";
import postParams from "@/types/postParams";
import { notFound } from 'next/navigation';
import { getPost } from "@/lib/getPost";

export async function generateMetadata(Params: any) {
  const {params, searchParams} = Params;

  if(!searchParams.id)
    return notFound();
  
  const {post, tags} = await getPost(searchParams.id);
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

  const {post, tags} = await getPost(searchParams.id);

  post.createdAt = new Date(post.createdAt);
  post.updatedAt = new Date(post.updatedAt);
  post.tags = tags;

  // console.log(await getPostTags(searchParams.id));

  if(!post)
    return notFound();

  return (
    <div className="absolute top-0 flex w-screen min-h-screen overflow-y-hidden">
      <HeaderComp/>
      <div className="animate-slideInTop md:animate-slideInTopWithRotation flex flex-col items-center w-screen min-h-screen md:mt-5 md:mb-5">
        <PostDisplayComp Post={post}/>
      </div>
      <BackgroundComp bgURL = {"https://i.imgur.com/yMPmdyO.jpg"}/>
    </div>
  )
}

export default Post;