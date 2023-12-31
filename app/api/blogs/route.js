import Blog from "@models/blog";
import { connectToDB } from "@utils/database";
import { NextRequest } from "next/server";
const handler = async (request) => {
  try {
    await connectToDB();
    const pageNo = request.nextUrl.searchParams.get("page");
    const skippedNumber = (pageNo - 1) * 5;
    const noOfBlogs = await Blog.count({});

    const blogs = await Blog.find({})
      .sort({ date: -1 })
      .populate("userid")
      .limit(5)
      .skip(pageNo !== 1 && skippedNumber)
      .populate("userid");

    return new Response(JSON.stringify({ noOfBlogs: noOfBlogs, blogs }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
export { handler as GET };
