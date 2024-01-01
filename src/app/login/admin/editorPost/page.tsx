'use client';

import TextEditorToolBar from "@/components/AdminComps/TextEditorToolBar";
import HeaderBarComp from "@/components/HeaderComps/HeaderBarComp";
import BackgroundComp from "@/components/MiscComps/BackgroundComp";
import { useEditor, EditorContent } from "@tiptap/react";
import { useSession } from "next-auth/react";

import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import CodeBlock from '@tiptap/extension-code-block';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';

import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

import PostSummaryComp from "@/components/PostComps/PostSummaryComp";
import PostDateComp from "@/components/PostComps/PostDateComp";
import TagComp from "@/components/BodyComps/TagComp";

import hljs from 'highlight.js';


const EditorPost = (Params: any) => {
  const {params, searchParams} = Params;
 
  const { data: session, status } = useSession();
  
  const [newPost, setNewPost] = useState({
    id: searchParams.id || "",
    title: searchParams.title ||  "",
    thumbnail: searchParams.thumbnail ||  "",
    summary: searchParams.summary ||  "",
    content: searchParams.content ||  "",
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Image,
      Highlight,
      CodeBlock.configure({
        exitOnArrowDown: true,
      }),
    ],
    content: `<p>
      That’s a boring paragraph followed by a fenced code block:
    </p>
    <pre><code>using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}</code></pre>
    <p>
      Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
    </p>`,
    autofocus: true,
    editable: true,
    injectCSS: false,
    onCreate({ editor }) {
      setNewPost({...newPost, content: editor.getHTML()});
    },
    onUpdate({ editor }) {
      setNewPost({...newPost, content: editor.getHTML()});
    },
  });

  if (!editor) {
    return null;
  }

  const handleSubmitPost = () => {

  };
  
  // document.querySelectorAll('code').forEach(el => {
  //   // then highlight each
  //   console.log(el)
  //   hljs.highlightElement(el);
  // });
  
  // useEffect(() => {
  //   document.querySelectorAll('code').forEach(el => {
  //   // then highlight each
  //   console.log(el)
  //   hljs.highlightElement(el);
  // });
  // }, [])

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <HeaderBarComp/>
      <div className="flex flex-col items-center pt-[12vh] md:pt-[6vh]">
        <form className='w-full max-w-7xl mx-5 my-5 bg-neutral-950 border border-solid border-teal-600 drop-shadow-glow'>
          <div className="flex flex-col">
            Title:
            <input type="text" placeholder="Title" value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})}/>
          </div>
          <div className="flex flex-col">
            Thumbnail:
            <input type="text" placeholder="URL" value={newPost.thumbnail} onChange={(e) => setNewPost({...newPost, thumbnail: e.target.value})}/>
          </div>
          <div className="flex flex-col">
            Summary:
            <ReactTextareaAutosize placeholder="Summary" value={newPost.summary} onChange={(e) => setNewPost({...newPost, summary: e.target.value})}/>
          </div>
          <div className="flex flex-col">
            Content:
            <TextEditorToolBar editor={editor}/>
            <EditorContent editor={editor}/>
          </div>
          <div className="flex flex-col">
            Tags:
          </div>
          <div className="flex flex-col">
            <input type="button" value="SUBMIT" className="cursor-pointer text-xl mt-2 py-1 px-2 text-md bg-teal-600 transition-all ease-in-out duration-600 hover:bg-teal-400 active:bg-teal-700"/>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center w-screen min-h-screen my-5">
        <div className="bg-neutral-950 w-full max-w-7xl border border-solid border-teal-600 drop-shadow-glow pb-16">
          <div className="relative flex w-full group h-144 overflow-hidden">
            <img src={newPost.thumbnail} alt="TEMP" draggable="false" className="object-cover h-screen lg:h-full grow ease-in-out duration-500"/>
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b to-neutral-950 from-transparent pointer-events-none"/>
            <div className="absolute top-0 w-full h-1/3 bg-gradient-to-t to-teal-950/30 from-transparent pointer-events-none"/>
          </div>
          <div className="flex flex-col w-full items-center pt-3 ">
            <div className="flex flex-row w-full">
              <div className="flex flex-col gap-1 w-1/6 mx-2 my-1 opacity-10 text-xs -mt-4 uppercase">
              </div>
              <div className="w-4/6 mx-2 my-1 z-10">
                <div className="w-fit bg-neutral-950/40 backdrop-blur-sm text-3xl px-3 py-2 -mt-18 font-semibold border-l-8 border-teal-500">
                  <span className="text-teal-400 font-semibold">&#92;&gt; </span>{newPost.title}
                </div>
                <PostDateComp cDate={new Date()} uDate={new Date()}/>
                <div className="flex flex-wrap gap-2 mt-3">
                  <TagComp/>
                  <TagComp/>
                  <TagComp/>
                </div>
                <PostSummaryComp summary={newPost.summary}/>
                {/* Note: Find a better way to do this */}
                <main className="animate-slideInBottom text-justify" dangerouslySetInnerHTML={{__html: newPost.content}}/>
                <p>RAW HTML:</p>
                <pre className="overflow-y-auto">{newPost.content}</pre>
              </div>
              <div className="w-1/6 mx-2 my-1">
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundComp useImage={false}/>
    </div>
  );
};

export default EditorPost;