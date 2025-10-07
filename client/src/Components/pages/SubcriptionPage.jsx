// src/components/SubscriptionModal.js
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const SubscriptionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  // Load logged-in user
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.email) {
        setUserEmail(parsedUser.email);
        setEmail(parsedUser.email); // 👈 auto-fill the email field
      } else {
        navigate("/login"); // redirect if user object doesn’t have email
      }
    } else {
      navigate("/login"); // redirect if no user found
    }
  }, [navigate]);

  if (!isOpen) return null;

  // Simple email validation
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl mx-4 p-8 rounded-2xl relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Stay in Style</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive exclusive fashion drops, deals, and updates.
          </p>

          {/* Show the logged-in email */}
          <p className="text-sm text-gray-500 mb-4">
            Logged in as <span className="font-semibold">{userEmail}</span>
          </p>

          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={(e) => {
              e.preventDefault();
              if (isValidEmail(email)) {
                alert(`✅ Subscribed with: ${email}`);
                setIsOpen(false);
              }
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full md:w-3/4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              readOnly // 👈 makes sure user can’t change the email
            />
            <NavLink to="/plan">
              <button
                type="submit"
                disabled={!isValidEmail(email)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  isValidEmail(email)
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Subscribe Now
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
