import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);


  return (
    <>
    <header className='w-[245px] h-[38px] flex flex-row items-center '></header>
    <div className='flex flex-row gap-5 items-center'>
    <button 
          className="block md:hidden text-black text-3xl" 
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose /> : <HiMenu />}
        </button>
        
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center md:hidden">
            <Link to="/" className="text-black hover:underline mb-2" onClick={closeMenu}>
             Home
            </Link>
            <Link to="/about-page" className="text-black hover:underline mb-2" onClick={closeMenu}>
              About Us
            </Link>
          </div>
        )}
      <p className='font-serif font-normal text-black text-sm md:hidden '>Menu</p>
      <FaShoppingCart className='ml-60 md:hidden' />
      </div>
<div className="flex flex-row items-center gap-6 float-right mr-10">
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
          <Link to="/about-page" className="text-black hover:underline">
           About Us
          </Link>
          <FaShoppingCart />
          <p className='font-serif font-normal text-black'>Cart</p>
        </div>

    </>
  )
}

export default Navbar;
