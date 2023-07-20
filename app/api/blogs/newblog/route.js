import Blog from "@models/blog";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userid, content, title, genre, description } = await request.json();

  try {
    await connectToDB();

    const imageUrl = await content.blocks.find(
      (element) => element.type === "image"
    );

    const newBlog = new Blog({
      userid,
      title,
      genre,
      description,
      content,
      date: new Date(),
      image: typeof imageUrl ===undefined?"false":imageUrl.data.url,
    });

    await newBlog.save();
    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
