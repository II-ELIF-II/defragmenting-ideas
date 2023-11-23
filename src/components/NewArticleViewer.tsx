function OpenArticle()
{
  console.log('test')
  let a = document.getElementById("newArticleViewer")
  a?.classList.remove("w-0")
  a?.classList.add("w-screen")
}

export default async function NewArticleViewer(article: any) {
  return (<div id="newArticleViewer" className="fixed top-0 flex h-screen w-0 bg-neutral-950/40 backdrop-blur-md ease-in-out duration-500 z-50 overflow-hidden">
    {OpenArticle()}
    {article.id}
  </div>)
}