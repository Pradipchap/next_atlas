import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const POST=async(request)=>{
    const {_id,title,genre,content}=await request.json()

    try {
        await connectToDB()
       const replacedBlog=await Blog.findOneAndUpdate({_id:_id},{$set:{title:title},{$set:{genre:genre}},},{new:true});

       return new Response(JSON.stringify(replacedBlog),{status:201});


        
    } catch (error) {
        return new Response("error",{status:500})
        
    }


}