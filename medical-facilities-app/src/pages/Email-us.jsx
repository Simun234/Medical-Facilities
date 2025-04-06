import React from "react";

function Email() {
  return (
    <div className="flex items-center justify-center">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-[500px] h-auto flex flex-col items-center border border-[#41689F] rounded mt-10 md:w-[700px] px-4 py-6"
      >
        <h1 className="font-serif font-bold text-base text-[#0A1587] text-center mt-2 md:text-lg lg:text-2xl">
          Email Us
        </h1>

        <input type="hidden" name="access_key" value="b3165cab-3321-475e-acdd-91634cef92a5" />

        <div className="flex flex-col items-center">
          <label className="font-serif font-normal text-sm text-[#000] text-center mt-4 md:text-base lg:text-xl">
            Your Email:
          </label>
          <input
            className="w-[200px] h-[30px] border mt-2 px-2"
            type="email"
            name="email"
            placeholder="example@example.com"
            required
          />

          <label className="font-serif font-normal text-sm text-[#000] text-center mt-4 md:text-base lg:text-xl">
            Your Message:
          </label>
          <textarea
            className="w-[200px] border mt-2 px-2"
            name="message"
            placeholder="Write your message..."
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-[200px] h-[30px] bg-[#AACCFB] border border-[#41689F] rounded font-serif font-normal text-base text-[#02357D] text-center mt-5 lg:h-[50px] text-lg hover:bg-[#87BBF2] transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Email;
