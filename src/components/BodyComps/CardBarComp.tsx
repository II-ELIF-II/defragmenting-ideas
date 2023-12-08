import SearchRecentComp from "./SearchRecentComp"

const CardBarComp = () => {
  return(
    <div className="sticky top-0 w-full flex flex-col md:flex-row justify-evenly md:justify-between h-[12vh] lg:h-[6vh] items-center px-4 z-20 bg-neutral-950/60 backdrop-blur pointer-events-auto">
      <h1 className="text-sm lg:text-md animate-slideInLeft uppercase"><span className="text-teal-400 font-semibold">&#47;&#47; </span>Feel free to <span className="text-teal-400 font-semibold">browse</span> my other works!</h1>
      <form className="group relative flex flex-row w-full lg:w-[40%] lg:max-w-lg">
        <input type="text" placeholder="Looking for something?" autoComplete="off" className="w-3/4 py-1 px-2 bg-neutral-950/50 outline-none focus:bg-teal-700/50  ease-in-out duration-500"/>
        <input name="submit" type="submit" value="Search" className="w-1/4 py-1 px-2 text-md bg-teal-600 transition-all ease-in-out duration-600 hover:bg-teal-400 active:bg-teal-700"/>
        <div className="absolute top-full w-3/4 bg-neutral-950/80 overflow-hidden origin-top scale-y-0 group-hover:scale-y-100 group-focus-within:scale-y-100 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all ease-in-out duration-800">
          <p className="text-sm py-0.5 pl-2 bg-neutral-950/60">Filter By</p>
          <div className="flex flex-wrap items-center pl-2 pr-2 pb-1 mt-1">
            <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
            <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
            <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
            <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
            <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
            <div className="flex items-center bg-teal-600 m-0.5 px-1 rounded h-6 text-sm"><p>Sample Tag</p></div>
          </div>
          <p className="text-sm py-0.5 pl-2 bg-neutral-950/60">Recently Searched</p>
          <ul className="flex flex-wrap grow items-center">
            <SearchRecentComp/>
            <SearchRecentComp/>
            <SearchRecentComp/>
            <SearchRecentComp/>
            <SearchRecentComp/>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default CardBarComp