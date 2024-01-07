import PostEditorComp from "@/components/AdminComps/PostEditorComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import HeaderComp from "@/components/HeaderComp";

import { getPost } from "@/lib/getPost";
import { getTags } from "@/lib/getTags";

import postParams from "@/types/postParams";
import tagParams from "@/types/tagParams";

// import hljs from 'highlight.js';

const EditorPost = async(Params: any) => {
  const {params, searchParams} = Params;

  let Post = {
    id: "",
    title: "",
    thumbnail: "",
    summary: "",
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    PostTag: new Array<tagParams>,
  } as postParams;

  const tags = await getTags() as tagParams[];
  const {post, tags: postTags} = await getPost(searchParams.id);

  if(searchParams.id){
    Post = post;
    Post.createdAt = new Date(Post.createdAt);
    Post.updatedAt = new Date(Post.updatedAt);
    Post.PostTag = postTags;
  }
 
  // const { data: session, status } = useSession();

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <HeaderComp/>
      <PostEditorComp setPost={Post} tags={tags}/>
      <BackgroundComp/>
    </div>
  );
};

export default EditorPost;