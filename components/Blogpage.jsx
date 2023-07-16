import Blogsfeed from "@components/Blogpage";
import React from "react";


import { AuthOptions } from "next-auth";
import Card from "./card";
const getBlog = async (fetchUrl) => {
  console.log("fetchurl is ", fetchUrl);
  try {
    const res = await fetch(fetchUrl, {
      cache: "no-store",
    });
    const parsed = await res.json();
    return {blogs:parsed,status:true};
  } catch (error) {
    return {status:false}
  }
};
export default async function Blogpage({ title, fetchUrl }) {
  console.log("blogs");
  console.log(fetchUrl);

  const blogs = await getBlog(fetchUrl);
  console.log("first");
  console.log(blogs);

  return (
    <section class="py-20">
      <h1 class="mb-12 text-center font-sans text-5xl font-bold">{title}</h1>
      <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        {blogs.status?blogs.blogs.map((element) => {
          return (
            <Card
              key={element._id}
              title={element.title}
              description={element.description}
              name={element.userid.username}
              blogid={element._id}
              genre={element.genre}
              image={element.userid.image}
              // update={null}
              isOwnerOrNot={false}
              
            />
          );
        }):<h1>sorry unable to fetch try again</h1>}
      </div>
    </section>
  );
}
