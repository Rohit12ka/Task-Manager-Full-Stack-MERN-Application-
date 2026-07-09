// import React from 'react'
import {Search} from "lucide-react";

function Searchbar() {
  return (
    <div>
      <div className="w-full px-4 flex justify-center">
        <div className=" flex items-center  text-white relative  bg-gray-400">
            <Search className="w-4 h-4 absolute ml-4 hidden md:flex" />
          </div >
        <input type="text" placeholder="Search..." className="px-12 py-1  rounded-3xl w-90 text-white border border-gray hidden md:flex" />
      </div>
    </div>
  )
}

export default Searchbar
