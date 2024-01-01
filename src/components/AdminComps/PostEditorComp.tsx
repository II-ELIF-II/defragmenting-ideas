"use client";

import TextEditorToolBarComp from "@/components/AdminComps/TextEditorToolBarComp";

import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import CodeBlock from '@tiptap/extension-code-block';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';

import { useState } from "react";

import ReactTextareaAutosize from "react-textarea-autosize";

import postParams from "@/types/postParams";
import PostDisplayComp from "../PostComps/PostDisplayComp";

// import hljs from 'highlight.js';

const PostEditorComp = ({setPost}: {setPost: postParams}) => {
  
  const [newPost, setNewPost] = useState({
    id: setPost.id || "",
    title: setPost.title ||  "",
    thumbnail: setPost.thumbnail ||  "",
    summary: setPost.summary ||  "",
    content: setPost.content ||  "",
    createdAt: setPost.createdAt ||  "",
    updatedAt: setPost.updatedAt ||  "",
  } as postParams);

  let editorContent = `<p>
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
</p>`;
  
  if(newPost.id != "")
  {
    editorContent = setPost.content;
  }

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
    content: editorContent,
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

  return(
    <>
      <div className="flex flex-col items-center pt-[12vh] md:pt-[6vh]">
        <div className="flex justify-center w-full max-w-7xl mx-5 my-5 bg-neutral-950 md:border border-solid border-teal-600 md:drop-shadow-glow">
          <form className="w-full md:w-4/6">
            {newPost.id && <div className="px-2 py-1 bg-red-500">
              Currently editing post Id: {newPost.id}
            </div>}
            {!newPost.id && <div className="px-2 py-1 bg-teal-500">
              Currently creating a new post
            </div>}
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Title</p>
              <input required type="text" placeholder="Input Title Here" value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})} className="px-4 md:px-0 py-1 bg-transparent text-sm focus:outline-none"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Thumbnail URL</p>
              <input required type="url" placeholder="Input Thumbnail URL Here" value={newPost.thumbnail} onChange={(e) => setNewPost({...newPost, thumbnail: e.target.value})} className="px-4 md:px-0 py-1 bg-transparent text-sm focus:outline-none"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Summary</p>
              <ReactTextareaAutosize required minRows={3} placeholder="Input Summary Here" value={newPost.summary} onChange={(e) => setNewPost({...newPost, summary: e.target.value})} className="px-4 md:px-0 py-1 bg-transparent text-sm focus:outline-none"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Content</p>
              <TextEditorToolBarComp editor={editor}/>
              <EditorContent required editor={editor} className="px-4 md:px-0 py-1 whitespace-pre-wrap"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Tags</p>
            </div>
            <div className="flex flex-col">
              <input type="submit" value="SUBMIT" className="cursor-pointer text-xl mt-2 py-1 px-2 text-md bg-teal-600 transition-all ease-in-out duration-600 hover:bg-teal-400 active:bg-teal-700"/>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center w-screen min-h-screen my-5">
        <PostDisplayComp Post={newPost}/>
      </div>
    </>
  );
};

export default PostEditorComp;