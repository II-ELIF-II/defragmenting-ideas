const BackgroundComp = ({bgURL}: {bgURL?: string}) => {
  
  return(
    <div className="absolute  w-full h-full pointer-events-none -z-10 [&>*]:absolute [&>*]:w-full [&>*]:h-full">
      {bgURL && <img src={bgURL} loading="lazy" alt="TEMP" className="opacity-10 object-cover"/>}
      <div className="bg-grid"/>
      <div className="bg-topography"/>
      <div className="bg-plus"/>
      <div className="bg-gradient-to-br from-neutral-900 via-transparent to-teal-950"/>
    </div>
  )
}

export default BackgroundComp