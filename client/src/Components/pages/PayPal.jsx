// src/pages/Paypal.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Paypal = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // success message
  const [deliveryDate, setDeliveryDate] = useState("");
  const [countdown, setCountdown] = useState(0); // seconds until redirect

  useEffect(() => {
    // countdown interval (shows seconds left until redirect)
    let interval;
    if (countdown > 0) {
      interval = setInterval(() => setCountdown((c) => c - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  useEffect(() => {
    // auto navigate after message shown (5s)
    let navTimer;
    if (message) {
      navTimer = setTimeout(() => {
        navigate("/home");
      }, 5000);
    }
    return () => clearTimeout(navTimer);
  }, [message, navigate]);

  const handlePay = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate server/payment delay
    setTimeout(() => {
      setLoading(false);

      // generate random delivery date between 3 - 10 days from now
      const today = new Date();
      const randomDays = Math.floor(Math.random() * 8) + 3; // 3..10
      const delivery = new Date(today);
      delivery.setDate(today.getDate() + randomDays);
      const formatted = delivery.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setDeliveryDate(formatted);
      setMessage(
        `✅ Payment successful with PayPal!\nYour order will be delivered on ${formatted}.`
      );
      setCountdown(5); // show 5s countdown and then redirect
    }, 2000);
  };

  // If payment succeeded: show success + delivery date + countdown
  if (message) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Payment Successful 🎉</h2>
          <p className="text-gray-700 whitespace-pre-line">{message}</p>
          <p className="mt-4 text-sm text-gray-500">
            Redirecting to the home page in{" "}
            <span className="font-semibold">{countdown}</span> second
            {countdown === 1 ? "" : "s"}...
          </p>
        </div>
      </div>
    );
  }

  // Payment form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">💰 PayPal Payment</h1>

        <form onSubmit={handlePay} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">PayPal Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={!email || !password || loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              !email || !password || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Processing..." : "Continue with PayPal"}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          This is a demo checkout — no real payment will be processed.
        </p>
      </div>
    </div>
  );
};

export default Paypal;
