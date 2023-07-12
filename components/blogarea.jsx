"use client";
import React, { useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Table from "@editorjs/table";
import Checklist from "@editorjs/checklist";
import Code from "@editorjs/code";
import { useEffect, useState } from "react";
const initializeEditor = async () => {
  const editorInstance = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: "editorjs",
    autofocus: true,

    onReady: () => {
      //code for when editorjs will be ready,
      console.log("editor js is reacdy");
    },

    onChange: () => {},
    tools: {
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      table: {
        class: Table,
        inlineToolbar: true,
      },
      code: {
        class: Code,
        inlineToolbar: true,
      },
    },
    placeholder: "lets write a blog",

    //defaultBlock: 'myOwnParagraph'
    //changes the defaultblock
  });

  return editorInstance;
};
export default function BlogEditor({createBlog}) {
  const [isEditorActive, setisEditorActive] = useState(false);
  const editorRef = useRef(null);
  useEffect(() => {
    const initialize = async () => {
      const editorInstance = await initializeEditor();
      editorRef.current = editorInstance;
      setisEditorActive(true);
    };

    initialize();

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, []);

  const submit = async() => {
    
    if (editorRef.current) {
      const savedData = await editorRef.current.save();
      // alert(JSON.stringify(savedData));
      createBlog(savedData)
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div id="editorjs" className=" w-full  border-black border"></div>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
