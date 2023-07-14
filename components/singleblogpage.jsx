// "use client"
import BlogEditor from "@components/blogarea";
import React from "react";
const getblog = async (id) => {
  console.log("id is ", id);
  const res = await fetch(
    `http://localhost:3000/api/blogs/eachblogs?blogid=${id}`,


  );

  // console.log(res);
  const data = await res.json();

  return data;
};

export default async function SingleBlog({ params }) {
  console.log(params.id)
  let blog = await getblog(params.id);
  // console.log("params id is", blog);
  console.log("blog is",blog)

  return <div className="mt-[20rem]">
    <BlogEditor  readOnlyStatus={true} content={blog.content} />
  </div>
}
