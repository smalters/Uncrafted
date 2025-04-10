import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-extrabold mb-4">Uncrafted</h3>
          <p className="text-sm text-gray-400">
            Performance-first gear for riders and doers who live outside the
            lines.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/category/full-kits" className="hover:underline">
                Full Kits
              </Link>
            </li>
            <li>
              <Link to="/category/tops" className="hover:underline">
                Tops
              </Link>
            </li>
            <li>
              <Link to="/category/bottoms" className="hover:underline">
                Bottoms
              </Link>
            </li>
            <li>
              <Link to="/category/accessories" className="hover:underline">
                Accessories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-400">
            Email us at{" "}
            <a href="mailto:info@uncrafteduk.com" className="underline">
              info@uncrafteduk.com
            </a>
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-12">
        © {new Date().getFullYear()} Uncrafted UK. All rights reserved.
      </div>
    </footer>
  );
}
