import React from 'react';
import { MoreVertical, Plus } from 'lucide-react';

const tasks = [
  { id: 1, title: 'Marketing dashboard app', completed: false },
  { id: 2, title: 'Create new version 4.0', completed: false },
  { id: 3, title: 'User Testing', completed: true },
  { id: 4, title: 'Design system', completed: true },
  { id: 5, title: 'Awesome task', completed: false },
  { id: 6, title: 'Marketing dashboard concept', completed: true },
];

const TaskList = () => {
  return (
    <div className="bg-[#001242] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-medium">Tasks</h3>
          <p className="text-sm text-gray-400">4 of 8 remaining</p>
        </div>
        <button className="p-1">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              className="w-4 h-4 border border-white rounded bg-transparent"
              readOnly
            />
            <span className={task.completed ? 'line-through text-gray-400' : ''}>
              {task.title}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex bg-white rounded-lg">
        <input
          type="text"
          placeholder="Add new todo"
          className="flex-1 focus:outline-none focus:border-blue-500 px-2 rounded-lg text-black"
        />
        <button className="ml-2 bg-[#512F90] p-2 rounded-tr-md rounded-br-md">
          <h1 className='text-[14px] font-light px-1'>Add</h1>
        </button>
      </div>
    </div>
  );
}

export default TaskList;