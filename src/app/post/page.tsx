import { getEnvironment } from "@/app/utilities";
import HeaderComp from "@/components/HeaderComps/HeaderBarComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import PostDisplayComp from "@/components/PostComps/PostDisplayComp";
import postParams from "@/types/postParams";
import { notFound } from 'next/navigation';

export async function generateMetadata(Params: any) {
  const {params, searchParams} = Params;

  if(!searchParams.id)
    return notFound();
  
  const getPost = async(id: string) => {
    const res = await fetch(getEnvironment().concat(`/api/getPost?id=${id}`),{
      cache: "no-store",
    });
  
    if(!res.ok){
      throw new Error("Failed");
    }
    
    return res.json();
  };

  const Post = (await getPost(searchParams.id))[0] as postParams;
  Post.createdAt = new Date(Post.createdAt);

  return {
    metadataBase: new URL(getEnvironment()),
    icons: {
      icon: '/favicon.ico'
    },
    title: "ELIFS PLAYGROUND | " + Post.title,
    description: Post.summary,
    publishedTime: Post.createdAt,
    openGraph: {
      images: Post.thumbnail,
      title: "ELIFS PLAYGROUND | " + Post.title,
      description: Post.summary,
      publishedTime: Post.createdAt,
    },
  };
};

const Post = async(Params: any) => {
  const {params, searchParams} = Params;

  if(!searchParams.id)
    return notFound();

  const getPost = async(id: string) => {
    const res = await fetch(getEnvironment().concat(`/api/getPost?id=${id}`),{
      cache: "no-store",
    });
  
    if(!res.ok){
      throw new Error("Failed");
    }

    return res.json();
  };

  const Post = (await getPost(searchParams.id))[0] as postParams;

  Post.createdAt = new Date(Post.createdAt);
  Post.updatedAt = new Date(Post.updatedAt);

  if(!Post)
    return notFound();

  return (
    <div className="absolute top-0 flex w-screen min-h-screen overflow-y-hidden">
      <HeaderComp/>
      <div className="animate-slideInTop md:animate-slideInTopWithRotation flex flex-col items-center w-screen min-h-screen md:mt-5 md:mb-5">
        <PostDisplayComp Post={Post}/>
      </div>
      <BackgroundComp bgURL = {"https://i.imgur.com/yMPmdyO.jpg"}/>
    </div>
  )
}

export default Post;