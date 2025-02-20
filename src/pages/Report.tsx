import React, { useState } from 'react';
import { ArrowRight, FileBarChart } from 'lucide-react';
import Header from '../components/Header';

type TimeRange = 'Day' | 'Week' | 'Month';

interface ChartControlsProps {
  activeRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
}

const ChartControls: React.FC<ChartControlsProps> = ({ activeRange, onRangeChange }) => (
  <div className="flex items-center space-x-2">
    <button
      className={`px-3 py-1 rounded-md text-sm transition-colors ${
        activeRange === 'Day' ? 'bg-gray-700' : 'hover:bg-white/10'
      }`}
      onClick={() => onRangeChange('Day')}
    >
      Day
    </button>
    <button
      className={`px-3 py-1 rounded-md text-sm transition-colors ${
        activeRange === 'Week' ? 'bg-gray-700' : 'hover:bg-white/10'
      }`}
      onClick={() => onRangeChange('Week')}
    >
      Week
    </button>
    <button
      className={`px-3 py-1 rounded-md text-sm transition-colors ${
        activeRange === 'Month' ? 'bg-gray-700' : 'hover:bg-white/10'
      }`}
      onClick={() => onRangeChange('Month')}
    >
      Month
    </button>
    <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
);

const Report = () => {
  const [orderRange, setOrderRange] = useState<TimeRange>('Day');
  const [conversionRange, setConversionRange] = useState<TimeRange>('Day');
  const [performanceRange, setPerformanceRange] = useState<TimeRange>('Day');

  return (
    <div className="lg:pl-64">
        <div className="lg:p-6">
      {/* Header */}
      <Header />

      {/* Orders and Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#001242] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium">Orders</h3>
            <ChartControls activeRange={orderRange} onRangeChange={setOrderRange} />
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

          <div className="relative h-64">
            <div className="absolute inset-0">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path
                  d="M0 160 C80 140, 160 180, 240 120 S320 60, 400 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/20"
                />
                <path
                  d="M0 140 C80 160, 160 120, 240 140 S320 100, 400 120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-blue-500/50"
                />
                <path
                  d="M0 120 C80 100, 160 140, 240 100 S320 80, 400 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-purple-500/50"
                />
              </svg>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 px-3 py-1 rounded-md">
                <div className="text-sm">June 16</div>
                <div className="text-xs text-center">$48,200</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2 mt-4 text-xs text-gray-400">
            {['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <div key={month} className="text-center">{month}</div>
            ))}
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-[#001242] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium">Revenue Breakdown</h3>
            <ChartControls activeRange={orderRange} onRangeChange={setOrderRange} />
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="10"
                  strokeDasharray="70.6 282.6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="10"
                  strokeDasharray="94.2 282.6"
                  strokeDashoffset="-70.6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="10"
                  strokeDasharray="47.1 282.6"
                  strokeDashoffset="-164.8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="10"
                  strokeDasharray="70.6 282.6"
                  strokeDashoffset="-211.9"
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
              <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
              <div>
                <div className="text-sm">Marketing Channels</div>
                <div className="text-xs text-gray-400">$22.0k</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <div className="text-sm">Direct Sales</div>
                <div className="text-xs text-gray-400">$8.4k</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div>
                <div className="text-sm">Offline Channels</div>
                <div className="text-xs text-gray-400">$18.6k</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div>
                <div className="text-sm">Other Channels</div>
                <div className="text-xs text-gray-400">$15.3k</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="bg-[#001242] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium">Performance</h3>
            <ChartControls activeRange={performanceRange} onRangeChange={setPerformanceRange} />
          </div>

          <div className="relative h-48">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M0 120 C40 100, 80 140, 120 100 S160 60, 200 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-500/50"
              />
            </svg>
            <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 px-3 py-1 rounded-md">
              <div className="text-sm">June 16</div>
              <div className="text-xs text-center">$48,200</div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 mt-4 text-xs text-gray-400">
            {['Apr', 'Jun', 'Jul', 'Aug', 'Sep'].map((month) => (
              <div key={month} className="text-center">{month}</div>
            ))}
          </div>
        </div>

        {/* Conversion History */}
        <div className="bg-[#001242] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-medium">Conversion history</h3>
              <p className="text-sm text-gray-400">Week to week performance</p>
            </div>
            <ChartControls activeRange={conversionRange} onRangeChange={setConversionRange} />
          </div>

          <div className="relative h-48">
            <div className="flex justify-between h-full items-end">
              {[40, 60, 30, 70, 50, 80, 40, 60, 30, 70].map((height, index) => (
                <div
                  key={index}
                  className="w-4 bg-blue-500/20 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-[#001242] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium">Revenue</h3>
            <ChartControls activeRange={performanceRange} onRangeChange={setPerformanceRange} />
          </div>

          <div className="relative h-48">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M0 120 C40 100, 80 140, 120 100 S160 60, 200 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-purple-500/50"
              />
              <path
                d="M0 140 C40 120, 80 160, 120 120 S160 80, 200 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-500/50"
              />
            </svg>
            <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-white/10 px-3 py-1 rounded-md">
              <div className="text-sm">June 16</div>
              <div className="text-xs text-center">$48,200</div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 mt-4 text-xs text-gray-400">
            {['Apr', 'Jun', 'Jul', 'Aug', 'Sep'].map((month) => (
              <div key={month} className="text-center">{month}</div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Report;