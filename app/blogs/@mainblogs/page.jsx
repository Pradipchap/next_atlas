"use client";
import React, { Suspense } from "react";
import { useState } from "react";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { pageExtensions } from "@next.config";
import Blogpage from "@components/Blogpage";
import Test from "@components/Test";
const page = () => {
  // const [page, setPage] = useState(1);
  function incrementPage() {}
  //state for page number
  return (
    <div className="w-[50rem] mb-20 overflow-scroll h-[100%] overflow-y-auto">
      <Test title="Recent Blogs" fetchUrl={`/api/blogs?page=1`} />
      <div className=" flex w-full justify-center gap-20">
        {/* <button
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1 ? true : false}
        >
          <GrPrevious className="text-3xl hover:text-4xl" />
        </button>
        <button onClick={() => setPage((page) => page + 1)}>
          <GrNext className="text-3xl hover:text-4xl" />
        </button> */}
      </div>
    </div>
  );
};
export default page;
