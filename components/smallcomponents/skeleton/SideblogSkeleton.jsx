import React from "react";
import BlogCardSkeleton from "./BlogCardSkeleton";

export default function SideBlogSkeleton({tailwindclass}) {
  return (
    <section class="mx-5 my-5">
      <div className={tailwindclass}>
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    </section>
  );
}
