"use client";

import TypewriterComponent from "typewriter-effect";

const HeaderLogoComp = ({LogoSize, TextStyle}: {LogoSize: string, TextStyle: string}) => {
  return(
    <a className="h-full items-center flex-row text-lg space-x-4 animate-slideInLeft" href="/">
      <div className={LogoSize + " aspect-square grid grid-cols-2 gap-1 animate-logo [&>*]:h-full [&>*]:w-full [&>*]:bg-teal-400"}>
        <div/>
        <div className="animate-logoPulse"/>
        <div/>
        <div/>
      </div>
      <h1 className={TextStyle + " flex items-center uppercase whitespace-nowrap"}><span className="text-teal-400 mr-2">ELIFS </span>
        <TypewriterComponent 
          onInit={(typewriter) => {typewriter.pauseFor(1000).typeString('Playgtpimf').pauseFor(250).deleteChars(5).pauseFor(250).typeString('round').start()}} 
          options={{cursor: '_', delay: 50}}
        />
      </h1>
    </a>
  )
}

export default HeaderLogoComp