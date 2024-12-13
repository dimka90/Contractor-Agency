import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" shadow-xl sticky top-0 z-50 w-full md:w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-xl font-bold">Logo</h1>
        </div>

     
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="hover:text-green-500 cursor-pointer">Home</li>
          <li className="hover:text-green-500 cursor-pointer">About</li>
          <li className="hover:text-green-500 cursor-pointer">Services</li>
        </ul>

     
        <button className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        <ConnectButton />
        </button>

       
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

     
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-600 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium">
            <li className="hover:text-green-500 cursor-pointer">Home</li>
            <li className="hover:text-green-500 cursor-pointer">About</li>
            <li className="hover:text-green-500 cursor-pointer">Services</li>
            <li>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                
                <ConnectButton />
                 </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
