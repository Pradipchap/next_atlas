"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Card({
  blogid,
  title,
  name,
  genre,
  image,
  description,
  update,
  // tags,
  path,
}) {
  const router = useRouter();
  const viewBlog = () => {
    // console.log(isOwnerOrNot);
    router.push(`/blogs/${blogid}`);
  };
  const tags = [1, 2, 3, 4];
  return (
    <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <div onClick={viewBlog} className="block h-full w-full">
        <img
          className="max-h-40 w-full object-cover"
          alt="featured image"
          src={image}
        />
        <div className="w-full bg-white p-4">
          <p className="text-md font-medium text-indigo-500">{blogid}</p>
          <p className="mb-2 text-xl font-medium text-gray-800">{title}</p>
          <p className="text-md font-light text-gray-400">{description}</p>
          <div className="justify-starts mt-4 flex flex-wrap items-center">
            <div className="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
              {genre}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
