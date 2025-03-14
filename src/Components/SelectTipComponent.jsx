import React, { useState } from "react";

const SelectTipComponent = ({ tip, handleTipChange }) => {
  const [customTip, setCustomTip] = useState("");

  const handleCustomTipChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setCustomTip(e.target.value); // Set local custom tip
      handleTipChange(value); // Update global tip value in parent
    } else {
      setCustomTip(""); // Clear custom tip
      handleTipChange(0); // Reset tip value in parent
    }
  };

  const handlePresetTipChange = (presetTip) => {
    setCustomTip(""); // Clear custom tip
    handleTipChange(presetTip); // Update global tip value in parent
  };

  return (
    <div className="pl-10">
      <p className="text-lg font-semibold">Select Tip %</p>
      <div className="grid grid-cols-3 gap-3">
        <button
          className="bg-[#125155] text-white text-lg font-semibold rounded-md pl-10 pr-10 p-3 hover:bg-teal-400 hover:text-[#125155]"
          onClick={() => handlePresetTipChange(5)}
        >
          5%
        </button>
        <button
          className="bg-[#125155] text-white text-lg font-semibold rounded-md pl-10 pr-10 p-3 hover:bg-teal-400 hover:text-[#125155]"
          onClick={() => handlePresetTipChange(10)}
        >
          10%
        </button>
        <button
          className="bg-[#125155] text-white text-lg font-semibold rounded-md pl-10 pr-10 p-3 hover:bg-teal-400 hover:text-[#125155]"
          onClick={() => handlePresetTipChange(15)}
        >
          15%
        </button>
        <button
          className="bg-[#125155] text-white text-lg font-semibold rounded-md pl-10 pr-10 p-3 hover:bg-teal-400 hover:text-[#125155]"
          onClick={() => handlePresetTipChange(25)}
        >
          25%
        </button>
        <button
          className="bg-[#125155] text-white text-lg font-semibold rounded-md pl-10 pr-10 p-3 hover:bg-teal-400 hover:text-[#125155]"
          onClick={() => handlePresetTipChange(50)}
        >
          50%
        </button>
        <input
          type="text"
          className="bg-gray-200 font-semibold rounded-md focus:ring-0 border-none w-[112.52px] h-[52px] indent-3"
          placeholder="Custom"
          value={customTip}
          onChange={handleCustomTipChange}
        />
      </div>
    </div>
  );
};

export default SelectTipComponent;