'use client';

import { ReactNode } from "react";

const PostCardSummaryComp = ({children}: {children: ReactNode}) => {

  return(
    <div className="h-full bg-gradient-to-r from-neutral-950/40 to-neutral-950/60 md:backdrop-blur-sm md:group-hover:backdrop-blur-md ease-in-out duration-500">
      {children}
    </div>
  )
}

export default PostCardSummaryComp;