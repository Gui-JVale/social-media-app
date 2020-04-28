import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  body: { type: String, required: true },
  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
    profilePicture: String,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
