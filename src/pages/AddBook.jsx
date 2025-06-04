import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";

const AddBook = () => {
  const { user } = useAuth();

  const categories = [
    "Select a Category",
    "Novel",
    "Thriller",
    "History",
    "Drama",
    "Sci-Fi",
    "Fantasy",
    "Biography",
    "Adventure",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (data.category === "Select a Category") {
      toast.error("Please select a valid category.");
      return;
    }

    // ✅ Convert quantity and rating to numbers
    const bookData = {
      ...data,
      quantity: Number(data.quantity),
      rating: Number(data.rating),
      email: user?.email || "unknown", // Optional: Add user's email
    };

    console.log(bookData); // Replace with API call to DB
    toast.success("Book added successfully!");
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-[#2563EB] mb-6">
          Add a New Book
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 grid-cols-1 sm:grid-cols-2"
        >
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">
              Book Cover URL
            </label>
            <input
              type="text"
              name="image"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Book Title</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">
              Author Name
            </label>
            <input
              type="text"
              name="author"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              required
              className="w-full border rounded px-3 py-2"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium mb-1">
              Rating (1-5)
            </label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Short Description
            </label>
            <textarea
              name="description"
              required
              rows="4"
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>

          {/* Static Book Content */}
          <div className="col-span-1 sm:col-span-2">
            <div className="p-4 mt-2 bg-blue-50 border-l-4 border-blue-500 rounded shadow text-sm text-gray-700">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                📘 Book Content
              </h3>
              <p>
                This book provides valuable insights into storytelling, history,
                and creative imagination. It is a great resource for readers who
                enjoy a deep dive into exciting fictional or real-world topics.
              </p>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#2563EB] hover:cursor-pointer text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              Add Book
            </button>
          </div>
        </form>

        <p className="text-gray-600 text-sm mt-6 text-center">
          <strong>Note:</strong> Ensure all information is accurate. This form
          is only accessible to authorized users.
        </p>
      </div>
    </div>
  );
};

export default AddBook;
