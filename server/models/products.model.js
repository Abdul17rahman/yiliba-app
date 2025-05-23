import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const Product = new mongoose.model("Product", ProductSchema);
