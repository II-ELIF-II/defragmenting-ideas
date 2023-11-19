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
  return (<div className="h-fit bg-neutral-700 overflow-hidden group hover:scale-105 ease-in-out duration-500">
    <div className="md:shrink-0 flex h-56 overflow-hidden">
      <img src={thumbnail} className="object-cover h-full grow scale-100 group-hover:scale-125 ease-in-out duration-500"></img>
    </div>
    <div className="w-full">
      <h1>{title}</h1>
      <p>Created on: {createdAt.toLocaleTimeString()} {createdAt.toLocaleDateString()}</p>
      <p>{summary}</p>
    </div>
    <button className="w-full text-md px-2 py-1 text-right bg-teal-600 transition-all hover:bg-teal-400 active:bg-teal-700">Read more &gt;</button>
  </div>)
}