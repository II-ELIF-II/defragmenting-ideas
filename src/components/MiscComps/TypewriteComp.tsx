'use client';

import { useEffect, useState } from "react";

const Typewriter = ({StartDelay, Text, Delay, Errors} : {StartDelay: number, Text: string, Delay: number, Errors: string}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setTimeout(()=>{
      let i = 0, j = 0;
      let errors = Errors;
      let currentText = '';
      let textWithErrors = Text.slice(0, -errors.length).concat(errors);
      const writerInterval = setInterval(() => {
        if (i < Text.length) {
          if (errors.length == 0)
            setText( currentText += Text.charAt(i) );
          else
            setText( currentText += textWithErrors.charAt(i) );
          i++;
        } else if (j < errors.length) {
          setText( currentText = currentText.slice(0, -1) )
          j++;
        } else if (i < Text.length + errors.length) {
          setText( currentText += Text.charAt(Text.length - errors.length) );
          errors = errors.slice(0, -1);
        } else {
          clearInterval(writerInterval);
        }
      }, Delay);
      return () => {clearInterval(writerInterval); };
    }, StartDelay);
  }, [StartDelay, Text, Delay, Errors]);
  return text;
};

const TypewriteComp = (
  {StartDelay, Prefix, PrefixStyle, Text, TextStyle, Delay, Errors, Cursor}: 
  {
    StartDelay?:number, 
    Prefix?: string, 
    PrefixStyle?: string, 
    Text: string, 
    TextStyle?: string, 
    Delay?: number, 
    Errors?: string, 
    Cursor?: string
  }) => {

  const startDelay = StartDelay || 0;
  const delay = Delay || 100;
  const cursor = Cursor || '_';
  const prefix = Prefix || '';
  const errors = Errors || '';
  const text = Typewriter({StartDelay: startDelay, Text: Text, Delay: delay, Errors: errors});

  return (<span> 
    <span className={PrefixStyle}>{prefix}</span> 
    <span className={TextStyle}>{text}</span>
    <span className="animate-typewriterCursor ml-0.5">{cursor}</span>
  </span>);
}

export default TypewriteComp;