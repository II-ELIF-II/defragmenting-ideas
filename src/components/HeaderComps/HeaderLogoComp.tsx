"use client";

import TypewriteComp from "../MiscComps/TypewriteComp";

const HeaderLogoComp = ({LogoSize, TextStyle}: {LogoSize: string, TextStyle: string}) => {
  return(
    <a className="h-full items-center flex-row space-x-4 animate-slideInLeft" href="/">
      <div className={LogoSize + " aspect-square grid grid-cols-2 gap-1 animate-logo [&>*]:h-full [&>*]:w-full [&>*]:bg-teal-400"}>
        <div/>
        <div className="animate-logoPulse"/>
        <div/>
        <div/>
      </div>
      <h1 className={TextStyle + " text-lg flex items-center uppercase whitespace-nowrap"}><span className="text-teal-400 mr-2">ELIFS </span>
        <TypewriteComp StartDelay={1000} Text='Playground' Errors='tpimf'/>
      </h1>
    </a>
  )
}

export default HeaderLogoComp