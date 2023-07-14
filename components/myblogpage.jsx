"use client";

import { useSession } from "next-auth/react";
import BlogCard from "./Blogcard";
import { useEffect, useState } from "react";

const Myblogpage = ({ update }) => {
  const [blogs, setblogs] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const sendBlog = async () => {
      console.log("session id", session.user.id);
      const res = await fetch(
        `http://localhost:3000/api/blogs/myblogs?userid=${session?.user.id}`,
        { cache: "no-cache" }
      );
      const data = await res.json();
      console.log("my blogs", data);
      setblogs(data);
    };
    if (session?.user.id) sendBlog();
  }, [session?.user.id]);

  return blogs.map((element) => {
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
        // update={update}
      />
    );
  });
  // return <h2>{blogs}</h2>
};
export default Myblogpage;
