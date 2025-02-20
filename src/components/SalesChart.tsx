import React from 'react';
import { MoreVertical } from 'lucide-react';

const SalesChart = () => {
  return (
    <div className="bg-[#001242] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-medium">Your Sales</h3>
          <div className="text-2xl font-bold mt-1">$142,000</div>
          <div className="text-sm text-gray-400">Total Income</div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded-md text-sm">Day</button>
          <button className="px-3 py-1 text-sm">Week</button>
          <button className="px-3 py-1 text-sm">Month</button>
          <button className="p-1">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative h-64 bg-[#001242]/50 rounded-lg">
        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-white/10 px-3 py-1 rounded-md">
          <div className="text-sm">March</div>
          <div className="text-xs text-center">$48,200</div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mt-4 text-xs text-gray-400">
        {['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul'].map((month) => (
          <div key={month} className="text-center">{month}</div>
        ))}
      </div>
    </div>
  );
}

export default SalesChart;