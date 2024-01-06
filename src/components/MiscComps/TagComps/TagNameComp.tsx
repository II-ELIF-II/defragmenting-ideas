'use client';

import { ReactNode } from "react";

const TagNameComp = ({children, OptionalStyle}: {children: ReactNode, OptionalStyle?: string}) => {
  
  return(
    <p className={OptionalStyle + " whitespace-nowrap text-left h-full w-full pl-2 pr-2 py-1 bg-teal-700 group-hover/tag:bg-teal-600 tracking-wider font-normal"}>{children}</p>
  )
}

export default TagNameComp;