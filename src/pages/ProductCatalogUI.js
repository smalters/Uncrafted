import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { fullProductList } from "../data/fullProductList";
import HeroBanner from "../components/HeroBanner";

export default function ProductCatalogUI() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ALL");
  const [page, setPage] = useState(1);
  const perPage = 9;

  const fuse = useMemo(
    () =>
      new Fuse(fullProductList, {
        keys: ["name", "slug", "category"],
        threshold: 0.4,
        includeMatches: true,
      }),
    []
  );

  const filtered = useMemo(() => {
    const base =
      category === "ALL"
        ? fullProductList
        : fullProductList.filter((p) =>
            p.category?.toUpperCase().includes(category)
          );
    if (!query) return base;
    return fuse
      .search(query)
      .map((r) => r.item)
      .filter((p) => base.includes(p));
  }, [query, category]);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);
  const categories = useMemo(
    () => [
      "ALL",
      ...Array.from(
        new Set(
          fullProductList.flatMap((p) =>
            p.category?.split(";").map((c) => c.trim().toUpperCase())
          )
        )
      ),
    ],
    []
  );

  return (
    <>
      <HeroBanner />
      <div className="px-4 sm:px-6 md:px-10 py-16 bg-[#f9f9f9]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-black"
          />
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 border rounded-full text-sm font-medium transition ${
                  cat === category
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
                onClick={() => {
                  setCategory(cat);
                  setPage(1);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((p) => (
            <div
              key={p.slug}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Link to={`/product/${p.slug}`}>
                <img
                  src={p.image}
                  alt={`Image of ${p.name}`}
                  className="w-full h-72 object-cover rounded-t-3xl hover:scale-105 transition-transform duration-500"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">{p.category}</p>
                  <p className="text-lg font-bold text-black mb-3">{p.price}</p>
                </div>
              </Link>
              <div className="px-5 pb-5">
                <a
                  href={p.shopifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buy ${p.name} on Shopify (opens in new tab)`}
                >
                  <button className="w-full py-2 rounded-xl bg-black text-white hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 border rounded-full bg-black text-white disabled:opacity-40"
            >
              Previous
            </button>
            <span className="text-sm">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 border rounded-full bg-black text-white disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
