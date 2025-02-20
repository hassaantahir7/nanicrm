import React, { useState } from 'react';
import { Bell, Settings, Upload, UserCircle, Lock, Bell as BellIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SmallSideBar from '../components/SmallSideBar';

interface EditProfileFormData {
  fullName: string;
  role: string;
  email: string;
  phone: string;
  addressLine: string;
  language: string;
}

const EditProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EditProfileFormData>({
    fullName: 'Eliza Gray',
    role: 'Developer',
    email: '',
    phone: '',
    addressLine: '',
    language: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="lg:pl-64">
      <div className="lg:p-6">
        {/* Header */}
        <Header />

        <div className="flex bg-[#8895B3]/[0.47] flex-col lg:flex-row gap-6 rounded-xl p-8">
          {/* Main Form Section */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6">General Information</h3>
            <div className="">
              {/* Profile Image Upload */}
              <div className="mb-8">
                <div className="w-full h-48 border-2 border-dashed bg-[#FEFEFE] rounded-lg flex flex-row gap-3 items-center justify-center">
                  <Upload className="w-6 h-6 mb-2 text-[#898989]" />
                  <span className="text-sm text-[#898989]">UPLOAD IMAGE</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm mb-2">Full name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent focus:outline-none"
                      placeholder="Start typing..."
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm mb-2">Role</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent focus:outline-none"
                      placeholder="Start typing..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent focus:outline-none"
                      placeholder="Start typing..."
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent focus:outline-none"
                      placeholder="Start typing..."
                    />
                  </div>
                </div>

                {/* Address Line */}
                <div>
                  <label className="block text-sm mb-2">Address line</label>
                  <input
                    type="text"
                    name="addressLine"
                    value={formData.addressLine}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-white bg-transparent focus:outline-none"
                    placeholder="Start typing..."
                  />
                </div>

                {/* Language */}
                <div>
                  <label className="block text-sm mb-2">Language</label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-white bg-transparent focus:outline-none appearance-none"
                  >
                    <option value="">Select language</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-12">
                <div className="space-x-4">
                  <button className="px-6 py-2 bg-[#6082F3] text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Update Settings
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2 bg-[#EEF3FC] rounded-lg text-black hover:bg-opacity-20 transition-colors"
                  >
                    Cancel
                  </button>
                </div>

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

export default EditProfile;