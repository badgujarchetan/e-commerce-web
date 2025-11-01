import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    cart: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Array,
      default: [],
    },
    contact: {
      type: Number,
      validate: {
        validator: function (v) {
          return /^[0-9]{10}$/.test(v); 
        },
        message: (props) => `${props.value} is not a valid contact number!`,
      },
    },
    picture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
