"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  permalink: string;
  price: string;
  images: { src: string }[];
  categories: { name: string }[];
}

const WooProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL || "/api/products", {
          cache: "no-store", // Ensure fresh data
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setProducts(data);
      } catch (error: any) {
        console.error("Failed to fetch products:", error.message);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center">Loading products...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                key={product.id}
                href={product.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-xl p-4 shadow hover:shadow-lg transition"
              >
                <Image
                  src={product.images?.[0]?.src || "/placeholder.png"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain w-full h-64 mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                <p className="text-lg text-meta font-medium">${product.price}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {product.categories?.map((c) => c.name).join(", ") || "No categories"}
                </p>
              </Link>
            ))
          ) : (
            <div className="text-center">No products found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WooProductGrid;