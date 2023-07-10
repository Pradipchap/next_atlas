import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "title is required."],
  },
  description: {
    type: String,
    required: [true, "description is required."],
  },
  blogid:{
    type:Schema.Types.ObjectId,
    required:true

  }
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
