'use client';

import { ReactNode } from "react";
import CardHeader from "./Parts/CardHeader";

const ErrorCardComp = ({children, ErrorMain, ErrorMessage}: {children?: ReactNode, ErrorMain: string, ErrorMessage: string}) => {

  return(
    <div className='animate-openWindow px-2 max-w-xs md:max-w-2xl flex m-auto bg-neutral-950/70 border border-solid border-teal-400 drop-shadow-glowTeal'>
      <div className='flex flex-row overflow-hidden'>
        <div className='flex pr-2 my-2 animate-pulse'>
          <p className='w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-red-500/80 text-neutral-950 font-bold uppercase text-right text-sm md:text-lg'>ERROR</p>
        </div>
        <div className='flex flex-col my-2'>
          <CardHeader TextMain={ErrorMain}/>
          <p className='h-fit text-sm md:text-xl px-3 py-2 text-justify font-light tracking-wider'>{ErrorMessage}</p>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ErrorCardComp;