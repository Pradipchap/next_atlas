import Blogpage from "@components/Blogpage";
import React from "react";

const page = () => {
  return <Blogpage title="Featured Blogs" fetchUrl="http://localhost:3000/api/blogs" />;
};
export default page;
