"use client";
import React, { Suspense } from "react";
import Blogpage from "./Blogpage";
import Dropdown from "./smallcomponents/dropdown";
import { useState } from "react";
import { set } from "mongoose";
import { useMemo } from "react";
const SideBlog = React.lazy(() => import("./SideBlog"));
import SideBlogSkeleton from "./smallcomponents/skeleton/SideblogSkeleton";
const Trending = () => {
  const [value, setValue] = useState("Science"); //state for the dropdown menu of genre

  //function that updates the value of genre
  const getValue = (x) => {
    setValue(x);
  };

  return (
    <div className="w-[30rem]  max-lg:hidden overflow-y-auto">
      <Dropdown value={value} operation={getValue} />

      <Suspense
        fallback={
          <SideBlogSkeleton
            tailwindclass={"w-[30rem]  max-lg:hidden flex flex-col gap-5"}
          />
        }
      >
        <SideBlog
          fetchUrl={`http://localhost:3000/api/blogs/search?genre=${value}`}
        />
      </Suspense>
    </div>
  );
};
export default Trending;
