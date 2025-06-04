import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ExtraSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#2563EB]/10 to-[#38BDF8]/10 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#1E3A8A]">
            Why Reading Matters
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Reading strengthens the brain, expands vocabulary, reduces stress, and improves memory. Join our community to develop a daily reading habit and unlock new opportunities through knowledge.
          </p>
          <button className="bg-[#2563EB] hover:cursor-pointer text-white px-6 py-3 rounded-full hover:bg-[#1D4ED8] transition">
            <Link to='/allBooks'>Start Reading</Link>
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.ibb.co/dwDPfKBk/premium-photo-1703701579660-8481915a7991.jpg"
            alt="Reading Book"
            className="rounded-lg shadow-xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraSection;
