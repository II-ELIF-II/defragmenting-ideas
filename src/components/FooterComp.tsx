import AboutMeComp from "./FooterComps/AboutMeComp"
import BackgroundComp from "./MiscComps/BackgroundComp"

const FooterComp = () => {
  return (
    <footer className="relative min-h-screen flex flex-col bg-gradient-to-b from-neutral-900 to-teal-950 snap-start">
      <div className="flex flex-col w-screen h-screen items-center justify-center z-10">
        <AboutMeComp/>
      </div>
      <BackgroundComp useImage={false}/>
    </footer>
  )
}

export default FooterComp