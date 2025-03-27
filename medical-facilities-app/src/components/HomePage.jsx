import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaPumpMedical } from "react-icons/fa";
import { MdSanitizer } from "react-icons/md";
import { TbHandSanitizer } from "react-icons/tb";
import FirstImage from "../images/first-picture.jpg";
import SecondImage from "../images/second-picture.jpg";
import ThirdImage from "../images/third-picture.jpg";
import FourthImage from "../images/fourth-picture.jpg";

function HomePage() {
  const [filter, setFilter] = useState("");

  const handleSearchChanges = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-[600px] h-[217px] bg-gradient-to-r from-[#4FC3F7] to-[#00897B] flex items-center justify-center md:w-[900px] lg:w-[1200px]">
          <div className="flex flex-col gap-4 justify-center items-center">
            <FaPumpMedical className="w-[60px] h-[80px]" />
            <h1 className="font-serif font-normal text-black">
              Medical Facilities
            </h1>
            <h4 className="font-serif font-normal text-black">
              Designed to perfection
            </h4>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6">
        <div className="w-[600px] border rounded bg-gradient-to-br from-blue-100 to-blue-400 md:w-[900px] lg:w-[1200px] p-5">

          <p className="font-serif font-normal text-lg text-black">Services</p>
          <input
            type="text"
            placeholder="Search Products"
            value={filter}
            onChange={handleSearchChanges}
            className="w-[170px] h-[30px] border border-slate-400 font-serif text-black font-bold mt-2 p-1 md:w-[207px] h-[24px]"
          />


          <div className="flex flex-col items-center mt-5">
            {[ 
              { img: FirstImage, title: "Home/Apartments", price: "€ 150.00" },
              { img: SecondImage, title: "Clinics/Hospitals", price: "€ 200.00" },
              { img: ThirdImage, title: "Office/Meet Hall", price: "€ 250.00" },
              { img: FourthImage, title: "Church/Religious", price: "€ 200.00" }
            ].map((service, index) => (
              <div
                key={index}
                className="w-[300px] flex items-center gap-4 border border-slate-400 p-3 rounded-lg shadow-lg mt-3 md:w-[423px] gap-16"
              >
                <img src={service.img} alt={service.title} className="w-[100px] h-[80px] object-cover" />
                <div className="flex flex-col text-center">
                  <p className="font-semibold">{service.title}</p>
                  <p className="text-gray-700">{service.price}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-row gap-5 items-center w-[300px] h-[66px] bg-[#AACCFB] mt-5 md:w-[423px] gap-25">
            <MdSanitizer className="w-[30px] h-[40px]" />
            <p className="font-serif font-bold text-[#026CCE] text-center">Sanitary Disinfectant</p>
            </div>
            <div className="flex flex-row gap-5 items-center w-[300px] h-[66px] bg-[#AACCFB] mt-5 md:w-[423px] gap-25">
            <TbHandSanitizer className="w-[30px] h-[40px]" />
            <p className="font-serif font-bold text-[#026CCE] text-center">Order a Sanitizier</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
