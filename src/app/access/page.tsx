export default function Home() {
  return (
    <>
      <header className="bg-neutral-800 h-12 border-b border-teal-500">
        Header
      </header>
      <div className="flex flex-col md:flex-row flex-grow min-h-screen">
        <div className="featured flex flex-col flex-grow md:w-6/12 md:h-screen mh-96 bg-neutral-900">
          <p className="text-lg px-2 py-1">EDITOR:</p>
          <form className="px-2 py-1 flex flex-col">
            <label htmlFor="atitle">Title:</label> <input id="atitle" type="text" className="text-neutral-950"></input>
            <label htmlFor="athumbnail">Thumbnail URL:</label> <input id="athumbnail" type="text" className="text-neutral-950"></input>
            <label htmlFor="acontent">Content:</label> <input id="acontent" type="text" className="text-neutral-950"></input>
          </form>
        </div>
        <div className="main flex flex-grow md:w-6/12 ">
          <p className="text-lg px-2 py-1">PREVIEW:</p>
        </div>
      </div>
      <footer className="bg-neutral-800 h-40 border-t-2 border-teal-500">
        Footer
      </footer>
    </>
  )
}
