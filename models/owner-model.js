import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true, 
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      lowercase: true,
    },
    password: {
      type: String, 
      required: true,
    },
    product: {
      type: Array,
      default: [], 
    },
    picture: {
      type: String,
      default: "", 
    },
    gstin: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Owner = mongoose.model("Owner", ownerSchema);
export default Owner;
