import React from "react";

const BillsComponent = ({ bill, handleBillChange }) => {
  const handleBillChangeInternal = (e) => {
    const billValue = parseFloat(e.target.value) || 0;
    handleBillChange(billValue); 
  };

  return (
    <div className="pl-10 pt-5 p-5">
      <p className="text-md font-semibold">Bill</p>
      <div className="rounded-md border-none bg-slate-200 flex justify-evenly focus:ring-8 p-1">
        <img src="./assets/icon-dollar.svg" alt="Dollar Icon" />
        <input
          type="text"
          className="indent-20 rounded-sm border-none bg-slate-200 focus:ring-0 h-6 text-[#125155]"
          value={bill}
          onChange={handleBillChangeInternal}
        />
      </div>
    </div>
  );
};

export default BillsComponent;