'use client';

const PostCardHeaderComp = ({TextDate, TextTitle}: {TextDate?: string, TextTitle: string}) => {

  const cDate = new Date(TextDate ? TextDate : '');
  const elementDate = TextDate ? (cDate.getUTCFullYear()) + '-' + (cDate.getUTCMonth() + 1) + '-' + (cDate.getUTCDate()) : 'ER_MISSING_DATE';
  
  return(
    <div className="flex flex-col justify-around gap-3 mt-[12vh] lg:mt-[6vh] drop-shadow-lgCustom">
      <p className="w-fit mt-3 bg-teal-600 px-2 py-1 text-xl font-semibold tracking-wider">{elementDate}</p>
      <h2 className="w-fit text-2xl md:text-3xl mr-8 px-3 py-2 bg-neutral-950/40 md:backdrop-blur-sm font-semibold border-l-8 border-teal-600 tracking-widest">
        <span className="text-teal-600">&#92;&gt; </span>
        {TextTitle}
      </h2>
    </div>
  )
}

export default PostCardHeaderComp;