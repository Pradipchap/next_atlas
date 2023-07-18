import React from "react";
import BlogCardSkeleton from "./BlogCardSkeleton";

export default function SideBlogSkeleton() {
  return (
    <section class="mx-2 my-5">
      <div class="flex flex-wrap gap-8 mt-8">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    </section>
  );
}
