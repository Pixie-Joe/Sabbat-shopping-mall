import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppointmentPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    sizes: [],
    shoeSize: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle clothing size checkboxes
  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      if (checked) {
        return { ...prev, sizes: [...prev.sizes, value] };
      } else {
        return { ...prev, sizes: prev.sizes.filter((s) => s !== value) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/appointment-success", { state: { ...form } });
  };

  // Categories that need clothing sizes
  const categoriesWithSizes = [
    "mens-shirts",
    "mens-suits",
    "mens-casual",
    "womens-dresses",
    "womens-formal",
    "womens-casual",
    "kids-school",
    "kids-casual",
    "jackets",
    "jeans",
    "skirts",
    "hoodies",
  ];

  // Categories that need shoe size
  const categoriesWithShoeSize = ["accessories-shoes"];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Book a Clothing Appointment
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Schedule a personalized visit to try on or reserve your favorite clothing.
        </p>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+1 234 567 890"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 mb-1">Clothing Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Select a category</option>
              <optgroup label="👔 Men">
                <option value="mens-shirts">Shirts</option>
                <option value="mens-suits">Suits</option>
                <option value="mens-casual">Casual Wear</option>
                <option value="jackets">Jackets</option>
                <option value="jeans">Jeans</option>
                <option value="hoodies">Hoodies</option>
              </optgroup>
              <optgroup label="👗 Women">
                <option value="womens-dresses">Dresses</option>
                <option value="womens-formal">Formal Wear</option>
                <option value="womens-casual">Casual Wear</option>
                <option value="skirts">Skirts</option>
                <option value="jeans">Jeans</option>
                <option value="jackets">Jackets</option>
              </optgroup>
              <optgroup label="🧒 Kids">
                <option value="kids-school">School Wear</option>
                <option value="kids-casual">Casual Wear</option>
              </optgroup>
              <optgroup label="👜 Accessories">
                <option value="accessories-bags">Bags</option>
                <option value="accessories-shoes">Shoes</option>
                <option value="accessories-belts">Belts</option>
                <option value="accessories-hats">Hats</option>
              </optgroup>
            </select>
          </div>

          {/* Clothing Size Checkboxes */}
          {categoriesWithSizes.includes(form.category) && (
            <div>
              <label className="block text-gray-700 mb-2">Select Sizes</label>
              <div className="flex flex-wrap gap-4">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <label key={size} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={size}
                      checked={form.sizes.includes(size)}
                      onChange={handleSizeChange}
                      className="h-4 w-4 text-pink-600 border-gray-300 rounded"
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Shoe Sizes Dropdown */}
          {categoriesWithShoeSize.includes(form.category) && (
            <div>
              <label className="block text-gray-700 mb-2">Select Shoe Size (US)</label>
              <select
                name="shoeSize"
                value={form.shoeSize}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Choose Size</option>
                {[...Array(11).keys()].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Date & Time */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-700 mb-1">Special Requests</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="e.g. Need a fitting room for 3 people"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="3"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition mt-4"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentPage;
