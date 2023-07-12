import { connectToDB } from "@utils/database";
import User from "@models/user";

export const GET = async (request) => {
  // const { username } = request.query;
  try {
    // await connectToDB();
    // const userDetails = await User.findOne({ username: username });
    // return new Response(JSON.stringify(userDetails), { status: 201 });
    return new Response(JSON.stringify({title:"hello"}));
  } catch (error) {
    return new Response("error", { status: 500 });
  }
};
