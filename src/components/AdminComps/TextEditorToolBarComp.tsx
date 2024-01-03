"use client";

const TextEditorToolBarComp = ({editor}: {editor: any}) => {

  if (!editor) {
    return null;
  }

  const setLink = () => {
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
  };

  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return(
    <div className='flex flex-wrap gap-2 p-2 bg-neutral-800/60'>
      <div className="h-6 rounded overflow-hidden bg-neutral-700 ">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={(editor.isActive('bold') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M8 11H12.5C13.8807 11 15 9.88071 15 8.5C15 7.11929 13.8807 6 12.5 6H8V11ZM18 15.5C18 17.9853 15.9853 20 13.5 20H6V4H12.5C14.9853 4 17 6.01472 17 8.5C17 9.70431 16.5269 10.7981 15.7564 11.6058C17.0979 12.3847 18 13.837 18 15.5ZM8 13V18H13.5C14.8807 18 16 16.8807 16 15.5C16 14.1193 14.8807 13 13.5 13H8Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={(editor.isActive('italic') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M15 20H7V18H9.92661L12.0425 6H9V4H17V6H14.0734L11.9575 18H15V20Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={(editor.isActive('underline') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M8 3V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V3H18V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V3H8ZM4 20H20V22H4V20Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={(editor.isActive('strike') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M13 9H11V6H5V4H19V6H13V9ZM13 15V20H11V15H13ZM3 11H21V13H3V11Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={(editor.isActive('highlight') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M15.2427 4.51149L8.50547 11.2487L7.79836 13.37L6.7574 14.411L9.58583 17.2394L10.6268 16.1985L12.7481 15.4913L19.4853 8.75413L15.2427 4.51149ZM21.6066 8.04702C21.9972 8.43755 21.9972 9.07071 21.6066 9.46124L13.8285 17.2394L11.7071 17.9465L10.2929 19.3607C9.90241 19.7513 9.26925 19.7513 8.87872 19.3607L4.63608 15.1181C4.24556 14.7276 4.24556 14.0944 4.63608 13.7039L6.0503 12.2897L6.7574 10.1683L14.5356 2.39017C14.9261 1.99964 15.5593 1.99964 15.9498 2.39017L21.6066 8.04702ZM15.2427 7.33992L16.6569 8.75413L11.7071 13.7039L10.2929 12.2897L15.2427 7.33992ZM4.28253 16.8859L7.11096 19.7143L5.69674 21.1285L1.4541 19.7143L4.28253 16.8859Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
      <div className="h-6 rounded overflow-hidden bg-neutral-700 ">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={(editor.isActive('bulletList') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={(editor.isActive('orderedList') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M8 4H21V6H8V4ZM5 3V6H6V7H3V6H4V4H3V3H5ZM3 14V11.5H5V11H3V10H6V12.5H4V13H6V14H3ZM5 19.5H3V18.5H5V18H3V17H6V21H3V20H5V19.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
      <div className="h-6 rounded overflow-hidden bg-neutral-700 ">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={(editor.isActive('blockquote') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M21 4H3V6H21V4ZM21 11H8V13H21V11ZM21 18H8V20H21V18ZM5 11H3V20H5V11Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={setLink}
          className={(editor.isActive('link') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M17.6567 14.8284L16.2425 13.4142L17.6567 12C19.2188 10.4379 19.2188 7.90524 17.6567 6.34314C16.0946 4.78105 13.5619 4.78105 11.9998 6.34314L10.5856 7.75736L9.17139 6.34314L10.5856 4.92893C12.9287 2.58578 16.7277 2.58578 19.0709 4.92893C21.414 7.27208 21.414 11.0711 19.0709 13.4142L17.6567 14.8284ZM14.8282 17.6569L13.414 19.0711C11.0709 21.4142 7.27189 21.4142 4.92875 19.0711C2.5856 16.7279 2.5856 12.9289 4.92875 10.5858L6.34296 9.17157L7.75717 10.5858L6.34296 12C4.78086 13.5621 4.78086 16.0948 6.34296 17.6569C7.90506 19.2189 10.4377 19.2189 11.9998 17.6569L13.414 16.2426L14.8282 17.6569ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
          className={"bg-teal-400/20 h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M17.657 14.8284L16.2428 13.4142L17.657 12C19.2191 10.4379 19.2191 7.90526 17.657 6.34316C16.0949 4.78106 13.5622 4.78106 12.0001 6.34316L10.5859 7.75737L9.17171 6.34316L10.5859 4.92895C12.9291 2.5858 16.7281 2.5858 19.0712 4.92895C21.4143 7.27209 21.4143 11.0711 19.0712 13.4142L17.657 14.8284ZM14.8286 17.6569L13.4143 19.0711C11.0712 21.4142 7.27221 21.4142 4.92907 19.0711C2.58592 16.7279 2.58592 12.9289 4.92907 10.5858L6.34328 9.17159L7.75749 10.5858L6.34328 12C4.78118 13.5621 4.78118 16.0948 6.34328 17.6569C7.90538 19.219 10.438 19.219 12.0001 17.6569L13.4143 16.2427L14.8286 17.6569ZM14.8286 7.75737L16.2428 9.17159L9.17171 16.2427L7.75749 14.8284L14.8286 7.75737ZM5.77539 2.29291L7.70724 1.77527L8.74252 5.63897L6.81067 6.15661L5.77539 2.29291ZM15.2578 18.3611L17.1896 17.8434L18.2249 21.7071L16.293 22.2248L15.2578 18.3611ZM2.29303 5.77527L6.15673 6.81054L5.63909 8.7424L1.77539 7.70712L2.29303 5.77527ZM18.3612 15.2576L22.2249 16.2929L21.7072 18.2248L17.8435 17.1895L18.3612 15.2576Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={addImage}
          className={"bg-teal-400/20 h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934V13H20V5H4V18.999L14 9L17 12V14.829L14 11.8284L6.827 19H14V21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={"bg-teal-400/20 h-6 focus:bg-teal-400/80 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
      <div className="h-6 rounded overflow-hidden bg-neutral-700 ">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={(editor.isActive('code') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 border-r border-solid border-teal-400 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M16.95 8.46448L18.3642 7.05026L23.3139 12L18.3642 16.9498L16.95 15.5355L20.4855 12L16.95 8.46448ZM7.05048 8.46448L3.51495 12L7.05048 15.5355L5.63627 16.9498L0.686523 12L5.63627 7.05026L7.05048 8.46448Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={(editor.isActive('codeBlock') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " h-6 focus:bg-teal-400/80 ease-in-out duration-500"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
            <path d="M3.41436 5.99995L5.70726 3.70706L4.29304 2.29285L0.585938 5.99995L4.29304 9.70706L5.70726 8.29285L3.41436 5.99995ZM9.58594 5.99995L7.29304 3.70706L8.70726 2.29285L12.4144 5.99995L8.70726 9.70706L7.29304 8.29285L9.58594 5.99995ZM14.0002 2.99995H21.0002C21.5524 2.99995 22.0002 3.44767 22.0002 3.99995V20C22.0002 20.5522 21.5524 21 21.0002 21H3.00015C2.44787 21 2.00015 20.5522 2.00015 20V12H4.00015V19H20.0002V4.99995H14.0002V2.99995Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
      {/* 
      
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
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={(editor.isActive('codeBlock') ? 'bg-teal-400/40' : 'bg-teal-400/20') + " focus:bg-teal-400/80 px-2 border-r border-solid border-teal-400 ease-in-out duration-500"}
      >
        Code Block
      </button>*/}
    </div>
  );
};

export default TextEditorToolBarComp;