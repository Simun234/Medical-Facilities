import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900">
            <HiMenu size={24} />
          </button>
          <span className="ml-2 text-blue-900 font-semibold">MENU</span>
        </div>


        <div className="hidden md:flex space-x-6 text-blue-900">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="about-page" className="hover:underline">About Us</Link>
        </div>


       
      </div>


      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md p-4">
          <Link to="/" className="block py-2 text-blue-900 hover:underline">Home</Link>
          <Link to="/about-page" className="block py-2 text-blue-900 hover:underline">About Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
