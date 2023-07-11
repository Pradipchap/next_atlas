import Blog from "@models/blog";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { userid, title, description } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Blog({  userid, title, description, });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
