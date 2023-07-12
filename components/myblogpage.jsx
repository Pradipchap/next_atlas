"use client";
import React from "react";
import { useSession } from "next-auth/react";
import BlogCard from "./Blogcard";
import { useEffect,useState } from "react";

const Myblogpage =  ({update}) => {
  const { data: session } = useSession();
  const [blogs, setblogs] = useState([])

  useEffect(() => {
    const sendBlog = async () => {
        const res = await fetch(
          `http://localhost:3000/api/blogs/myblogs?userid=${session?.user.id}`
        );
        const blogs = await res.json();
        console.log("my blogs",blogs)
        setblogs(blogs)

      };
      sendBlog()

  }, [session?.user.id])
  

  return blogs?.map((element) => {
    return (
      <BlogCard
        key={element._id}
        // title={element.title}
        // description={element.description}
        date={element.content.time}
        name={element.userid.name}
        _id={element._id}
        email={element.userid.email}
        image={element.userid.image}
        update={update}
      />
    );
  });
};
export default Myblogpage;
