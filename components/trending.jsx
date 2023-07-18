"use client";
import React, { Suspense } from "react";
import Blogpage from "./Blogpage";
import Dropdown from "./smallcomponents/dropdown";
import { useState } from "react";
import { set } from "mongoose";
import { useMemo } from "react";
const SideBlog=React.lazy(()=> import ("./SideBlog"));
import SideBlogSkeleton from "./smallcomponents/skeleton/SideblogSkeleton";
const Trending = () => {
  const [value, setValue] = useState("Science");

  const getValue = (x) => {
    setValue(x);
  };

  return (
    <div className="w-[30rem]  max-lg:hidden">
      <Dropdown value={value} operation={getValue} />

      <Suspense fallback={<SideBlogSkeleton />}>
        <SideBlog
          fetchUrl={`http://localhost:3000/api/blogs/search?genre=${value}`}
        />
      </Suspense>
    </div>
  );
};
export default Trending;
