import React, { useState } from "react";

function Call() {
  const [landline, setLandline] = useState("");
  const [mobile, setMobile] = useState("");
  const [callStatus, setCallStatus] = useState("");

  const handleCallClick = () => {
    if (!landline && !mobile) {
      setCallStatus(" Please enter at least one phone number.");
    } else {
      setCallStatus(" Your call is in progress. Please wait for an answer...");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] h-auto flex flex-col items-center border border-[#41689F] rounded mt-10 md:w-[700px] px-4 py-6">
        <h1 className="font-serif font-bold text-base text-[#0A1587] text-center mt-2 md:text-lg lg:text-2xl">Call Us</h1>
        <div className="flex flex-col items-center">
          <label className="font-serif font-normal text-sm text-[#000] text-center mt-4 md:text-base lg:text-xl">Landline phone:</label>
          <input
            className="w-[200px] h-[30px] border mt-2 px-2"
            type="tel"
            placeholder="023-111-222"
            value={landline}
            onChange={(e) => setLandline(e.target.value)}
          />

          <label className="font-serif font-normal text-sm text-[#000] text-center mt-4 md:text-base lg:text-xl">Phone Number:</label>
          <input
            className="w-[200px] h-[30px] border mt-2 px-2"
            type="tel"
            placeholder="095-123-456"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <button
            onClick={handleCallClick}
            className="w-[200px] h-[30px] bg-[#AACCFB] border border-[#41689F] rounded font-serif font-normal text-base text-[#02357D] text-center mt-5 lg:h-[50px] text-lg hover:bg-[#87BBF2] transition"
          >
            Call Us
          </button>

          {callStatus && (
            <div className="mt-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-center text-sm md:text-base">
              {callStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Call;
