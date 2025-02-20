import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingChatButton = () => {
  const handleChatClick = () => {
    // Add your chat functionality here
    console.log('Chat button clicked');
  };

  return (
    <button 
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-gray-100 hover:bg-gray-300 
                 rounded-full shadow-lg flex items-center justify-center 
                 transition-all duration-200 transform hover:scale-105
                 z-50 focus:outline-none focus:ring-2 focus:ring-gray-400 
                 focus:ring-offset-2"
    >
      <MessageCircle className="w-6 h-6 text-[#001242]" />
    </button>
  );
};

export default FloatingChatButton;