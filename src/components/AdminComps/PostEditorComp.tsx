"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";

// Tiptap Rich Text Editor Extensions
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import Dropcursor from '@tiptap/extension-dropcursor';
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

import managePostPayload from "@/types/payload/managePostPayload";
import postParams from "@/types/postParams";
import tagParams from "@/types/tagParams";

import PostEditorStaticToolBarComp from "@/components/AdminComps/PostEditorStaticToolBarComp";
import PostEditorFloatingToolbarComp from "./PostEditorFloatingToolbarComp";
import PostDisplayComp from "../PostComps/PostDisplayComp";
import AdminTagComp from "./AdminTagComp";

import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { managePost } from "@/lib/admin/postManagePost";

const PostEditorComp = ({setPost, tags}: {setPost: postParams, tags: tagParams[]}) => {
  
  const router = useRouter();

  const { data: session, status } = useSession();

  const [newPost, setNewPost] = useState({
    id: setPost.id,
    title: setPost.title,
    thumbnail: setPost.thumbnail,
    summary: setPost.summary,
    content: setPost.content,
    createdAt: setPost.createdAt,
    updatedAt: setPost.updatedAt,
    PostTag: setPost.PostTag,
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
      Dropcursor, History,
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

  const handlePostManagement = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      userId: session?.user.id,
      id: newPost.id,
      title: newPost.title,
      thumbnail: newPost.thumbnail,
      summary: newPost.summary,
      content: newPost.content,
      PostTag: newPost.PostTag,
    } as managePostPayload;

    if (confirm('Are you sure you want to submit?'))
    { 
      managePost(payload);
      if(!newPost.id)
        router.push('/admin');
      else
        router.refresh();
    }
  }

  return(
    <>
      <div className="flex flex-col items-center pt-[12vh] md:pt-[6vh]">
        <div className="flex justify-center w-full max-w-7xl mx-5 my-5 bg-neutral-950 md:border border-solid border-teal-600 md:drop-shadow-glow">
          <form onSubmit={(e) => handlePostManagement(e)} className="w-full md:w-4/6 overflow-hidden">
            {newPost.id && <div className="px-2 py-1 bg-yellow-500/80">
              Currently editing post Id: {newPost.id}
            </div>}
            {!newPost.id && <div className="px-2 py-1 bg-teal-500">
              Currently creating a new post
            </div>}
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60 border-b border-solid border-teal-400">Title</p>
              <input required type="text" maxLength={81} placeholder="Input Title Here" value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})} className="px-4 md:px-0 py-1 bg-transparent text-sm focus:outline-none tracking-wider"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60 border-b border-solid border-teal-400">Thumbnail URL</p>
              <input required type="url" maxLength={255} placeholder="Input Thumbnail URL Here" value={newPost.thumbnail} onChange={(e) => setNewPost({...newPost, thumbnail: e.target.value})} className="px-4 md:px-0 py-1 bg-transparent text-sm focus:outline-none tracking-wider"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60 border-b border-solid border-teal-400">Summary</p>
              <ReactTextareaAutosize required minRows={3} maxLength={255} placeholder="Input Summary Here" value={newPost.summary} onChange={(e) => setNewPost({...newPost, summary: e.target.value})} className="px-4 md:px-0 py-1 bg-transparent text-sm focus:outline-none tracking-wider"/>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60 border-b border-solid border-teal-400">Content</p>
              <PostEditorStaticToolBarComp editor={editor}/>
              {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                <PostEditorFloatingToolbarComp editor={editor}/>
              </BubbleMenu>}
              <EditorContent required editor={editor} className="px-4 md:px-0 py-1 whitespace-pre-wrap tracking-wider"/>
              <p className="px-2 py-1 bg-neutral-800/60 text-sm text-neutral-400">Size&#58; {editor.getHTML().length}&#47;{sizeContentLimit} &#124; Characters&#58; {editor.storage.characterCount.characters()}&#47;{editorLimit} &#124; Words&#58; {editor.storage.characterCount.words()}</p>
            </div>
            <div className="flex flex-col">
              <p className="px-2 py-1 bg-neutral-700/60 border-b border-solid border-teal-400">Tags &#91; 3 Max &#93;</p>
              <div className="grid grid-cols-4 gap-3 p-2">
              {tags.map((tag: tagParams) => (<AdminTagComp key={tag.id} tag={tag} newPost={newPost} setNewPost={setNewPost}/>))}
            </div>
            </div>
            <div className="flex flex-col">
              <input type="submit" value={newPost.id ? 'UPDATE' : 'SUBMIT'} className={(newPost.id ? 'bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-700' : 'bg-teal-600 hover:bg-teal-400 active:bg-teal-700') + " cursor-pointer text-2xl py-4 px-2 text-md transition-all ease-in-out duration-600"}/>
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