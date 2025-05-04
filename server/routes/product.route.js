import express from "express";
import { allProducts, findProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/products", allProducts);
router.get("/products/:id", findProduct);

export { router };
