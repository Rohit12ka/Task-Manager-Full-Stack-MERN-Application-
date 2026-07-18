
import { useState } from 'react';
import { LayoutGrid, List, Plus } from 'lucide-react';

// Props में 'onAddTaskClick' को रिसीव किया जो HomePage.jsx से आ रहा है
function ViewToggle({ onAddTaskClick }) {
  const [view, setView] = useState('grid');

  return (
    <div className="flex items-center bg-transparent gap-2 p-2 relative">
      
      <div className="flex items-center gap-1 p-1.5 bg-gray-200/60 border border-gray-300/40 rounded-2xl">
        {/* Grid View Button */}
        <button
          type="button"
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
          type="button"
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

      {/* Add Task Button: इसके क्लिक पर अब HomePage का फंक्शन चलेगा और मॉडल खुल जाएगा */}
      <button 
        type="button"
        onClick={onAddTaskClick} // यहाँ प्रोप्स वाला फंक्शन कॉल हो रहा है
        className="flex items-center gap-2 bg-[#0052cc] hover:bg-[#0043a4] text-white px-3 py-2 rounded-2xl font-semibold tracking-wide transition-colors shadow-sm"
      >
        <Plus size={22} strokeWidth={3} />
        <span>Add Task</span>
      </button>

    </div>
  );
}

export default ViewToggle;