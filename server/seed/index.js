import connectDb from "../dbConfig.js";
import { Product } from "../models/products.model.js";

const sampleProducts = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    quantity: 100,
  },
  {
    name: "Bluetooth Headphones",
    price: 59.99,
    category: "Electronics",
    quantity: 50,
  },
  { name: "Office Chair", price: 120.0, category: "Furniture", quantity: 20 },
  {
    name: "Mechanical Keyboard",
    price: 89.99,
    category: "Electronics",
    quantity: 35,
  },
  { name: "LED Desk Lamp", price: 18.5, category: "Home", quantity: 75 },
  {
    name: "Water Bottle",
    price: 10.99,
    category: "Accessories",
    quantity: 200,
  },
  {
    name: "Notebook (200 pages)",
    price: 4.99,
    category: "Stationery",
    quantity: 500,
  },
  { name: "Smart Watch", price: 199.99, category: "Wearables", quantity: 15 },
  { name: "Backpack", price: 45.0, category: "Bags", quantity: 60 },
  {
    name: "HDMI Cable (2m)",
    price: 8.99,
    category: "Accessories",
    quantity: 120,
  },
  {
    name: "USB-C Charger",
    price: 29.99,
    category: "Electronics",
    quantity: 80,
  },
  {
    name: "Gaming Monitor",
    price: 249.99,
    category: "Electronics",
    quantity: 10,
  },
  { name: "Desk Organizer", price: 14.99, category: "Home", quantity: 90 },
  { name: "Laptop Stand", price: 34.99, category: "Electronics", quantity: 40 },
  {
    name: "Ergonomic Footrest",
    price: 27.99,
    category: "Office",
    quantity: 30,
  },
  { name: "Power Strip", price: 12.99, category: "Electronics", quantity: 140 },
  { name: "Fountain Pen", price: 6.5, category: "Stationery", quantity: 300 },
  { name: "Table Clock", price: 22.0, category: "Home", quantity: 25 },
  {
    name: "Smartphone Tripod",
    price: 15.99,
    category: "Photography",
    quantity: 70,
  },
  {
    name: "Portable SSD 1TB",
    price: 109.99,
    category: "Electronics",
    quantity: 18,
  },
];

async function seedDb() {
  try {
    connectDb();

    await Product.deleteMany();

    await Product.insertMany(sampleProducts);

    console.log("database seeded successfully");
  } catch (error) {
    console.log(`Error Seeding Db: ${error}`);
  }
}

seedDb();
