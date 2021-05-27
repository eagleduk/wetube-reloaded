import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
  username: {
    type: "String",
    require: true,
  },
  email: {
    type: "String",
    require: true,
    unique: true,
  },
  avatarUrl: "String",
  password: {
    type: "String",
    default: undefined,
  },
});

schema.pre("save", async function () {
  if (this.password) this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", schema);

export default User;
