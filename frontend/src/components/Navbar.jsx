import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="  top-0 z-50 w-full md:w-full">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="" />
          {/* <h1 className="text-xl font-bold">Logo</h1> */}
        </div>

        <ul className="hidden md:flex space-x-8 text-base text-[#18191F]">
          <li className="hover:text-slate-950 cursor-pointer">Home</li>
          <li className="hover:text-slate-950 cursor-pointer">Services</li>
          <li className="hover:text-slate-950 cursor-pointer">Feature</li>
          <li className="hover:text-slate-950 cursor-pointer">Product</li>
          <li className="hover:text-slate-950 cursor-pointer">Testimonial</li>
          <li className="hover:text-slate-950 cursor-pointer">FAQ</li>
        </ul>

        <div className="flex gap-5 text-[14px]">
          <Link className="hidden md:block bg-[#F5F7FA] text-slate-900 hover:text-white border border-slate-900 px-4 py-1 rounded hover:bg-slate-950">
            Login
          </Link>
          <Link className="hidden md:block bg-slate-900 text-white px-4 py-1 rounded hover:bg-slate-900">
            Sign Up
          </Link>
        </div>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium">
            <li className="hover:text-green-500 cursor-pointer">Home</li>
            <li className="hover:text-green-500 cursor-pointer">About</li>
            <li className="hover:text-green-500 cursor-pointer">Services</li>
            <li>
              <Link className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-950">
                Login
              </Link>
            </li>
            <li>
              <Link className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-950">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
