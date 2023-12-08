import { getEnvironment } from "@/app/utilities";
import CardBarComp from "./BodyComps/CardBarComp";
import CardComp from "./BodyComps/CardComp";
import postSearchParams from "@/types/postSearchParams";
import PaginatorComp from "./BodyComps/PaginatorComp";
import paginatorParams from "@/types/paginatorParams";


const getPosts = async(searchParams: postSearchParams) => {
  const res = await fetch(getEnvironment().concat(`/api/postsSum?page=${searchParams.page}`),{
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed");
  }
  return res.json();
};

// const duration = 1.5; // s
// const delay = 0.25; // s
// const animStr = (i: Number) => `slideInFromTop ${duration}s ease-in-out ${delay * i}ms forwards`;

const BodyComp = async(searchParams: postSearchParams) => {

  let {page, pages, posts} = await getPosts(searchParams);

  const paginatorParameters = {
    page: Number(page), 
    pages: Number(pages)
  } as paginatorParams;

  return (
    <div id="PostList" className="relative min-h-screen h-fit flex flex-col bg-gradient-to-tl from-neutral-900 to-neutral-800 snap-start overflow-y-clip">
      <CardBarComp/>
      <ul className="flex grow flex-col lg:flex-row h-full -mt-[12vh] lg:-mt-[6vh] z-10 overflow-hidden">
        {posts.map((post: PostSummaryProp) => (<CardComp key={post.id} {...post}/>))}
      </ul>
      <PaginatorComp {...paginatorParameters}/>
    </div>
  );
};

export default BodyComp;