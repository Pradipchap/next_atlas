import React from "react";
import blogsvg from "@public/blog.svg";
import Image from "next/image";

const Info = () => {
  return (
    <div className=" w-full flex flex-wrap-reverse gap-20 justify-around bg-red-500 py-5 ">
      <div className="  h-[25rem] w-[40rem] m-1 adjust-center flex adjust-center">
        <div className="text-white text-5xl font-black px-3 text">
          Simplify <br />{" "}
          <p className="text-3xl py-4 text-slate-200">
            blogging with our user-friendly tools for reading and writing,
            including easy rephrasing
          </p>
          .
        </div>
      </div>

      <Image
        src={blogsvg}
        alt="image of blogs in mobile"
        width={300}
        height={300}
      />
    </div>
  );
};
export default Info;
