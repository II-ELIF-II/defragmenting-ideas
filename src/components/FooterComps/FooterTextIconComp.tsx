'use client';

import { ReactNode } from "react";

const FooterTextIconComp = ({children, Label, Height}: {children: ReactNode, Label: string, Height: string}) => {
  return(
    <div className={Height + " px-2 flex items-center ease-in-out duration-500"}>
      <div className="h-full [&>*]:h-full [&>*]:p-1 [&>*]:text-neutral-50/90">
        {children}
      </div>
      <div className="grow h-full pl-2 flex items-center text-neutral-50/90 tracking-wider">
        <p>{Label}</p>
      </div>
    </div>
  )
}

export default FooterTextIconComp;