// // import React from 'react'
// import Navbar from "../components/Navbar";
// // import { useState } from "react";
// import TaskCard from "../components/TaskCard";
// import Barchart from "./Barchart";
// import Status from "../components/Status";
// // import Searchbar from "../components/Searchbar";
// import Filter from "../components/Filter";
// import Sidebar from "../components/Sidebar";
// // import TaskDetail from "../components/Taskdetail";
// import ViewToggle from "../components/ViewToggle";


// function HomePage() {
//   return (
//     <div  className="min-h-screen w-screen h-flex overflow-hidden relative ">
//       <Navbar />
//       <div className="flex ">
//         <Sidebar />
//          <div className=" md:p-8 space-y-6 bg-gray-300 flex-1 overflow-y-auto w-full pb-32  h-screen bg-linear-to-br from-gray-700 to-sky-300 ">
//            <h1 className=" text-3xl font-bold">Overview</h1>
//            <div className="flex justify-between">
//             <p>Manage your tasks and track your daily progress.</p>
//             <ViewToggle />
//            </div>
//            <div className="grid grid-row-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <TaskCard  />
//             <TaskCard  />
//             <TaskCard  />
//             <TaskCard  />
//            </div>

//            <div className ="pb-5  grid  grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch"> 
//              <div className="md:col-span-2 w-full "> 
//                <Barchart />
//              </div>
//              <div className=" md:col-span-1 w-full mt-7 ">
//                <Status />
//              </div>

//            </div>
//            <Filter />
//            {/* <TaskDetail /> */}
//          </div>
         
        
//       </div>
//     </div>
//   )
// }

// export default HomePage
// 1. useState को अनकमेंट करके इम्पोर्ट किया
import { useState } from "react";
import Navbar from "../components/Navbar";
import Barchart from "./Barchart";
import Status from "../components/Status";
import Filter from "../components/Filter";
import Sidebar from "../components/Sidebar";
import ViewToggle from "../components/ViewToggle";
import CreateTask from "../pages/CreateTask";

function HomePage() {
  // पूरे प्रोजेक्ट की मेन स्टेट (तिजोरी) जहाँ सारा डेटा रहेगा
  const [tasks, setTasks] = useState([]); 
  
  // Modal (CreateTask फॉर्म) को खोलने और बंद करने की स्टेट
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // नया टास्क एरे में जोड़ने के लिए फंक्शन
  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]); // नया टास्क लिस्ट में सबसे ऊपर जुड़ जाएगा
  };
  const handleToggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'Completed' ? 'Pending' : 'Completed' }
        : task
    ));
  };

  // 2. टास्क को लिस्ट से डिलीट करने का फ़ंक्शन
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    
    <div className="min-h-screen w-screen h-flex overflow-hidden relative ">
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <div className=" md:p-8 space-y-6 bg-gray-300 flex-1 overflow-y-auto w-full pb-32 h-screen bg-linear-to-br from-gray-700 to-sky-300 ">
          
          <h1 className=" text-3xl font-bold">Overview</h1>
          <div className="flex justify-between">
            <p>Manage your tasks and track your daily progress.</p>
            
            {/* यहाँ ViewToggle को फंक्शन पास किया ताकि उसके अंदर का बटन modal खोल सके */}
            <ViewToggle onAddTaskClick={() => setIsModalOpen(true)} />
          </div>

          {/* --- 4 REAL-TIME COUNTER STATS CARDS --- */}
          {/* ये सिर्फ टास्क का काउंट दिखाएंगे, नया टास्क ऐड होने पर नए कार्ड्स नीचे फिल्टर में बनेंगे */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Total Tasks */}
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700/40 shadow-sm flex flex-col justify-between text-white">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Tasks</p>
                <h3 className="text-3xl font-extrabold mt-2">{tasks.length}</h3>
              </div>
              <p className="text-[11px] text-blue-400 mt-4">All structural tasks</p>
            </div>

            {/* 2. Pending Tasks */}
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700/40 shadow-sm flex flex-col justify-between text-white">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Pending Tasks</p>
                <h3 className="text-3xl font-extrabold mt-2 text-amber-500">
                  {tasks.filter(t => t.status === 'Pending').length}
                </h3>
              </div>
              <p className="text-[11px] text-amber-400 mt-4">In progress or waiting</p>
            </div>

            {/* 3. Completed Tasks */}
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700/40 shadow-sm flex flex-col justify-between text-white">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Completed Tasks</p>
                <h3 className="text-3xl font-extrabold mt-2 text-green-500">
                  {tasks.filter(t => t.status === 'Completed').length}
                </h3>
              </div>
              <p className="text-[11px] text-green-400 mt-4">Successfully done</p>
            </div>

            {/* 4. Overdue Tasks */}
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700/40 shadow-sm flex flex-col justify-between text-white">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Overdue Tasks</p>
                <h3 className="text-3xl font-extrabold mt-2 text-red-500">
                  {tasks.filter(t => t.status === 'Overdue').length}
                </h3>
              </div>
              <p className="text-[11px] text-red-400 mt-4">Passed due date</p>
            </div>

          </div>

          {/* चार्ट और स्टेटस सेक्शन */}
          <div className="pb-5 grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch"> 
            <div className="md:col-span-2 w-full "> 
              <Barchart />
            </div>
            <div className=" md:col-span-1 w-full mt-7 ">
              <Status />
            </div>
          </div>

          {/* पीले रंग वाला फिल्टर और लिस्ट कंटेनर */}
          {/* यहाँ 'tasks' की लिस्ट पास की ताकि नए कार्ड्स इसके अंदर दिखाई दें */}
          <Filter tasks={tasks} />

        </div>
      </div>

      {/* --- Create Task Modal Window --- */}
      {/* जब isModalOpen true होगा, तभी फॉर्म स्क्रीन पर पॉप-अप होगा */}
      {isModalOpen && (
        <CreateTask 
          onAddTask={handleAddTask} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
      <Filter 
      tasks={tasks} 
      onToggleStatus={handleToggleTaskStatus}
      onDeleteTask={handleDeleteTask}
    />
    </div>
  );
}

export default HomePage;