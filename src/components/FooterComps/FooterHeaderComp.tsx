'use client';

const FooterHeaderComp = ({TextSide}: {TextSide: string}) => {
  return(
    <p className='animate-pulse w-fit md:w-full py-2 md:py-0 md:px-2 [writing-mode:vertical-lr] md:[writing-mode:horizontal-tb] -scale-100 md:scale-100 bg-neutral-50/80 text-neutral-950 font-bold uppercase text-right md:text-left text-sm md:text-lg'>
      {TextSide}
    </p>
  )
}

export default FooterHeaderComp;