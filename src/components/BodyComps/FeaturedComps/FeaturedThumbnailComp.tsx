"use client";
import { createPostUrl } from "@/app/utilities";
import { useRouter } from "next/navigation";

const FeaturedThumbnailComp = ({postID, postThumb}: {postID: string, postThumb: string}) => {

  const router = useRouter();
  
  return(
    <div onClick={() => router.push(createPostUrl(postID))} className="flex h-full [&>*]:h-full [&>*]:w-full [&>*]:absolute [&>*]:cursor-pointer md:drop-shadow-glowTealXXS">
      <div className="clip-featured-thumbnail-small md:clip-featured-thumbnail pointer-events-auto animate-slideInRight">
        <div className="animate-cameraMoves z-10 pointer-events-none opacity-50 md:opacity-100">
          <img src={postThumb} alt="Featured Post Thumbnail" draggable="false" className="max-w-[200%] md:max-w-[100%] md:translate-x-[40%] translate-y-[5%] group-hover:translate-y-[15%] object-cover h-screen blur-sm group-hover:blur-none ease-in-out duration-500 scale-125 group-hover:scale-150 grayscale-[70%] group-hover:grayscale-0"/>
        </div>
      </div>
      <div className="hidden lg:block z-0 clip-featured-thumbnail-accent animate-slideInRight bg-teal-600"></div>
    </div>
  )
}

export default FeaturedThumbnailComp