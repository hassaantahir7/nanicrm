import React, { useState } from 'react';
import { ArrowRight, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';

type ViewType = 'Month' | 'Week';
type Event = {
  id: string;
  title: string;
  time: string;
  date: number;
  color: string;
};

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2018, 8, 1)); // September 2018
  const [view, setView] = useState<ViewType>('Month');

  // Sample events data
  const events: Event[] = [
    { id: '1', title: 'Meeting', time: '10:00-11:00', date: 27, color: 'bg-cyan-400' },
    { id: '2', title: 'Design new pages', time: '10:00-11:00', date: 30, color: 'bg-green-400' },
    { id: '3', title: 'Design new UI\nand check sales', time: '8:00-13:00', date: 5, color: 'bg-yellow-400' },
    { id: '4', title: 'Client Meeting', time: '10:00-11:00', date: 10, color: 'bg-cyan-400' },
    { id: '5', title: 'Visit course', time: '10:00-11:00', date: 15, color: 'bg-pink-400' },
    { id: '6', title: 'Visit course', time: '10:00-11:00', date: 20, color: 'bg-purple-400' },
    { id: '7', title: 'Meeting', time: '10:00-11:00', date: 29, color: 'bg-gray-600' },
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const generateCalendarDays = () => {
    const days = [];
    const prevMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    // Previous month days
    for (let i = prevMonthDays - 1; i >= 0; i--) {
      days.push({
        date: lastDayOfPrevMonth - i,
        isCurrentMonth: false,
        events: []
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true,
        events: events.filter(event => event.date === i)
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        isCurrentMonth: false,
        events: []
      });
    }

    return days;
  };

  return (
    <div className="lg:pl-64">
        <div className="lg:p-6">
      {/* Header */}
      <Header />

      {/* Calendar Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              view === 'Month' ? 'bg-white bg-opacity-10' : ''
            }`}
            onClick={() => setView('Month')}
          >
            Month
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              view === 'Week' ? 'bg-white bg-opacity-10' : ''
            }`}
            onClick={() => setView('Week')}
          >
            Week
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-lg">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <button className="px-4 py-2 bg-white bg-opacity-10 rounded-lg text-sm">
          Today
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-[#001242] rounded-xl p-6">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 mb-4">
          {weekDays.map(day => (
            <div key={day} className="text-center text-sm text-gray-400">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {generateCalendarDays().map((day, index) => (
            <div
              key={index}
              className={`min-h-[120px] p-2 rounded-lg ${
                day.isCurrentMonth ? 'bg-[#0a1f5c]' : 'bg-[#0a1f5c] bg-opacity-50'
              }`}
            >
              <div className="text-sm mb-2">{day.date}</div>
              <div className="space-y-1">
                {day.events.map(event => (
                  <div
                    key={event.id}
                    className={`${event.color} p-2 rounded-lg text-xs`}
                  >
                    <div className="font-medium">{event.title}</div>
                    <div>{event.time}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default CalendarPage;