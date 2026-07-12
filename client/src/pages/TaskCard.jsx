// import React from 'react';

export default function TaskCard({ task }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-4">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-900 text-lg">{task.title}</h3>
          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-700">
            {task.priority}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{task.description}</p>
      </div>
      <div className="text-xs text-gray-500 pt-2 border-t">
        📅 {task.dueDate}
      </div>
    </div>
  );
}