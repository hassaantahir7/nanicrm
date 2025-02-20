import React from 'react';
import { MoreVertical } from 'lucide-react';

const performers = [
  {
    name: 'Mathilda Bell',
    salary: '$8,192,000',
    leads: 187,
    deals: 154,
    tasks: '28 Tasks Done',
    rate: '100%',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces',
  },
  {
    name: 'Marion Figueroa',
    salary: '$6,100,000',
    leads: 235,
    deals: 148,
    tasks: '21 Tasks Done',
    rate: '90%',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=faces',
  },
  {
    name: 'Lee Barrett',
    salary: '$4,220,000',
    leads: 365,
    deals: 126,
    tasks: '10 Tasks Done',
    rate: '75%',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=faces',
  },
  {
    name: 'Joseph Brooks',
    salary: '$1,628,000',
    leads: 458,
    deals: 110,
    tasks: '9 Tasks Done',
    rate: '60%',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=faces',
  },
];

const TopPerformance = () => {
  return (
    <div className="bg-[#001242] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-medium">Top Performance</h3>
          <p className="text-sm text-gray-400">Last 2 Weeks</p>
        </div>
        <button className="p-1">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
              <th className="pb-4 font-normal">No</th>
              <th className="pb-4 font-normal">Ref</th>
              <th className="pb-4 font-normal">Leads</th>
              <th className="pb-4 font-normal">Deals</th>
              <th className="pb-4 font-normal">Tasks</th>
              <th className="pb-4 font-normal">Rate</th>
            </tr>
          </thead>
          <tbody>
            {performers.map((performer, index) => (
              <tr key={index} className="text-sm">
                <td className="py-4">{index + 1}.</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={performer.avatar}
                      alt={performer.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{performer.name}</p>
                      <p className="text-gray-400">{performer.salary}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">{performer.leads}</td>
                <td className="py-4">{performer.deals}</td>
                <td className="py-4">{performer.tasks}</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-blue-500"
                        style={{
                          background: `conic-gradient(#3b82f6 ${parseInt(performer.rate)}%, transparent 0)`
                        }}
                      />
                    </div>
                    <span>{performer.rate}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopPerformance;