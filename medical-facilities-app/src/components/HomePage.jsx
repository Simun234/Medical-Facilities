import React from 'react';
import Navbar from './Navbar';
import { FaPumpMedical } from "react-icons/fa";

function HomePage() {


  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center'>
      <div className='w-[600px] h-[217px] bg-gradient-to-r from-[#4FC3F7] to-[#00897B] flex items-center justify-center md:w-[900px] lg:w-[1200px]'>
       <div className='flex flex-col gap-4 justify-center items-center'>
      <FaPumpMedical className='w-[60px] h-[80px]' />
      <h1 className='font-serif font-normal text-black'>Medical Facilities</h1>
      <h4 className='font-serif font-normal text-black'>Designed to perfection</h4>
      </div> 
      </div>
      </div>
      <div className='flex items-center justify-center'>
      <div className='w-[600px] h-[799px] border rounded bg-gray-300 md:w-[900px] lg:w-[1200px] '>
       <p className='font-serif font-normal text-black mt-5 ml-5'>Services</p>
      </div>
      </div>
    </>
  )
}

export default HomePage;
