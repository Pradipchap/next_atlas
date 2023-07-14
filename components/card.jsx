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
  tags,
  path,
}) {
  const router = useRouter();
  const viewBlog = () => {
    // console.log(isOwnerOrNot);
    router.push(`/blogs/${blogid}`);
    // router.push({
    //   pathname: `/blogs/${_id}`,
    //   query: { isOwnerOrNot: isOwnerOrNot },
    // });
  };
  return (
    <article class="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
      <div onClick={viewBlog} class="block h-full w-full">
        <img
          class="max-h-40 w-full object-cover"
          alt="featured image"
          src={image}
        />
        <div class="w-full bg-white p-4">
          <p class="text-md font-medium text-indigo-500">{genre}</p>
          <p class="mb-2 text-xl font-medium text-gray-800">{title}</p>
          <p class="text-md font-light text-gray-400">{description}</p>
          <div class="justify-starts mt-4 flex flex-wrap items-center">
            {tags?.map((element) => {
              return (
                <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                  {element.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
