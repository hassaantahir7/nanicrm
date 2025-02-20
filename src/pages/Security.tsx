import React, { useState } from 'react';
import { Bell, Settings, UserCircle, Lock, BellIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SmallSideBar from '../components/SmallSideBar';

interface SecurityFormData {
  currentPassword: string;
  changedPassword: string;
  securityQuestions: {
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
  };
}

const Security = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SecurityFormData>({
    currentPassword: '',
    changedPassword: '',
    securityQuestions: {
      question1: '',
      answer1: '',
      question2: '',
      answer2: '',
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('question') || name.startsWith('answer')) {
      setFormData(prev => ({
        ...prev,
        securityQuestions: {
          ...prev.securityQuestions,
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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
            <h3 className="text-xl font-semibold mb-6">Security</h3>
            <div className="space-y-8">
              {/* Password Section */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Changed Password</label>
                  <input
                    type="password"
                    name="changedPassword"
                    value={formData.changedPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                    placeholder="Enter new password"
                  />
                </div>
              </div>

              {/* Security Questions Section */}
              <div>
                <h4 className="text-lg font-medium mb-4">Security Questions</h4>
                
                {/* Question 1 */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm mb-2">Question #1</label>
                    <input
                      type="text"
                      name="question1"
                      value={formData.securityQuestions.question1}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      placeholder="Enter security question"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Answer</label>
                    <input
                      type="text"
                      name="answer1"
                      value={formData.securityQuestions.answer1}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      placeholder="Enter your answer"
                    />
                  </div>
                </div>

                {/* Question 2 */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Question #2</label>
                    <input
                      type="text"
                      name="question2"
                      value={formData.securityQuestions.question2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      placeholder="Enter security question"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Answer</label>
                    <input
                      type="text"
                      name="answer2"
                      value={formData.securityQuestions.answer2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-white bg-transparent"
                      placeholder="Enter your answer"
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

export default Security;