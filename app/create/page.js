"use client";
import React from "react";

import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import BlogEditor from "@components/blogarea";

const Create = async () => {
  const router = useRouter();
  const { data: session } = useSession();
  const createBlog = async (data, title, genre, description) => {
    console.log(title);
    console.log(` value of session ${session?.user.name}`);
    try {
      //upload to mongodb database

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
        router.push("/"); //if the response from the request is ok then redirect to home
        //additional code can be written here to manage how ui behaves after blog creattion success
      } else alert(res.statusText);
    } catch (error) {
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
      />
    </div>
  );
};

export default Create;
