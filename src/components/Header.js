import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-tight text-gray-900"
      >
        Uncrafted
      </Link>
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <Link
          to="/category/full-kits"
          className="text-gray-600 hover:text-black transition"
        >
          Full Kits
        </Link>
        <Link
          to="/category/tops"
          className="text-gray-600 hover:text-black transition"
        >
          Tops
        </Link>
        <Link
          to="/category/bottoms"
          className="text-gray-600 hover:text-black transition"
        >
          Bottoms
        </Link>
        <Link
          to="/category/accessories"
          className="text-gray-600 hover:text-black transition"
        >
          Accessories
        </Link>
      </nav>
    </header>
  );
}
