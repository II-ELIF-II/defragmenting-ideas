type FeaturedItemProps = {
  id: number;
  title: string;
  thumbnail: string;
  summary: string;
  createdAt: Date;
  updatedAt: Date;
}

export function FeaturedItem({id, title, thumbnail, summary, createdAt, updatedAt}:FeaturedItemProps) {
  return (<div key={id} className="group w-full flex flex-col grow overflow-hidden pointer-events-none z-10">
    <div className="h-full z-0 stylizedRightPolygon pointer-events-auto animate-slideInRight overflow-hidden">
      <div className="h-full animate-cameraMoves">
        <img src={thumbnail} className="object-cover h-full translate-x-1/4 blur-sm group-hover:blur-none ease-in-out duration-500 scale-105 group-hover:scale-110" alt="temp"></img>
      </div>
    </div>
    <div className="absolute flex flex-col h-full w-full md:w-1/2 justify-center pl-8 -mt-8">
      <h2 className="text-5xl mb-16 first-letter:text-6xl">MY NAME&apos;S <span className="text-teal-400 font-semibold text-6xl">ELIF_ </span><span className="-ml-2 font-semibold text-6xl">!</span><br></br>WELCOME TO MY <span className="font-semibold text-6xl">PLAYGROUND!</span></h2>
      <h3 className="animate-slideInBottom text-4xl mb-4">
        Check out my latest work:
      </h3>
      
      <div className="backdrop-blur-sm animate-slideInBottom flex flex-col ml-5 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-transparent-neutral-950-1 -mr-12 pointer-events-auto transition-all group-hover:bg-transparent-neutral-950-2 ease-in-out duration-600">
        <h1 className="text-2xl px-3 py-2 bg-transparent-neutral-950-1">{title}</h1>
        <p className="text-xs text-neutral-400 px-3 mt-1">Created on: {createdAt.toLocaleTimeString()} {createdAt.toLocaleDateString()}</p>
        <p className="text-xl mb-1 px-3 text-justify">{summary}</p>
        <button className="ml-auto mr-0 text-md px-3 py-2 text-right bg-teal-600 transition-all hover:px-6 hover:bg-teal-400 active:bg-teal-700">Read more &gt;</button>
      </div>
    </div>
  </div>)
}