import React from 'react';
import { MoreVertical } from 'lucide-react';

const AdvertisementBreakdown = () => {
  return (
    <div className="bg-[#001242] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">Advertisement Breakdown</h3>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded-md text-sm">Day</button>
          <button className="px-3 py-1 text-sm">Week</button>
          <button className="px-3 py-1 text-sm">Month</button>
          <button className="p-1">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative">
          <svg className="w-48 h-48">
            <circle
              cx="96"
              cy="96"
              r="70"
              fill="none"
              stroke="#2196F3"
              strokeWidth="24"
              strokeDasharray="110 440"
            />
            <circle
              cx="96"
              cy="96"
              r="70"
              fill="none"
              stroke="#FFA726"
              strokeWidth="24"
              strokeDasharray="110 440"
              strokeDashoffset="-110"
            />
            <circle
              cx="96"
              cy="96"
              r="70"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="24"
              strokeDasharray="110 440"
              strokeDashoffset="-220"
            />
            <circle
              cx="96"
              cy="96"
              r="70"
              fill="none"
              stroke="#FF5722"
              strokeWidth="24"
              strokeDasharray="110 440"
              strokeDashoffset="-330"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">$85k</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#2196F3] rounded-full"></div>
          <div className="flex-1">
            <div className="text-sm">Meta Adds</div>
            <div className="text-xs text-gray-400">$22.0k</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#FFA726] rounded-full"></div>
          <div className="flex-1">
            <div className="text-sm">Offline Channels</div>
            <div className="text-xs text-gray-400">$18.6k</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#4CAF50] rounded-full"></div>
          <div className="flex-1">
            <div className="text-sm">Instagram Adds</div>
            <div className="text-xs text-gray-400">$8.4k</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#FF5722] rounded-full"></div>
          <div className="flex-1">
            <div className="text-sm">Other Channels</div>
            <div className="text-xs text-gray-400">$15.3k</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisementBreakdown;