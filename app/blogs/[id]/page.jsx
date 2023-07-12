// "use client"
import React from "react";
const getblog = async (id) => {
  console.log("id is ", id);
  const res = await fetch(
    "http://localhost:3000/api/blogs/eachblogs",

    {
      method: "POST",
      body:JSON.stringify( {
        id: id,
      }),
    }
  );

  console.log(res);
const data=res.json()


  return data;
};

export default async function page({ params }) {
  let blog = await getblog(params.id);
  console.log("params id is", blog);

  return <h1 className="">asdfa{blog._id}</h1>;
}
