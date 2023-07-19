"use client";
import React, { useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Table from "@editorjs/table";
import Checklist from "@editorjs/checklist";
import CodeTool from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";

import Embed from "@editorjs/embed";
import { NestedList } from "@editorjs/nested-list";
import { SimpleImage } from "@editorjs/simple-image";
import { TextVariantTune } from "@editorjs/text-variant-tune";
import Image from "@editorjs/simple-image";
import { Marker } from "@editorjs/marker";
import { List } from "@editorjs/list";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Warning } from "@editorjs/warning";
import FontSize from "editorjs-inline-font-size-tool";
import Button from "./Button";

import CreateBlog from "./CreatePage";
import Alert from "./smallcomponents/alert";

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
        inlineToolbar: false,
        toolbox: false,
      },
      code: {
        class: CodeTool,
        inlineToolbar: true,
      },

      fontsize: {
        class: FontSize,
        inlineToolbar: true,
      },
      inlinecode: {
        class: InlineCode,
        inlineToolbar: true,
        toolbox: false,
      },
      image: {
        class: Image,
        toolbox: true,
      },
      embed: {
        class: Embed,
        config: {
          services: {
            youtube: true,
            coub: true,
          },
        },
        toolbox: true,
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
  blogid,
  titleGenreDescription,
  isCreationSuccess,
}) {
  //default value of content is empty string ..
  //if user is updating blog content will be previous blog content

  const [isEditorActive, setisEditorActive] = useState(false);
  const [title, setTitle] = useState("");
  const editorRef = useRef();
  const { data: session } = useSession();
  const sessionid = session?.user.id;

  useEffect(() => {
    //sets editorInstance as the editor
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
      //if session exists only then initialize the editor
      initialize();
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, [sessionid]);

  const submit = async (title, genre, desctiption) => {
    if (editorRef.current) {
      //saves editor content
      const savedData = await editorRef.current.save();
      alert(JSON.stringify(title, genre, desctiption, savedData));

      //checks to which function it should pass the values
      //either to create page or updatepages
      if (isFromCreatePage)
        createOrModify(savedData, title, genre, desctiption);
      else createOrModify(blogid, savedData, title, genre, desctiption);
      // createOrModify(savedData);
    }
  };

  return (
    <div className="">
      {isCreationSuccess && <Alert success={isCreationSuccess.success} />}
      <CreateBlog
        isFromCreatePage={isFromCreatePage}
        submit={submit}
        userid={userid}
        sessionid={sessionid}
        titleGenreDescription={titleGenreDescription}
      />
    </div>
  );
}
