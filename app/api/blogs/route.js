import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();
    
    const blogs =  await new  Blog.find({});
    

    return new Response(JSON.stringify(blogs)), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error while sending blogs:', error);
    return new Response("Error while sending blogs", { status: 500 });
  }
};
