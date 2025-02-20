import React, { useState } from 'react';
import { ArrowRight, Settings } from 'lucide-react';
import emailicon from '/public/icons/email.svg'
import Header from '../components/Header';

interface Event {
  id: number;
  title: string;
  time: string;
}

const events: Event[] = [
  { id: 1, title: 'Meeting', time: '7:30-9:00' },
  { id: 2, title: 'Type to add your event ...', time: '10:00-11:00' },
];

const Branding = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2021, 2, 13)); // March 2021

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const previousMonthDays = Array.from({ length: firstDayOfMonth }, (_, i) => 27 + i);
  const nextMonthDays = Array.from({ length: 42 - (daysInMonth + firstDayOfMonth) }, (_, i) => i + 1);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="lg:pl-64">
      <div className="lg:p-6">
      {/* Header */}
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Profile and Links */}
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-medium">Your Name Here</h3>
              <p className="text-gray-400">Hello@Domain.com</p>
            </div>
            <button className="ml-auto px-4 py-1 bg-blue-600 text-white rounded-lg text-sm">
              Edit
            </button>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Company Website link</label>
              <input
                type="text"
                placeholder="Your Company Website link"
                className="w-full px-4 py-3 bg-white/[0.41] rounded-lg focus:outline-none text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Facebook Link</label>
              <input
                type="text"
                placeholder="Your Facebook Link"
                className="w-full px-4 py-3 bg-white/[0.41] rounded-lg focus:outline-none text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Company X Link</label>
              <input
                type="text"
                placeholder="Your Company X Link"
                className="w-full px-4 py-3 bg-white/[0.41] rounded-lg focus:outline-none text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Company Instagram Link</label>
              <input
                type="text"
                placeholder="Your Company Instagram Link"
                className="w-full px-4 py-3 bg-white/[0.41] rounded-lg focus:outline-none text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Linkedin Profile Link</label>
              <input
                type="text"
                placeholder="Your Linkedin Profile Link"
                className="w-full px-4 py-3 bg-white/[0.41] rounded-lg focus:outline-none text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Youtube Link</label>
              <input
                type="text"
                placeholder="Your Youtube Link"
                className="w-full px-4 py-3 bg-white/[0.41] rounded-lg focus:outline-none text-white placeholder-gray-400"
              />
            </div>

            {/* Email Section */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">My email Address</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#4182F9] bg-opacity-20 rounded-full flex items-center justify-center text-xl">
                  <img src={emailicon} />
                </div>
                <div>
                  <p>Hello@Domain.com</p>
                  <p className="text-sm text-gray-400">1 month ago</p>
                </div>
              </div>
              <button className="text-[#4182F9] bg-[#4182F9] bg-opacity-20 px-6 py-3 text-lg rounded-xl">+ Add Email Address</button>
            </div>
          </div>
        </div>

        {/* Right Column - Calendar */}
        <div className="space-y-6">
          {/* Calendar */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className='text-black'>March</span>
                <span className="text-black text-lg" >2021</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevMonth}
                  className="p-1 hover:bg-gray-100 rounded-full text-black"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-1 hover:bg-gray-100 rounded-full text-black"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <div key={index} className="text-black text-sm">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {previousMonthDays.map((day, index) => (
                <div key={`prev-${index}`} className="p-2 text-black">
                  {day}
                </div>
              ))}
              {days.map(day => (
                <div
                  key={day}
                  className={`p-2 text-black rounded-full ${
                    day === 13 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {day}
                </div>
              ))}
              {nextMonthDays.map((day, index) => (
                <div key={`next-${index}`} className="p-2 text-gray-400">
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="bg-[#001242] rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">September 7, 2018</h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-white/10 rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-1 hover:bg-white/10 rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700"></div>
              <div className="space-y-4 pl-8">
                {events.map(event => (
                  <div
                    key={event.id}
                    className="bg-purple-900 bg-opacity-50 p-4 rounded-lg"
                  >
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-gray-400">{event.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Save
        </button>
      </div>
    </div>
    </div>
  );
};

export default Branding;