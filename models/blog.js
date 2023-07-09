import { Schema,model,models } from "mongoose";

const blogSchema=new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        who:"user"
    },
    title:{
        type:String,
        required:[true,"Title is required"],

    },
    description:{
        type:String,
        required:[true,"Description is required"],
    },

});
const Blog=models.Blog|| model("Blog",blogSchema);
export default Blog;
