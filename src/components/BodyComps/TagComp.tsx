const TagComp = () => {
  return(
    <a className="flex place-items-center hover:bg-teal-400 bg-teal-600 rounded overflow-hidden ease-in-out duration-500 text-sm">
      <span className="bg-neutral-900/30 px-1.5 py-1.5 mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -m-0.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
      </span> 
      <p className="pl-1 pr-2">Sample Tag</p>
    </a>
  )
}

export default TagComp