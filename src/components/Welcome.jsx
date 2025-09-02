import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md p-6 bg-white shadow rounded-2xl text-center">
      <h2 className="text-2xl font-bold mb-2">Welcome to PopX</h2>
      <p className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button
        onClick={() => navigate("/signup")}
        className="w-full bg-purple-600 text-white py-3 rounded-lg mb-3 hover:bg-purple-700 transition"
      >
        Create Account
      </button>

      <button
        onClick={() => navigate("/login")}
        className="w-full bg-purple-100 text-purple-600 py-3 rounded-lg hover:bg-purple-200 transition"
      >
        Already Registered? Login
      </button>
    </div>
  );
}
