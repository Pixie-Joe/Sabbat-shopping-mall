// src/pages/CardForm.js
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const CardForm = () => {
  const location = useLocation();
  const selectedPlan = location.state?.plan;

  const [email, setEmail] = useState("");
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleCardChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  // 👉 Mock Payment Simulation
  const handlePayment = (e) => {
    e.preventDefault();
    // simulate payment success
    setPaymentStatus("success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Card Payment
        </h2>

        {/* ✅ Payment Success Screen */}
        {paymentStatus === "success" && (
          <div className="text-center space-y-6">
            <div className="text-green-600 font-semibold text-lg">
              ✅ Payment Successful!
            </div>
            <p className="text-gray-700">
              Thanks for subscribing, <span className="font-bold">{email}</span>!
              <br />
              Plan: <span className="font-bold">{selectedPlan?.name}</span>
              <br />
              Amount Paid:{" "}
              <span className="font-bold">
                ${Number(selectedPlan?.price).toFixed(2)}
              </span>
            </p>
            <p className="text-gray-500">We’re excited to have you on board 🎉</p>

            <div className="flex justify-center gap-4 mt-6">
              <NavLink
                to="/home"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Go Home
              </NavLink>
              <button
                onClick={() => setPaymentStatus(null)}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
              >
                Stay Here
              </button>
            </div>
          </div>
        )}

        {/* Payment Form (only show if not yet paid) */}
        {paymentStatus === null && selectedPlan && (
          <form onSubmit={handlePayment} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="example@email.com"
              />
            </div>

            {/* Locked Plan */}
            <div>
              <label className="block text-gray-600 mb-1">Plan</label>
              <input
                type="text"
                value={`${selectedPlan.name} - $${selectedPlan.price}/mo`}
                readOnly
                className="w-full px-4 py-3 border rounded-lg bg-gray-100 text-gray-700"
              />
            </div>

            {/* Card Inputs (visual only) */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 space-y-4 shadow-inner">
              <div>
                <label className="block text-sm">Cardholder Name</label>
                <input
                  type="text"
                  name="name"
                  value={card.name}
                  onChange={handleCardChange}
                  className="w-full px-3 py-2 rounded-lg text-black"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm">Card Number</label>
                <input
                  type="text"
                  name="number"
                  value={card.number}
                  onChange={handleCardChange}
                  maxLength={19}
                  className="w-full px-3 py-2 rounded-lg text-black"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm">Expiry</label>
                  <input
                    type="text"
                    name="expiry"
                    value={card.expiry}
                    onChange={handleCardChange}
                    maxLength={5}
                    className="w-full px-3 py-2 rounded-lg text-black"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm">CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    value={card.cvv}
                    onChange={handleCardChange}
                    maxLength={4}
                    className="w-full px-3 py-2 rounded-lg text-black"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>

            {/* ✅ Pay Button */}
            <button
              type="submit"
              disabled={!email}
              className={`w-full font-semibold py-3 rounded-lg transition ${
                !email
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-pink-600 hover:bg-pink-700 text-white"
              }`}
            >
              Pay Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CardForm;
