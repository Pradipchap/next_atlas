import { connectToDB } from "@utils/database";
import Blog from "@models/blog";

export const POST=async(request)=>{
    const {id}=await request.json()
    try {
        await connectToDB()
        const blog=await Blog.findById(id).populate("userid");
        return new Response(JSON.stringify(blog),{status:201})

    } catch (error) {
        return new Response('error',{status:500})

    }
}
// import { connectToDB } from "@utils/database";
// import Blog from "@models/blog";
// import { ObjectId } from "mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

// async function handler(request, response) {
//   if(request.method==="GET"){
//     const { id } = request.query;
//   try {
//     await connectToDB();
//     const blog = await Blog.findById(ObjectId(id));
//     if (blog) {
//       response.status(201).json(blog);
//     } else {
//       response.status(404).json({ error: "Blog not found" });
//     }
//   } catch (error) {
//     response.status(500).json({ error: "Internal server error" });
//   }
//   }
// }

// export { handler as GET}

// import { connectToDB } from "@utils/database";
// import Blog from "@models/blog";
// import { ObjectId } from "mongodb";


// async function handler(request, response) {

//     try {
//     //   await connectToDB();
//       const { id } = request.query;
//     //   const blog = await Blog.findById(ObjectId(id));
//     //   if (blog) {
//         response.status(201).json(JSON.stringify({blog:'blog'}));
//     //   } else {
//     //     response.status(404).json({ error: "Blog not found" });
//     //   }
//     } catch (error) {
//       response.status(500).json({ error: "Internal server error" });
//     }
//   } else {
//     response.status(500).end(); // Return a 405 Method Not Allowed for non-GET requests

// }

// export  {handler as POST};
