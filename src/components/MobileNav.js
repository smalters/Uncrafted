import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/90 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center md:hidden sticky top-0 z-50">
      <Link
        to="/"
        className="text-xl font-extrabold tracking-tight text-gray-900"
      >
        Uncrafted
      </Link>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl text-gray-700 focus:outline-none"
      >
        ☰
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 z-50 flex flex-col gap-4 text-lg font-medium"
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-black"
            >
              Home
            </Link>
            <Link
              to="/category/full-kits"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-black"
            >
              Full Kits
            </Link>
            <Link
              to="/category/tops"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-black"
            >
              Tops
            </Link>
            <Link
              to="/category/bottoms"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-black"
            >
              Bottoms
            </Link>
            <Link
              to="/category/accessories"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-black"
            >
              Accessories
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 text-2xl"
            >
              ×
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
