"use client";

import { isDevEnvironment } from "@/app/utilities";
import TagComp from "../MiscComps/TagComp";
import PostDateComp from "./PostDateComp";
import PostSummaryComp from "./PostSummaryComp";
import postParams from "@/types/postParams";

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

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import tagParams from "@/types/tagParams";

const PostDisplayComp = ({Post}: {Post: postParams}) => {

  const pathname = usePathname();

  useEffect(() => {
    if(pathname === `/post`)
      hljs.highlightAll();
  },[pathname]);

  return(
    <div className="bg-neutral-950 w-full max-w-7xl md:border border-solid border-teal-600 md:drop-shadow-glow pb-16">
      <div className="relative flex w-full group h-144 overflow-hidden">
        <img src={Post.thumbnail} alt="TEMP" loading="lazy" draggable="false" className="object-cover h-screen lg:h-full grow ease-in-out duration-500"/>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b to-neutral-950 from-transparent pointer-events-none"/>
        <div className="absolute top-0 w-full h-1/3 bg-gradient-to-t to-teal-950/30 from-transparent pointer-events-none"/>
      </div>
      <div className="flex flex-col w-full items-center pt-3">
        <div className="flex justify-center w-full">
          <div className="w-full md:w-4/6 px-4 md:px-0 mx-2 my-1 z-10">
            <div className="w-fit bg-neutral-950/40 md:backdrop-blur-sm text-xl md:text-3xl px-3 py-2 -mt-18 font-semibold border-l-8 border-teal-500">
              <span className="text-teal-400 font-semibold">&#92;&gt; </span>{Post.title}
            </div>
            <PostDateComp cDate={Post.createdAt} uDate={Post.updatedAt}/>
            <div className="flex flex-wrap gap-2 mt-3">
              {Post.PostTag.map((tag: tagParams) => (<TagComp key={tag.id} tag={tag}/>))}
            </div>
            <PostSummaryComp summary={Post.summary}/>
            {/* Note: Find a better way to do this */}
            {<main id="mainContent" className="animate-slideInBottom text-justify overflow-hidden pb-2" dangerouslySetInnerHTML={{__html: Post.content}}/>}
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