import React, { useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { useEffect } from "react";
export default function BlogEditor() {
  const initEditor = () => {
    const editorRef = useRef();
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        editorRef.current = editor;
      },
      autofocus: true,
      onChange: async () => {
        let data = editor.saver.save();
        console.log(data);
        
      },
    });
  };
  useEffect(() => {
  
    // if (editorRef.current === null) initEditor();
    // return () => {
    //   editorRef?.current?.destroy();
    //   editorRef.current = null;
    // };
    
  }, []);

  return <div id="editorjs"></div>;
}
