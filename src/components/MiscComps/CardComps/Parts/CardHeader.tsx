'use client';

import TypewriteComp from "../../TypewriteComp";

const CardHeader = ({TextMain}: {TextMain: string}) => {
  return(
    <div className='flex h-fit bg-teal-500 px-3 py-2 uppercase text-neutral-800 text-xl md:text-4xl font-bold tracking-wider'>
      <h1>
        <TypewriteComp StartDelay={1000} Text={TextMain}/>
      </h1>
    </div>
  )
}

export default CardHeader;