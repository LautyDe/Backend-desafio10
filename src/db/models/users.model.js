import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  password: { type: String },
  cartId: { type: String },
  role: { type: String, default: "user" },
});

export const usersModel = mongoose.model("Users", usersSchema);
