import React from "react";
import Divider from "./smallcomponents/divider";
import Card from "./card";

const getBlogs = async (fetchUrl) => {
  const response = await fetch(fetchUrl, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await response.json();
  console.log("test",data)
  return data;
};

export default async function Test({fetchUrl,title}) {
  const data = await getBlogs(fetchUrl);
  console.log("test is runnig");

  return (
    <section className="mx-2 my-5">
      <h1 className="  font-sans text-xl">{title}</h1>
      <Divider horizontal={true} />
      <div className="flex flex-wrap gap-8 mt-8">
        {data.blogs.map((element) => {
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
        })}
      </div>
    </section>
  );
}
