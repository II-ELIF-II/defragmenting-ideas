import { getEnvironment } from "@/app/utilities";
import AdminPanelComp from "@/components/AdminComps/AdminPanelComp";
import HeaderBarComp from "@/components/HeaderComps/HeaderBarComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import adminPanelPostsParams from "@/types/admin/adminPanelPostsParams";

const Admin = async(Params: any) => {
  const {params, searchParams} = Params;
  
  const postParams = {
    postPage: parseInt(searchParams.postPage) || 1,
    postQuery: searchParams.postQuery || "",
  };

  const getPosts = async({postPage, postQuery}: {postPage: number, postQuery: string}) => {
    const res = await fetch(getEnvironment().concat(`/api/admin/getMinPosts?page=${postPage}&query=${postQuery}`),{
      cache: "no-store",
    });
  
    if(!res.ok){
      throw new Error("Failed");
    }
    return res.json();
  };

  let postResults = await getPosts(postParams) as adminPanelPostsParams;

  // console.log(postResults.posts)

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <HeaderBarComp/>
      <AdminPanelComp postResults={postResults} postQuery={postParams.postQuery}/>
      <BackgroundComp useImage={false}/>
      
    </div>
  );
};

export default Admin;