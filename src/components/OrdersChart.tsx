import React from 'react';
import { MoreVertical } from 'lucide-react';

const OrdersChart = () => {
  return (
    <div className="bg-[#001242] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">Orders</h3>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded-md text-sm">Day</button>
          <button className="px-3 py-1 text-sm">Week</button>
          <button className="px-3 py-1 text-sm">Month</button>
          <button className="p-1">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white rounded-sm"></div>
          <span className="text-sm">28 July 2018</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <span className="text-sm">28 July 2019</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
          <span className="text-sm">28 July 2020</span>
        </div>
      </div>

      <div className="relative h-64 bg-[#001242]/50 rounded-lg">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 px-3 py-1 rounded-md">
          <div className="text-sm">June 16</div>
          <div className="text-xs text-center">$48,200</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 mt-4 text-xs text-gray-400">
        {['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
          <div key={month} className="text-center">{month}</div>
        ))}
      </div>
    </div>
  );
}

export default OrdersChart;