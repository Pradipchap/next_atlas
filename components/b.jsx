import React from "react";
import BlogCard from "./Blogcard";

export const Blogs = async () => {
  let blogs
  try {
    const res = await fetch("/api/blogs");
     blogs = await res.json();

    console.log("blogs are", blogs);
  } catch (error) {
    console.log(error)
  }
  return blogs && Array.isArray(blogs) ? (
    blogs.map((element) => (
      <BlogCard
        title={element.title}
        description={element.description}
        userid={element.userid}
        _id={element._id}
        updateDoc={updateDoc} 
        key={element._id}
      />
    ))
  ) : (
    <div>No blogs available.</div>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch("/api/blogs/folder");

//   const blogs = await res.json();
// console.log("blogs durig staticside",blogs)
//   return { props: { blogs } };
// };
