import { GenerateUpdateTxt } from "@/app/utilities";


export function ArticleCardItem({id, title, thumbnail, summary, createdAt, updatedAt}:ArticleProps) {
  return (<div className="relative flex flex-col grow group overflow-hidden h-screen lg:h-full snap-center lg:snap-align-none ease-in-out duration-500 hover:z-10 hover:shadow-xl hover:shadow-neutral-950/60">
    
    <div className="h-full group-hover:animate-cameraMoves ease-in-out duration-500">
      <img src={thumbnail} draggable="false" className="object-cover h-full grow scale-105 group-hover:scale-125 ease-in-out duration-500"></img>
    </div>

    <div className="absolute h-2/3 group-hover:h-1/3 bottom-0 w-full bg-gradient-to-b from-transparent to-teal-950 opacity-90 group-hover:opacity-50 ease-in-out duration-500"></div>
    <div className="absolute h-1/5 group-hover:h-1/6 top-0 w-full bg-gradient-to-t from-transparent to-teal-950 opacity-90 group-hover:opacity-50 ease-in-out duration-500"></div>
    {/* <div className="absolute h-full w-full clip-right-slash-symmetrical bg-neutral-950/40 backdrop-blur-sm"></div> */}
    {/* <div className="absolute top-0 left-0 bg-teal-400 clip-right-triangle w-14 h-14 mt-14"></div> */}
    <div className="absolute bottom-0 flex flex-col w-full bg-gradient-to-r from-neutral-950/60 to-neutral-950/80 backdrop-blur-sm group-hover:backdrop-blur-md">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-1 bg-neutral-950/40"><span className="text-teal-400 font-semibold">&#92;&gt; </span>{title}</h1>
      <p className="text-xs text-neutral-400 px-3 mt-1 whitespace-pre-wrap">{GenerateUpdateTxt(createdAt, updatedAt)}</p>
      <p className="flex grow text-sm md:text-md xl:text-lg mb-1 px-3 text-justify">{summary}</p>
      <button className="ml-auto mr-0 text-md px-2 py-1 text-right bg-teal-600 transition-all hover:pl-6 hover:bg-teal-400 active:bg-teal-700 flex items-center">Read more 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="w-5 h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
    </div>
  </div>)
}