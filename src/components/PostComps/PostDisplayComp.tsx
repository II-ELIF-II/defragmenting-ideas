"use client";

import { isDevEnvironment } from "@/app/utilities";
import TagComp from "../MiscComps/TagComp";
import PostDateComp from "./PostDateComp";
import postParams from "@/types/postParams";
import tagParams from "@/types/tagParams";

// Languages supported for highlighting
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('typescript', typescript);
import csharp from 'highlight.js/lib/languages/csharp';
hljs.registerLanguage('csharp', csharp);
import c from 'highlight.js/lib/languages/c';
hljs.registerLanguage('c', c);
import cpp from 'highlight.js/lib/languages/cpp';
hljs.registerLanguage('cpp', cpp);

import { usePathname } from 'next/navigation';
import { useEffect } from "react";
import TypewriteComp from "../MiscComps/TypewriteComp";
import AccordionComp from "../MiscComps/AccordianComp";



const PostDisplayComp = ({Post}: {Post: postParams}) => {

  const pathname = usePathname();

  useEffect(() => {
    if(pathname === `/post`)
      hljs.highlightAll();
  },[pathname]);

  return(
    <div className="bg-neutral-950 w-full max-w-7xl md:border border-solid border-teal-600 md:drop-shadow-glowTeal pb-16">
      <div className="relative flex w-full group h-144 overflow-hidden">
        <img src={Post.thumbnail} alt="TEMP" draggable="false" className="object-cover h-screen lg:h-full grow ease-in-out duration-500"/>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b to-neutral-950 from-transparent pointer-events-none"/>
        <div className="absolute top-0 w-full h-1/3 bg-gradient-to-t to-teal-950/30 from-transparent pointer-events-none"/>
      </div>
      <div id="FormattedContent" className="flex flex-col w-full items-center pt-3">
        <div className="flex justify-center w-full">
          <div className="w-full md:w-4/6 px-4 md:px-0 mx-2 my-1 z-10">
            <div className="w-fit tracking-widest bg-neutral-950/40 md:backdrop-blur-sm text-xl md:text-3xl px-3 py-2 -mt-18 font-semibold border-l-8 border-teal-500 whitespace-normal">
              <h1>
                <TypewriteComp StartDelay={500} Prefix={'\\>'} PrefixStyle={"text-teal-400 mr-2"} Text={Post.title} Delay={25}/>
              </h1>
            </div>
            <div className="mt-3"><PostDateComp cDate={Post.createdAt} uDate={Post.updatedAt}/></div>
            <div className="flex flex-row-reverse flex-wrap justify-end gap-2 mt-3">
              { Post.PostTag.map((Tag: tagParams) => (<TagComp key={Tag.id} Tag={Tag}/>)) }
            </div>
            <AccordionComp Header={"SUMMARY"} State={true} Style={"mx-1.5 my-5 outline-1 outline-offset-4 outline-dashed outline-neutral-50"}>
              {Post.summary}
            </AccordionComp>
            {<main id="mainContent" className="animate-slideInBottom text-justify overflow-hidden pb-2 tracking-wider [&>*:first-child]:indent-12" dangerouslySetInnerHTML={{__html: Post.content}}/>}
            {isDevEnvironment() && (
              <pre className="overflow-y-auto select-text">{pathname} {JSON.stringify(Post, null, 2)}</pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDisplayComp;