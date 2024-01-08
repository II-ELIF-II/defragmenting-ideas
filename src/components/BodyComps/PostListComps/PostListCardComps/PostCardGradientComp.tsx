'use client';

const PostCardGradientComp = () => {
  return(
    <>
      <div className="absolute h-2/3 group-hover:h-1/3 bottom-0 w-full bg-gradient-to-b from-transparent to-teal-950 opacity-90 group-hover:opacity-50 pointer-events-none ease-in-out duration-500"/>
      <div className="absolute h-1/5 group-hover:h-1/6 top-0 w-full bg-gradient-to-t from-transparent to-teal-950 opacity-90 group-hover:opacity-50 pointer-events-none ease-in-out duration-500"/>
    </>
  )
}

export default PostCardGradientComp;