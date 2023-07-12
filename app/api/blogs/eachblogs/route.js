import { connectToDB } from "@utils/database";
import Blog from "@models/blog";
import { NextRequest } from "next/server";
export const GET = async (request) => {
  const blogid = request.nextUrl.searchParams.get("blogid");
  try {
    await connectToDB();
    const blog = await Blog.findById(blogid).populate("userid");
    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (error) {
    return new Response("error whilte fetching", { status: 500 });
  }
};
