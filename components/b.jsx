import Blogsfeed from "@components/b";
import React from "react";
import BlogCard from "@components/Blogcard";
const getBlog = async () => {
  const res = await fetch("http://localhost:3000/api/blogs",{cache:"no-store"});
  const parsed = await res.json();
  return parsed;
};
export default async function Blogpage() {
  const blogs = await getBlog();
  console.log('first')
  console.log(blogs);

  return (
    <div className="mt-[20rem] bg-red-500">
      {blogs.map((element) => {
        return (
          <BlogCard
          key={element._id}
            // title={element.title}
            // description={element.description}
            name={element.userid.name}
            _id={element._id}
            email={element.userid.email}
            image={element.userid.image}
            // update={null}
          />
        );
      })}
    </div>
  );
}
