import React, { useState } from 'react';
import { Bell, Settings, UserCircle, Lock, BellIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SmallSideBar from '../components/SmallSideBar';

interface AccountFormData {
  facebook: string;
  youtube: string;
  twitter: string;
  instagram: string;
}

const AccountsAndApps = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AccountFormData>({
    facebook: '',
    youtube: '',
    twitter: '',
    instagram: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="lg:pl-64">
      <div className="lg:p-6">
        {/* Header */}
        <Header />


        <div className="flex gap-6 bg-[#8895B3]/[0.47] flex-col lg:flex-row rounded-xl p-3 lg:p-8">
          {/* Main Form Section */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6">Account & Apps</h3>
            <div className="">
              <div className="space-y-6">
                {/* Facebook */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Account</label>
                    <input
                      type="text"
                      name="facebook"
                      value="Facebook"
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Link</label>
                    <input
                      type="text"
                      name="facebookLink"
                      value="www.facebook.com"
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      readOnly
                    />
                  </div>
                </div>

                {/* YouTube */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Account</label>
                    <input
                      type="text"
                      name="youtube"
                      value="Youtube"
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Link</label>
                    <input
                      type="text"
                      name="youtubeLink"
                      value="www.youtube.com"
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      readOnly
                    />
                  </div>
                </div>

                {/* Twitter */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Account</label>
                    <input
                      type="text"
                      name="twitter"
                      value="Twitter"
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Link</label>
                    <input
                      type="text"
                      name="twitterLink"
                      value="www.twitter.com"
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      readOnly
                    />
                  </div>
                </div>

                {/* Instagram */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Account</label>
                    <input
                      type="text"
                      name="instagram"
                      value="Instagram"
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Link</label>
                    <input
                      type="text"
                      name="instagramLink"
                      value="www.instagram.com"
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 mt-8">
                <button className="px-6 py-2 bg-[#6082F3] text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Update Settings
                </button>
                <button className="px-6 py-2 bg-[#EEF3FC] text-black rounded-lg hover:bg-opacity-20 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <SmallSideBar />
        </div>
      </div>
    </div>
  );
};

export default AccountsAndApps;