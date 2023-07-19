import { connectToDB } from "@utils/database";
import Blog from "@models/blog";
import { NextRequest } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDB();
    const keys = request.nextUrl.searchParams.keys();

    for (const key of keys) {
      const noOfBlogs=await Blog.count({})
      const query = request.nextUrl.searchParams.get(key);
      const myblogs = await Blog.find({ [key]: query }).populate("userid").limit(3);
      return new Response(JSON.stringify({noOfBlogs:noOfBlogs,blogs:myblogs}), { status: 201 });
    }

    // const myblogs = await Blog.find({ userid }).populate("userid");

    // return new Response(JSON.stringify(myblogs), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
