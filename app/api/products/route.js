import { Product } from "@/app/lib/models/productModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
const { mongoconnection } = process.env;

export async function GET() {
  try {
    await mongoose.connect(mongoconnection);
    const data = await Product.find({});
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ result: "Success" });
}
