'use client';

const PostCardBackground = ({TextURL, Index}: {TextURL: string, Index: number}) => {

  const delay = ['md:animation-delay-1000', 'md:animation-delay-3000', 'md:animation-delay-5000', 'md:animation-delay-7000'];

  if(TextURL !== '') {
    return (
      <div className="group-hover:animate-cameraMoves absolute h-full">
        <img src={TextURL} alt="TEMP" loading="lazy" draggable="false" className="object-cover h-screen md:h-full grow scale-110 group-hover:scale-125 grayscale-[70%] group-hover:grayscale-0 ease-in-out duration-500"/>
      </div> 
    )
  }
  else {
    return(
      <div className="absolute h-full flex items-center text-neutral-600/30 bg-neutral-900 bg-diagonal-stripes [&>*]:ease-in-out [&>*]:duration-500">
        <img src="/glitchBackground.gif" alt="TEMP" loading="lazy" draggable="false" className=" animation relative object-cover h-screen md:h-full opacity-[2.5%] backdrop-blur"/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className={delay[Index] + " animate-cameraMoves absolute h-screen md:h-full w-full px-20 drop-shadow-glowXS"}>
          <circle cx="11" cy="8" r="1"/>
          <circle cx="11" cy="16" r="1"/>
          <circle cx="11" cy="24" r="1"/>
          <path d="M24,3H8A2,2,0,0,0,6,5V27a2,2,0,0,0,2,2H18V27H8V21H26V5A2,2,0,0,0,24,3Zm0,16H8V13H24Zm0-8H8V5H24Z"/>
          <path d="M29 24.415L27.586 23 25 25.587 22.414 23 21 24.415 23.586 27 21 29.586 22.414 31 25 28.414 27.586 31 29 29.586 26.414 27 29 24.415z"/>
        </svg>
        <hr className="absolute w-full h-full bg-grid"/>
        <hr className="absolute w-full h-full bg-plus"/>
      </div>
    )
  }
}

export default PostCardBackground;