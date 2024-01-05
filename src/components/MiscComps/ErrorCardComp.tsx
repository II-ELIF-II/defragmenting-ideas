'use client';

const ErrorCardComp = ({error, errorMessage}: {error: string, errorMessage: string}) => {

  return(
    <div className='animate-openWindow px-2 max-w-xs md:max-w-2xl flex m-auto bg-neutral-950 border border-solid border-teal-400 drop-shadow-glow'>
      <div className='flex flex-row overflow-hidden'>
        <div className='flex pr-2 my-2 animate-pulse'>
          <p className='w-full py-2 [writing-mode:vertical-lr] -scale-100 bg-red-500/80 text-neutral-950 font-bold uppercase md:text-right text-sm md:text-lg'>ERROR</p>
        </div>
        <div className='flex flex-col my-2'>
          <div className='flex h-fit bg-teal-400/80 px-3 py-2'>
            <h1 className='uppercase text-neutral-800 text-xl md:text-4xl font-bold'>{error}</h1>
            <p className='-mt-1 uppercase text-neutral-800 text-xl md:text-4xl font-bold animate-pulse'>_</p>
          </div>
          <p className='h-fit text-sm md:text-xl px-3 py-2 text-justify'>{errorMessage}</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorCardComp;