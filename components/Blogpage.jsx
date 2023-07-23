import React, { memo } from "react";

import { AuthOptions } from "next-auth";
import Card from "./card";
import Divider from "./smallcomponents/divider";

//functio to fetch blogs and return blog
const getBlog = async (fetchUrl) => {
  console.log("fetchurl is ", fetchUrl);
  try {
    const res = await fetch(fetchUrl, {
      cache: "no-store",
    });
    //response is the format of

    //{noOfBlogs:"total no of blogs",blogs:["its a array of documents"]}
    const data = await res.json();

    console.log("username", data);
    return data.blogs;
  } catch (error) {
    return { status: false };
  }
};
const Blogpage = async ({ title, fetchUrl }) => {
  console.log("blogs");
  console.log(fetchUrl);

  const blogs = await getBlog(fetchUrl);
  console.log("first");
  console.log(blogs);

  return (
    <section className="mx-2 my-5">
      <h1 className="  font-sans text-xl">{title}</h1>
      <Divider horizontal={true} />
      <div className="flex flex-wrap gap-8 mt-8">
        {blogs? (
          blogs.map((element) => {
            return (
              <Card
                key={element._id}
                title={element.title}
                description={element.description}
                name={element.userid.username}
                blogid={element._id}
                genre={element.genre}
                proifileImage={element.userid.image}
                image={element.image}
                date={element.date}
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

export default Blogpage;
