import React from 'react';
import { Bell, Monitor, ArrowRight } from 'lucide-react';
import Header from '../components/Header';

const Website = () => {
  return (
    <div className="lg:pl-64">
      <div className="lg:p-6">
        {/* Header */}
        <Header />

        {/* Progress Bars Section */}
        <div className="bg-[#001242] bg-opacity-80 rounded-xl p-8 mb-6">
          <h3 className="text-lg font-medium mb-8">Your Progress Bar</h3>

          <div className="space-y-8">
            {/* Figma Design Progress */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Figma Design Done (33.3%)</span>
              </div>
              <div className="w-full flex items-center h-3 bg-[#D9D9D9] rounded-full">
                <div className="h-2  mx-2 w-1/3 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Website Development Progress */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Website Development Done (66.6%)</span>
              </div>
              <div className="w-full flex items-center h-3 bg-[#D9D9D9] rounded-full">
                <div className="h-2 mx-2 w-2/3 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Client Approval Progress */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Client Approved (100%)</span>
              </div>
              <div className="w-full flex items-center h-3 bg-[#D9D9D9] rounded-full">
                <div className="h-2  mx-2 w-full bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Your Website Chart */}
          <div className="bg-[#001242] rounded-xl lg:p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-medium">Your Website</h3>
                <div className="mt-2">
                  <div className="text-2xl font-bold">$142,000</div>
                  <div className="text-sm text-gray-400">Total Income</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-gray-700 rounded-md text-sm">Day</button>
                <button className="px-3 py-1 text-sm">Week</button>
                <button className="px-3 py-1 text-sm">Month</button>
                <button className="p-1">
                  <ArrowRight className="w-5 h-5" />
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

          {/* Advertisement Breakdown */}
          <div className="bg-[#001242] rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Advertisement Breakdown</h3>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-gray-700 rounded-md text-sm">Day</button>
                <button className="px-3 py-1 text-sm">Week</button>
                <button className="px-3 py-1 text-sm">Month</button>
                <button className="p-1">
                  <ArrowRight className="w-5 h-5" />
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
        </div>
      </div>
    </div>
  );
};

export default Website;