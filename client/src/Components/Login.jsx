import { useState } from "react";
import { FaEye, FaEyeSlash, FaFingerprint } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImAppleinc } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";
import goggle from "../Components/image/erasebg-transformed.png";
import logo from "../Components/image/ChatGPT Image Jun 8, 2025, 01_11_08 AM.png";
import { NavLink, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const checkfield = () => {
    setIsValid(email !== "" && password !== "");
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

 const handleLogin = (e) => {
  checkfield();
  e.preventDefault();
  const user = { email, password };
  loginUser(user);
};
 const loginUser = async (user) => {
  try {
    const res = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    if (res.status === 200 && data.success) {
      // Save only the user object
      localStorage.setItem('currentUser', JSON.stringify(data.user));

      // Show a plain JS alert message
      alert("Login successful!");

      // Redirect to home page
      navigate("/home");
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    alert("Error while logging in");
    console.error(err);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8">
      <form
        className="w-full max-w-md sm:max-w-lg bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-6 sm:p-8 flex flex-col items-center"
        onSubmit={handleLogin}
      >
        {/* Logo */}
        <img src={logo} className="w-16 sm:w-20 mx-auto mt-2" alt="logo" />

        <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center mt-4">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
          Don't have an account?
          <NavLink
            to="/"
            className="text-white cursor-pointer hover:underline ml-1"
          >
            Sign up
          </NavLink>
        </p>

        {errorMsg && (
          <p className="text-red-500 text-center text-sm mt-2">{errorMsg}</p>
        )}

        {/* Email input */}
        <div className="mt-6 w-full">
          <div className="flex items-center bg-gray-600 rounded-lg px-3 h-12 sm:h-14 w-full">
            <MdAlternateEmail className="text-white text-lg sm:text-xl" />
            <input
              type="email"
              placeholder="Email account"
              className="bg-gray-600 border-0 outline-none text-white ml-3 w-full text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyUp={checkfield}
              required
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mt-4 w-full">
          <div className="flex items-center bg-gray-600 rounded-lg px-3 h-12 sm:h-14 w-full">
            <FaFingerprint className="text-white text-lg sm:text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent border-0 outline-none text-white ml-3 w-full text-sm sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={checkfield}
              required
            />
            {showPassword ? (
              <FaEyeSlash
                size={20}
                className="text-white cursor-pointer ml-2"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEye
                size={20}
                className="text-white cursor-pointer ml-2"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>

        {/* Login button */}
        <button
          type="submit"
          disabled={!isValid || loading}
          className="w-full h-12 sm:h-14 mb-5 bg-blue-500 mt-6 rounded-lg text-white text-lg hover:bg-blue-400 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* OR separator */}
        <div className="flex items-center w-full my-6">
          <div className="flex-grow border-t border-slate-700"></div>
          <span className="text-slate-500 mx-3 text-sm sm:text-base">Or</span>
          <div className="flex-grow border-t border-slate-700"></div>
        </div>

        {/* Social login */}
        <div className="flex justify-center gap-4 flex-wrap w-full">
          <div className="border border-slate-500 w-[70px] sm:w-[90px] h-[35px] sm:h-[40px] bg-slate-500 rounded-lg flex items-center justify-center hover:opacity-75">
            <ImAppleinc size={22} className="text-white" />
          </div>
          <div className="border border-slate-500 w-[70px] sm:w-[90px] h-[35px] sm:h-[40px] bg-slate-500 rounded-lg flex items-center justify-center hover:opacity-75">
            <img src={goggle} className="w-5 sm:w-6" alt="google" />
          </div>
          <div className="border border-slate-500 w-[70px] sm:w-[90px] h-[35px] sm:h-[40px] bg-slate-500 rounded-lg flex items-center justify-center hover:opacity-75">
            <FaXTwitter size={22} className="text-white" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
