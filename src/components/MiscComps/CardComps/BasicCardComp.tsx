'use client';

import { ReactNode } from "react";
import CardHeader from "./Parts/CardHeader";

const BasicCardComp = ({children, TextMain, TextSide}: {children: ReactNode, TextMain: string, TextSide: string}) => {

  return(
    <div className='animate-openWindow px-2 max-w-xs md:max-w-2xl flex m-auto bg-neutral-950 border border-solid border-teal-400 drop-shadow-glow'>
      <div className='flex flex-row overflow-hidden'>
        <div className='flex pr-2 my-2 animate-pulse'>
          <p className='w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-neutral-50/80 text-neutral-950 font-bold uppercase text-right text-sm md:text-lg'>{TextSide}</p>
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