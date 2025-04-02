import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FaPumpMedical } from "react-icons/fa";
import { MdSanitizer } from "react-icons/md";
import { TbHandSanitizer } from "react-icons/tb";
import FirstImage from "../images/first-picture.jpg";
import SecondImage from "../images/second-picture.jpg";
import ThirdImage from "../images/third-picture.jpg";
import FourthImage from "../images/fourth-picture.jpg";

function HomePage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([]);

  const services = [
    { img: FirstImage, title: "Home/Apartments", price: 150.00 },
    { img: SecondImage, title: "Clinics/Hospitals", price: 200.00 },
    { img: ThirdImage, title: "Office/Meet Hall", price: 250.00 },
    { img: FourthImage, title: "Church/Religious", price: 200.00 }
  ];

  const handleSearchChanges = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(filter)
  );

  const handleAddToCart = (service) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.title === service.title);
      if (existingItem) {
        return prevCart.map((item) =>
          item.title === service.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...service, quantity: 1 }];
      }
    });
  };

  const renderCart = () => {
    return cart.map((item, index) => (
      <li key={index} className="flex justify-between text-lg">
        <span>{item.title} (x{item.quantity})</span>
        <span>€ {item.price}</span>
      </li>
    ));
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-[600px] h-[217px] bg-gradient-to-r from-[#4FC3F7] to-[#00897B] flex items-center justify-center md:w-[900px] lg:w-[1200px]">
          <div className="flex flex-col gap-4 justify-center items-center">
            <FaPumpMedical className="w-[60px] h-[80px]" />
            <h1 className="font-serif font-normal text-black">Medical Facilities</h1>
            <h4 className="font-serif font-normal text-black">Designed to perfection</h4>
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
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="w-[300px] flex items-center gap-4 border border-slate-400 p-3 rounded-lg shadow-lg mt-3 md:w-[423px] gap-16"
                >
                  <img src={service.img} alt={service.title} className="w-[100px] h-[80px] object-cover" />
                  <div className="flex flex-col text-center">
                    <p className="font-semibold">{service.title}</p>
                    <p className="text-gray-700">€ {service.price}</p>
                    <button
                      onClick={() => handleAddToCart(service)}
                      className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="mt-5 text-red-600 font-semibold">No results found.</p>
            )}

            <button className="flex flex-row gap-5 items-center w-[300px] h-[66px] bg-[#AACCFB]  mt-5 md:w-[423px] gap-25" onClick={ () => navigate ("/sanitary-disinfectant")}>
              <MdSanitizer className="w-[30px] h-[40px]" />
              <p className="font-serif font-bold text-[#026CCE] text-center">Sanitary Disinfectant</p>
            </button>
            <button className="flex flex-row gap-5 items-center w-[300px] h-[66px] bg-[#AACCFB]  mt-5 md:w-[423px] gap-25" onClick={ () => navigate ("/sanitary-form")}>
              <TbHandSanitizer className="w-[30px] h-[40px]" />
              <p className="font-serif font-bold text-[#026CCE] text-center">Order a Sanitizer</p>
            </button>
          </div>

          {cart.length > 0 && (
            <div className="mt-5 bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <ul className="mt-3 space-y-2">{renderCart()}</ul>
              <div className="mt-3 font-bold">
                Total: €
                {cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
