'use client';

import { ReactNode } from "react";

const PostCardSummaryComp = ({children, TextId}: {children: ReactNode, TextId: String}) => {

  return(
    <div className="bg-gradient-to-r from-neutral-950/40 to-neutral-950/60 md:backdrop-blur-sm md:group-hover:backdrop-blur-md ease-in-out duration-500">
      {children}
      <p className="absolute bottom-0 right-0 text-sm uppercase mr-2 mb-1 opacity-20 text-neutral-400 font-extralight">ID&#58;&#92;&gt; {TextId}</p>
    </div>
  )
}

export default PostCardSummaryComp;