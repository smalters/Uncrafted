import React from "react";
import { useParams } from "react-router-dom";
import { fullProductList } from "../data/fullProductList";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = fullProductList.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-6 text-center text-xl">Product not found.</div>;
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 bg-[#f9f9f9]">
      <div className="rounded-3xl overflow-hidden shadow-md">
        <img
          src={product.image}
          alt={`Image of ${product.name}`}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            {product.name}
          </h1>
          <p className="text-sm uppercase text-gray-400 mb-2">
            {product.category}
          </p>
          <p className="text-2xl text-black font-semibold">{product.price}</p>
        </div>

        <div>
          <p className="font-semibold text-sm text-gray-700 mb-2">
            Available Sizes:
          </p>
          <div
            className="flex flex-wrap gap-3"
            role="list"
            aria-label="Available sizes"
          >
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-4 py-1 text-sm border border-gray-300 rounded-full text-gray-700"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <a
          href={product.shopifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Buy ${product.name} on Shopify (opens in new tab)`}
        >
          <button className="w-full py-3 px-6 text-lg rounded-xl bg-black text-white hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
            Buy Now
          </button>
        </a>
      </div>
    </main>
  );
}
