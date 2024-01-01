import { getEnvironment } from "@/app/utilities";
import PostEditorComp from "@/components/AdminComps/PostEditorComp";
import HeaderBarComp from "@/components/HeaderComps/HeaderBarComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import postParams from "@/types/postParams";


// import hljs from 'highlight.js';


const EditorPost = async(Params: any) => {
  const {params, searchParams} = Params;

  const getPost = async(id: string) => {
    const res = await fetch(getEnvironment().concat(`/api/getPost?id=${id}`),{
      cache: "no-store",
    });
  
    if(!res.ok){
      throw new Error("Failed");
    }
    return res.json();
  };

  let Post = {
    id: "",
    title: "",
    thumbnail: "",
    summary: "",
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  } as postParams;

  if(searchParams.id){
    Post = (await getPost(searchParams.id))[0] as postParams;
    Post.createdAt = new Date(Post.createdAt);
    Post.updatedAt = new Date(Post.updatedAt);
  }
 
  // const { data: session, status } = useSession();

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <HeaderBarComp/>
      <PostEditorComp setPost={Post}/>
      <BackgroundComp useImage={false}/>
    </div>
  );
};

export default EditorPost;