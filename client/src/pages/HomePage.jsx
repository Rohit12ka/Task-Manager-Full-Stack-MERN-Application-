
import { useState } from "react";
import Navbar from "../components/Navbar";
import Barchart from "./Barchart";
import Status from "../components/Status";
import Filter from "../components/Filter";
import Sidebar from "../components/Sidebar";
import ViewToggle from "../components/ViewToggle";
import CreateTask from "../pages/CreateTask";

function HomePage() {
  const [tasks, setTasks] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
    // const CreateTask = () => {setIsModalOpen(true)};

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]); 
  };
  const handleToggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId 
      ? { ...task, status: task.status === 'Completed' ? 'Pending' : 'Completed' }
        : task
    ));
  };

  // 2. टास्क को लिस्ट से डिलीट करने का फ़ंक्शन
  // const handleDeleteTask = (taskId) => {
  //   setTasks(tasks.filter(task => task.id !== taskId));
  // };

  return (
    <div className="min-h-screen w-screen h-flex overflow-hidden relative ">
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <div className=" md:p-8 space-y-6 bg-gray-300 flex-1 overflow-y-auto w-full pb-32 h-screen bg-linear-to-br from-blue-400 to-sky-300 ">  
          <h1 className=" text-3xl font-bold">Overview</h1>
          <div className="flex justify-between">
            <p>Manage your tasks and track your daily progress.</p>
            <ViewToggle onAddTaskClick={() => CreateTask(true)} />
            
          </div>
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
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700/40 shadow-sm flex flex-col justify-between text-white">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Completed Tasks</p>
                <h3 className="text-3xl font-extrabold mt-2 text-green-500">
                  {tasks.filter(t => t.status === 'Completed').length}
                </h3>
              </div>
              <p className="text-[11px] text-green-400 mt-4">Successfully done</p>
            </div>
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
          <div className="pb-5 grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch"> 
            <div className="md:col-span-2 w-full "> 
              <Barchart />
            </div>
            <div className=" md:col-span-1 w-full mt-7 ">
              <Status />
            </div>
          </div>
          <Filter tasks={tasks} />
        </div>
      </div>
    
    </div>
  );
}
export default HomePage;