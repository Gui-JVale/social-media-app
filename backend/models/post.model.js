import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  body: { type: String, required: true },
  image: String,
  createdAt: { type: Date, default: Date.now },

  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
    profilePicture: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  likes: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      username: String,
      createdAt: { type: String, default: Date.now },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
