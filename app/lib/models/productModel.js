import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  company: String,
  colour: String,
  category: String,
});

export const Product =
  mongoose.models.Product || mongoose.model("products", productSchema);
