import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" />
    </AuthProvider>
  </StrictMode>
);
