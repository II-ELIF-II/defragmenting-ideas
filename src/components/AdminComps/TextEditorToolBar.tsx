"use client";

import React, { useCallback } from "react";

const TextEditorToolBar = ({editor}: {editor: any}) => {

  if (!editor) {
    return null;
  }

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return(
    <div className='flex bg-neutral-800/60'>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={(editor.isActive('bold') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={(editor.isActive('italic') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={(editor.isActive('toggleUnderline') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Underline
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={(editor.isActive('strike') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Strike
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={(editor.isActive('code') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Code
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={(editor.isActive('bulletList') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Bullet List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={(editor.isActive('orderedList') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Ordered List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={(editor.isActive('codeBlock') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Code Block
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={(editor.isActive('blockquote') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Block Quote
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={"bg-teal-400/20 focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Horizontal Rule
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={(editor.isActive('highlight') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Toggle Highlight
      </button>
      <button
        type="button"
        onClick={() => addImage()}
        className={"bg-teal-400/20 focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Add Image
      </button>
      <button
        type="button"
        onClick={setLink}
        className={(editor.isActive('link') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Set Link
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive('link')}
        className={"bg-teal-400/20 focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Unset Link
      </button>
    </div>
  );
};

export default TextEditorToolBar;