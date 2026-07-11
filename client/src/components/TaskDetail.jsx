import { X, Calendar, Flag, Clock, User, CheckCircle2, Edit2, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

const priorityColors = {
  high: "bg-rose-50 text-rose-600 border-rose-100",
  medium: "bg-amber-50 text-amber-600 border-amber-100",
  low: "bg-emerald-50 text-emerald-600 border-emerald-100",
};

const InfoItem = ({ icon: Icon, label, children }) => (
  <div className="space-y-2">
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </p>
    <div className="text-sm font-bold text-gray-900">{children}</div>
  </div>
);

function TaskDetail({ task, isOpen, onClose, onEdit, onDelete, onToggle }) {
  if (!task) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50"
          />

          {/* Right Side Drawer Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col justify-between overflow-hidden"
          >
            {/* Header section */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white/80 backdrop-blur-md z-10">
              <h2 className="text-xl font-bold text-gray-900">Task Details</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 p-6 space-y-8 overflow-y-auto">
              
              {/* Task Status & Title Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onToggle(task.id)}
                    className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${
                      task.completed 
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100" 
                        : "border-gray-200 text-transparent hover:border-indigo-400"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                  <span className={`text-xs font-bold uppercase tracking-widest ${
                    task.completed ? "text-indigo-600" : "text-gray-400"
                  }`}>
                    {task.completed ? "Completed" : "In Progress"}
                  </span>
                </div>
                
                {/* Fixed `cn` dependency with Standard Template Strings */}
                <h1 className={`text-3xl font-bold text-gray-900 leading-tight wrap-break-words ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}>
                  {task.title}
                </h1>
                
                <p className="text-gray-500 text-base leading-relaxed wrap-break-words">
                  {task.description || "No description provided."}
                </p>
              </div>

              {/* Meta Grid Section */}
              <div className="grid grid-cols-2 gap-6 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                <InfoItem icon={Flag} label="Priority">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border uppercase tracking-wider ${
                    priorityColors[task.priority] || "bg-gray-50 text-gray-600 border-gray-100"
                  }`}>
                    {task.priority}
                  </span>
                </InfoItem>

                <InfoItem icon={Calendar} label="Due Date">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {task.dueDate ? format(new Date(task.dueDate), "MMM d, yyyy") : "No due date"}
                  </span>
                </InfoItem>

                <InfoItem icon={User} label="Assignee">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">
                      JD
                    </span>
                    <span className="text-sm font-bold text-gray-700">John Doe (Me)</span>
                  </span>
                </InfoItem>

                <InfoItem icon={Clock} label="Created">
                  <span className="text-sm font-bold text-gray-700">June 20, 2026</span>
                </InfoItem>
              </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="p-6 border-t border-gray-100 flex items-center gap-4 bg-white">
              <button
                onClick={() => onEdit(task)}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-2xl transition-all"
              >
                <Edit2 className="w-4 h-4" />
                Edit Task
              </button>
              <button
                onClick={() => {
                  onDelete(task.id);
                  onClose();
                }}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold rounded-2xl transition-all"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default TaskDetail;