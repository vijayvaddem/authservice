import mongoose from "mongoose";

//inteface to define user schema attributes
interface UserAttr {
  email: string;
  password: string;
}

//interface which describsed User model
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttr): UserDoc;
}

//single user doc interface
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

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

userSchema.statics.build = (attr: UserAttr) => {
  return new User(attr);
};

//create model in MongoDB
const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

User.build({
  email: "v@v.com",
  password: "24234",
});

export { User };
