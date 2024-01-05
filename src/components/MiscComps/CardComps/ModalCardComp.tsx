'use client';

import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import CardHeader from "./Parts/CardHeader";

const ModalCardComp = ({children, TextMain, TextSide, IsOpen, setIsOpen}: {children: ReactNode, TextMain: string, TextSide: string, IsOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>}) => {

  return(
    <div onClick={() => setIsOpen(false)} className={(IsOpen ? 'animate-fadeIn pointer-events-auto' : 'opacity-0 pointer-events-none') + " absolute flex bg-gradient-to-t from-neutral-950/70 via-neutral-950/30 to-neutral-950/70 top-0 w-screen h-screen z-50 ease-in-out duration-1000 transition-all"}>
      <div onClick={(e) => e.stopPropagation()} className={(IsOpen ? 'animate-openWindow' : 'animate-closeWindow') + ' px-2 max-w-sm md:max-w-2xl flex m-auto bg-neutral-950 border border-solid border-teal-400 drop-shadow-glow'}>
        <div className='flex flex-row overflow-hidden py-2'>
          <div className='flex pr-2 animate-pulse'>
            <p className='w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-neutral-50/80 text-neutral-950 font-bold uppercase text-right text-sm md:text-lg'>{TextSide}</p>
          </div>
          <div className='flex [&>*]:flex flex-col gap-2'>
            <div className='grow h-fit justify-between bg-teal-500 pr-3'>
              <CardHeader TextMain={TextMain}/>
              <button type="button" onClick={() => setIsOpen(false)} className="ml-4 my-auto w-6 h-6 md:w-10 md:h-10  bg-neutral-900/50 hover:bg-neutral-900/70 ease-in-out duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>  
              </button>
            </div>
            <div className="flex-col gap-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCardComp;