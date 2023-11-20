export function HeaderItem() {
  return (<div className="w-full flex flex-col md:flex-row justify-evenly md:justify-between md:h-14 h-24 items-center px-4 z-10 bg-transparent-neutral-950-1">
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
      <a href={process.env.GITHUB_URL} target="_blank">Github</a>
      <a href="#" target="_blank">Twitter</a>
      <a href="#section2">LinkedIn</a>
      <a href="#section3">About Me</a>
    </div>
  </div>)
}