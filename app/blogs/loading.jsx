import Blogpage from "@components/Blogpage";
import BlogCardSkeleton from "@components/smallcomponents/skeleton/BlogCardSkeleton";
import Divider from "@components/smallcomponents/divider";
import PhotoSkeleton from "@components/smallcomponents/skeleton/PhotoSkeleton";
import React from "react";

export default function loading() {
  return (
    <div className=" flex  flex-row gap-2 justify-center items-start">
      <div className="w-[50rem] gap-5 flex flex-col">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
      <Divider horizontal={false} />
      <div className="w-[30rem]  max-lg:hidden flex flex-col gap-5">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    </div>
  );
}
