import Trending from "@components/trending";
import React from "react";
import Blogpage from "@components/blogpage";
import Test from "@components/Test";
export default function page() {
  return (
    <div className="w-[50rem] mb-20 overflow-scroll h-[100%] overflow-y-auto">
      <Test title="Genre" fetchUrl={`http://localhost:3000/api/blogs/`} />
      {/* <Blogpage fetchUrl={`http://localhost:3000/api/blogs/search?genre=Art}`} title="genre" /> */}
    </div>
  );
}
