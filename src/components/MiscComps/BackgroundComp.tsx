const BackgroundComp = ({bgURL, useImage = false}: any) => {
  
  if (!useImage)
    return(
      <div className="absolute w-full h-full pointer-events-none -z-10">
        <div className="absolute bg-grid w-full h-full"></div>
        <div className="absolute bg-topography w-full h-full"></div>
        <div className="absolute bg-plus w-full h-full"></div>
        <div className="absolute bg-gradient-to-br from-neutral-900 via-transparent to-teal-950 w-full h-full"></div>
      </div>
    )

  return(
    <div className="absolute w-full h-full pointer-events-none -z-10">
      <img src={bgURL} alt="TEMP" className="absolute w-full h-full opacity-10 object-cover"></img>
      <div className="absolute bg-grid w-full h-full"></div>
      <div className="absolute bg-topography w-full h-full"></div>
      <div className="absolute bg-plus w-full h-full"></div>
      <div className="absolute bg-gradient-to-br from-neutral-900 via-transparent to-teal-950 w-full h-full"></div>
    </div>
  )
}

export default BackgroundComp