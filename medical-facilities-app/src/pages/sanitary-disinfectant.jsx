import React, { useState } from "react";

function SanitaryDisinfectant() {
  const [formData, setFormData] = useState({
    email: "",
    area: "",
    number: "",
    service: "",
    numberas: "",
    numberof: "",
    associates: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    window.location.href = "/"; 
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <div className="flex flex-col w-[424px] h-auto bg-white border border-black rounded p-4">
        <h1 className="font-serif font-bold text-black text-center mt-5">
          Sanitizing/Disinfectant Needs Tracking Form
        </h1>
        <hr className="border-[#DDDEE0]" />

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <label className="font-serif text-lg text-black mt-4">Your Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <label className="font-serif text-lg text-black">Area</label>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          >
            <option value="">Please Select</option>
            <option value="North Atlantic">North Atlantic</option>
            <option value="Southeast">Southeast</option>
            <option value="Midwestern">Midwestern</option>
            <option value="Central">Central</option>
            <option value="Western">Western</option>
            <option value="Canada">Canada</option>
          </select>

          <label className="font-serif text-lg text-black">Region Number</label>
          <input
            type="number"
            name="number"
            placeholder="ex: 23"
            value={formData.number}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <label className="font-serif text-lg text-black">Service Center</label>
          <input
            type="text"
            name="service"
            placeholder="ex: 2404"
            value={formData.service}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <label className="font-serif text-lg text-black">
            Number of Associates Working On Site
          </label>
          <input
            type="number"
            name="numberas"
            value={formData.numberas}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <label className="font-serif text-lg text-black">
            Number of Associates Safe at Home
          </label>
          <input
            type="number"
            name="numberof"
            value={formData.numberof}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <label className="font-serif text-lg text-black">
            Associates Working on Customer Site
          </label>
          <input
            type="number"
            name="associates"
            value={formData.associates}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded mt-4 hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SanitaryDisinfectant;
