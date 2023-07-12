import { connectToDB } from "@utils/database";
import Blog from "@models/blog";
import { NextRequest } from "next/server";
export const GET = async (request) => {
  const userid = request.nextUrl.searchParams.get("userid");
  try {
    await connectToDB();
    const myblogs = await Blog.find({ userid: userid }).populate("userid");
    return new Response(JSON.stringify(myblogs), { status: 201 });
  } catch (error) {
    return new Response("error whilte fetching", { status: 500 });
  }
};
