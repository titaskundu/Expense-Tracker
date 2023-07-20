import React, { useState } from 'react';

function Expensepage ()  {
  // State to track the selected expense type and input details
  const [selectedExpenseType, setSelectedExpenseType] = useState('');
  const [expenseDetails, setExpenseDetails] = useState({
    title: '',
    amount: '',
  });

  // Expense type options
  const expenseTypes = ['Food', 'Transportation', 'Entertainment', 'Other'];

  // Handle input change for expense details
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpenseDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle expense type selection
  const handleExpenseTypeSelect = (expenseType) => {
    setSelectedExpenseType(expenseType);
  };

  return (
    <div className="p-4">
      {/* Total expense display */}
      <div className="text-xl font-semibold mb-4">Total Expense: $0.00</div>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-4">
        {/* First column: Expense type selection */}
        <div>
          <div className="text-lg font-semibold mb-2">Select Expense Type:</div>
          {expenseTypes.map((expenseType) => (
            <button
              key={expenseType}
              onClick={() => handleExpenseTypeSelect(expenseType)}
              className={`px-4 py-2 rounded-lg ${
                selectedExpenseType === expenseType
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-black'
              }`}
            >
              {expenseType}
            </button>
          ))}
        </div>

        {/* Second column: Input details */}
        <div>
          <div className="text-lg font-semibold mb-2">Expense Details:</div>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={expenseDetails.title}
              onChange={handleInputChange}
              className="px-4 py-2 mb-2 w-full border rounded-lg"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={expenseDetails.amount}
              onChange={handleInputChange}
              className="px-4 py-2 w-full border rounded-lg"
            />
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => {
              // Handle saving expense details here
              console.log('Save expense:', selectedExpenseType, expenseDetails);
            }}
          >
            Save Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expensepage;