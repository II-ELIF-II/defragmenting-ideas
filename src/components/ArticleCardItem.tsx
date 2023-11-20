import { GenerateUpdateTxt } from "@/app/utilities";


export function ArticleCardItem({id, title, thumbnail, summary, createdAt, updatedAt}:ArticleProps) {
  return (<div className="flex flex-col xl:flex-row bg-transparent-neutral-900-1 hover:bg-transparent-neutral-950-1 outline-1 outline-offset-4 outline-dashed outline-neutral-50 backdrop-blur-sm h-fit overflow-hidden group transition-all ease-in-out duration-600 hover:-translate-y-2 hover:shadow-xl hover:shadow-neutral-950/80">
    <div className="relative md:shrink-0 flex grow h-64 w-auto md:h-40 xl:h-64 xl:w-64 overflow-hidden">
      <img src={thumbnail} draggable="false" className="object-cover h-full grow scale-100 group-hover:scale-125 ease-in-out duration-500"></img>
      <div className="absolute h-1/3 group-hover:h-1/4 bottom-0 w-full bg-gradient-to-b from-transparent to-teal-950 opacity-90 group-hover:opacity-50 ease-in-out duration-500"></div>
      <div className="absolute top-0 left-0 bg-teal-400 clip-right-triangle w-10 h-10"></div>
    </div>
    <div className="flex flex-col w-full">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-1 bg-transparent-neutral-950-1"><span className="text-teal-400 font-semibold">&#92;&gt; </span>{title}</h1>
      <p className="text-xs text-neutral-400 px-3 mt-1 whitespace-pre-wrap">{GenerateUpdateTxt(createdAt, updatedAt)}</p>
      <p className="flex grow text-sm md:text-md xl:text-lg mb-1 px-3 text-justify">{summary}</p>
      <button className="ml-auto mr-0 text-md px-2 py-1 text-right bg-teal-600 transition-all hover:pl-6 hover:bg-teal-400 active:bg-teal-700 flex items-center">Read more 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="w-5 h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>)
}