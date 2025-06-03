import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = {
    displayName: "John Doe",
    email: "johndoe@example.com",
    photoURL: "https://i.pravatar.cc/150?img=3",
  };
  const handleLogout = () => {
    console.log("User logged out (fake)");
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:text-white"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/allBooks"
              className="hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addBook"
              className="hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/borrowedBooks"
              className="hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Borrowed Books
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-[#2563EB] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="text-xl font-bold">
          <NavLink to="/" className="hover:text-white">
            📚 LibraryHub
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">{navLinks}</ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <NavLink to="/login" className="hover:text-white hidden md:block">
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="hover:text-white hidden md:block"
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white"
                />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-black text-sm px-3 py-1 rounded shadow-md hidden group-hover:block whitespace-nowrap z-10">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="ml-4 text-sm hover:underline hover:cursor-pointer hidden md:inline"
              >
                Logout
              </button>
            </>
          )}

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#2563EB] text-white px-4 pb-4 space-y-2">
          {navLinks}
          {!user ? (
            <>
              <li>
                <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              {/* <button>Logout</button> */}
              <button className="hover:cursor-pointer hover:underline" onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
