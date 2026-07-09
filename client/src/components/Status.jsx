import { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function Status () {
  // Data array ko render loop se bahar nikal kar memoize kiya
  const statusData = useMemo(() => [
    { name: 'Completed', value: 65, colorClass: 'bg-emerald-600', fill: '#059669' },
    { name: 'Pending', value: 25, colorClass: 'bg-amber-500', fill: '#f59e0b' },
    { name: 'Overdue', value: 10, colorClass: 'bg-rose-600', fill: '#dc2626' },
  ], []);

  return (
    <div className="w-85  p-7 bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* Header */}
      <h3 className="text-base font-bold text-gray-900 mb-6">Status Breakdown</h3>

      <div className="flex items-center justify-between gap-4">
        
        {/* Donut Chart Wrapper */}
        <div className="relative w-40 h-47 ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={70}
                paddingAngle={3}
                dataKey="value"
              >
                {statusData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
    
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
            <span className="text-2xl font-extrabold text-gray-800 leading-none">80%</span>
            <span className="text-[9px] font-bold text-gray-400 tracking-wider mt-1">EFFICIENCY</span>
          </div>
        </div>

        {/* Legend List */}
        <div className="flex-1 space-y-3">
          {statusData.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${item.colorClass}`} />
                <span className="text-gray-500 font-medium">{item.name}</span>
              </div>
              <span className="font-bold text-gray-800">{item.value}%</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
export default Status