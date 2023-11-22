"use client"

import { GenerateRandomInt, StopPropagation } from "@/app/utilities";
import { useState } from "react";

export function DigitalResumeItem() {
  const [message, setMessage] = useState("Hello!")
  
  function HoverBubbleMessage()
  {
    const msgs = ["Hello!", "Welcome!", "Feel free to look around!", "Have a good day!", "ZZzzz...."]
    let newMsg 
    let prevMsg = message
    do {
      newMsg = msgs[GenerateRandomInt(msgs.length)]
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
          <img src={process.env.PROFILE_PICTURE_URL} className="object-cover h-full w-full scale-105"></img>
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

    {/* <div className="w-full backdrop-blur-sm flex flex-col outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-950/40">
      <h1 className="text-lg md:text-xl xl:text-2xl px-3 py-2 bg-neutral-950/40"><span className="text-teal-400 font-semibold">&#47;&#47; </span>About Me</h1>
      <div className="relative flex w-full bg-neutral-950/20 overflow-hidden">
        <div className="h-full animate-cameraMoves z-10">
          <img src={process.env.PROFILE_PICTURE_URL} className="object-cover h-full w-full scale-105"></img>
        </div>
        <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-topography w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-cross w-full h-full pointer-events-none z-0"></div>
        <div className="absolute bg-gradient-to-br from-neutral-950/80 to-teal-950/40 w-full h-full pointer-events-none z-0"></div>
      </div>
      <ul className="text-md text-neutral-400 w-full whitespace-pre-wrap">
        <li className="text-md flex px-2 py-1 even:bg-neutral-950/30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-teal-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
          <p>Name (Alias):</p>
          <p>Clarence Jacob Agcaoili (ELIF_)</p>
        </li>
        <li className="text-md flex px-2 py-1 even:bg-neutral-950/30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-teal-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p>Residence: </p>
          <p>Metro Manila, Philippines</p>
        </li>
        <li className="text-md flex px-2 py-1 even:bg-neutral-950/30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-teal-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          <p>Age: </p>
          <p>23</p>
        </li>
      </ul>
    </div>

    <div className="w-full backdrop-blur-sm flex flex-col bg-neutral-950/40 outline-1 outline-offset-4 outline-dashed outline-neutral-50">
      <h1 className="text-lg md:text-xl xl:text-2xl px-3 py-2 bg-neutral-950/40"><span className="text-teal-400 font-semibold">&#47;&#47; </span>About Me</h1>
      
    </div>

    <div className="w-full backdrop-blur-sm flex flex-col pb-2 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-950/40">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40">...\cmd.exe</h1>
      <p className="text-xs text-neutral-400 px-3 my-1 whitespace-pre-wrap">SELECT administrator FROM users;
        <br></br>
        Number of results: 1
        <br></br>
        Opening profile.exe/admin...
      </p>
    </div>

    <div className="w-full backdrop-blur-sm flex flex-col pb-2 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-950/40">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40">...\cmd.exe</h1>
      <p className="text-xs text-neutral-400 px-3 my-1 whitespace-pre-wrap">SELECT administrator FROM users;
        <br></br>
        Number of results: 1
        <br></br>
        Opening profile.exe/admin...
      </p>
    </div>

    <div className="w-full backdrop-blur-sm flex flex-col pb-2 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-950/40">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40">...\cmd.exe</h1>
      <p className="text-xs text-neutral-400 px-3 my-1 whitespace-pre-wrap">SELECT administrator FROM users;
        <br></br>
        Number of results: 1
        <br></br>
        Opening profile.exe/admin...
      </p>
    </div>

    <div className="w-full backdrop-blur-sm flex flex-col pb-2 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-950/40">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40">...\cmd.exe</h1>
      <p className="text-xs text-neutral-400 px-3 my-1 whitespace-pre-wrap">SELECT administrator FROM users;
        <br></br>
        Number of results: 1
        <br></br>
        Opening profile.exe/admin...
      </p>
    </div> */}

    {/* <div className="w-60 backdrop-blur-sm flex flex-col pb-2 outline-1 outline-offset-4 outline-dashed outline-neutral-50 bg-neutral-950/40">
      <h1 className="text-md md:text-lg xl:text-xl px-3 py-2 bg-neutral-950/40">...\cmd.exe</h1>
      <p className="text-xs text-neutral-400 px-3 my-1 whitespace-pre-wrap">SELECT administrator FROM users;
        <br></br>
        Number of results: 1
        <br></br>
        Opening profile.exe/admin...
      </p>
    </div> */}

    {/* <div className="flex group w-full drop-shadow-xlCustom z-10 mt-8">
      <div onMouseEnter={() => HoverBubbleMessage()} className="flex clip-profile-poly bg-neutral-950 w-1/2 lg:w-1/4">
        <img src={process.env.PROFILE_PICTURE_URL} className="object-cover h-full w-full z-10"></img>
        <div onMouseEnter={(e) => StopPropagation(e)} className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
        <div onMouseEnter={(e) => StopPropagation(e)} className="absolute bg-gradient-to-l from-neutral-950/10 to-teal-950/70 w-full h-full pointer-events-none z-0"></div>
      </div>
      <div className="absolute top-0 left-0 pointer-events-none -translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -mt-4 ml-[35vw] lg:ml-[20vw] bg-teal-600 px-4 py-1 rounded-xl transition-all ease-in-out duration-600">
        <div className="absolute bottom-0 left-0 clip-message-tail bg-teal-600 w-6 h-5 -mb-4"></div>
        <p id="HoverBubble" className="text-xl font-semibold uppercase text-justify">{message}</p>
      </div>
    </div>

    <div className="flex flex-col w-full h-full -mt-[22vh] z-0">
      <h1 className="w-full bg-neutral-950/40 ">
        About Me:
      </h1>
      <h1 className="w-full ">
        About Me:
      </h1>
    </div> */}


    {/* <div className="flex flex-col border-l-[10px] border-teal-400 backdrop-blur-sm bg-neutral-900/10 outline-1 outline-offset-4 outline-dashed outline-neutral-50">
      <h2 className="pl-2 text-3xl first-letter:text-4xl lg:text-5xl lg:first-letter:text-5xl text-center lg:text-left bg-neutral-950/20">ABOUT ME</h2>
      <div className="flex flex-row ">
        <div className="flex h-52 w-[250px] clip-profile-poly bg-gradient-to-l from-neutral-900 to-teal-950">
          <img src={process.env.PROFILE_PICTURE_URL} className="object-cover h-full w-full"></img>
          <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
        </div>
        <div className="ml-4 mt-2 uppercase">
          <p className="text-md flex items-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-teal-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
            Clarence Jacob Agcaoili ( ELIF_ )
          </p>
          <p className="text-md flex items-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-teal-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Metro Manila, Philippines
          </p>
          <p className="text-md flex items-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1 text-teal-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Description
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-row backdrop-blur-sm bg-neutral-900/10 outline-1 outline-offset-4 outline-dashed outline-neutral-50 mt-12">
      <div className="m-2">
        Built using NextJS, ReactJS, Tailwind, Typescript, and Prisma.
        Hosted on Netlify, and PlanetScale.
      </div>
    </div> */}
  </div>)
}