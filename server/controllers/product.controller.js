import { Product } from "../models/products.model.js";

export const allProducts = async function (req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

export const findProduct = async function (req, res) {
  const { id } = req.params;

  if (!id) res.status(400).json({ message: "Product ID is missing" });

  try {
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};
