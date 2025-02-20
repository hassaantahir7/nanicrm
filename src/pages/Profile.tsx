import React, { useState } from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import {countries} from 'countries-list';
import moment from 'moment-timezone';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  language: string;
  timeZone: string;
  email: string;
  companyWebsite: string;
  instagramLink: string;
  facebookLink: string;
  xLink: string;
  linkedinLink: string;
  contactNumber: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: '',
    lastName: '',
    gender: '',
    country: '',
    language: '',
    timeZone: '',
    email: 'Hello@Domain.com',
    companyWebsite: '',
    instagramLink: '',
    facebookLink: '',
    xLink: '',
    linkedinLink: '',
    contactNumber: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    navigate('/profile/edit');
  };

  // Transform countries into select options
  const countryOptions = Object.entries(countries).map(([code, country]) => ({
    value: code,
    label: country.name
  }));
  
  const timezoneOptions = moment.tz.names().map(zone => ({
    value: zone,
    label: `${zone} (${moment.tz(zone).format('Z')})`
  }));


  return (
    <div className="pl-0 lg:pl-64">
      <div className="p-0 lg:p-6">
        {/* Header */}
        <Header />
        {/* Profile Section */}
        <div className="rounded-xl lg:p-8">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold">Your Name Here</h2>
                <p className="text-gray-400">Hello@Domain.com</p>
              </div>
            </div>
            <button
              onClick={handleEditClick}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Edit
            </button>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your First Name"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm mb-2">Gender</label>
                <select
                  name="gender"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none appearance-none"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Language */}
              <div>
                <label className="block text-sm mb-2">Language</label>
                <select
                  name="language"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none appearance-none"
                  value={formData.language}
                  onChange={handleInputChange}
                >
                  <option value="">Your Language</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {/* Nick Name */}
              <div>
                <label className="block text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your Nick Name"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm mb-2">Country</label>
                <select
                  name="country"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none appearance-none"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="">Your Country Name</option>
                  {countryOptions.map(country => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Zone */}
              <div>
                <label className="block text-sm mb-2">Time Zone</label>
                <select
                  name="timeZone"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none appearance-none"
                  value={formData.timeZone}
                  onChange={handleInputChange}
                >
                  <option value="">Your Time Zone</option>
                  {timezoneOptions.map(zone => (
                    <option key={zone.value} value={zone.value}>
                      {zone.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="mt-8">
            <h3 className="text-lg font-normal mb-4">My email Address</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-[#4182F9] bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-xl">@</span>
              </div>
              <div>
                <p className="font-light">Hello@Domain.com</p>
                <p className="text-sm font-light text-gray-400">1 month ago</p>
              </div>
            </div>
            <button className="text-blue-500 bg-[#4182F9] bg-opacity-20 px-5 py-3 rounded-xl text-sm">+ Add Email Address</button>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="space-y-6">
              {/* Company Website */}
              <div>
                <label className="block text-sm mb-2">Company website link</label>
                <input
                  type="text"
                  name="companyWebsite"
                  placeholder="Your Company Website link"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none"
                  value={formData.companyWebsite}
                  onChange={handleInputChange}
                />
              </div>

              {/* Facebook */}
              <div>
                <label className="block text-sm mb-2">Facebook Link</label>
                <input
                  type="text"
                  name="facebookLink"
                  placeholder="Your Facebook Link"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none"
                  value={formData.facebookLink}
                  onChange={handleInputChange}
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block text-sm mb-2">LinkedIn Profile Link</label>
                <input
                  type="text"
                  name="linkedinLink"
                  placeholder="Your LinkedIn Profile Link"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none"
                  value={formData.linkedinLink}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-6">
              {/* Instagram */}
              <div>
                <label className="block text-sm mb-2">Instagram Link</label>
                <input
                  type="text"
                  name="instagramLink"
                  placeholder="Your Instagram Link"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none"
                  value={formData.instagramLink}
                  onChange={handleInputChange}
                />
              </div>

              {/* X (Twitter) */}
              <div>
                <label className="block text-sm mb-2">X Link</label>
                <input
                  type="text"
                  name="xLink"
                  placeholder="Your X Link"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none"
                  value={formData.xLink}
                  onChange={handleInputChange}
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-sm mb-2">YouTube Link</label>
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Your YouTube Link"
                  className="w-full px-4 py-3 bg-[#404F76] border rounded-lg focus:outline-none"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <button className="px-8 py-2 bg-[#4182F9] text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;