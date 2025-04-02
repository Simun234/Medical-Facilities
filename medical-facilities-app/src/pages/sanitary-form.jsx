import React, { useState } from "react";

function SanitaryForm() {
  const [items, setItems] = useState([
    { id: 1, name: "Sanitizer 50 ml", price: 25, quantity: 0 },
    { id: 2, name: "Sanitizer 125 ml", price: 50, quantity: 0 },
    { id: 3, name: "Sanitizer 500 ml", price: 175, quantity: 0, note: "It comes with a small hand sanitizer as a gift." },
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
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

  const handleQuantityChange = (id, value) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: Number(value) } : item));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex items-center justify-center mt-12">
      <div className="flex flex-col w-[424px] h-auto bg-white border border-[#644A89] rounded p-4">
        <h1 className="font-serif font-bold text-[#29A5B1] text-center mt-5">
          Sanitizer Order Form
        </h1>
        <hr className="border-[#DDDEE0]" />

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <label className="font-serif text-lg text-black mt-4">Your First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <label className="font-serif text-lg text-black mt-4">Your Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <label className="font-serif text-lg text-black">Phone Number</label>
          <input
            type="phoneNumber"
            name="phoneNumber"
            placeholder="095-123-231"
            value={formData.number}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <label className="font-serif text-lg text-black">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-56 h-8 border border-gray-300 rounded px-2"
            required
          />

          <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            {items.map(item => (
              <div key={item.id} className="mb-4 border-b pb-2">
                <label className="flex items-center space-x-2 text-lg font-serif">
                  <input type="checkbox" className="mr-2" checked={item.quantity > 0} readOnly />
                  {item.name} <span className="font-bold">${item.price.toFixed(2)}</span>
                </label>
                {item.note && <p className="text-sm text-gray-600">{item.note}</p>}
                <select
                  className="mt-2 border border-gray-300 rounded p-1 w-full"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                >
                  {[...Array(11).keys()].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="text-lg font-bold mt-4">Total: ${total.toFixed(2)}</div>
          </div>

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

export default SanitaryForm;