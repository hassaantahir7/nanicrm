import React, { useState } from 'react';
import { ArrowRight, Settings } from 'lucide-react';
import Header from '../components/Header';

interface Task {
  id: number;
  title: string;
  progress: string;
  comments: number;
  attachments: number;
  status: string;
  assignee: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Budget and contract',
    progress: '0/3',
    comments: 0,
    attachments: 5,
    status: 'PENDING',
    assignee: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces',
    completed: false
  },
  {
    id: 2,
    title: 'Search for a UI kit',
    progress: '2/9',
    comments: 7,
    attachments: 3,
    status: 'PENDING',
    assignee: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=faces',
    completed: false
  },
  {
    id: 3,
    title: 'Design new dashboard',
    progress: '3/5',
    comments: 2,
    attachments: 2,
    status: 'Running',
    assignee: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=faces',
    completed: true
  },
  {
    id: 4,
    title: 'Design search page',
    progress: '4/8',
    comments: 8,
    attachments: 6,
    status: 'Running',
    assignee: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=faces',
    completed: true
  },
  {
    id: 5,
    title: 'Prepare HTML & CSS',
    progress: '0/2',
    comments: 1,
    attachments: 1,
    status: 'PENDING',
    assignee: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=faces',
    completed: false
  },
  {
    id: 6,
    title: 'Fix issues',
    progress: '5/9',
    comments: 2,
    attachments: 3,
    status: 'On Hold',
    assignee: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces',
    completed: true
  }
];

type FilterType = 'ALL' | 'DONE' | 'PENDING';

const DailyTask = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<FilterType>('ALL');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'DONE':
        return task.completed;
      case 'PENDING':
        return !task.completed;
      default:
        return true;
    }
  });

  const handleFilterClick = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    setTasks(prev => [...prev].sort((a, b) => {
      if (sortOrder === 'asc') {
        return b.title.localeCompare(a.title);
      }
      return a.title.localeCompare(b.title);
    }));
  };

  const handleTaskToggle = (taskId: number) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="lg:pl-64">
      <div className="lg:p-6">
        {/* Header */}
        <Header />
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${filter === 'ALL' ? 'bg-blue-600' : 'bg-white/10'}`}
            onClick={() => handleFilterClick('ALL')}
          >
            ALL
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${filter === 'DONE' ? 'bg-blue-600' : 'bg-white/10'}`}
            onClick={() => handleFilterClick('DONE')}
          >
            DONE
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${filter === 'PENDING' ? 'bg-blue-600' : 'bg-white/10'}`}
            onClick={() => handleFilterClick('PENDING')}
          >
            PENDING
          </button>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-gray-400">SORT:</span>
            <button
              onClick={toggleSort}
              className="px-4 py-2 bg-white/10 rounded-lg text-sm flex items-center gap-2"
            >
              A-Z
              <svg className={`w-4 h-4 transform ${sortOrder === 'desc' ? 'rotate-180' : ''} transition-transform`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="grid gap-4">
          {filteredTasks.map(task => (
            <div key={task.id} className="bg-[#001242] border border-[#F8F8F8] rounded-xl p-3">
              <div className="flex flex-wrap items-center gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskToggle(task.id)}
                  className="w-5 h-5 rounded border-gray-600"
                />
                <span className="flex-1 min-w-[200px]">{task.title}</span>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm text-gray-400">{task.progress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm text-gray-400">{task.comments}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" strokeWidth="2" />
                    </svg>
                    <span className="text-sm text-gray-400">{task.attachments}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${task.status === 'Running' ? 'bg-blue-500/20 text-blue-400' :
                    task.status === 'On Hold' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                    {task.status}
                  </span>
                  <img src={task.assignee} alt="Assignee" className="w-8 h-8 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyTask;





