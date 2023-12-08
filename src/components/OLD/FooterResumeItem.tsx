"use client"

import { StopPropagation } from "@/app/utilities";
import { useState } from "react";

export default function DigitalResumeItem() {
  const [message, setMessage] = useState("Hello!")
  
  function HoverBubbleMessage()
  {
    const msgs = ["Hello!", "Welcome!", "Feel free to look around!", "Have a good day!", "ZZzzz...."]
    let newMsg 
    let prevMsg = message
    do {
      // newMsg = msgs[GenerateRandomInt(msgs.length)]
      newMsg = msgs[1]
    } while (newMsg === prevMsg)
    setMessage(newMsg)
  }

  return (<div className="relative flex flex-col lg:flex-row z-10">


    <div className="w-full lg:max-w-xs h-full flex flex-col bg-neutral-800/50">
      <h1 className="text-lg md:text-xl xl:text-2xl px-3 py-2 bg-neutral-950/40 border-b-2 border-teal-400"><span className="text-teal-400 font-semibold">&#92;&gt; </span>Profile</h1>
      <div onMouseEnter={() => HoverBubbleMessage()} className="relative flex w-full bg-neutral-950/20 group overflow-hidden">
        <p id="HoverBubble" className="absolute top-0 w-full text-2xl font-semibold uppercase text-center bg-teal-600/80 items-center transition-all ease-in-out duration-600 pointer-events-none -translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 overflow-hidden z-30">{message}</p>
        <div className="absolute h-1/5 group-hover:h-1/6 top-0 w-full bg-gradient-to-t from-transparent to-teal-950 opacity-50 group-hover:opacity-20 ease-in-out duration-500 z-20"></div>
        <div className="absolute h-1/5 group-hover:h-1/6 bottom-0 w-full bg-gradient-to-b from-transparent to-teal-950 opacity-50 group-hover:opacity-20 ease-in-out duration-500 z-20"></div>
        <div className="h-full animate-cameraMoves z-10">
          <img src={process.env.PROFILE_PICTURE_URL} alt="TEMP" className="object-cover h-full w-full scale-105"></img>
        </div>
        <div className="absolute w-2/3 h-2/3 pointer-events-none z-0">
          <div className="absolute clip-left-triangle w-full h-full bg-sky-300"></div>
          <div className="absolute clip-left-slash-large w-full h-full bg-pink-300"></div>
          <div className="absolute clip-left-slash-small w-full h-full bg-neutral-50"></div>
        </div>
        <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-topography w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-cross w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-gradient-to-br from-neutral-950/80 to-teal-950/40 w-full h-full pointer-events-none z-0"></div>
      </div>
      <div className="relative py-2 text-sm text-neutral-400 border-t-2 border-teal-400 bg-neutral-950/20">
        <p className="font-bold text-neutral-50 text-center text-lg uppercase">Clarence Jacob Agcaoili</p>
        <p className="font-bold text-teal-400 text-center text-lg uppercase">ELIF_</p>
        <p className="text-neutral-400 text-center text-sm uppercase">( She/her )</p>
      </div>
      <table className="text-sm text-neutral-400">
        <tbody>
          <tr>
            <td className="pl-2 py-2 flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-teal-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </td>
            <td className="py-2 text-neutral-300">Residence:</td>
            <td className="py-2">Metro Manila, Philippines</td>
          </tr>
        </tbody>
      </table>
      <div className="text-md w-full whitespace-pre-wrap">
        <h2 className="flex text-md md:text-lg xl:text-xl px-2 py-1 bg-neutral-950/40 uppercase">
          <span className="text-teal-400 font-semibold">&#47;&#47;</span> Education
        </h2>
        <div className="flex flex-col">
          <div className="relative text-neutral-300 pl-6 pr-3 py-2">
            <div className="absolute top-4 left-2 w-2 h-2 bg-teal-400 rounded-full"></div>
            <p className="text-teal-400">University [ 2019-2023 ]</p>
            <p className="text-sm">Bachelor of Science in Computer Science</p>
            <p className="text-sm text-neutral-400">Pamantasan ng Lungsod ng Maynila<br></br>(University of the City of Manila)</p>
          </div>
          <div className="relative text-neutral-300 pl-6 pr-3 py-2 bg-neutral-950/20">
            <div className="absolute top-4 left-2 w-2 h-2 bg-teal-400 rounded-full"></div>
            <p className="text-teal-400">Senior Highschool [ 2019-2023 ]</p>
            <p className="text-sm">STEM (Science Technology Engineering, and Mathematics)</p>
            <p className="text-sm text-neutral-400">Saint Anthony Academy Of Quezon City</p>
          </div>
        </div>
        <h2 className="flex text-md md:text-lg xl:text-xl px-2 py-1 bg-neutral-950/40 uppercase">
          <span className="text-teal-400 font-semibold">&#47;&#47;</span> Programming Languages
        </h2>
        <div className="text-sm pl-6 py-2">
          <p>
            C# <span className="text-teal-400">(Proficient)</span>, 
            PHP <span className="text-teal-400">(Proficient)</span>, 
            C/C++ <span className="text-teal-400">(Proficient)</span>, 
            MySQL <span className="text-teal-400">(Proficient)</span>, 
            Node.JS <span className="text-teal-400">(Proficient)</span>, 
            Next.JS <span className="text-teal-400">(Proficient)</span>, 
            React.JS <span className="text-teal-400">(Proficient)</span>, 
            Prisma <span className="text-teal-400">(Proficient)</span>, 
            JS <span className="text-teal-400">(Proficient)</span>, 
            TS <span className="text-teal-400">(Proficient)</span>, 
            CSS <span className="text-teal-400">(Proficient)</span>, 
            HTML <span className="text-teal-400">(Proficient)</span>, 
            Adobe Illustrator <span className="text-teal-400">(Proficient)</span>, 
            Adobe Photoshop <span className="text-teal-400">(Proficient)</span>,
            Figma <span className="text-teal-400">(Proficient)</span>
          </p>
        </div>
        <h2 className="flex text-md md:text-lg xl:text-xl px-2 py-1 bg-neutral-950/40 uppercase">
          <span className="text-teal-400 font-semibold">&#47;&#47;</span> Languages
        </h2>
        <div className="text-sm pl-6 py-2">
          <p>Tagalog <span className="text-teal-400">(Native)</span>, English <span className="text-green-400">(Proficient)</span></p>
        </div>
      </div>
    </div>
    <div className="w-full backdrop-blur-sm flex flex-col">
      <h1 className="text-lg md:text-xl xl:text-2xl px-3 py-2 bg-neutral-950/40 border-b-2 border-teal-400"><span className="text-teal-400 font-semibold">&#92;&gt; </span>About Me</h1>
    </div>
  </div>)
}