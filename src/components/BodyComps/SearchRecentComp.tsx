const SearchRecentComp = () => {
  return(
    <li className=" text-sm text-neutral-300 w-full odd:bg-neutral-900/50 hover:bg-neutral-200/20 ease-in-out duration-500">
      <a href="#" className="flex items-center pl-2 h-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>Sample Recent Search</p>
      </a>
    </li>
  )
}

export default SearchRecentComp