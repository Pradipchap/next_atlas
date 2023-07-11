import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const POST=async(request)=>{
    const {_id,title}=await request.json()

    try {
        await connectToDB()
       const replacedBlog=await Blog.findOneAndUpdate({_id:_id},{$set:{title:title}},{new:true});
    //    console.log(replacedBlog)
       return new Response(JSON.stringify(replacedBlog),{status:201});


        
    } catch (error) {
        return new Response("error",{status:500})
        
    }


}