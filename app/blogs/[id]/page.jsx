import BlogEditor from "@components/blogarea";
import React from "react";

//this function accepts blogid as its arguments and return a single document
// associated with the blogid
const getblog = async (id) => {
  console.log("id is ", id);
  try {
    const res = await fetch(
      `http://localhost:3000/api/blogs/eachblogs?blogid=${id}`,
      { cache: "no-cache" }
    );

    const blog = await res.json();
    return blog;
  } catch (error) {
    return error
  }
};

//function to update the blog if user is the creator of the blog
//it is marked as "use server" because functions cannot be directly passed from server components to client

export const updateBlog = async (
  blogid,
  savedData,
  title,
  genre,
  description
) => {
  "use server";
  console.log("blogid is", blogid, "content", JSON.stringify(savedData));
  try {
    const res = await fetch("http://localhost:3000/api/blogs/modify", {
      method: "POST",
      body: JSON.stringify({
        _id: blogid,
        content: savedData,
        title: title,
        genre: genre,
        description: description,
      }),
    });

    const output = await res.json();
    console.log("ipdated is", JSON.stringify(output));
    return true;
  } catch (error) {
    console.log("faileddd");
    const output = await res.text();
    console.log(output);
    return { error };
  }
};

//returns the single blog page
export default async function page({ params }) {
  console.log("params id is", JSON.stringify(params));
  const blog = await getblog(params.id);
  console.log("content is", blog.content);
  // console.log("params id is", blog);
  // console.log("query is", params.query);

  return (
    <div className="">
      {blog ? (
        <BlogEditor
          content={blog.content}
          titleGenreDescription={{
            title: blog.title,
            genre: blog.genre,
            description: blog.description,
          }}
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
