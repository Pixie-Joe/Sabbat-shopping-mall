import React from 'react';
import { NavLink } from 'react-router-dom';

const plans = [
  {
    name: 'Basic Plan',
    price: 25,
    features: ['Access to basic products', 'Monthly newsletter', 'Email support'],
  },
  {
    name: 'Regular Plan',
    price: 55.99,
    features: ['Everything in Basic', 'Early access to new arrivals', '5% discount on all orders'],
    popular: true,
  },
  {
    name: 'Premium Plan',
    price: 99.99,
    features: ['Everything in Regular', 'Free shipping', '10% discount', 'VIP customer support'],
  },
];

const PlanPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Choose Your Plan
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between transition transform hover:scale-105 ${
              plan.popular ? 'border-4 border-pink-500' : ''
            }`}
          >
            {plan.popular && (
              <span className="text-sm bg-pink-500 text-white px-3 py-1 rounded-full mb-2">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {plan.name}
            </h3>
            <p className="text-pink-600 text-3xl font-bold mb-4">
              ${plan.price}/mo
            </p>
            <ul className="text-gray-600 mb-6 space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            {/* Pass plan info as state */}
            <NavLink to="/cardID" state={{ plan }}>
              <button className="mt-auto bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition">
                Select Plan
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanPage;
