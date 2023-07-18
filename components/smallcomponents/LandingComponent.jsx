import Button from "@components/Button";
import Link from "next/link";
import React from "react";

const LandingComponent = () => {
  return (
    // <div className=" w-full h-[40rem] max-sm:h-60 text-white flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-rose-100 to-teal-100 ">
    //   <h1 className=" text-7xl bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 text-transparent bg-clip-text py-5  ">
    //     Blog It
    //   </h1>
    //   <h2 className="text-6xl text-black ">Read and Create blogs</h2>
    //   <Link
    //     href="/blogs"
    //     className="bg-black px-3 py-2 text-white rounded-xl hover:bg-slate-800"
    //   >
    //     Get started
    //   </Link>
    // </div>

    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 ">
        <h1 className="text-6xl  py-5 text-red-500">Blog It</h1>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl py-5 ">
          Where Thoughts Find Their Voice
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 ">
          Discover a world of captivating narratives, insightful perspectives,
          and endless possibilities for personal growth and lifelong learning.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/blogs"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 "
          >
            Get started
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
          </Link>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};
export default LandingComponent;
