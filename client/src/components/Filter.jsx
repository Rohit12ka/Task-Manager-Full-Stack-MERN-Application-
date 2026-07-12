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
import TaskCard from "./TaskCard"; // TaskCard को इम्पोर्ट किया

// Props में पैरेंट से 'tasks' रिसीव कर रहे हैं
function Filter({ tasks = [] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Tabs के हिसाब से टास्क फ़िल्टर करने का लॉजिक
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Pending") return task.status === "Pending";
    if (activeFilter === "Completed") return task.status === "Completed";
    return true; // 'All' के लिए
  });

  return (
    <div className="flex flex-col gap-6 w-full text-black bg-yellow-200 p-5 rounded-2xl border border-gray-600 shadow-lg">
      
      {/* Top Header & Filters Area */}
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <div className="flex gap-2">
          <button 
            type="button" 
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeFilter === "All" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
            }`}
          >
            All
          </button>
          <button 
            type="button" 
            onClick={() => setActiveFilter("Pending")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeFilter === "Pending" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
            }`}
          >
            Pending
          </button>
          <button 
            type="button" 
            onClick={() => setActiveFilter("Completed")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeFilter === "Completed" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Search and Dropdown Section */}
        <div className="flex items-center gap-4">
          <Searchbar />
          <Dropdown />
        </div>
      </div>

      {/* --- CARDS CONTAINER GRID --- */}
      {/* यहाँ आपके डायनामिक कार्ड्स रेंडर होकर सेव होंगे */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-2">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-600 text-center col-span-full py-6 font-medium">
            No tasks found in "{activeFilter}".
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>

    </div>
  );
}

export default Filter;
