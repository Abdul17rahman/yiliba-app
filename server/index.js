import express from "express";
import connectDB from "./dbConfig.js";
import { router as productRouter } from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.use("/api", productRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
