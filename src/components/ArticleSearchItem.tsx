"use client"

export default function ArticleSearchItem() {
  return (<div className="absolute top-0 right-0 mt-18 mx-4 z-20 lg:w-[30vw]">
    <div className="flex flex-col backdrop-blur-sm bg-neutral-900/40 outline-1 outline-offset-4 outline-dashed outline-neutral-50 transition-all ease-in-out duration-600 shadow-md shadow-neutral-900/50">
      <div className="flex items-center pl-2">
        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <input type="text" id="searchText" placeholder="Search" className="bg-neutral-900 px-2 py-1 bg-transparent outline-0"></input>
      </div>
      <div className="bg-neutral-900/10">
        <p className="text-sm py-0.5 pl-2 bg-neutral-900/30">Filter By</p>
        <div className="flex flex-wrap items-center pl-2 pr-2 pb-1 mt-1">
          <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
          <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
          <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
          <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
          <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
          <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
        </div>
        <p className="text-sm py-0.5 pl-2 bg-neutral-900/30">Recent Searched</p>
        <ul className="flex flex-wrap items-center">
          <li className="flex items-center text-sm text-neutral-300 pl-2 py-px w-full h-8 odd:bg-neutral-900/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Sample Recent Search</p>
          </li>
          <li className="flex items-center text-sm text-neutral-300 pl-2 py-px w-full h-8 odd:bg-neutral-900/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Sample Recent Search</p>
          </li>
          <li className="flex items-center text-sm text-neutral-300 pl-2 py-px w-full h-8 odd:bg-neutral-900/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Sample Recent Search</p>
          </li>
          <li className="flex items-center text-sm text-neutral-300 pl-2 py-px w-full h-8 odd:bg-neutral-900/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Sample Recent Search</p>
          </li>
          <li className="flex items-center text-sm text-neutral-300 pl-2 py-px w-full h-8 odd:bg-neutral-900/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Sample Recent Search</p>
          </li>
        </ul>

      </div>
    </div>
  </div>)
}