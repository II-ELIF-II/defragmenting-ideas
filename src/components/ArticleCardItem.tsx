"use client"
import { GenerateUpdateTxt } from "@/app/utilities";
import { setArticleState } from "./ArticleViewerItem";

export default function ArticleCardItem(article: ArticleProps) {
  return (<div onClick={() => setArticleState(true, article)} className="relative flex flex-col w-full cursor-pointer group overflow-hidden h-screen lg:h-full snap-center lg:snap-align-none ease-in-out duration-500 hover:z-10 hover:shadow-xl hover:shadow-neutral-950/60">
    
    <div className="h-screen group-hover:animate-cameraMoves ease-in-out duration-500">
      <img src={article.thumbnail} draggable="false" className="object-cover min-h-screen grow scale-105 group-hover:scale-125 ease-in-out duration-500"></img>
    </div>

    <div className="absolute h-2/3 group-hover:h-1/3 bottom-0 w-full bg-gradient-to-b from-transparent to-teal-950 opacity-90 group-hover:opacity-50 ease-in-out duration-500"></div>
    <div className="absolute h-1/5 group-hover:h-1/6 top-0 w-full bg-gradient-to-t from-transparent to-teal-950 opacity-90 group-hover:opacity-50 ease-in-out duration-500"></div>
    <div className="absolute h-1/4 bottom-0 flex flex-col w-full bg-gradient-to-r from-neutral-950/60 to-neutral-950/80 backdrop-blur-sm group-hover:backdrop-blur-md">
      <h1 className="text-2xl px-3 py-2 bg-neutral-950/40"><span className="text-teal-400 font-semibold">&#92;&gt; </span>{article.title}</h1>
      <p className="text-sm text-neutral-400 px-3 py-px mt-1 whitespace-pre-wrap">{GenerateUpdateTxt(article.createdAt, article.updatedAt)}</p>
      <p className="flex grow text-md xl:text-lg mb-2 px-3 text-justify">{article.summary}</p>
      <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
    </div>
  </div>)
}