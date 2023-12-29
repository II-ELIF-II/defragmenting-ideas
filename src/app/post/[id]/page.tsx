import { getEnvironment } from "@/app/utilities";
import HeaderComp from "@/components/HeaderComps/HeaderBarComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";

const Post = async(Params : any) => {
  const {params, searchParams} = Params;

  const getPost = async(id: string) => {
    const res = await fetch(getEnvironment().concat(`/api/getPost/?id=${id}`),{
      cache: "no-store",
    });
  
    if(!res.ok){
      throw new Error("Failed");
    }
    return res.json();
  };

  const Post = (await getPost(params.id))[0];
  // console.log(Post)

  return (
    <>
      <div className="flex w-screen min-h-screen">
        <HeaderComp/>
        <div className="absolute top-0 min-w-screen min-h-screen z-10">
          <div className="flex flex-col mt-[6vh]">
            <p>{Post.title}</p>
            <p>{Post.thumbnail}</p>
            <p>{Post.summary}</p>
            <p>{Post.content}</p>
            <p>{Post.createdAt}</p>
            <p>{Post.updatedAt}</p>
          </div>
        </div>
        <BackgroundComp bgURL = {"https://i.imgur.com/yMPmdyO.jpg"}/>
      </div>
    </>
  )
}

export default Post
