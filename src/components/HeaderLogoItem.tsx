export default function HeaderLogoItem() {
  return (<div className="flex flex-row text-lg space-x-4 animate-slideInLeft">
    <div className="h-6 w-6 grid grid-cols-2 gap-1 animate-logo">
      <div className="h-full w-full bg-teal-400"></div>
      <div className="h-full w-full bg-teal-400 animate-logoPulse"></div>
      <div className="h-full w-full bg-teal-400"></div>
      <div className="h-full w-full bg-teal-400"></div>
    </div>
    <h1 className="font-semibold items-center uppercase"><span className="text-teal-400">ELIFS </span>PLAYGROUND</h1>
  </div>)
}