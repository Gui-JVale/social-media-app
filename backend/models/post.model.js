import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  body: String,
  image: String,
  createdAt: String,
  username: String,
  authorFirstName: String,
  authorLasName: String,
  user: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  comments: [
    {
      body: String,
      username: String,
      createdAt: String
      // type: Schema.Types.ObjectId,
      // ref: "Comment"
    }
  ],
  likes: [
    {
      username: String,
      createdAt: String
      // type: Schema.Types.ObjectId,
      // ref: "User"
    }
  ]
});

const Post = mongoose.model("Post", postSchema);

export default Post;