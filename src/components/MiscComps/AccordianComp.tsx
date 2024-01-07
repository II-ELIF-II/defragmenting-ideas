"use client";

import { ReactNode, useState } from "react";

const AccordionComp = ({Header, children, State, Style}: {Header: string, children: ReactNode, State?: boolean, Style? :string}) => {

  const [showAccordion, setShowAccordion] = useState(State);

  return(
    <label className={Style + " animate-slideInBottom flex flex-col  bg-neutral-800/40 transition-all duration-500"}>
      <input onClick={() => setShowAccordion(!showAccordion)} type="checkbox" defaultChecked={State} className="peer/showSummary absolute scale-0"/>
      <div className="block max-h-9 w-full overflow-hidden transition-all duration-500 peer-checked/showSummary:max-h-96">
        <div className="flex h-9 cursor-pointer justify-between items-center text-md md:text-lg xl:text-xl px-2 bg-neutral-800/60">
          <h3 className="tracking-widest"><span className="text-teal-400 font-semibold tracking-normal">&#92; &gt; </span>{Header}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={(!showAccordion && ("-scale-y-100")) + " w-6 h-6 ease-in-out duration-500"}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className={(!showAccordion && ("opacity-0")) + " text-md text-justify overflow-hidden transition-all duration-500 px-2 py-2 tracking-wider"}>
          {children}
        </div>
      </div>
    </label>
  );
};

export default AccordionComp;