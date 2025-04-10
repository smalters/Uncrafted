import React from "react";
import { useParams, Link } from "react-router-dom";
import { fullProductList } from "../data/fullProductList";

export default function CategoryPage() {
  const { category } = useParams();
  const normalized = category ? category.toUpperCase() : "";

  if (!normalized) {
    return <div className="p-6 text-center text-lg">Invalid category.</div>;
  }

  const filtered = fullProductList.filter((p) =>
    p.category?.toUpperCase().includes(normalized)
  );

  if (!filtered.length) {
    return (
      <div className="p-6 text-center text-lg">
        No products found in this category.
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 py-16 bg-[#f9f9f9]">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
        {category.replace(/-/g, " ")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <div
            key={product.slug}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <Link to={`/product/${product.slug}`}>
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className="w-full h-72 object-cover rounded-t-3xl hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{product.category}</p>
                <p className="text-lg font-bold text-black mb-3">
                  {product.price}
                </p>
              </div>
            </Link>
            <div className="px-5 pb-5">
              <a
                href={product.shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buy ${product.name} on Shopify (opens in new tab)`}
              >
                <button className="w-full py-2 rounded-xl bg-black text-white hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
