import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center bg-black text-white px-6 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://via.placeholder.com/800x600"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0 lg:h-[80vh]"
      >
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
      </video>

      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-xl"
          itemProp="headline"
        >
          Gear That Moves With You
        </h1>
        <p
          className="text-lg sm:text-xl text-gray-300 mb-8"
          itemProp="description"
        >
          Engineered for performance. Designed for expression.
        </p>
        <Link
          to="/category/full-kits"
          className="inline-block px-8 py-3 text-lg bg-white text-black rounded-full font-semibold hover:bg-gray-200 hover:scale-105 shadow-lg transition-all duration-300"
        >
          Shop Full Kits
        </Link>
      </motion.div>
    </section>
  );
}
