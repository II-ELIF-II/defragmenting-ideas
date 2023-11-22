"use client"

import { GenerateRandomInt } from "@/app/utilities"

export function FooterItem(props: any) {
  return (<footer className="relative min-h-screen flex flex-col bg-gradient-to-b from-neutral-900 to-teal-950 snap-start" id="digitalResume">
    {/* {<DigitalResumeItem/>} */}
    <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
    <div className="absolute bg-topography w-full h-full pointer-events-none z-0"></div>
    <div className="absolute bg-cross w-full h-full pointer-events-none z-0"></div>
    <img src={props.bgURL} className="absolute w-full h-full pointer-events-none opacity-5 object-cover z-0"></img>
    <div className="absolute bg-gradient-to-b from-neutral-900/70 to-teal-950/20 w-full h-full pointer-events-none z-0"></div>
  </footer>)
}