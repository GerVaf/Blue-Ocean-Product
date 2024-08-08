// app/api/products/route.ts
import dbConnect from "@/lib/db";
import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

// GET: Fetch all products
export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST: Create a new product
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json(); // Assuming the incoming request contains JSON data

    // Optionally: Generate an ID if not provided, or ensure unique ID
    const existingProduct = await Product.findOne({ id: data.id });
    if (existingProduct) {
      return NextResponse.json(
        { error: "Product with this ID already exists" },
        { status: 400 }
      );
    }

    const product = new Product(data);
    await product.save();
    return new NextResponse(JSON.stringify(product), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to create product" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
