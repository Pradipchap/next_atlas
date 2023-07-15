import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { _id, content } = await request.json();

  try {
    await connectToDB();
    const updatedBlog = await Blog.findByIdAndUpdate(
      _id,
      { content: content },
      { new: true }
    );
    return new Response(JSON.stringify(updatedBlog), { status: 201 });
  } catch (error) {
    return new Response("error", { status: 500 });
  }
};
