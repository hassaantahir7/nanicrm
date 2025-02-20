import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AccountsAndApps from './pages/AccountsAndApps';
import Website from './pages/Website';
import Marketing from './pages/Marketing';
import DailyTask from './pages/DailyTask';
import Report from './pages/Report';
import Branding from './pages/Branding';
import CalendarPage from './pages/CalendarPage';
import UploadFiles from './pages/UploadFiles';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import logo from '/public/logo.png';
import NewsLetterPage from './pages/NewsLetterPage';
import FloatingChatButton from './components/FloatingChatButton';
import { Menu } from 'lucide-react';
import Notifications from './pages/Notifications';
import Security from './pages/Security';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Define auth-related pages where sidebar should be hidden
  const authPages = ['/login', '/signup', '/newsletter', '/forgot-password'];
  const isAuthPage = authPages.includes(location.pathname);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen text-white">
      {/* Show mobile header only when sidebar is present */}
      {!isAuthPage && (
        <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#001242] z-50 flex items-center px-4 border-b border-blue-900">
          <button onClick={toggleSidebar} className="p-2 hover:bg-blue-900 rounded-lg transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1 flex justify-center">
           <img src={logo} className='w-28'/>
          </div>
        </div>
      )}

      {/* Overlay for mobile sidebar */}
      {!isAuthPage && isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeSidebar}></div>
      )}

      {/* Sidebar */}
      {!isAuthPage && (
        <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}>
          <Sidebar onLinkClick={closeSidebar} />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/security" element={<Security />} />
          <Route path="/accounts" element={<AccountsAndApps />} />
          <Route path="/website" element={<Website />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/tasks" element={<DailyTask />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/newsletter" element={<NewsLetterPage />} />
          <Route path="/report" element={<Report />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/upload" element={<UploadFiles />} />
          <Route path="/notifications" element={<Notifications />} />  
          <Route path="/branding" element={<Branding />} />
        </Routes>
      </main>
      {/*loatingChatButton here, only show on non-auth pages */}
      {!isAuthPage && <FloatingChatButton />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
