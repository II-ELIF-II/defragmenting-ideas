"use client";
import { createPostUrl } from "@/app/utilities";
import { useRouter } from "next/navigation";

const FeaturedThumbnailComp = ({postID, postThumb}: {postID: string, postThumb: string}) => {

  const router = useRouter();
  
  return(
    <div onClick={() => router.push(createPostUrl(postID))} className="flex h-full [&>*]:h-full [&>*]:w-full [&>*]:absolute [&>*]:cursor-pointer w-[200vw] ml-[-60vw] md:ml-0 md:w-full drop-shadow-lgCustom">
      <div className="z-10 clip-right-slash pointer-events-auto animate-slideInRight overflow-hidden">
        <div className="h-full animate-cameraMoves opacity-30 lg:opacity-100 ease-in-out duration-500">
          <img src={postThumb} loading="lazy" draggable="false" className="object-cover h-full translate-x-1/4 blur-sm group-hover:blur-none ease-in-out duration-500 scale-105 group-hover:scale-125 grayscale-[70%] group-hover:grayscale-0" alt="temp"></img>
        </div>
      </div>
      <div className="hidden md:block z-0 clip-right-slash-deeper animate-slideInRight bg-teal-700"></div>
    </div>
  )
}

export default FeaturedThumbnailComp