'use client';

import { ReactNode } from "react";

const FooterBodyComp = ({children, OptionalStyle}: {children: ReactNode, OptionalStyle?: string}) => {
  return(
    <div className={OptionalStyle + " bg-neutral-950/40 p-4 w-full"}>
      {children}
    </div>
  )
}

export default FooterBodyComp;