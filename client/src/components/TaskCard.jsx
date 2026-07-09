// import React from 'react'
import { CheckCircle } from "lucide-react";

function TaskCard() {
  return (
      <div className="flex justify-between  bg-gray-700 border border-gray-700 h-50 w-60 rounded-xl p-5  mt-10  shadow-lg  hover:shadow-xl transition-shadow duration-200 ">
        <div className="flex justify-between items-center">
          <div className=" shadow-md hover:shadow-lg ">
            <p className="text-white text-sm">Completed Tasks</p>
            <h2 className="text-3xl font-bold mt-2">24</h2>
          </div>

          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="w-7 h-7 text-green-600" />
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-4">+5 from yesterday</p>
      </div>
    
  );
}

export default TaskCard;
