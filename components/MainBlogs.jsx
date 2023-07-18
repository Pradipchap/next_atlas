"use client";
import React, { Suspense } from "react";
import { useState } from "react";
import Blogpage from "./Blogpage";
import SideBlogSkeleton from "./smallcomponents/skeleton/SideblogSkeleton";

const MainBlogs = () => {
  const [page, setPage] = useState(1);
  //state for page number
  return (
    <div className="w-[50rem] mb-20 overflow-scroll h-[100%] overflow-y-auto">
      <Suspense
        fallback={
          <SideBlogSkeleton tailwindclass="flex flex-col justify-start items-start gap-5" />
        }
      >
        <Blogpage
          title="Recent Blogs"
          fetchUrl={`http://localhost:3000/api/blogs?page=${page}`}
        />
      </Suspense>
      <div className=" flex w-full justify-between">
        <button
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1 ? true : false}
        >
          prev
        </button>
        <button onClick={() => setPage((page) => page + 1)}>next</button>
      </div>
    </div>
  );
};
export default MainBlogs;
