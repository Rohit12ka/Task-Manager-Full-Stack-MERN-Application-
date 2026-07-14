// // import React from 'react';
// import { Calendar, Edit2, Trash2, ExternalLink, CheckCircle } from 'lucide-react';

// export default function TaskCard({ task }) {
//   return (
//     <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow w-full">
//       <div className="flex items-start gap-4">
//         {/* Status Checkbox Icon */}
//         <div className="mt-1 shrink-0">
//           <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer ${
//             task.status === 'Completed' ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-500'
//           }`}>
//             {task.status === 'Completed' && <CheckCircle size={14} className="text-green-500" />}
//           </div>
//         </div>

//         {/* Task Content */}
//         <div className="flex-1 min-w-0">
//           <h3 className={`font-bold text-gray-800 text-base md:text-lg truncate ${
//             task.status === 'Completed' ? 'line-through text-gray-400' : ''
//           }`}>
//             {task.title}
//           </h3>
//           <p className="text-gray-500 text-sm mt-1 line-clamp-2">
//             {task.description || 'No description provided...'}
//           </p>
//         </div>
//       </div>

//       {/* Bottom Row: Badges and Actions */}
//       <div className="flex items-center justify-between pt-3 border-t border-gray-50 w-full flex-wrap gap-2">
//         <div className="flex items-center gap-3">
//           {/* Priority Badge */}
//           <span className={`text-[11px] font-bold px-2.5 py-1 rounded-xl uppercase tracking-wider ${
//             task.priority === 'High' ? 'bg-red-50 text-red-600' :
//             task.priority === 'Medium' ? 'bg-amber-50 text-amber-600' :
//             'bg-green-50 text-green-600'
//           }`}>
//             {task.priority}
//           </span>

//           {/* Due Date */}
//           <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
//             <Calendar size={13} />
//             <span>{task.dueDate}</span>
//           </div>
//         </div>

//         {/* Action Buttons (Edit, Delete, Link) */}
//         <div className="flex items-center gap-1 text-gray-400">
//           <button className="p-1.5 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition-colors">
//             <Edit2 size={14} />
//           </button>
//           <button className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors">
//             <Trash2 size={14} />
//           </button>
//           <button className="p-1.5 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition-colors">
//             <ExternalLink size={14} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from 'react';
import { Calendar, Edit2, Trash2, ExternalLink, CheckCircle } from 'lucide-react';

// 1. Props में task के साथ onToggleStatus और onDeleteTask को रिसीव किया
export default function TaskCard({ task, onToggleStatus, onDeleteTask }) {
  
  // बार-बार task.status === 'Completed' न लिखना पड़े इसलिए एक वेरिएबल बना लिया
  const isCompleted = task?.status === 'Completed';

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow w-full text-black">
      <div className="flex items-start gap-4">
        <button
          type="button"
          onClick={() => onToggleStatus && onToggleStatus(task.id)} // क्लिक पर स्टेटस बदलेगा
          className={`mt-1 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-500'
          }`}
        >
          {isCompleted && <CheckCircle size={14} className="text-green-500 fill-green-50" />}
        </button>

        {/* --- 2. TEXT DECORATION: LINE-THROUGH IF COMPLETED --- */}
        <div className="flex-1 min-w-0 text-left">
          <h3 className={`font-bold text-gray-800 text-base md:text-lg truncate transition-all ${
            isCompleted ? 'line-through text-gray-400/80 decoration-2' : ''
          }`}>
            {task?.title}
          </h3>
          <p className={`text-sm mt-1 line-clamp-2 transition-all ${
            isCompleted ? 'line-through text-gray-400/60' : 'text-gray-500'
          }`}>
            {task?.description || 'No description provided...'}
          </p>
        </div>
      </div>

      {/* Bottom Row: Badges and Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-50 w-full flex-wrap gap-2">
        <div className="flex items-center gap-3">
          {/* Priority Badge */}
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-xl uppercase tracking-wider ${
            task?.priority === 'High' ? 'bg-red-50 text-red-600' :
            task?.priority === 'Medium' ? 'bg-amber-50 text-amber-600' :
            'bg-green-50 text-green-600'
          }`}>
            {task?.priority}
          </span>

          {/* Due Date */}
          <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
            <Calendar size={13} />
            <span>{task?.dueDate}</span>
          </div>
        </div>

        {/* Action Buttons (Edit, Delete, Link) */}
        <div className="flex items-center gap-1 text-gray-400">
          <button type="button" className="p-1.5 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition-colors">
            <Edit2 size={14} />
          </button>
          
          {/* --- 3. RIGHT SIDE TRASH/DELETE BUTTON --- */}
          <button 
            type="button"
            onClick={() => onDeleteTask && onDeleteTask(task.id)} // क्लिक पर कार्ड डिलीट होगा
            className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors"
          >
            <Trash2 size={14} />
          </button>
          
          <button type="button" className="p-1.5 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition-colors">
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}