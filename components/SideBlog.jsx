"use client";
//made client component as issues related to multiple rerendering were found
import React, { memo } from "react";
import { useState, useEffect } from "react";
import Divider from "./smallcomponents/divider";
import Card from "./card";
const SideBlog = ({ fetchUrl, title }) => {
  const [blogs, setBlogs] = useState({}); //state for the  total blogs collection

  //functin that fetches the blog
  const getBlogs = async () => {
    try {
      //response is the format of
      //{noOfBlogs:"total no of blogs",blogs:["its a array of documents"]}
      const res = await fetch(fetchUrl, { cache: "no-cache" });
      const data = await res.json();
      console.log("sideblogs",data)
      setBlogs({ blogs: data.blogs, status: true });
    } catch (error) {
      setBlogs({ status: false });
    }
  };

  //to fetch blogs whenever the genre changes
  useEffect(() => {
    getBlogs();
  }, [fetchUrl]);

  return (
    <section class="mx-2 my-5">
      <h1 class="  font-sans text-xl">{"Blogs related to " + title}</h1>
      <Divider horizontal={true} />
      <div class="flex flex-wrap gap-8 mt-8">
        {blogs.blogs ? (
          blogs.blogs.map((element) => {
            return (
              <Card
                key={element._id}
                title={element.title}
                description={element.description}
                name={element.userid.username}
                blogid={element._id}
                genre={element.genre}
                image={element.userid.image}
                isOwnerOrNot={false}
              />
            );
          })
        ) : (
          <h1>sorry no data</h1>
        )}
      </div>
    </section>
  );
};

export default memo(SideBlog);
