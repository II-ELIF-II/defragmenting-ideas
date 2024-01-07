'use client';

import { ReactNode } from "react";
import CardHeader from "./Parts/CardHeader";
import CardSidebarWhite from "./Parts/CardSidebarWhite";

const BasicCardComp = ({children, TextMain, TextSide}: {children: ReactNode, TextMain: string, TextSide: string}) => {

  return(
    <div className='animate-openWindow px-2 max-w-xs md:max-w-2xl flex m-auto bg-neutral-950/70 border border-solid border-teal-400 drop-shadow-glowTeal'>
      <div className='flex flex-row overflow-hidden'>
        <div className='flex my-2'>
          <CardSidebarWhite TextSide={TextSide}/>
        </div>
        <div className='flex flex-col my-2'>
          <CardHeader TextMain={TextMain}/>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default BasicCardComp;