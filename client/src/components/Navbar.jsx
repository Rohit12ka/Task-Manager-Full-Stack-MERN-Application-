// import React from 'react'
import { Moon, Sun,Bell,Search,LogOut   } from "lucide-react";
import { useState } from "react";

function Navbar() {
           const [isDarkMode, setIsDarkMode] = useState(false);
          //  const { user, logout } = useAuth();
  return (
   
     <nav className="h-16 bg-gray-800 text-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6  text-xl font-family: 'Poppins', sans-serif;">
      <div className="flex items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="logo" className="h-8 w-8 mr-2" />
        <h3 >Tasky</h3>
      </div>

      <div className="w-full px-4 flex justify-center">
        <div className=" flex items-center  text-white relative ">
            <Search className="w-4 h-4 absolute ml-4" />
          </div>
        <input type="text" placeholder="Search..." className="px-12 py-1  rounded-3xl w-90 text-white border border-gray" />
      </div>

      <div className="flex items-center gap-2 md:gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}className="p-2 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors">
           {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

           <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="rounded-lg whitespace-nowrap">
          <button className="flex items-center w-full px-4 py-1.5  text-sm text-red-600 hover:bg-red-50 rounded-xl">
                <LogOut className="w-4 h-4 flex" />
                  Sign out
                </button>
        </div>
      </div>

     </nav>
  )
}

export default Navbar
