import Blogpage from "@components/Blogpage";
import React from "react";

export default function page({ params }) {
  //it gets params from navbar after clicking myblogs and sends the api url along with the user ID
  return (
    <Blogpage
      title="My Blogs"
      fetchUrl={`http://localhost:3000/api/blogs/myblogs?userid=${params.userblogs}`}

    />
  );
}
