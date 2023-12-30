import HeaderBarComp from "./HeaderComps/HeaderBarComp"
import HeaderFeaturedPost from "./HeaderComps/HeaderFeaturedPost"
import BackgroundComp from "./MiscComps/BackgroundComp"

const HeaderComp = () => {
  return(
    <header id="primary" className="relative h-screen flex flex-col overflow-hidden snap-start">
      <HeaderBarComp/>
      <HeaderFeaturedPost/>
      <BackgroundComp useImage={false}/>
    </header>
  )
}

export default HeaderComp