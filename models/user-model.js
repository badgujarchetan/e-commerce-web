import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    cart: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
    },
    order: {
      type: Array,
      default: [],
    },
    contact: {
      type: Number,
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);
export default user;
