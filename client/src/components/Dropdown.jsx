import { useState, useEffect, useRef } from 'react';

function Dropdown() {
  const [selected, setSelected] = useState("Newest First");
  const [isOpen, setIsOpen] = useState(false); 
  const options = ["Newest First", "Oldest First", "Priority", "Due Date"];
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-35 px-2 py-1.5 border border-gray-300 rounded-full bg-white text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <svg
            className="w-4 h-4 text-gray-500 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
          <span className="whitespace-nowrap truncate">{selected}</span>
        </div>
        <svg
          className={`w-3.5 h-3.5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-1 w-35 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {options.map((option) => {
            const isSelected = option === selected;
            return (
              <li
                key={option}
                onClick={() => {
                  setSelected(option); 
                  setIsOpen(false); 
                }}
                className={`px-7 py-2.5 text-sm cursor-pointer transition-colors duration-200
                  ${
                    isSelected
                      ? "bg-blue-600 text-white font-medium" 
                      : "text-gray-700 hover:bg-gray-300" 
                  }`}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;