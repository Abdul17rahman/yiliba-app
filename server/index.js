import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.json({ status: 200, message: "OK" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
