"use client";
import React from "react";
import Form from "@/components/Form";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
const Create = async () => {
  const router = useRouter();
  const { data: session } = useSession({
    required:true,
    onUnauthenticated(){redirect("/?callbackUrl=/create")}
  });
  const createBlog = async (data) => {
    console.log(data);
    console.log(` value of session ${session.user.name}`);
    try {
      //upload to mongodb database

      const res = await fetch("/api/blogs/newblog", {
        method: "POST",
        body: JSON.stringify({
          userid: session?.user.id,
          title: data.title,
          description: data.description,
         
        }),
      });
      await console.log(res);
router.push("/")
    } catch (error) {
      alert(` error while submitting ${error}`);
      console.log(error);
    }
  };

  return <Form createBlog={createBlog} />;
};

export default Create;
