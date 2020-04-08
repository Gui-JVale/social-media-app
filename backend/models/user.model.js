import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, require: true } ,
  password: String,
  firstName: { type: String },
  lastName: { type: String },
  picture: String,
  createdAt: { type: Date, default: Date.now },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});
const User = mongoose.model('User', userSchema);

export default User;