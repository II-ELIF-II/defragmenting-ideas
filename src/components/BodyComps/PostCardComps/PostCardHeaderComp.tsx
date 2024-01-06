'use client';

const PostCardHeaderComp = ({TextDate, TextTitle}: {TextDate: String, TextTitle: String}) => {

  return(
    <div className="flex flex-col justify-around gap-3 mt-[12vh] lg:mt-[6vh] drop-shadow-lgCustom">
      <div className="w-fit mt-3 bg-teal-600 px-2 py-1 text-xl font-semibold tracking-wider">{TextDate}</div>
      <h2 className="w-fit text-3xl mr-8 px-3 py-2 bg-neutral-950/40 md:backdrop-blur-sm font-semibold border-l-8 border-teal-600 tracking-widest"><span className="text-teal-600 font-semibold">&#92;&gt; </span>{TextTitle}</h2>
    </div>
  )
}

export default PostCardHeaderComp;