import { product } from "../models/products.model.js";

export const allProducts = async function (req, res) {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};
