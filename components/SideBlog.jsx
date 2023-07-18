"use client";
import React, { memo } from "react";
import { useState, useEffect } from "react";
import Divider from "./smallcomponents/divider";
import Card from "./card";
const SideBlog = ({ fetchUrl }) => {
  const [blogs, setBlogs] = useState({});

  const getBlogs = async () => {
    try {
      const res = await fetch(fetchUrl, { cache: "no-cache" });
      const data = await res.json();
      setBlogs({ data, status: true });
    } catch (error) {
      setBlogs({ status: false });
    }
  };

  useEffect(() => {
    getBlogs();
  }, [fetchUrl]);

  return (
    <section class="mx-2 my-5">
      <h1 class="  font-sans text-xl">{"title"}</h1>
      <Divider horizontal={true} />
      <div class="flex flex-wrap gap-8 mt-8">
        {blogs.status ? (
          blogs.data.map((element) => {
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
          <h1>sorry unable to fetch try again</h1>
        )}
      </div>
    </section>
  );
};

export default memo(SideBlog);
