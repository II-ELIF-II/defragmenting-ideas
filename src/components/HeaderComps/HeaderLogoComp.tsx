const HeaderLogoComp = () => {
  return(
    <a className="items-center flex-row h-full w-fit text-lg space-x-4 animate-slideInLeft" href="/">
      <div className="h-2/5 aspect-square grid grid-cols-2 gap-1 animate-logo [&>*]:h-full [&>*]:w-full [&>*]:bg-teal-400">
        <div/>
        <div className="animate-logoPulse"/>
        <div/>
        <div/>
      </div>
      <h1 className="font-semibold items-center uppercase whitespace-nowrap"><span className="text-teal-400">ELIFS </span>PLAYGROUND</h1>
    </a>
  )
}

export default HeaderLogoComp