import { getEnvironment, isDevEnvironment} from "@/app/utilities";
import TagComp from "@/components/BodyComps/TagComp";
import HeaderComp from "@/components/HeaderComps/HeaderBarComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import PostDateComp from "@/components/PostComps/PostDateComp";
import PostSummaryComp from "@/components/PostComps/PostSummaryComp";
import postParams from "@/types/postParams";
import { notFound } from 'next/navigation';

export async function generateMetadata(Params: any) {
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

  const Post = (await getPost(params.id))[0] as postParams;

  return {
    icons: {
      icon: '/favicon.ico'
    },
    title: "ELIFS PLAYGROUND | " + Post.title,
    description: Post.summary,
    publishedTime: Post.createdAt,
    openGraph: {
      images: Post.thumbnail,
    },
  };
};

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

  const Post = (await getPost(params.id))[0] as postParams;

  if(!Post)
    return notFound();

  const DateCreation = new Date(Post.createdAt);
  const DateUpdate = new Date(Post.updatedAt);
  const Updated = (Post.createdAt !== Post.updatedAt);
  const Content = "<div>" + Post.content + "</div>";

  return (
    <>
      <div className="flex w-screen min-h-screen">
        <HeaderComp/>
        <div className="animate-slideInTopWithRotation flex flex-col items-center w-screen min-h-screen my-5">
          <div className="bg-neutral-950 w-full max-w-7xl border border-solid border-teal-600 drop-shadow-glow pb-16">
            <div className="relative flex w-full group h-144 overflow-hidden">
              <img src={Post.thumbnail} alt="TEMP" draggable="false" className="object-cover h-screen lg:h-full grow ease-in-out duration-500"/>
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b to-neutral-950 from-transparent pointer-events-none"/>
              <div className="absolute top-0 w-full h-1/3 bg-gradient-to-t to-teal-950/30 from-transparent pointer-events-none"/>
            </div>
            <div className="flex flex-col w-full items-center pt-3 ">
              <div className="flex flex-row w-full">
                <div className="flex flex-col gap-1 w-1/6 mx-2 my-1 opacity-10 text-xs -mt-4 uppercase">
                  {/* <div className="flex flex-row gap-1">
                    <div className="flex items-center px-1 min-h-5 border border-neutral-100 bg-neutral-500"><p>ID</p></div>
                    <div className="flex items-center px-1 min-h-5 grow border border-neutral-100"><p>{Post.id}</p></div>
                  </div>
                  <div className="flex flex-row gap-1">
                    <div className="flex items-center px-1 min-h-5 border border-neutral-100 bg-neutral-500"><p>DATE</p></div>
                    <div className="flex items-center px-1 min-h-5 grow border border-neutral-100"><p>{displayDateAsString(new Date())}</p></div>
                  </div>
                  <div className="flex flex-row gap-1">
                    <div className="flex items-center px-1 min-h-5 border border-neutral-100 bg-neutral-500"><p>TIME</p></div>
                    <div className="flex items-center px-1 min-h-5 grow border border-neutral-100"><p>{displayTimeAsString(new Date())}</p></div>
                  </div>
                  <div className="flex flex-row gap-1">
                    <div className="flex items-center px-1 min-h-5 border border-neutral-100 bg-neutral-500"><p>LOC</p></div>
                    <div className="flex items-center px-1 min-h-5 grow border border-neutral-100"><p>{getTimezone()}</p></div>
                  </div>
                  <div className="flex flex-row gap-1">
                    <div className="flex items-center px-1 min-h-5 border border-orange-400 text-orange-100 bg-orange-900"><p>LAT</p></div>
                    <div className="flex items-center px-1 min-h-5 grow border border-orange-400 text-orange-100"><p>Classified</p></div>
                  </div>
                  <div className="flex flex-row gap-1">
                    <div className="flex items-center px-1 min-h-5 border border-orange-400 text-orange-100 bg-orange-900"><p>LONG</p></div>
                    <div className="flex items-center px-1 min-h-5 grow border border-orange-400 text-orange-100"><p>Classified</p></div>
                  </div>
                  <div className="flex flex-row gap-1">
                    <div className="flex items-center px-1 min-h-5 border border-red-400 text-red-100 bg-red-900"><p>ERROR</p></div>
                    <div className="flex items-center px-1 min-h-5 grow border border-red-400 text-red-100"><p>Timed out</p></div>
                  </div> */}
                </div>
                <div className="w-4/6 mx-2 my-1 z-10">
                  <div className="w-fit bg-neutral-950/40 backdrop-blur-sm text-3xl px-3 py-2 -mt-18 font-semibold border-l-8 border-teal-500">
                    <span className="text-teal-400 font-semibold">&#92;&gt; </span>{Post.title}
                  </div>
                  <PostDateComp cDate={DateCreation} uDate={DateUpdate}/>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <TagComp/>
                    <TagComp/>
                    <TagComp/>
                  </div>
                  <PostSummaryComp summary={Post.summary}/>
                  {/* Note: Find a better way to do this */}
                  <div className="animate-slideInBottom" dangerouslySetInnerHTML={{__html: Content}}/>
                  {isDevEnvironment() && (
                    <pre className="overflow-y-auto">{JSON.stringify(Post, null, 2)}</pre>
                  )}
                </div>
                <div className="w-1/6 mx-2 my-1">
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <BackgroundComp bgURL = {"https://i.imgur.com/yMPmdyO.jpg"}/>
      </div>
    </>
  )
}

export default Post
