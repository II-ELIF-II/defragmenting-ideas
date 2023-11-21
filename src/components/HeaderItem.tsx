export function HeaderItem() {
  return (<div className="w-full flex flex-col md:flex-row justify-evenly md:justify-between h-24 md:h-14 items-center px-4 z-10 bg-neutral-950/40">
    <div className="flex flex-row text-lg space-x-4 animate-slideInLeft">
      <div className="h-6 w-6 grid grid-cols-2 gap-1 animate-logo">
        <div className="h-full w-full bg-teal-400"></div>
        <div className="h-full w-full bg-teal-400 animate-logoPulse"></div>
        <div className="h-full w-full bg-teal-400"></div>
        <div className="h-full w-full bg-teal-400"></div>
      </div>
      <h1 className="font-semibold items-center uppercase"><span className="text-teal-400">ELIFS </span>PLAYGROUND</h1>
    </div>
    <div className="flex flex-row space-x-4 animate-slideInRight">
      <a href={process.env.GITHUB_URL} target="_blank" className="group">
        <p className="group-hover:text-teal-400 ease-in-out duration-500">Github</p>
        <div className="h-0.5 w-0 group-hover:w-full bg-teal-400 ease-in-out duration-500"></div>
      </a>
      <a href="#" target="_blank" className="group">
        <p className="group-hover:text-teal-400 ease-in-out duration-500">Twitter</p>
        <div className="h-0.5 w-0 group-hover:w-full bg-teal-400 ease-in-out duration-500"></div>
      </a>
      <a href="#section2" className="group">
        <p className="group-hover:text-teal-400 ease-in-out duration-500">LinkedIn</p>
        <div className="h-0.5 w-0 group-hover:w-full bg-teal-400 ease-in-out duration-500"></div>
      </a>
      <a href="#section3" className="group">
        <p className="group-hover:text-teal-400 ease-in-out duration-500">About Me</p>
        <div className="h-0.5 w-0 group-hover:w-full bg-teal-400 ease-in-out duration-500"></div>
      </a>
    </div>
  </div>)
}