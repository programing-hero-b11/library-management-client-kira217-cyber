import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div>
        <h1 className="text-[100px] font-bold text-[#2563EB] animate-bounce">😢</h1>
        <h2 className="text-5xl font-bold text-[#2563EB] mb-4">404 - Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="bg-[#2563EB] hover:cursor-pointer hover:bg-blue-700 text-white px-6 py-2 rounded text-lg transition">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
