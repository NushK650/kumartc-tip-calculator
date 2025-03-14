import React from "react";

const NumberOfPeopleComponent = ({ numberOfPeople, handlePeopleChange }) => {
  const handlePeopleChangeInternal = (e) => {
    const people = Math.max(1, parseInt(e.target.value) || 1);
    handlePeopleChange(people); // Pass direct value
  };

  return (
    <div className="pl-10 pt-5 p-5">
      <p className="text-md font-semibold">Number of people</p>
      <div className="rounded-md border-none bg-slate-200 flex justify-evenly focus:ring-8 p-1">
        <img className="pr-20 " src="./assets/icon-person.svg" alt="Person Icon" />
        <input
          type="text"
          className="indent-20 rounded-sm border-none bg-slate-200 focus:ring-0 h-6 text-[#125155]"
          value={numberOfPeople}
          onChange={handlePeopleChangeInternal}
        />
      </div>
    </div>
  );
};

export default NumberOfPeopleComponent;