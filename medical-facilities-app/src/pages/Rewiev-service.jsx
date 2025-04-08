import React from "react";

function Rewiev() {
  return (
    <div className="flex items-center justify-center">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-[463px] h-auto flex flex-col items-center border border-[#41689F] rounded mt-10 md:w-[778px] px-4 py-6"
      >

        <input
          type="hidden"
          name="access_key"
          value="b3165cab-3321-475e-acdd-91634cef92a5"
        />

        <h1 className="font-serif font-bold text-base text-[#2C3348] text-center mt-2 md:text-lg lg:text-2xl">
          Give Us Your Feedback
        </h1>
        <p className="font-serif font-normal text-sm text-[#57667E] text-center md:text-xl">
          We would love to hear your thoughts,
          <br /> suggestions, concerns or problems
          <br /> with anything so we can improve!
        </p>

        <div className="text-left w-full max-w-md">
          <label className="font-serif font-normal text-base text-[#57667E] mt-4 block">
            Feedback Type
          </label>
          <div className="space-y-2 mt-2">
            {["Comments", "Suggestions", "Questions"].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="feedback_type"
                  value={type}
                  className="form-radio text-blue-600"
                  required
                />
                <span className="text-sm text-blue-700">{type}</span>
              </label>
            ))}
          </div>

          <label className="font-serif font-normal text-base text-[#57667E] mt-4 block">
            Describe Your Feedback:
          </label>
          <textarea
            className="w-full border mt-2 px-2 py-1"
            name="message"
            rows="4"
            required
          />

          <label className="font-serif font-normal text-base text-[#57667E] mt-4 block">
            Name & Surname:
          </label>
          <input
            className="w-full border rounded px-2 py-1"
            type="text"
            name="name"
            required
          />

          <label className="font-serif font-normal text-base text-[#57667E] mt-4 block">
            Your Email:
          </label>
          <input
            className="w-full h-[30px] border mt-2 px-2 py-1"
            type="email"
            name="email"
            placeholder="example@example.com"
            required
          />

          <button
            type="submit"
            className="w-full h-[45px] bg-[#18BD5B] text-white rounded mb-3 mt-8"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
}

export default Rewiev;
