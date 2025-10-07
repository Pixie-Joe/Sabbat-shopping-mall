// src/pages/CheckoutPage.js
import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Country, State, City } from "country-state-city";

const Checkout = () => {
  const { cartItems, clearCart } = useOutletContext();
  const navigate = useNavigate();

  // Form states
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [payment, setPayment] = useState("");

  // Total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Place order logic
  const handlePlaceOrder = () => {
    if (payment === "Cash on Delivery") {
      alert("🎉 Order placed successfully!");
      clearCart();
      navigate("/home");
    } else if (payment === "Credit Card") {
      navigate("/card", {
        state: { fullName, country, state, city, payment, cartItems, total },
      });
    } else if (payment === "PayPal") {
      navigate("/paypal", {
        state: { fullName, country, state, city, payment, cartItems, total },
      });
    }
  };

  // ✅ Empty cart case
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50">
        <div className="bg-yellow-100 p-8 rounded-full mb-6 shadow-md">
          <span className="text-6xl">🛒</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">
          Add some items to your cart before proceeding to checkout.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          🛍️ Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">🧾 Checkout</h2>

        {/* Cart Summary */}
        <ul className="divide-y divide-gray-200 mb-6">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between py-3 text-gray-700"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <span className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>

        <div className="text-right text-lg font-bold mb-6">
          Total: ${total.toFixed(2)}
        </div>

        {/* Checkout Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePlaceOrder();
          }}
          className="space-y-4"
        >
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Country Dropdown */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setState("");
                setCity("");
              }}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Select Country</option>
              {Country.getAllCountries().map((c) => (
                <option key={c.isoCode} value={c.isoCode}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* State Dropdown */}
          {country && (
            <div>
              <label htmlFor="state" className="block text-sm font-medium">
                State
              </label>
              <select
                id="state"
                name="state"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  setCity("");
                }}
                required
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="">Select State</option>
                {State.getStatesOfCountry(country).map((s) => (
                  <option key={s.isoCode} value={s.isoCode}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* City Dropdown */}
          {state && (
            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              <select
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="">Select City</option>
                {City.getCitiesOfState(country, state).map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Payment Method */}
          <div>
            <label htmlFor="payment" className="block text-sm font-medium">
              Payment Method
            </label>
            <select
              id="payment"
              name="payment"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">-- Select Payment --</option>
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Cash on Delivery</option>
            </select>
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            disabled={!fullName || !country || !state || !city || !payment}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              !fullName || !country || !state || !city || !payment
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {payment === "Cash on Delivery"
              ? "Place Order"
              : "Proceed to Payment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
