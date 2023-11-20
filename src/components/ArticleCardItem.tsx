type ArticleCardProps = {
  id: number;
  title: string;
  thumbnail: string;
  summary: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export function ArticleCardItem({id, title, thumbnail, summary, createdAt, updatedAt}:ArticleCardProps) {
  return (<div className="flex flex-col xl:flex-row bg-transparent-neutral-900-1 outline-1 outline-offset-4 outline-dashed outline-neutral-50 backdrop-blur-sm h-fit overflow-hidden group transition-all ease-in-out duration-600">
    <div className="md:shrink-0 flex grow h-64 w-auto md:h-40 xl:h-64 xl:w-64 overflow-hidden">
      <img src={thumbnail} className="object-cover h-full grow scale-100 group-hover:scale-125 ease-in-out duration-500"></img>
    </div>
    <div className="flex flex-col w-full">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-1 bg-transparent-neutral-950-1">{title}</h1>
      <p className="text-xs text-neutral-400 px-3 mt-1">Created on: {createdAt.toLocaleTimeString()} {createdAt.toLocaleDateString()}</p>
      <p className="flex grow text-sm md:text-md xl:text-lg mb-1 px-3 text-justify">{summary}</p>
    <button className="ml-auto text-md px-2 py-1 text-right bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">Read more &gt;</button>
    </div>
  </div>)
}