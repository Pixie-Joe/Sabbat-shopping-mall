import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {

  
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const checkfield = () => {
    if (fullname && email && password && address) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    checkfield();

    if (!isValid) {
      toast.error("Please fill in all fields");
      return;
    }

    const newUser = { 
      fullname, 
      email, 
      password, 
      address 
    };

    registerUser(newUser);
  };

  const registerUser = async (newUser) => {
    try {
      const res = await fetch(`http://localhost:8080/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (res.ok) {
        toast.success("Registration was successful");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        navigate("/login");
      } else {
        const errData = await res.json();
        toast.error(errData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error while creating user:", error);
      toast.error("Server error. Try again later.");
    } finally {
      setIsValid(false);
      setFullname('');
      setEmail('');
      setPassword('');
      setAddress('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-600 italic font-serif">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Sabbat shop</h2>
        <form onSubmit={handleRegistration} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              onKeyUp={checkfield}
              required
              className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyUp={checkfield}
              required
              className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={checkfield}
              required
              className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onKeyUp={checkfield}
              required
              className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-700 transition"
            onMouseOver={checkfield}
          >
            Register
          </button>
        </form>
        <NavLink to="/login">
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account? Login
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
