import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AppointmentSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No appointment found. Please book again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          🎉 Appointment Booked Successfully!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you <span className="font-semibold">{state.name}</span>! <br />
          Your appointment has been scheduled for:
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-inner">
          <p className="text-lg font-medium">📅 {state.date}</p>
          <p className="text-lg font-medium">⏰ {state.time}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/home")}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate("/appointment")}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
          >
            Book Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSuccess;
