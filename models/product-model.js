import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    discount: {
      type: Number,
      default: 0,
    },
    bgColor: {
      type: String,
    },
    panelColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
  },
  { timestamps: true }
);

const product = mongoose.model("product", productSchema);
export default product;
