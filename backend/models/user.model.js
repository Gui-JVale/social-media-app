import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, require: true } ,
  password: String,
  firstName: { type: String },
  lastName: { type: String },
  createdAt: { type: String, default: Date.now }
});
const User = mongoose.model('User', userSchema);

export default User;