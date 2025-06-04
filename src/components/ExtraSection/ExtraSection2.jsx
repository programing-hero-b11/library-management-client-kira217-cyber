import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ExtraSection2 = () => {
  return (
    <section className="bg-gradient-to-br from-[#DBEAFE] via-[#EFF6FF] to-[#DBEAFE] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-[#1E3A8A] mb-10"
        >
          📘 Featured Book of the Month
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.ibb.co/Xxn9K6rb/premium-photo-1703701579761-2c8642c9d6c0.jpg"
              alt="Featured Book"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          {/* Book Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-[#1E40AF] mb-4">
              “The Time Traveler’s Guide”
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Step into a world where past and future collide. This thrilling sci-fi novel will take you on an unforgettable journey through time, emotion, and imagination.
            </p>

            <ul className="mb-6 space-y-2 text-gray-600">
              <li>📖 <strong>Author:</strong> Jonathan Mars</li>
              <li>🌟 <strong>Genre:</strong> Sci-Fi / Adventure</li>
              <li>🎯 <strong>Rating:</strong> ★★★★☆ (4.8)</li>
              <li>🕰️ <strong>Pages:</strong> 368</li>
            </ul>

            <button className="bg-[#2563EB] hover:cursor-pointer text-white px-6 py-3 rounded-full hover:bg-[#1D4ED8] transition">
              <Link to='/allBooks'>Read More</Link>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection2;
