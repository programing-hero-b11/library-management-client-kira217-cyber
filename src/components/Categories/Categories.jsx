import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { BookOpen, Zap, Globe, Film, Cpu, Star, User, Compass } from "lucide-react";

const categoryList = [
  { name: "Novel", icon: <BookOpen size={32} /> },
  { name: "Thriller", icon: <Zap size={32} /> },
  { name: "History", icon: <Globe size={32} /> },
  { name: "Drama", icon: <Film size={32} /> },
  { name: "Sci-Fi", icon: <Cpu size={32} /> },
  { name: "Fantasy", icon: <Star size={32} /> },
  { name: "Biography", icon: <User size={32} /> },
  { name: "Adventure", icon: <Compass size={32} /> },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#2563EB]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Book Categories
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryList.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all p-6 text-center cursor-pointer border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
            >
              <div className="text-[#2563EB] mb-3 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
