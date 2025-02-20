import { UserCircle, Settings, BellIcon, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom';


const SmallSideBar = () => {

  const navigate = useNavigate();
const handleNavigate = (path: string) => {
    navigate(path);
  }; 
  return (
    <>
    {/* Sidebar */}
    <div className="w-80 flex flex-col justify-between gap-4">
    <div className="bg-[#001242] bg-opacity-50 rounded-xl p-6 space-y-4">
      <button
        onClick={() => handleNavigate('/profile/edit')}
        className="w-full flex items-center space-x-3 p-3 bg-white bg-opacity-10 rounded-lg"
      >
        <UserCircle className="w-5 h-5" />
        <div className="flex-1 text-left">
          <div className="text-sm font-medium">General Information</div>
          <div className="text-xs text-gray-400">Profile info, name & language</div>
        </div>
      </button>

      <button
        onClick={() => handleNavigate('/accounts')}
        className="w-full flex items-center space-x-3 p-3 hover:bg-white hover:bg-opacity-5 rounded-lg"
      >
        <Settings className="w-5 h-5" />
        <div className="flex-1 text-left">
          <div className="text-sm font-medium">Account & Apps</div>
          <div className="text-xs text-gray-400">Connected tools & services</div>
        </div>
      </button>

      <button className="w-full flex items-center space-x-3 p-3 hover:bg-white hover:bg-opacity-5 rounded-lg"
      onClick={() => handleNavigate('/profile/security')}>
        <Lock className="w-5 h-5" />
        <div className="flex-1 text-left">
          <div className="text-sm font-medium">Security</div>
          <div className="text-xs text-gray-400">Password & security questions</div>
        </div>
      </button>

      <button className="w-full flex items-center space-x-3 p-3 hover:bg-white hover:bg-opacity-5 rounded-lg"
      onClick={() => handleNavigate('/notifications')}>
        <BellIcon className="w-5 h-5" />
        <div className="flex-1 text-left">
          <div className="text-sm font-medium">Notifications</div>
          <div className="text-xs text-gray-400">Set your email notifications</div>
        </div>
      </button>
    </div>

    <button className="flex items-center gap-1 p-8 rounded-lg space-x-2 bg-[#FEFEFE] text-black transition-colors">
      <BellIcon className="w-5 h-5" />
      <div className="text-sm flex flex-col items-start">Deactivate account
        <span className='text-[#CDCCD3]'>Hide & disable current account</span>
      </div>
    </button>
  </div>
  </>
  )
}

export default SmallSideBar