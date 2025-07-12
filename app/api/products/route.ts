import { wooApi } from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await wooApi.get("products", { per_page: 20 });
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("WooCommerce API error:", error.message);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}