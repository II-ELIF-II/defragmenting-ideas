import AboutMeComp from "./FooterComps/AboutMeComp"
import BackgroundComp from "./MiscComps/BackgroundComp"

const FooterComp = () => {
  return (
    <footer className="relative min-h-screen flex flex-col">
      <div className="flex flex-col w-screen h-screen items-center justify-center z-10">
        <AboutMeComp/>
      </div>
      <BackgroundComp />
    </footer>
  )
}

export default FooterComp