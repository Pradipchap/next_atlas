import Blogpage from "@components/Blogpage";
import Divider from "@components/smallcomponents/divider";
import Trending from "@components/trending";
import React from "react";

const page = () => {
  return (
    <div className=" flex  flex-row gap-2 justify-center items-start">
      <div className="w-[50rem]">
        <Blogpage
          title="Recent Blogs"
          fetchUrl="http://localhost:3000/api/blogs"
        />
      </div>
      <Divider horizontal={false} />
      <Trending />
    </div>
  );
};
export default page;
