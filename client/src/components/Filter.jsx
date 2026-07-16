// import { useState } from "react";
// // import { Search } from "lucide-react";
// import Searchbar from "../components/Searchbar";
// import Dropdown from "./Dropdown";


// function Filter() {
//   //   const filters = ["All", "Pending", "Completed"];
//   const [activeFilter, setActiveFilter] = useState("All");
//   return (
   
//     <div className=" flex items-start gap-2 h-full w-full  text-black bg-yellow-200 p-5 rounded-2xl border border-gray-600 shadow-lg ">
//       <button type="button"onClick={() => setActiveFilter("All")}
//         className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
//         activeFilter === "All"? "bg-white text-black shadow-sm": "text-gray-500"}`} >
//         All
//       </button>
//       <button type="button"onClick={() => setActiveFilter("Pending")}
//         className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
//         activeFilter === "Pending"? "bg-white text-black shadow-sm": "text-gray-500"}`}>
//         Pending
//       </button>
//       <button type="button"onClick={() => setActiveFilter("Completed")}
//         className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
//         activeFilter === "Completed" ? "bg-white text-black shadow-sm": "text-gray-500"}`}>
//         Completed
//       </button>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-90">
//          <Searchbar />
//           <div className=" px-50  ">
//             <Dropdown />
//           </div>
//       </div>
     
//     </div>

    
//   );
// }

// export default Filter 

import { useState } from "react";
import Searchbar from "../components/Searchbar";
import Dropdown from "./Dropdown";
import TaskCard from "./TaskCard"; 

// Props में पैरेंट (HomePage) से आ रहे फंक्शंस onToggleStatus और onDeleteTask को जोड़ा
function Filter({ tasks = [], onToggleStatus, onDeleteTask }) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Tabs (All/Pending/Completed) के आधार पर डेटा फ़िल्टर करने का लॉजिक
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Pending") return task.status === "Pending";
    if (activeFilter === "Completed") return task.status === "Completed";
    return true; // 'All' सिलेक्ट होने पर सारे टास्क दिखेंगे
  });

  return (
    <div className="flex flex-col gap-6 w-full text-black bg-[#fcd34d] p-5 rounded-3xl border border-gray-600/30 shadow-lg">
      
      {/* Top Filter Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        {/* Navigation Tabs */}
        <div className="flex gap-1 bg-black/5 p-1 rounded-full">
          {["All", "Pending", "Completed"].map((tab) => (
            <button 
              key={tab}
              type="button" 
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeFilter === tab 
                  ? "bg-white text-black shadow-sm" 
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search & Sort Actions */}
        <div className="flex items-center gap-3">
          <Searchbar />
          <Dropdown />
        </div>
      </div>

      {/* --- TASK LIST CONTAINER --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3.5 w-full mt-2">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 bg-white/40 rounded-2xl border border-dashed border-black/10 col-span-full">
            <p className="text-gray-700 font-medium text-sm">
              No tasks found in "{activeFilter}" tab.
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            // यहाँ TaskCard में दोनों फंक्शंस को पास कर दिया
            <TaskCard 
              key={task.id} 
              task={task} 
              onToggleStatus={onToggleStatus}
              onDeleteTask={onDeleteTask}
            />
          ))
        )}
      </div>
      
    </div>
  );
}

export default Filter;
