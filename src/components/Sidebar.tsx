import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, MessageCircle } from 'lucide-react'; // Imported Chat Icon
import logo from '/logo.png';

interface SidebarProps {
  onLinkClick?: () => void;
}

const menuItems = [
  { icon: '/icons/Dashboard.svg', label: 'Dashboard', path: '/' },
  { icon: '/icons/Profile.svg', label: 'My Profile', path: '/profile' },
  { icon: '/icons/branding.svg', label: 'Branding', path: '/branding' },
  { icon: '/icons/Marketing.svg', label: 'Marketing', path: '/marketing' },
  { icon: '/icons/Website.svg', label: 'Website', path: '/website' },
  { icon: '/icons/Task.svg', label: 'Daily Task', path: '/tasks' },
  { icon: '/icons/report.svg', label: 'Report', path: '/report' },
  { icon: '/icons/calendar.svg', label: 'Calendar', path: '/calendar' },
  { icon: '/icons/upload.svg', label: 'Upload Files', path: '/upload' },
];

const Sidebar = ({ onLinkClick }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="w-64 min-h-screen bg-[#001242] p-3 flex flex-col">
      <div className="flex items-center ">
        <Link to="/" className="flex items-center justify-center ">
          <img src={logo} alt="Logo" className='w-8/12 lg:w-full' />
        </Link>
      </div>

      <nav className="">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={onLinkClick}
                className={`flex items-center justify-between space-x-3 p-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-900 bg-opacity-50'
                    : 'hover:bg-blue-900 hover:bg-opacity-30'
                }`}
              >
                <div className="flex gap-3">
                  {typeof item.icon === 'string' ? (
                    <img src={item.icon} alt={item.label} className="w-5 h-5" />
                  ) : (
                    item.icon
                  )}
                  <span>{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-4 pt-4 lg:pt-6 border-t border-blue-900">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate('/login')}
        >
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-medium">Evana</h3>
            <p className="text-sm text-gray-400">Project Manager</p>
          </div>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
