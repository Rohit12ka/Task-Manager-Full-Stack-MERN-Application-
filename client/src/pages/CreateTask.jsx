// import { useState } from 'react';
// import { X, Type, AlignLeft, Calendar, Flag, Check } from 'lucide-react';

// function CreateTask({ onClose }) {
//   const [priority, setPriority] = useState('Medium');

//   return (
//     /* 1. MAIN BACKGROUND: Yahan onClick={onClose} lagaya taaki side me click karne par modal band ho */
//     <div
//       onClick={onClose}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
//     >

//       {/* 2. MODAL CARD BOX: Yahan onClick={(e) => e.stopPropagation()} lagaya
//           taaki form ke andar click karne par modal band NA ho */}
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="w-full max-w-lg bg-[#fbf9f4] rounded-3xl p-8 shadow-2xl border border-gray-200/50 mx-4 relative"
//       >

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold text-gray-800 tracking-tight">Create New Task</h2>
//           <button
//             onClick={onClose}
//             className="p-1.5 hover:bg-gray-200/60 rounded-full transition-colors text-gray-400 hover:text-gray-600"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             onClose();
//           }}
//           className="space-y-5"
//         >
//           {/* Task Title */}
//           <div>
//             <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">
//               <Type size={14} /> Task Title
//             </label>
//             <input
//               type="text" required
//               placeholder="e.g. Design new landing page"
//               className="w-full bg-transparent border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">
//               <AlignLeft size={14} /> Description
//             </label>
//             <textarea
//               rows="3"
//               placeholder="Add more details about this task..."
//               className="w-full bg-transparent border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
//             />
//           </div>

//           {/* Due Date & Priority */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">
//                 <Calendar size={14} /> Due Date
//               </label>
//               <input
//                 type="date"
//                 defaultValue="2026-07-10"
//                 className="w-full bg-transparent border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
//               />
//             </div>

//             <div>
//               <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">
//                 <Flag size={14} /> Priority
//               </label>
//               <div className="flex bg-gray-200/50 p-1 rounded-2xl border border-gray-300/40">
//                 {['Low', 'Medium', 'High'].map((p) => (
//                   <button
//                     key={p}
//                     type="button"
//                     onClick={() => setPriority(p)}
//                     className={`flex-1 text-center py-1.5 text-xs font-semibold rounded-xl transition-all ${
//                       priority === p
//                         ? 'bg-[#ff9500] text-white shadow-sm'
//                         : 'text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     {p}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Bottom Buttons */}
//           <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-200/60 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="text-sm font-semibold text-gray-500 hover:text-gray-700"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex items-center gap-2 bg-[#0052cc] hover:bg-[#0043a4] text-white px-5 py-2.5 rounded-2xl text-sm font-semibold transition-colors shadow-sm"
//             >
//               <Check size={16} strokeWidth={2.5} />
//               <span>Create Task</span>
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateTask;
import { useState } from "react";
import { X, Type, AlignLeft, Calendar, Flag, Check } from "lucide-react";

// 1. यहाँ Props में onAddTask को रिसीव करना ज़रूरी था
function CreateTask({ onClose, onAddTask }) {
  // इनपुट फील्ड्स को ट्रैक करने के लिए स्टेट्स बनाईं
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("2026-07-10");
  const [priority, setPriority] = useState("Medium");

  // फॉर्म सबमिट होने का हैंडलर
  const handleSubmit = (e) => {
    e.preventDefault(); // पेज रीलोड होने से रोकने के लिए

    if (!title.trim()) return alert("Title is required!");

    // 2. नया टास्क ऑब्जेक्ट बनाया (status: 'Pending' के साथ, ताकि All टैब में दिखे)
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
      status: "Pending",
    };

    // 3. डेटा को ऊपर HomePage.jsx की स्टेट में भेजा
    if (onAddTask) {
      onAddTask(newTask);
    }

    // इनपुट्स खाली किए और फॉर्म बंद किया
    setTitle("");
    setDescription("");
    if (onClose) onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[#fbf9f4] rounded-3xl p-8 shadow-2xl border border-gray-200/50 mx-4 relative"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">
            Create New Task
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-gray-200/60 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form: यहाँ handleSubmit फंक्शन को कनेक्ट किया */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Task Title */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">
              <Type size={14} /> Task Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)} // स्टेट से सिंक किया
              placeholder="e.g. Design new landing page"
              className="w-full bg-transparent border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          
          <div>
            <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">
              <AlignLeft size={14} /> Description
            </label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)} // स्टेट से सिंक किया
              placeholder="Add more details about this task..."
              className="w-full bg-transparent border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          {/* Due Date & Priority */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">
                <Calendar size={14} /> Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)} // स्टेट से सिंक किया
                className="w-full bg-transparent border border-gray-300 rounded-2xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">
                <Flag size={14} /> Priority
              </label>
              <div className="flex bg-gray-200/50 p-1 rounded-2xl border border-gray-300/40">
                {["Low", "Medium", "High"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`flex-1 text-center py-1.5 text-xs font-semibold rounded-xl transition-all ${
                      priority === p
                        ? "bg-[#ff9500] text-white shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-200/60 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-semibold text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#0052cc] hover:bg-[#0043a4] text-white px-5 py-2.5 rounded-2xl text-sm font-semibold transition-colors shadow-sm"
            >
              <Check size={16} strokeWidth={2.5} />
              <span>Create Task</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
