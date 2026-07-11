// import { useState } from 'react';
// import { LayoutGrid, List, Plus } from 'lucide-react';
// // import CreateTask  from "../pages/CreateTask";

//  function ViewToggle({ onClick }) {

//   const [view, setView] = useState('grid');
//   // const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="flex items-center bg-transparent gap-2 p-2 ">
      
//        <div className="flex items-center gap-1 p-1.5 bg-gray-200/60 border border-gray-300/40 rounded-2xl">
//         {/* Grid View Button */}
//         <button
//           onClick={() => setView('grid')}
//           className={`p-1 rounded-xl transition-all duration-200 ${
//             view === 'grid'
//               ? 'bg-blue-100/80 text-blue-700 shadow-sm'
//               : 'text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           <LayoutGrid size={20} strokeWidth={2.5} />
//         </button>

//         {/* List View Button */}
//         <button
//           onClick={() => setView('list')}
//           className={`p-1 rounded-xl transition-all duration-200 ${
//             view === 'list'
//               ? 'bg-blue-100/80 text-blue-700 shadow-sm'
//               : 'text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           <List size={20} strokeWidth={2.5} />
//         </button>
//       </div>

//       {/* 2. Add Task Button */}
//       <button onClick={ onClick }
//        className="flex items-center gap-2 bg-[#0052cc] hover:bg-[#0043a4] text-white px-3 py-2 rounded-2xl font-semibold tracking-wide transition-colors shadow-sm">
//         <Plus size={22} strokeWidth={3} />
//         <span>Add Task</span>
//       </button>

//     </div>
//   );
// }
// export default ViewToggle
import { useState } from 'react';
import { LayoutGrid, List, Plus } from 'lucide-react';
// Sahi path check kar lena aapne folder structure ke hisab se
import CreateTask from '../pages/CreateTask'; 

function ViewToggle() {
  const [view, setView] = useState('grid');
  // 1. Modal open/close karne ke liye switch state active ki
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center bg-transparent gap-2 p-2 relative">
      
      <div className="flex items-center gap-1 p-1.5 bg-gray-200/60 border border-gray-300/40 rounded-2xl">
        {/* Grid View Button */}
        <button
          onClick={() => setView('grid')}
          className={`p-1 rounded-xl transition-all duration-200 ${
            view === 'grid'
              ? 'bg-blue-100/80 text-blue-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <LayoutGrid size={20} strokeWidth={2.5} />
        </button>

        {/* List View Button */}
        <button
          onClick={() => setView('list')}
          className={`p-1 rounded-xl transition-all duration-200 ${
            view === 'list'
              ? 'bg-blue-100/80 text-blue-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <List size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* 2. Add Task Button: Iske click par state true ho jayegi */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 bg-[#0052cc] hover:bg-[#0043a4] text-white px-3 py-2 rounded-2xl font-semibold tracking-wide transition-colors shadow-sm"
      >
        <Plus size={22} strokeWidth={3} />
        <span>Add Task</span>
      </button>

      {/* 3. INTEGRATION: Agar isModalOpen true hai to pop-up khulega */}
      {isModalOpen && (
        <CreateTask onClose={() => setIsModalOpen(false)} />
      )}

    </div>
  );
}

export default ViewToggle;