import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-lg p-6 bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Create your PopX account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Full Name*</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Phone number*</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Email address*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Password*</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium">Company name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium block">Are you an Agency?*</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={form.agency === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="No"
                checked={form.agency === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg mt-4 hover:bg-purple-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
