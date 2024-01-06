'use client';

const CardSidebarWhite = ({TextSide}: {TextSide: string}) => {
  return(
    <div className='flex pr-2 animate-pulse'>
      <p className='w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-neutral-50/80 text-neutral-950 font-bold uppercase text-right text-sm md:text-lg'>{TextSide}</p>
    </div>
  )
}

export default CardSidebarWhite;