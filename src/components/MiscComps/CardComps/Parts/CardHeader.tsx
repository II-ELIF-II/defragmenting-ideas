'use client';

import TypewriterComponent from "typewriter-effect";

const CardHeader = ({TextMain}: {TextMain: string}) => {
  return(
    <div className='flex h-fit bg-teal-500 px-3 py-2 uppercase text-neutral-800 text-xl md:text-4xl font-bold'>
      <h1><TypewriterComponent onInit={(typewriter) => {typewriter.pauseFor(1000).typeString(TextMain).start()}} options={{cursor: '_', delay: 50}}/></h1>
    </div>
  )
}

export default CardHeader;