import { connectToDB } from "@utils/database";
import Blog from "@models/blog";

export const GET=async(request)=>{
    const userid=request.query.userid
    try {
        
        await connectToDB()
        const myblogs=await Blog.find({userid:userid});
        return Response(JSON.stringify(myblogs),{status:201})
        
    } catch (error) {
        return Response("error whilte fetching",{status:500})
        
    }
}