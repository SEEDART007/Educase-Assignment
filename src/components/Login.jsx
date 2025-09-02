import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-md p-6 bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-bold mb-2">Signin to your PopX account</h2>
      <p className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
