"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Divider from "./smallcomponents/divider";
export default function Card({
  blogid,
  title,
  name,
  genre,
  image,
  description,
  update,
  date,
  // tags,
  path,
}) {
  const router = useRouter();

  //function to navigate to individual blog page..
  //blogid as the params for dynamic routes
  const viewBlog = () => {
    router.push(`/blogs/${blogid}`);
  };
  const tags = [1, 2, 3, 4];
  return (
    <div className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0 ">
      <div className="group ">
        <div className="aspect-w-3 aspect-h-2">
          <Image
            className="object-cover shadow-lg rounded-lg group-hover:opacity-75 max-md:hidden"
            src={image}
            alt="Featured Photo"
            width={200}
            height={150}
          />
        </div>
      </div>

      <div className="sm:col-span-2 cursor-pointer" onClick={viewBlog}>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
              <svg
                className="mr-1.5 h-2 w-2 brand-tutoriel"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3"></circle>
              </svg>
              {genre}
            </span>
          </div>
        </div>

        <div className="mt-2">
          <div className="group">
            <h4 className="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
              {title}
            </h4>
          </div>

          <p className="mt-1 text-sm font-normal text-skin-base leading-5">
            {description.slice(0, 100) + "..."}
          </p>

          <div className="mt-3 flex items-center font-sans">
            <div className="shrink-0">
              <div>
                <span className="sr-only">{name}</span>

                <img
                  className="h-10 w-10 rounded-full"
                  src={image}
                  alt="Ekim Kael"
                />
              </div>
            </div>

            <div className="ml-3">
              <div className="text-sm font-medium text-skin-inverted">
                <p className="hover:underline">{name}</p>
              </div>

              <div className="flex space-x-1 text-sm text-skin-muted">
                <time datetime="2022-02-01">{date}</time>

                <span aria-hidden="true">·</span>

                <span>3 min read time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider horizontal={true} />
    </div>
  );
}
