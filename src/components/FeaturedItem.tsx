import { GenerateUpdateTxt } from "@/app/utilities";

export function FeaturedItem({id, title, thumbnail, summary, createdAt, updatedAt}:ArticleProps) {
  return (<div key={id} className="group w-full flex flex-col grow overflow-hidden pointer-events-none z-10">
    <div className="h-full z-0 clip-right-slash pointer-events-auto animate-slideInRight overflow-hidden">
      <div className="h-full animate-cameraMoves opacity-30 lg:opacity-100 ease-in-out duration-500">
        <img src={thumbnail} draggable="false" className="object-cover h-full translate-x-1/4 blur-sm group-hover:blur-none ease-in-out duration-500 scale-105 group-hover:scale-125" alt="temp"></img>
      </div>
    </div>
    <div className="absolute flex flex-col h-full w-full lg:w-1/2 justify-center -mt-8 scale-100">
      <h2 className="lg:pl-4 text-4xl first-letter:text-5xl lg:text-5xl lg:first-letter:text-6xl text-center lg:text-left mb-16 scale-90 sm:scale-100">MY NAME&apos;S <span className="text-teal-400 font-semibold text-5xl lg:text-6xl">ELIF_ </span><span className="-ml-2 font-semibold text-5xl lg:text-6xl">!</span><br></br>WELCOME TO MY <span className="font-semibold text-5xl lg:text-6xl">PLAYGROUND!</span></h2>
      <h3 className="lg:pl-4 animate-slideInBottom text-2xl lg:text-4xl text-center lg:text-left mb-4">
        <span className="text-teal-400 font-semibold">&#47;&#47;</span> Check out my latest work:
      </h3>
      
      <div className="backdrop-blur-sm animate-slideInBottom flex flex-col ml-5 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-900/40 mr-5 lg:-mr-12 pointer-events-auto transition-all group-hover:bg-neutral-900/60 ease-in-out duration-600 group-hover:-translate-y-2 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-neutral-950/50">
        <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40"><span className="text-teal-400 font-semibold">&#92;&gt; </span>{title}</h1>
        <p className="text-xs text-neutral-400 px-3 mt-1 whitespace-pre-wrap">{GenerateUpdateTxt(createdAt, updatedAt)}</p>
        <p className="text-sm md:text-md xl:text-lg mb-1 px-3 text-justify">{summary}</p>
        <button className="ml-auto mr-0 text-md px-3 py-2 text-right bg-teal-600 transition-all hover:pl-6 hover:bg-teal-400 active:bg-teal-700 flex items-center">Read more 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="w-5 h-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>)
}