"use client";
import React, { useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Table from "@editorjs/table";
import Checklist from "@editorjs/checklist";
import Code from "@editorjs/code";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
const initializeEditor = async ({
  content,
  userid,
  sessionid,
  isFromCreatePage,
}) => {
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
    data: content,

    readOnly: isFromCreatePage ? false : userid === sessionid ? false : true, //if the user id of the blog is
    // same as the session id then the user is the creator of the blog so he/she can edit it

    //defaultBlock: 'myOwnParagraph'
    //changes the defaultblock
  });

  return editorInstance;
};
export default function BlogEditor({
  content = "",
  userid,
  isFromCreatePage = false,
  isEditable = false,
  createOrModify,
  blogid
}) {
  const [isEditorActive, setisEditorActive] = useState(false);

  const editorRef = useRef(null);
  const { data: session } = useSession();
  const sessionid = session.user.id;

  console.log("contetn inside editor is", content);
  useEffect(() => {
    const initialize = async () => {
      const editorInstance = await initializeEditor({
        content,
        userid,
        isFromCreatePage,
        sessionid,
      });
      editorRef.current = editorInstance;
      // console.log("session id is ", sessionid, "blogsession id is ", userid);
      setisEditorActive(true);
    };

    if (sessionid) {
      initialize();
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, [sessionid]);

  const submit = async () => {
    if (editorRef.current) {
      const savedData = await editorRef.current.save();

      alert(JSON.stringify(savedData));
      alert(blogid)
      createOrModify(blogid,savedData);
      // createOrModify(savedData);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div id="editorjs" className=" w-full  border-black border"></div>
      {isFromCreatePage ? (
        <button type="button" onClick={submit}>
          Submit
        </button>
      ) : (
        userid === sessionid && (
          <button type="button" onClick={submit}>
            Update
          </button>
        )
      )}
    </div>
  );
}
