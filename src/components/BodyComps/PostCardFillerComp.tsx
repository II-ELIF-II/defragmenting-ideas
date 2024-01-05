"use client";

const PostCardFillerComp = ({Index}: {Index: number}) => {
  const Delay = ['md:animation-delay-m400', 'md:animation-delay-m300', 'md:animation-delay-m200', 'md:animation-delay-m100'];
  return(
    <li className={Delay[Index] + ` animate-slideInBottom md:animate-slideInTop hidden relative md:flex flex-col grow w-full min-h-screen lg:min-h-full bg-neutral-900 origin-top-right group overflow-hidden snap-center lg:snap-align-none ease-in-out duration-500 hover:z-10 md:hover:drop-shadow-glowSM`}>
      <div className="absolute w-full h-full flex items-center text-neutral-700/60 bg-diagonal-stripes">
        <img src="/glitchBackground.gif" alt="TEMP" loading="lazy" draggable="false" className="object-cover h-screen md:h-full grayscale-[0%] opacity-[2.5%] ease-in-out duration-500"/>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="absolute h-screen md:h-full w-full px-20">
          <circle cx="11" cy="8" r="1"/>
          <circle cx="11" cy="16" r="1"/>
          <circle cx="11" cy="24" r="1"/>
          <path d="M24,3H8A2,2,0,0,0,6,5V27a2,2,0,0,0,2,2H18V27H8V21H26V5A2,2,0,0,0,24,3Zm0,16H8V13H24Zm0-8H8V5H24Z"/>
          <path d="M29 24.415L27.586 23 25 25.587 22.414 23 21 24.415 23.586 27 21 29.586 22.414 31 25 28.414 27.586 31 29 29.586 26.414 27 29 24.415z"/>
        </svg>
      </div>
      <div className="absolute h-2/3 group-hover:h-1/3 bottom-0 w-full bg-gradient-to-b from-transparent to-teal-950 opacity-40 ease-in-out duration-500 pointer-events-none"/>
      <div className="absolute h-1/5 group-hover:h-1/6 top-0 w-full bg-gradient-to-t from-transparent to-teal-950 opacity-30 ease-in-out duration-500 pointer-events-none"/>
      <div className="relative flex flex-col top-0 h-full w-full">
        <div className="flex flex-col justify-around gap-3 mt-[12vh] lg:mt-[6vh]">
          <div className="w-fit mt-3 bg-teal-500 px-2 py-1 text-xl font-semibold">
            ER_MISSING_DATE
          </div>
          <div className="w-fit text-3xl mr-8 px-3 py-2 bg-neutral-950/40 md:backdrop-blur-sm font-semibold border-l-8 border-teal-500">
            <span className="text-teal-400 font-semibold">&#92;&gt; </span>ER_MISSING_TITLE
            </div>
        </div>
        <div className="mt-auto h-fit bottom-0 flex flex-col w-full border-t-4 border-neutral-950/20">
          <div className="flex flex-wrap gap-2 text-sm px-2 py-6 font-semibold bg-diagonal-stripes ease-in-out duration-500"/>
          <div className="bg-gradient-to-r from-neutral-950/40 to-neutral-950/60 md:backdrop-blur-sm md:group-hover:backdrop-blur-md ease-in-out duration-500">
            <p className="w-full h-fit text-md xl:text-lg px-3 pt-2 pb-4 text-justify indent-12 font-light"><span className="bg-teal-500 py-0.5 px-2 font-bold text-neutral-800 ">ERROR :</span> The parameters for this article could not be found, this article may have been corrupted, lost, or it simply does not exist. <br/>&zwnj;<br/>&zwnj;<br/>&zwnj;</p>
            <p className="absolute bottom-0 right-0 text-sm uppercase mr-2 mb-1 opacity-20 text-neutral-400 font-extralight">ID&#58;&#92;&gt; ERR_R_404_ID_PARAM_MISSING</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostCardFillerComp;