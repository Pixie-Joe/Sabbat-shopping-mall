// src/pages/PaymentCard.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentCard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { fullName, country, city, cartItems = [], total } = state || {};

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // format card number
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").substring(0, 16);
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(value);
  };

  // expiry format
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    setExpiry(value);
  };

  // expiry validation
  const isValidExpiry = (val) => {
    if (!/^\d{2}\/\d{2}$/.test(val)) return false;
    const [m, y] = val.split("/").map(Number);
    const now = new Date();
    const cy = now.getFullYear() % 100;
    const cm = now.getMonth() + 1;
    return m >= 1 && m <= 12 && (y > cy || (y === cy && m >= cm));
  };

  const isFormValid =
    name.trim() &&
    cardNumber.replace(/\s/g, "").length === 16 &&
    isValidExpiry(expiry) &&
    cvv.length === 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // delivery date
      const randomDays = Math.floor(Math.random() * 8) + 3;
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + randomDays);

      setMessage(`✅ Payment Successful! 🎉 
Your order will be delivered on ${deliveryDate.toDateString()}.`);

      // after 3s → receipt
      setTimeout(() => {
        navigate("/receipt", {
          state: {
            customerName: fullName,
            address: `${city}, ${country}`,
            name,
            cardNumber,
            price: total,
            paymentDate: new Date().toISOString(),
            deliveryDate: deliveryDate.toISOString(),
            products: cartItems, // 👈 send all products to receipt
          },
        });
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">💳 Credit Card Payment</h1>

      {/* Cart summary */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mb-6">
        <h2 className="font-semibold mb-3">🛒 Order Summary</h2>
        <ul className="divide-y">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="text-right font-bold mt-3">Total: ${total.toFixed(2)}</p>
      </div>

      {message ? (
        <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md text-center max-w-md">
          <p className="whitespace-pre-line">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            placeholder="xxxx xxxx xxxx xxxx"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={handleExpiryChange}
              className="border p-3 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
              className="border p-3 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              !isFormValid || loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentCard;
