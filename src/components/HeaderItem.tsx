import { FeaturedItem } from "./FeaturedItem";
import { HeaderLogoItem } from "./HeaderLogoItem";
import { HeaderURLItem } from "./HeaderURLItem";

export function HeaderItem(props: any) {
  return (<header className="relative h-screen flex flex-col bg-gradient-to-br from-neutral-900 to-teal-950 overflow-hidden snap-start" id="section1">
    <div className="w-full flex flex-col md:flex-row justify-evenly md:justify-between h-24 md:h-14 items-center px-4 z-10 bg-neutral-950/40">
      <HeaderLogoItem/>
      <div className="flex flex-row space-x-4 animate-slideInRight">
        <HeaderURLItem href={process.env.GITHUB_URL} target={"_blank"} label={"Github"}/>
        <HeaderURLItem href={process.env.GITHUB_URL} target={"_blank"} label={"Twitter"}/>
        <HeaderURLItem href={process.env.LINKEDIN_URL} target={"_blank"} label={"LinkedIn"}/>
        <HeaderURLItem href={"#digitalResume"} target={"_self"} label={"About Me"}/>
      </div>
    </div>
    {<FeaturedItem {...props.featured}/>}
    <div className="absolute bg-grid w-full h-full pointer-events-none z-0"></div>
    <div className="absolute bg-topography w-full h-full pointer-events-none z-0"></div>
    <div className="absolute bg-cross w-full h-full pointer-events-none z-0"></div>
    <img src={props.bgURL} className="absolute w-full h-full pointer-events-none opacity-5 object-cover z-0"></img>
    <div className="absolute bg-gradient-to-br from-neutral-900 via-transparent to-teal-950 w-full h-full pointer-events-none z-0"></div>
  </header>)
}