'use client'

import { useSession } from "next-auth/react";
import HeaderLogoComp from "./HeaderLogoComp"
import HeaderURLComp from "./HeaderURLComp"
import headerURLParams from "@/types/headerURLParams"

const HeaderBarComp = () => {
  const headerURLs: headerURLParams[] = [
    {href: "https://github.com/II-ELIF-II", target: "_blank", label: "Github"},
    {href: "https://github.com/II-ELIF-II", target: "_blank", label: "Twitter"},
    {href: "https://www.linkedin.com/in/clarence-jacob-agcaoili-80b157239/", target: "_blank", label: "LinkedIn"},
    {href: "#", target: "_self", label: "About Me"},
  ];
  
  const { data: session, status } = useSession();

  return(
    <div className="absolute w-full flex flex-col md:flex-row justify-evenly md:justify-between h-[12vh] md:h-[6vh] items-center px-4 z-20 bg-neutral-950/60 backdrop-blur">
      <HeaderLogoComp/>
      <div className="flex flex-row space-x-4 h-full animate-slideInRight">
        {headerURLs.map((link: headerURLParams) => (<HeaderURLComp key={link.label} {...link}/>))}
        {session?.user.isAdmin && (
          <HeaderURLComp {...{href: "/login/admin", target: "_self", label: "Admin"}}/>
        )}
        {session && (
          <HeaderURLComp {...{href: "/logout", target: "_self", label: "Logout"}}/>
        )}
      </div>
    </div>
  )
}

export default HeaderBarComp