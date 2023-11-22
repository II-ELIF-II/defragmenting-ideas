import { StopPropagation } from "@/app/utilities";

export function ArticleContainerItem(articleDetails :ArticleProps) {
  return (<div onClick={(e) => StopPropagation(e)} className="relative lg:mx-auto lg:my-24 w-[100vw] lg:w-[75vw] bg-neutral-200 h-fit z-10 outline-1 outline-offset-4 outline-dashed outline-neutral-50 shadow-2xl shadow-neutral-950/90">
    <div className="relative h-[60vh] w-full group overflow-hidden">
      <div className="h-full w-full overflow-hidden">
        <img id="articleViewerThumbnail" src={articleDetails.thumbnail} draggable="false" className="object-cover h-full w-full ease-in-out duration-500" alt="Article Image Here" loading="lazy"></img>
      </div>
      <div className="absolute h-2/3 group-hover:h-1/3 bottom-0 w-full bg-gradient-to-b from-transparent to-teal-950 opacity-90 group-hover:opacity-50 ease-in-out duration-500"></div>
      <div className="absolute h-1/5 group-hover:h-1/6 top-0 w-full bg-gradient-to-t from-transparent to-teal-950 opacity-90 group-hover:opacity-50 ease-in-out duration-500"></div>
      <div className="absolute bottom-0 w-full bg-neutral-950/40 px-3 py-1">
        <h1 className="text-2xl md:text-2xl lg:text-3xl"><span className="text-teal-400 font-semibold">&#92;&gt; </span><span id="articleViewerTitle">{articleDetails.title}</span></h1>
        <p id="articleViewerDate" className="text-md text-neutral-400 mt-1 whitespace-pre-wrap"></p>
      </div>
      <button className="absolute top-0 right-0 text-md bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700 flex items-center justify-center shadow-xl shadow-teal-950/50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="p-2 w-14 h-14 ease-in-out duration-200 hover:rotate-180">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="relative flex grow min-h-[40vh] lg:min-h-full bg-gradient-to-b from-neutral-900 to-teal-950 border-t-2 border-teal-400">
      <p id="articleViewerContent" className="text-md lg:text-lg py-4 px-3 text-justify z-10">{articleDetails.content}</p>
      <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
    </div>
    <div className="relative flex grow h-24 bg-neutral-800 border-t-2 border-teal-400">
      test
    </div>
  </div>)
}
