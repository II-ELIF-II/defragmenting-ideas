"use client"

function closeArticleModal()
{
  document.getElementById("articleViewer")?.classList.add("invisible")
}

export function ArticleModalItem({id, title, thumbnail, content, createdAt, updatedAt}:ArticleProps) {
  return (<>
    <div className="overflow-y-auto h-full lg:h-fit max-h-full lg:w-5/6 xl:w-3/5 z-10 shadow-lg shadow-teal-400/40 border-b-2 border-t-2 border-teal-400">
      <div className="relative flex flex-col h-2/3 lg:h-1/2">
        <img id="articleViewerThumbnail" src={thumbnail} alt="article thumbnail" className="object-cover h-full grow"></img>
        <div className="absolute h-1/3 bottom-0 w-full bg-gradient-to-b from-transparent to-teal-950 opacity-90"></div>
        <div className="absolute bottom-0 w-full px-6 py-4 backdrop-blur-sm bg-neutral-950/40 z-10">
          <h1 id="articleViewerTitle" className="text-xl md:text-2xl xl:text-3xl">{title}</h1>
          <p id="articleViewerDate" className="text-xs text-neutral-400 mt-1">Created on: {createdAt.toLocaleTimeString()} {createdAt.toLocaleDateString()}</p>
        </div>
        <button className="absolute top-0 right-0 ml-auto mr-0 text-md px-3 py-2 text-right bg-teal-600 transition-all hover:pl-6 hover:bg-teal-400 active:bg-teal-700 flex items-center" onClick={closeArticleModal}>Close 
          X
        </button>
      </div>

      <div className="relative flex flex-col lg:h-fit grow border-t-2 border-teal-400 bg-gradient-to-b from-neutral-800 to-teal-950">
        <div id="articleViewerContent" className="flex flex-col grow text-md md:text-lg xl:text-xl my-4 px-6 text-justify">
          {content}
        </div>
        <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
      </div>
    </div>

    <div className="absolute bg-grid w-full h-full pointer-events-none z-0 lg:-mt-24"></div>
    <div className="absolute bg-gradient-to-b from-neutral-900 via-transparent to-teal-950 w-full h-full pointer-events-none z-0 -mt-24 opacity-5"></div>
  </>)
}