import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Divider from "./shared/Devider";
import SocialLogin from "./shared/SocialLogin";
import Lottie from "lottie-react";
import loginLottie from "../assets/Lotties/login.json"; // Add your login Lottie animation here
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      // Replace with Firebase or custom login logic
      console.log("Logging in:", { email, password });
      toast.success("Login successful!");
      setFormData({ email: "", password: "" });
      login(email, password)
        .then((res) => {
          console.log(res);
          navigate(from);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        {/* Form Section */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">
            Welcome Back!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-9 right-3 text-sm text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:cursor-pointer text-white font-semibold py-2 rounded hover:bg-primary/90 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary font-medium underline">
              Register
            </Link>
          </p>
          <Divider />
          <SocialLogin />
        </div>

        {/* Lottie Animation */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Lottie animationData={loginLottie} />
        </div>
      </div>
    </div>
  );
};

export default Login;
