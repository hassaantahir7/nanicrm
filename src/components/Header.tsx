import { Bell, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/profile': 'My Profile',
  '/branding': 'Branding',
  '/marketing': 'Marketing',
  '/website': 'Website',
  '/tasks': 'Daily Task',
  '/report': 'Report',
  '/calendar': 'Calendar',
  '/upload': 'Upload Files',
  '/profile/security': 'Account Settings',
  '/accounts': 'Account Settings',
  '/profile/edit': 'Account Settings',
  '/notifications': 'Account Settings',
};

function Header() {
  const location = useLocation();
  const currentPage = pageTitles[location.pathname] || 'Page';

  return (
    <>
      <header className="flex justify-between items-center mb-6 bg-[#001242] mt-16 px-4 lg:mt-0 py-3 rounded-xl">
        <h1 className="text-xl lg:text-2xl">{currentPage}</h1>
        <button className="p-2 rounded-lg bg-blue-900 bg-opacity-50">
          <ArrowRight className="w-5 h-5" />
        </button>
      </header>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-1 border-b-2 pb-2 lg:items-center mb-8">
        <div>
          <h1 className="text-2xl ">Welcome Amanda</h1>
          <p className="text-gray-400">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 text-gray-800 bg-white bg-opacity-90 rounded-lg w-64 focus:outline-none"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="p-2 bg-white bg-opacity-90 text-gray-800 rounded-lg">
            <Bell className="w-5 h-5" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces"
            alt="Profile"
            className="w-8 h-8 rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
