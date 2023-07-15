// "use client"
import BlogEditor from "@components/blogarea";
import React from "react";
const getblog = async (id) => {
  console.log("id is ", id);
  const res = await fetch(
    `http://localhost:3000/api/blogs/eachblogs?blogid=${id}`,
    { cache: "no-cache" }
  );

  // console.log(res);
  const data = await res.json();

  return data;
};

export const updateBlog = async ( blogid, savedData ) => {
  "use server";
  console.log("blogid is",blogid,'content',JSON.stringify(savedData))
  try {
    const res = await fetch("http://localhost:3000/api/blogs/modify", {

      method: "POST",
      body: JSON.stringify({
        _id: blogid,
        content: savedData,
      }),
    });

    const output = await res.json();
    console.log("ipdated is",JSON.stringify(output));
    return true;
  } catch (error) {
    console.log("faileddd");
    const output = await res.text();
    console.log(output);
    return false;
  }
};

export default async function page({ params }) {
  console.log("params id is", JSON.stringify(params));
  const blog = await getblog(params.id);
  console.log("content is", blog.content);
  // console.log("params id is", blog);
  // console.log("query is", params.query);

  return (
    <div className="mt-[20rem]">
      {blog ? (
        <BlogEditor
          content={blog.content}
          blogid={blog._id}
          userid={blog.userid._id}
          isFromCreatePage={false}
          isEditable={false}
          createOrModify={updateBlog}
        />
      ) : (
        <h1>sorry error </h1>
      )}
    </div>
  );
}
