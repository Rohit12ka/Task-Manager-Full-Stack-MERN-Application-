import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

function Barchart() {
  const chartData = useMemo(() => [
    { name: 'Mon', value: 4 },
    { name: 'Tue', value: 7 },
    { name: 'Wed', value: 5 },
    { name: 'Thu', value: 8, isActive: true }, 
    { name: 'Fri', value: 6 },
    { name: 'Sat', value: 3 },
    { name: 'Sun', value: 2 },
  ], []);

  return (
    <div className="w-full mt-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-bold text-gray-800">Task Completion Rate</h3>
        <button className="text-xs font-semibold text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors">
          LAST 7 DAYS <span className="text-[10px]">▼</span>
        </button>
      </div>
      {/* Chart */}
      <div className="h-50 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
              domain={[0, 8]} 
            />
            <Tooltip cursor={{ fill: 'transparent' }} />
            
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={24}>
              {chartData.map((entry) => (
                <Cell 
                  key={entry.name} // index ki jagah unique name key use ki for better React diffing
                  className={entry.isActive ? 'fill-blue-600' : 'fill-blue-100'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart
