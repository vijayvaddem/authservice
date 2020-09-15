import mongoose from "mongoose";

//define schema for user
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//create model in MongoDB
const User = mongoose.model("User", userSchema);

export { User };
