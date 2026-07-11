// import React from 'react'
import Navbar from "../components/Navbar";
// import { useState } from "react";
import TaskCard from "../components/TaskCard";
import Barchart from "./Barchart";
import Status from "../components/Status";
// import Searchbar from "../components/Searchbar";
import Filter from "../components/Filter";
import Sidebar from "../components/Sidebar";
// import TaskDetail from "../components/Taskdetail";
import ViewToggle from "../components/ViewToggle";


function HomePage() {
  return (
    <div  className="min-h-screen w-screen h-flex overflow-hidden relative ">
      <Navbar />
      <div className="flex ">
        <Sidebar />
         <div className=" md:p-8 space-y-6 bg-gray-300 flex-1 overflow-y-auto w-full pb-32  h-screen bg-linear-to-br from-gray-700 to-sky-300 ">
           <h1 className=" text-3xl font-bold">Overview</h1>
           <div className="flex justify-between">
            <p>Manage your tasks and track your daily progress.</p>
            <ViewToggle />
           </div>
           <div className="grid grid-row-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TaskCard  />
            <TaskCard  />
            <TaskCard  />
            <TaskCard  />
           </div>

           <div className ="pb-5  grid  grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch"> 
             <div className="md:col-span-2 w-full "> 
               <Barchart />
             </div>
             <div className=" md:col-span-1 w-full mt-7 ">
               <Status />
             </div>

           </div>
           <Filter />
           {/* <TaskDetail /> */}
         </div>
         
        
      </div>
    </div>
  )
}

export default HomePage
