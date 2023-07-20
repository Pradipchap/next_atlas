"use client";
import React from "react";

import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
let BlogEditor;
// import BlogEditor from "@components/blogarea";
import dynamic from "next/dynamic";

const Create = async () => {
  if (typeof window !== "undefined") {
    BlogEditor = dynamic(() => import("@components/blogarea"), { ssr: false });
  }
  const [creationStatus, setCreationStatus] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  const createBlog = async (data, title, genre, description) => {
    alert(JSON.stringify({ data, title, genre, description }));
    console.log(JSON.stringify(data));
    alert(` value of session ${session?.user.id}`);
    try {
      //upload to mongodb database
      // if (typeof session.user.id !== undefined) {
        const res = await fetch("/api/blogs/newblog", {
          method: "POST",
          body: JSON.stringify({
            userid: session?.user.id,
            title: title,
            genre: genre,
            description: description,
            content: data,
          }),
        });

        await console.log(res);
        if (res.ok) {
          setCreationStatus({ success: true });
          // router.push("/");
          // createElement(Greeting, { name: "Taylor" });s
          //if the response from the request is ok then redirect to home
          //additional code can be written here to manage how ui behaves after blog creattion success
        } else {
          alert(res.statusText);
          setCreationStatus({ success: false });
        }
      // }
    } catch (error) {
      setCreationStatus({ success: false });
      alert(` error while submitting ${error}`);
      console.log(error);
    }
  };

  return (
    <div className=" mx-auto">
      {/* <BlogEditor/> */}
      <BlogEditor
        createOrModify={createBlog}
        isFromCreatePage={true}
        isEditable={true}
        isCreationSuccess={creationStatus}
      />
    </div>
  );
};

export default Create;
