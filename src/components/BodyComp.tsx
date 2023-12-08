import { getEnvironment } from "@/app/utilities";
import CardBarComp from "./BodyComps/CardBarComp";
import CardComp from "./BodyComps/CardComp";
import postSearchParams from "@/types/postSearchParams";
import PaginatorComp from "./BodyComps/PaginatorComp";
import postSearchResultsParams from "@/types/postSearchResultsParams";


const getPosts = async(searchParams: postSearchParams) => {
  const res = await fetch(getEnvironment().concat(`/api/postsSum?page=${searchParams.page}&query=${searchParams.query}`),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed");
  }
  return res.json();
};

const BodyComp = async(searchParams: postSearchParams) => {

  let {page, pages, posts} = await getPosts(searchParams);

  const postSearchResultsParams = {
    page: Number(page), 
    pages: Number(pages),
    query: searchParams.query,
  } as postSearchResultsParams;

  return (
    <div id="PostList" className="relative min-h-screen h-fit flex flex-col bg-gradient-to-tl from-neutral-900 to-neutral-800 snap-start overflow-y-clip">
      <CardBarComp {...postSearchResultsParams}/>
      <ul className="flex grow flex-col lg:flex-row h-full -mt-[12vh] lg:-mt-[6vh] z-10 overflow-hidden">
        {posts.map((post: PostSummaryProp) => (<CardComp key={post.id} {...post}/>))}
      </ul>
      <PaginatorComp {...postSearchResultsParams}/>
    </div>
  );
};

export default BodyComp;