import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AboutPage() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center mt-5'>
      <h1 className='font-serif font-bold text-[#0A1587] text-base text-center md:text-lg lg:text-2xl '>About Our Service</h1>
      <div className='flex flex-col items-center'>
      <p className='font-serif font-normal text-[#0A1551] text-sm text-center mt-5 md:text-lg lg:text-2xl'>Our disinfection solutions are ideal for business owners,<br></br> healthcare professionals, and homeowners.<br></br> We offer reliable tools that help reduce the spread of germs,<br></br> keeping your space hygienic and your team safe.<br></br> Say goodbye to constantly washing your hands after every interaction—<br/>our system takes care of the mess for you.</p>
      <p className='font-serif font-normal text-[#0A1551] text-sm text-center mt-5 md:text-lg lg:text-2xl'>Cleanliness made simple and smart!</p>
      </div>
      <div className='flex flex-row gap-5 items-center mt-5'>
      <button className='w-[100px] h-[40px] bg-[#FB7041] border rounded-2xl font-serif font-normal text-sm text-[#fff]  text-center md:w-[200px] text-lg lg:text-xl' onClick={() => navigate("/call-us")}>Call Us</button>
      <button className='w-[100px] h-[40px] bg-[#FB7041] border rounded-2xl font-serif font-normal text-sm text-[#fff]  text-center md:w-[200px] text-lg lg:text-xl' onClick={() => navigate("/email-us")}>Email Us</button>
      </div>
      <button className='w-[200px] h-[60px] bg-[#AACCFB] border border-[#41689F] rounded font-serif font-normal text-sm text-[#02357D] text-center mt-10 md:w-[300px] text-lg lg:text-2xl' onClick={() => navigate("/rewiev-service")}>Rewiev Our Service</button>
      </div>
    </>
  )
}

export default AboutPage;
