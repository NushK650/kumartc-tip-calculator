import React, { useState, useEffect } from "react";

const TitleBgComponent = () => {
  const [bill, setBill] = useState(""); 
  const [tip, setTip] = useState(5);
  const [numberOfPeople, setNumberOfPeople] = useState(""); 
  const [tipAmount, setTipAmount] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    const calculateTip = () => {
      const billValue = parseFloat(bill);
      const peopleValue = parseFloat(numberOfPeople);

      if (billValue > 0 && tip > 0 && peopleValue > 0) {
        const totalTip = (billValue * tip) / 100;
        setTipAmount(totalTip);
        setTipPerPerson(totalTip / peopleValue);
        setTotalPerPerson((billValue + totalTip) / peopleValue);
      } else {
        setTipAmount(0);
        setTipPerPerson(0);
        setTotalPerPerson(0);
      }
    };

    calculateTip();
  }, [bill, tip, numberOfPeople]);

  const handleBillChange = (e) => {
    const billValue = e.target.value;
    if (billValue === "" || !isNaN(billValue)) {
      setBill(billValue);
    }
  };

  const handleTipChange = (tipPercentage) => {
    setTip(tipPercentage);
  };

  const handleNumberOfPeopleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "" || !isNaN(inputValue)) {
      setNumberOfPeople(inputValue);
    }
  };

  const resetAll = () => {
    setBill("");
    setTip(5);
    setNumberOfPeople("");
    setTipAmount(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
  };

  return (
    <div className="grid place-self-center p-4 sm:p-6 md:p-8 lg:p-10 mx-auto md:mx-8 max-w-7xl">
      <p className="place-self-center text-2xl font-bold">
        S P L I <br /> T T E R
      </p>

      <div className="bg-white rounded-md h-auto w-full max-w-500 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Left Side: Inputs */}
        <div>
          {/* Bill Input */}
          <div className="pl-2 sm:pl-4 md:pl-6 lg:pl-10 pt-5 p-5">
            <p className="text-md font-semibold">Bill</p>
            <div className="rounded-md border-none bg-slate-200 flex justify-evenly focus:ring-8 p-1">
              <img className="pr-20 sm:pr-60 md:pr-12 lg:pr-60" src="./assets/icon-dollar.svg" alt="Dollar Icon" />
              <input
                type="text"
                className="indent-20 sm:indent-24 md:indent-28 lg:indent-40 rounded-sm border-none bg-slate-200 focus:ring-0 h-6 text-[#125155]"
                value={bill}
                onChange={handleBillChange}
              />
            </div>
          </div>

          {/* Select Tip */}
          <div className="pl-2 sm:pl-4 md:pl-6 lg:pl-10">
            <p className="text-lg font-semibold">Select Tip %</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              <button
                className="bg-[#125155] text-white text-lg font-semibold rounded-md p-2 sm:pl-10 sm:pr-10 sm:p-3 hover:bg-teal-400 hover:text-[#125155]"
                onClick={() => handleTipChange(5)}
              >
                5%
              </button>
              <button
                className="bg-[#125155] text-white text-lg font-semibold rounded-md p-2 sm:pl-10 sm:pr-10 sm:p-3 hover:bg-teal-400 hover:text-[#125155]"
                onClick={() => handleTipChange(10)}
              >
                10%
              </button>
              <button
                className="bg-[#125155] text-white text-lg font-semibold rounded-md p-2 sm:pl-10 sm:pr-10 sm:p-3 hover:bg-teal-400 hover:text-[#125155]"
                onClick={() => handleTipChange(15)}
              >
                15%
              </button>
              <button
                className="bg-[#125155] text-white text-lg font-semibold rounded-md p-2 sm:pl-10 sm:pr-10 sm:p-3 hover:bg-teal-400 hover:text-[#125155]"
                onClick={() => handleTipChange(25)}
              >
                25%
              </button>
              <button
                className="bg-[#125155] text-white text-lg font-semibold rounded-md p-2 sm:pl-10 sm:pr-10 sm:p-3 hover:bg-teal-400 hover:text-[#125155]"
                onClick={() => handleTipChange(50)}
              >
                50%
              </button>
              <input
                type="text"
                className="bg-gray-200 font-semibold rounded-md focus:ring-0 border-none w-full h-[52px] indent-3"
                placeholder="Custom"
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) handleTipChange(value);
                }}
              />
            </div>
          </div>

          {/* Number of People Input */}
          <div className="pl-2 sm:pl-4 md:pl-6 lg:pl-10 pt-5 p-5">
            <p className="text-md font-semibold">Number of people</p>
            <div className="rounded-md border-none bg-slate-200 flex justify-evenly focus:ring-8 p-1">
              <img className="pr-20 sm:pr-60 md:pr-12 lg:pr-60" src="./assets/icon-person.svg" alt="Person Icon" />
              <input
                type="text"
                className="indent-20 sm:indent-24 md:indent-28 lg:indent-40 rounded-sm border-none bg-slate-200 focus:ring-0 h-6 text-[#125155]"
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Totals */}
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default TitleBgComponent;