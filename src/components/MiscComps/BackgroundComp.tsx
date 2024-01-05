const BackgroundComp = ({bgURL}: {bgURL?: string}) => {
  
  return(
    <div className="absolute w-full h-full pointer-events-none -z-10">
      {bgURL && <img src={bgURL} loading="lazy" alt="TEMP" className="absolute w-full h-full opacity-10 object-cover"/>}
      <div className="absolute bg-grid w-full h-full"/>
      <div className="absolute bg-topography w-full h-full"/>
      <div className="absolute bg-plus w-full h-full"/>
      <div className="absolute bg-gradient-to-br from-neutral-900 via-transparent to-teal-950 w-full h-full"/>
    </div>
  )
}

export default BackgroundComp