import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

 const handler = async (request) => {
  try {
    await connectToDB();

    const blogs = await Blog.find({}).populate("userid");

    return new Response(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
export {handler as GET}
