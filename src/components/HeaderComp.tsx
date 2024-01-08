'use client';

import { useSession } from "next-auth/react";;
import HeaderLogoComp from "./HeaderComps/HeaderLogoComp";
import HeaderURLComp from "./HeaderComps/HeaderURLComp";
import headerURLParams from "@/types/header/headerURLParams";

const HeaderComp = () => {
  const headerURLs: headerURLParams[] = [
    {href: "https://github.com/II-ELIF-II", target: "_blank", label: "Github"},
    {href: "https://bsky.app/profile/iielifii.bsky.social", target: "_blank", label: "Bluesky"},
    {href: "https://www.linkedin.com/in/clarence-jacob-agcaoili-80b157239/", target: "_blank", label: "LinkedIn"},
    {href: "#AboutMe", target: "_self", label: "About Me"},
  ];
  
  const { data: session, status } = useSession();

  return(
    <div className="absolute w-full flex [&>*]:flex flex-col md:flex-row justify-evenly md:justify-between h-24 md:h-12 items-center px-4 z-20 bg-neutral-950/90 md:bg-neutral-950/60 md:backdrop-blur">
      <HeaderLogoComp LogoSize="h-6" TextStyle="font-semibold tracking-widest"/>
      <div className="flex-row space-x-4 h-full animate-slideInRight">
        {headerURLs.map((link: headerURLParams) => (<HeaderURLComp key={link.label} {...link}/>))}
        {session?.user.isAdmin && (
          <HeaderURLComp {...{href: "/admin", target: "_self", label: "Admin"}}/>
        )}
        {session && (
          <HeaderURLComp {...{href: "/logout", target: "_self", label: "Logout"}}/>
        )}
      </div>
    </div>
  )
};

export default HeaderComp;