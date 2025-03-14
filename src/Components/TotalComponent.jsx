import React from "react";

const TotalComponent = ({ tipAmount, tipPerPerson, totalPerPerson, resetAll }) => {
  console.log("TotalComponent props:", { tipAmount, tipPerPerson, totalPerPerson });
  return (
    <div className="flex-1 bg-teal-900 text-white p-6 rounded-lg h-full">
      <div className="mb-4">
        <p>Tip Amount / person</p>
        <p className="text-teal-400 text-2xl font-bold">${tipPerPerson.toFixed(2)}</p>
      </div>
      <div className="mb-4">
        <p>Total / person</p>
        <p className="text-teal-400 text-2xl font-bold">${totalPerPerson.toFixed(2)}</p>
      </div>
      <button
        className="w-full bg-teal-400 p-2 rounded-lg font-bold mt-20 hover:bg-teal-300"
        onClick={resetAll}
      >
        RESET
      </button>
    </div>
  );
};

export default TotalComponent;