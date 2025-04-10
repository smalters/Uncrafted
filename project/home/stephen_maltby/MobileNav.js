import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
      <Link to="/" className="font-bold text-lg text-gray-800">
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
            className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg p-6 z-50"
          >
            <ul className="space-y-4 text-lg">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/full-kits" onClick={() => setIsOpen(false)}>
                  Full Kits
                </Link>
              </li>
              <li>
                <Link to="/category/tops" onClick={() => setIsOpen(false)}>
                  Tops
                </Link>
              </li>
              <li>
                <Link to="/category/bottoms" onClick={() => setIsOpen(false)}>
                  Bottoms
                </Link>
              </li>
              <li>
                <Link
                  to="/category/accessories"
                  onClick={() => setIsOpen(false)}
                >
                  Accessories
                </Link>
              </li>
            </ul>
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
