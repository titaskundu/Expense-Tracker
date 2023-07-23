import React from 'react';
import { expensetracker } from '../pictures';
const Frontpage = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage:{expensetracker} }}
    >
      <div className="text-black text-5y1 text-5xl font-bold">
        Your Expense Tracker<br/>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
          Login
        </button>

    </div>
  );
};



export default Frontpage;