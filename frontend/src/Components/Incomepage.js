import { useState } from "react";
import React  from 'react';
import Datepicker from "react-tailwindcss-datepicker";

function Incomepage  ()  {
    const [selectedIncomeType, setSelectedIncomeType] = useState('');
    const [incomeDetails, setIncomeDetails] = useState({
      title: '',
      amount: '',
      date: '',
      
      reference: '',
    });
    const [value, setValue] = useState({
      startDate: null ,
      endDate: null
    });
  
    const handleValueChange = (newValue) => {
      console.log("newValue:", newValue);
      setValue(newValue);
    }
  
    // Income type options
    const incomeTypes = ['Food', 'Transportation', 'Entertainment', 'Other'];
  
    // Handle input change for income details
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setIncomeDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    // Handle Income type selection
    const handleIncomeTypeSelect = (incomeType) => {
      setSelectedIncomeType(incomeType);
    };
  
    return (
      
      <div className="p-4 flex flex-col ml-8 ">
      <h1 className='font-bold text-[50px] flex float-left mt-5	 '>Incomes</h1>
        {/* Total Income display */}
      <div className="text-xl font-semibold mb-4 mt-2 pt-4 pb-4 bg-blue-300 rounded-lg">Total Income: $0.00</div>
  
        {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-4">
          {/* First column: Income type selection */}
          {/* <div>
            <div className="text-lg font-semibold mb-2">Select Income Type:</div>
            {IncomeTypes.map((IncomeType) => (
              <button
                key={IncomeType}
                onClick={() => handleIncomeTypeSelect(IncomeType)}
                className={`px-4 py-2 rounded-lg ${selectedIncomeType === IncomeType
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-black'
                  }`}
              >
                {IncomeType}
              </button>
            ))}
          </div> */}
  
          {/* Second column: Input details */}
          <div>
            <div className="text-lg font-semibold mb-2">Income Details:</div>
            <div className="mb-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={incomeDetails.title}
                onChange={handleInputChange}
                className="px-4 py-2 mb-2 w-full border rounded-lg"
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={incomeDetails.amount}
                onChange={handleInputChange}
                className="px-4 py-2 w-full border rounded-lg"
              />
              <select
                name="incomeType"
                value={selectedIncomeType}
                onChange={handleIncomeTypeSelect}
                className="px-4 py-2 w-full border rounded-lg"
              >
                <option value="">Select an Income Type</option>
                {incomeTypes.map((incomeType) => (
                  <option key={incomeType} value={incomeType}>
                    {incomeType}
                  </option>
                ))}
              </select>
  
              <Datepicker
                useRange={false}
                asSingle={true}
                value={value}
                onChange={handleValueChange}
              />
              <textarea
                type="text"
                name="reference"
                placeholder="Reference"
                value={incomeDetails.reference}
                onChange={handleInputChange}
                className="px-4 py-6 mb-2 w-full border rounded-lg h-[100px]"
                rows={5}
                cols={80}
              />
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => {
                // Handle saving income details here
                console.log('Save income:', selectedIncomeType, incomeDetails);
              }}
            >
              Save Income
            </button>
          </div>
        </div>
      </div>
    );
}

export default Incomepage;
