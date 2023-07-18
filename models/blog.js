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
  genre: {
    type: String,
    required: [true, "title is required."],
  },
  description: {
    type: String,
    required: [true, "description is required."],
  },
  date:{
    type:Date,
    required:[true,"date is required"],
    default:Date.now()
  },

  content:{
    type:Schema.Types.Mixed,
    required:[true,"content is required"]
  }
  
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
