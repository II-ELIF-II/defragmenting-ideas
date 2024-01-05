'use client';

const PostCardHeaderComp = ({TextDate, TextTitle}: {TextDate: String, TextTitle: String}) => {

  return(
    <div className="flex flex-col justify-around gap-3 mt-[12vh] lg:mt-[6vh]">
      <div className="w-fit mt-3 bg-teal-500 px-2 py-1 text-xl font-semibold">{TextDate}</div>
      <div className="w-fit text-3xl mr-8 px-3 py-2 bg-neutral-950/40 md:backdrop-blur-sm font-semibold border-l-8 border-teal-500"><span className="text-teal-400 font-semibold">&#92;&gt; </span>{TextTitle}</div>
    </div>
  )
}

export default PostCardHeaderComp;