// import connectToDatabase from "@utils/altdatabase";

// export default async function handler(req, res) {
//   if (req.method !== 'GET') {
//     res.status(405).json({ message: 'Method Not Allowed' });
//     return;
//   }

//   try {
//     const db = await connectToDatabase();
//     const collection = db.collection('blogs');

//     const documents = await collection.find({}).toArray();

//     res.status(200).json(documents);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }

import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET=async(request)=>{
try {
    await connectToDB()
    const Blogs=await Blog.find({});
    return new Response(JSON.stringify(Blogs),{status:200})
} catch (error) {
    return new Response("error while sending blogs",{status:500})
    
}

} 