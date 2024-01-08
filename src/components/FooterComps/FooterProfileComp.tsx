'use client';

import { useState } from "react";
import FooterHeaderComp from "./FooterHeaderComp";
import TypewriteComp from "../MiscComps/TypewriteComp";

const FooterProfileComp = () => {
  
  const names = ['ELIF', 'Clarence Jacob Agcaoili']
  const [showName, setShowName] = useState(false);

  return(
    <div className=" flex flex-col md:flex-row gap-4">
      {/* <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="m-6 flex flex-col items-center rotate-45 h-24 w-24 overflow-hidden border border-teal-400 drop-shadow-glowTealXS hover:drop-shadow-glowTealSM duration-500 ease-in-out">
          <img src="/profile.png" alt="Profile Picture" width={96} height={96} draggable={false} className="-rotate-45 scale-150 pt-2 pl-2"/>
        </div>
      </div> md:-ml-10*/}
      <div className="flex flex-col ">
        <FooterHeaderComp Text={'About Me:'}/>
        <p className="indent-12 text-justify pt-2 opacity-80 tracking-wider md:px-8">
          {`Hello there! My names`}
          <span onClick={() => setShowName(!showName)} className=" text-teal-400 drop-shadow-glowTealXS cursor-pointer mx-2 font-semibold">
            {showName ? <TypewriteComp Text={names[1]} Delay={50}/> : <TypewriteComp Text={names[0]} Delay={50}/>}
          </span> 
          {`and welcome to my website, this is where I plan to post and share things that I'm currently working on, my main interest centers around`} 
          <span className=" text-teal-400">{` game development `}</span> 
          {`as well as`}
          <span className=" text-teal-400">{` web development `}</span>
          {`, so if those sounds good to you, then you might like what I have to share.`}
        </p>
      </div>
    </div>
  );
}

export default FooterProfileComp;