import {
  RiInstagramLine,
  RiShoppingCart2Line,
  RiTwitterXFill,
  RiWhatsappFill,
  RiUserLine,
  RiUser2Line, 
} from '@remixicon/react';
import { React, useEffect, useState } from 'react';
import img from '../image/maining.png';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, NavLink } from 'react-router-dom';

const Navbar = () => { // <-- receive currentUser
  const [showName, setShowName] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinkStyle = ({ isActive }) =>
    isActive ? 'text-red-800 underline' : 'text-red-800 hover:underline';

    useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) setCurrentUser(JSON.parse(user));
  }, []);


  return (
    <div className="lg:w-[1150px] bg-purple-200 ml-[80px] ">
      {/* Navbar Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 lg:ml-[-100px]">
        {/* Logo */}
        <div className="ml-[0px] mb-[-60px] md:mb-0 md:ml-[100px] absolute font-bold text-red-800 italic text-2xl font-serif">
          Sabbat shop
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mb-[100px] absolute ml-[500px]">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="p-4 md:ml-[330px]">
          <ul className="hidden md:flex gap-6 text-lg font-medium">
            <NavLink to={`/home`}>
              <button type="button" className="text-red-800 hover:underline">Home</button>
            </NavLink>
            <NavLink to={`/shop`}>
              <button type="button" className="text-red-800 hover:underline">Shop</button>
            </NavLink>
            <NavLink to={`/services`}>
              <button type="button" className="text-red-800 hover:underline">Services</button>
            </NavLink>
            <NavLink to={`/about`}>
              <button type="button" className="text-red-800 hover:underline">About</button>
            </NavLink>
            <NavLink to={`/contact`}>
              <button type="button" className="text-red-800 hover:underline">Contact</button>
            </NavLink>
            <NavLink to={`/login`}>
              <button type="button" className="text-red-800 hover:underline">Login</button>
            </NavLink>
          </ul>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="flex flex-col gap-4 mt-4 text-lg text-red-800 font-medium md:hidden ">
              <li><NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink></li>
              <li><NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
              <li><NavLink to="/login" onClick={() => setIsOpen(false)}>Login</NavLink></li>
            </ul>
          )}
        </nav>

        {/* Social Icons, Cart & User Icon */}
        <div className="flex gap-4 text-red-800 items-center md:mt-0 mt-4">
          <a href="https://www.instagram.com/luka_sabbat/?__pwa=1"><RiInstagramLine className="cursor-pointer" /></a>
          <a href="https://x.com/luka_sabbat999"><RiTwitterXFill className="cursor-pointer" /></a>
          <a href="https://api.whatsapp.com/send/?phone=2349134751407&text&type=phone_number&app_absent=0&wame_ctl=1">
            <RiWhatsappFill className="cursor-pointer" />
          </a>

  {currentUser && (
  <div className="relative flex items-center gap-1">
    <div
      className="cursor-pointer"
      onClick={() => setShowName(!showName)}
    >
     
        {currentUser.photo ? (
          <img
            src={currentUser.photo}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <RiUser2Line size={24} />
        )}
    </div>

    {/* Fullname shown only when icon clicked */}
    {showName && (
       <NavLink to={`/profile`}>
      <span className="text-red-800 font-medium absolute top-10 left-0 bg-white px-2 py-1 rounded shadow">
        {currentUser.fullname}
      </span>
      </NavLink>
    )}
  </div>
)}
</div>

        {/* Button */}
        <NavLink to={`/appointment`}>
          <button className="mt-9 md:mt-0 bg-purple-950 text-white text-lg font-serif rounded-full lg:px-6 py-2 hover:opacity-85">
            Book Now
          </button>
        </NavLink>
      </div>

      {/* Hero Section */}
      <div className="relative mt-6 px-4">
        <img
          className=" lg:w-full w-[600px] max-w-[700px] lg:max-w-[2000px] lg:ml-[-30px] ml-[-50px] mx-auto rounded-lg object-cover"
          src={img}
          alt="Hero"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-lg lg:text-5xl md:text-5xl font-extrabold text-center italic drop-shadow-lg">
            Experience Exceptional <br className="hidden sm:block" /> Shopping Choices
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
