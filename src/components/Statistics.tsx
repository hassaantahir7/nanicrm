import React from 'react';
import { MoreVertical } from 'lucide-react';

const Statistics = () => {
  return (
    <div className="bg-[#001242] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">Email Sent Total</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">March 2020</span>
          <button className="p-1">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#818cf8"
              strokeWidth="10"
              strokeDasharray="282.7"
              strokeDashoffset="155.5"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#fb7185"
              strokeWidth="10"
              strokeDasharray="282.7"
              strokeDashoffset="127.2"
              className="transform origin-center rotate-[127.2deg]"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4ade80"
              strokeWidth="10"
              strokeDasharray="282.7"
              strokeDashoffset="254.4"
              className="transform origin-center rotate-[254.4deg]"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <div className="text-2xl font-bold">778</div>
              <div className="text-sm text-gray-400">Campaign sent</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4 text-sm">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <span className="text-[#818cf8]">•</span>
              <span>860 send</span>
            </div>
            <span>45%</span>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <span className="text-[#fb7185]">•</span>
              <span>730 open</span>
            </div>
            <span>45%</span>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <span className="text-[#4ade80]">•</span>
              <span>234 spam</span>
            </div>
            <span>10%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;