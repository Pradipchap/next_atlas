import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    who: "User",
  },
  title: {
    type: String,
    required: [true, "Prompt is required."],
  },
  description: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
