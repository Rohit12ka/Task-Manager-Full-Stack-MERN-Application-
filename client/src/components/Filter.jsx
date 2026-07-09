import { useState } from "react";
// import { Search } from "lucide-react";
import Searchbar from "../components/Searchbar";
import Dropdown from "./Dropdown";


function Filter() {
  //   const filters = ["All", "Pending", "Completed"];
  const [activeFilter, setActiveFilter] = useState("All");
  return (
   
    <div className=" flex items-start gap-2 h-full w-full  text-black bg-yellow-200 p-5 rounded-2xl border border-gray-600 shadow-lg ">
      <button type="button"onClick={() => setActiveFilter("All")}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        activeFilter === "All"? "bg-white text-black shadow-sm": "text-gray-500"}`} >
        All
      </button>
      <button type="button"onClick={() => setActiveFilter("Pending")}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        activeFilter === "Pending"? "bg-white text-black shadow-sm": "text-gray-500"}`}>
        Pending
      </button>
      <button type="button"onClick={() => setActiveFilter("Completed")}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        activeFilter === "Completed" ? "bg-white text-black shadow-sm": "text-gray-500"}`}>
        Completed
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-90">
         <Searchbar />
          <div className=" px-50  ">
            <Dropdown />
          </div>
      </div>
     
    </div>

    
  );
}

export default Filter 
