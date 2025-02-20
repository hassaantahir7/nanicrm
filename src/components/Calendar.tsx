import React from 'react';
import { MoreVertical } from 'lucide-react';

const Calendar = () => {
  const days = ['3', '4', '5', '6', '7', '8'];
  const events = [
    { id: 1, title: 'UI Motion', time: '10:00am - 12:00pm' },
    { id: 2, title: 'UI Design', time: '12:00pm - 01:00pm' },
  ];

  return (
    <div className="bg-[#001242] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">September</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm bg-white text-[#512F90] px-4 py-1.5 rounded-[12px]">+ Add Task</span>
        </div>
      </div>

      <div className="flex justify-between mb-6 border-b border-white pb-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index === 1 ? 'bg-[#512F90] rounded-xl w-8 h-14 flex items-center justify-center' : ''
            }`}
          >
            <span className="text-sm font-bold">{day}</span>
            <span className="text-xs text-gray-200">
              {['mon', 'tue', 'wed', 'thu', 'fri', 'sat'][index]}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{event.title}</h4>
              <button className="p-1">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-400">{event.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;