'use client';

const CardHeader = ({TextMain}: {TextMain: String}) => {

  return(
    <div className='flex h-fit bg-teal-500 px-3 py-2 uppercase text-neutral-800 text-xl md:text-4xl font-bold'>
      <h1>{TextMain}</h1>
      <p className='-mt-0.5 md:-mt-1 animate-pulse'>_</p>
    </div>
  )
}

export default CardHeader;