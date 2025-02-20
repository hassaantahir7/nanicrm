import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';
import Header from '../components/Header';

const Marketing = () => {
  return (
    <div className="lg:pl-64">
      <div className="lg:p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 bg-[#001242] mt-16 px-4 lg:mt-0 py-3 rounded-xl">
        <h1 className="text-2xl font-bold">Marketing</h1>
        <button className="p-2 rounded-lg bg-blue-900 bg-opacity-50">
          <ArrowRight className="w-5 h-5" />
        </button>
      </header>

        {/* Overview Section */}
        <div className="mb-8  border-b-2 border-white pb-4">
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl font-bold">Overview</h2>
            <span className="text-gray-400">Marketing Performance</span>
          </div>
          <div className="mt-2 text-gray-400">
            <span>Date Range: </span>
            <span>2023-09-01 to 2023-09-30</span>
          </div>
        </div>

        {/* Performance Overview */}
        <h3 className="text-lg font-medium mb-4">Performance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Website Visitors */}
          <div className="bg-[#001242] bg-opacity-60 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor" />
                </svg>
              </div>
              <span>Total Website Visitors</span>
            </div>
            <div className="text-2xl font-bold mb-4">12,345</div>
            <div className="text-sm text-gray-400 mb-2">Conversion Rate</div>
            <div className="flex gap-2 mb-2">
              <div className="w-1/3 h-12 bg-yellow-500 rounded-lg"></div>
              <div className="w-1/3 h-12 bg-gray-600 rounded-lg"></div>
              <div className="w-1/3 h-12 bg-blue-500 rounded-lg"></div>
            </div>
            <div className="text-sm">5.9%</div>
          </div>

          {/* Revenue Generated */}
          <div className="bg-[#3A3078] bg-opacity-60 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 18.09V20H10.74V18.07C9.03 17.71 7.58 16.61 7.47 14.67H9.43C9.53 15.72 10.25 16.54 12.08 16.54C14.04 16.54 14.48 15.56 14.48 14.95C14.48 14.12 14.04 13.34 11.81 12.81C9.33 12.21 7.63 11.19 7.63 9.14C7.63 7.42 9.02 6.3 10.74 5.93V4H13.41V5.95C15.27 6.4 16.2 7.81 16.26 9.34H14.3C14.25 8.23 13.66 7.47 12.08 7.47C10.58 7.47 9.68 8.15 9.68 9.11C9.68 9.95 10.33 10.5 12.35 11C14.37 11.5 16.53 12.42 16.53 14.94C16.53 16.76 15.15 17.76 13.41 18.09Z" fill="currentColor" />
                </svg>
              </div>
              <span>Revenue Generated</span>
            </div>
            <div className="text-2xl font-bold mb-4">$45,678</div>
            <div className="text-sm text-emerald-400 mb-2">↑ 2.4%</div>
            <div className="relative h-16">
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 200 50">
                  <path
                    d="M0 40 C20 40, 30 10, 50 20 S70 40, 90 30 S110 10, 130 25 S150 40, 170 35 S190 20, 200 25"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ROI */}
          <div className="bg-[#40548A] bg-opacity-40 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M3.5 18.49L9.5 12.48L13.5 16.48L22 6.92L20.59 5.51L13.5 13.48L9.5 9.48L2 16.99L3.5 18.49Z" fill="currentColor" />
                </svg>
              </div>
              <span>ROI</span>
            </div>
            <div className="text-2xl font-bold mb-4">18.5%</div>
            <div className="text-sm text-orange-400 mb-2">↓ 2.3%</div>
            <div className="relative h-16">
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 200 50">
                  <path
                    d="M0 25 C20 30, 40 20, 60 25 S80 30, 100 25 S120 20, 140 25 S160 30, 180 25 S200 20, 200 25"
                    fill="none"
                    stroke="#FB923C"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Sources and Conversion Funnel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Traffic Sources */}
          <div className="bg-[#001242] rounded-xl p-6">
            <h3 className="font-medium mb-6">Traffic Sources</h3>
            <div className="relative">
              <div className="w-64 h-64 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#334155" strokeWidth="20" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#EF4444" strokeWidth="20" strokeDasharray="125.6 251.2" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="62.8 251.2" strokeDashoffset="-125.6" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="20" strokeDasharray="31.4 251.2" strokeDashoffset="-188.4" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="31.4 251.2" strokeDashoffset="-219.8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium">Traffic</div>
                    <div className="text-sm text-gray-400">Sources</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-0 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">40% Social Media</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">25% Paid Search</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">20% Direct Traffic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">15% Organic Search</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conversion Funnel */}
          <div className="bg-[#001242] rounded-xl p-6">
            <h3 className="font-medium mb-6">Conversion Funnel</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Visitors</span>
                  <span>12,345</span>
                </div>
                <div className="w-full h-[30px] border border-white rounded-lg overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-[#031E24] to-[#2CD5F9]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Leads</span>
                  <span>8,765</span>
                </div>
                <div className="w-full h-[30px] border border-white rounded-lg overflow-hidden">
                  <div className="h-full w-[80%] bg-gradient-to-r from-[#031E24] to-[#2CD5F9]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Sign-ups</span>
                  <span>5,432</span>
                </div>
                <div className="w-full h-[30px] border border-white rounded-lg overflow-hidden">
                  <div className="h-full w-[60%] bg-gradient-to-r from-[#031E24] to-[#2CD5F9]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Purchases</span>
                  <span>2,345</span>
                </div>
                <div className="w-full h-[30px] border border-white rounded-lg overflow-hidden">
                  <div className="h-full w-[40%] bg-gradient-to-r from-[#031E24] to-[#2CD5F9]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Performance */}
        <div className="bg-gradient-to-b from-[#001242]/[0.3] to-[#001242]/[0.7] rounded-xl">
          <div className="flex w-full gap-6">
            {/* Left Section - Content List */}
            <div className="space-y-4 p-6 w-[40%]">
              <h3 className="font-medium">Content Title</h3>
              <div className="space-y-2">
                <div className="p-3 bg-[#0a1f5c] rounded-lg">Data-Driven Marketing</div>
                <div className="p-3 bg-[#0a1f5c] rounded-lg">Blogging Success: Craf</div>
                <div className="p-3 bg-[#0a1f5c] rounded-lg">Digital Marketing Trend</div>
              </div>
            </div>

            {/* Right Section - Performance Table */}
            <div className='bg-[#15114B] bg-opacity-70 p-6 w-[58%] rounded-xl'>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium">Content Performance</h3>
                <span className="text-sm text-gray-400">Top-Performing Content</span>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-400">
                    <th className="pb-4 font-normal">Page Views</th>
                    <th className="pb-4 font-normal">Bounce Rate</th>
                    <th className="pb-4 font-normal">Conversion Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-800">
                    <td className="py-4">5,432</td>
                    <td className="py-4">45%</td>
                    <td className="py-4">8.2%</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="py-4">3,245</td>
                    <td className="py-4">38%</td>
                    <td className="py-4">7.5%</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="py-4">2,876</td>
                    <td className="py-4">40%</td>
                    <td className="py-4">6.9%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;