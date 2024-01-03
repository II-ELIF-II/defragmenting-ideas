"use client";


import { useEditor, EditorContent } from "@tiptap/react";

// Tiptap Rich Text Editor Extensions
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import Dropcursor from '@tiptap/extension-dropcursor';
import Gapcursor from '@tiptap/extension-gapcursor';
import History from '@tiptap/extension-history';

import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Highlight from '@tiptap/extension-highlight';

import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';

import Blockquote from '@tiptap/extension-blockquote';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

import HorizontalRule from '@tiptap/extension-horizontal-rule';

import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';

import CharacterCount from '@tiptap/extension-character-count';

import ReactTextareaAutosize from "react-textarea-autosize";

import postParams from "@/types/postParams";
import tagParams from "@/types/tagParams";
import TextEditorToolBarComp from "@/components/AdminComps/TextEditorToolBarComp";
import PostDisplayComp from "../PostComps/PostDisplayComp";
import AdminTagComp from "./AdminTagComp";

import { useState } from "react";
// import hljs from 'highlight.js';

const PostEditorComp = ({setPost, tags}: {setPost: postParams, tags: tagParams[]}) => {
  
  const [newPost, setNewPost] = useState({
    id: setPost.id,
    title: setPost.title,
    thumbnail: setPost.thumbnail,
    summary: setPost.summary,
    content: setPost.content,
    createdAt: setPost.createdAt,
    updatedAt: setPost.updatedAt,
    tags: setPost.tags,
  } as postParams);

  let editorContent = `<p>
  That’s a boring paragraph followed by a fenced code block:
</p>
<pre><code>for (var i=1; i <= 20; i++)
{
if (i % 15 == 0)
console.log("FizzBuzz");
else if (i % 3 == 0)
console.log("Fizz");
else if (i % 5 == 0)
console.log("Buzz");
else
console.log(i);
}</code></pre>
<p>
  Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
</p>`;
  
  if(newPost.id != "")
  {
    editorContent = setPost.content;
  }

  const editorLimit = 7000;
  const sizeContentLimit = 8000;

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    },
    extensions: [
      Document, Paragraph, Text,
      Dropcursor, Gapcursor, History,
      Bold, Italic, Underline, Strike, Highlight,
      ListItem, BulletList, OrderedList, 
      Blockquote, Link, Image, HorizontalRule,
      CharacterCount.configure({
        limit: editorLimit,
      }),
      Code, CodeBlock
    ],
    content: editorContent,
    autofocus: false,
    editable: true,
    injectCSS: true,
    parseOptions: {
      preserveWhitespace: 'full',
    },
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

  return(
    <>
      <div className="flex flex-col items-center pt-[12vh] md:pt-[6vh]">
        <div className="flex justify-center w-full max-w-7xl mx-5 my-5 bg-neutral-950 md:border border-solid border-teal-600 md:drop-shadow-glow">
          <form className="w-full md:w-4/6 overflow-hidden">
            {newPost.id && <div className="px-2 py-1 bg-red-500">
              Currently editing post Id: {newPost.id}
            </div>}
            {!newPost.id && <div className="px-2 py-1 bg-teal-500">
              Currently creating a new post
            </div>}
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Title</p>
              <input required type="text" maxLength={81} placeholder="Input Title Here" value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})} className="px-4 md:px-0 py-1 bg-transparent text-sm focus:outline-none"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Thumbnail URL</p>
              <input required type="url" maxLength={255} placeholder="Input Thumbnail URL Here" value={newPost.thumbnail} onChange={(e) => setNewPost({...newPost, thumbnail: e.target.value})} className="px-4 md:px-0 py-1 bg-transparent text-sm focus:outline-none"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Summary</p>
              <ReactTextareaAutosize required minRows={3} maxLength={255} placeholder="Input Summary Here" value={newPost.summary} onChange={(e) => setNewPost({...newPost, summary: e.target.value})} className="px-4 md:px-0 py-1 bg-transparent text-sm focus:outline-none"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Content</p>
              <TextEditorToolBarComp editor={editor}/>
              <EditorContent required editor={editor} className="px-4 md:px-0 py-1 whitespace-pre-wrap"/>
              <p className="px-2 py-1 bg-neutral-800/60 text-sm text-neutral-400">Size&#58; {editor.getHTML().length}&#47;{sizeContentLimit} &#124; Characters&#58; {editor.storage.characterCount.characters()}&#47;{editorLimit} &#124; Words&#58; {editor.storage.characterCount.words()}</p>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60">Tags &#91; 3 Max &#93;</p>
              <div className="grid grid-cols-5 gap-3 p-2">
              {tags.map((tag: tagParams) => (<AdminTagComp key={tag.id} tag={tag} newPost={newPost} setNewPost={setNewPost}/>))}
            </div>
            </div>
            <div className="flex flex-col">
              <input type="submit" value={newPost.id ? 'UPDATE' : 'SUBMIT'} className="cursor-pointer text-xl mt-2 py-1 px-2 text-md bg-teal-600 transition-all ease-in-out duration-600 hover:bg-teal-400 active:bg-teal-700"/>
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