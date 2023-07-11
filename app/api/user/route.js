import { connectToDB } from "@utils/database";
import User from "@models/user";

export const GET = async (request) => {
    const userud=request.query.userid
  try {
    await connectToDB();
    const userDetails = await new User.findOne({ email: email });
    return new Response(JSON.stringify(userDetails), { status: 201 });
  } catch (error) {
    return new Promise("eror", { status: 500 });
  }
};
