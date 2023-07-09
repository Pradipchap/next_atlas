import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const blogs = await Blog.find({}).populate('userid')

        return new Response(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
        return new Response("Failed to get documents", { status: 500 })
    }
} 