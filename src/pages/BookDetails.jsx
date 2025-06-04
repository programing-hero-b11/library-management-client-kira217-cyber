import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { Dialog } from "@headlessui/react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";

const BookDetails = () => {
  const { user } = useAuth();
  const bookDetails = useLoaderData();
  const initialBook = bookDetails.data;
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(initialBook.quantity);
  const [isOpen, setIsOpen] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const [alreadyBorrowed, setAlreadyBorrowed] = useState(false);

  const { _id, name, author, email, category, rating, description, image } =
    initialBook;

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/borrowed/check`, {
        params: {
          email: user.email,
          bookId: _id,
        },
      })
      .then((res) => {
        if (res.data?.alreadyBorrowed) {
          setAlreadyBorrowed(true);
        } else {
          setAlreadyBorrowed(false);
        }
      })
      .catch((error) => {
        console.error("Borrow check failed", error);
      });
  }, [user?.email, _id]);

  const handleBorrow = () => {
    if (user?.email === email) {
      toast.error("Please this is Your Book. Select another book.");
      return;
    }

    if (alreadyBorrowed) {
      toast.error("You have already borrowed this book.");
      return;
    }

    if (!returnDate) {
      toast.error("Please select a return date.");
      return;
    }

    if (quantity <= 0) {
      toast.error("No books available.");
      return;
    }
    const borrowedDate = new Date().toISOString(); // ⬅️ current time

    const borrowedBook = {
      bookId: _id,
      email: user?.email,
      returnDate,
      borrowedDate,
      name,
      author,
      category,
      rating,
      description,
      image,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/borrowed/${_id}`, borrowedBook)
      .then((res) => {
        if (res.data.insertedId) {
          setQuantity((prev) => prev - 1);
          setAlreadyBorrowed(true);
          toast.success("Book borrowed successfully!");
          navigate("/borrowedBooks");
          setIsOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={image}
            alt={name}
            className="w-full md:w-64 h-80 object-cover rounded shadow"
          />
          <div className="flex-1 space-y-2">
            <h2 className="text-3xl font-bold text-[#2563EB]">{name}</h2>
            <p>
              <strong>Author:</strong> {author}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {rating}/5
            </p>
            <p>
              <strong>Available Quantity:</strong> {quantity}
            </p>
            <p className="text-gray-700">
              <strong>Description:</strong> {description}
            </p>

            <button
              onClick={() => setIsOpen(true)}
              disabled={quantity <= 0 || alreadyBorrowed}
              className={`mt-4 px-4 py-2 rounded text-white font-semibold ${
                quantity <= 0 || alreadyBorrowed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#2563EB] hover:bg-blue-700 transition"
              }`}
            >
              {alreadyBorrowed
                ? "Already Borrowed"
                : quantity <= 0
                ? "Not Available"
                : "Borrow"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded max-w-md w-full p-6 shadow-lg">
            <Dialog.Title className="text-xl font-bold text-[#2563EB] mb-4">
              Borrow Book
            </Dialog.Title>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                  className="w-full border rounded px-3 py-2 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full border rounded px-3 py-2 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Return Date
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <button
                onClick={handleBorrow}
                className="w-full mt-4 hover:cursor-pointer bg-[#2563EB] text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
              >
                Confirm Borrow
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default BookDetails;
