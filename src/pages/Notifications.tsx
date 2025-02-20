import React, { useState } from 'react';
import { ArrowRight, Settings, Star, Search, Image, Smile, Send, Circle, Paperclip } from 'lucide-react';
import Header from '../components/Header';

interface Message {
  id: number;
  sender: {
    name: string;
    avatar: string;
    starred?: boolean;
  };
  content: string;
  time: string;
}

interface ChatMessage {
  id: number;
  sender: {
    name: string;
    avatar: string;
  };
  content: string;
  time: string;
  tag?: string;
}

const messages: Message[] = [
  {
    id: 1,
    sender: {
      name: 'Helena Chavez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces',
      starred: true
    },
    content: 'How To Write Better Advertising Copy Examples',
    time: '11:52AM'
  },
  {
    id: 2,
    sender: {
      name: 'Sallie Wade',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces',
      starred: true
    },
    content: 'Recently I came across an exciting video on the internet video',
    time: '10:45AM'
  },
  {
    id: 3,
    sender: {
      name: 'Peter Patterson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=faces',
      starred: true
    },
    content: 'Consider the following scenario: it should serve to give you a clear',
    time: '10:11AM'
  },
  {
    id: 4,
    sender: {
      name: 'Blake Howard',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces',
      starred: true
    },
    content: 'When two people are working in cooperation each can stand',
    time: '08:33AM'
  },
  {
    id: 5,
    sender: {
      name: 'Devin Williams',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces',
      starred: true
    },
    content: 'Then once the testing was complete the person would have to return',
    time: '08:01PM'
  },
  {
    id: 6,
    sender: {
      name: 'Kyle Williamson',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=faces',
      starred: true
    },
    content: 'This concept, that there is no competition in your industry',
    time: '07:22AM'
  },
  {
    id: 7,
    sender: {
      name: 'Jay Morrison',
      avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=40&h=40&fit=crop&crop=faces',
      starred: true
    },
    content: 'he two people would continue doing so, along the full length of the wall',
    time: '12:20PM'
  },
];

const chatMessages: ChatMessage[] = [
  {
    id: 1,
    sender: {
      name: 'Helena Chavez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces'
    },
    content: 'Where To Look For Cheap Brochure Printing Services',
    time: '14 Aug 2018',
    tag: 'spotify'
  },
  {
    id: 2,
    sender: {
      name: 'System',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces'
    },
    content: 'Discussion from Dribbble Presentation project',
    time: '8:00PM'
  },
  {
    id: 3,
    sender: {
      name: 'User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces'
    },
    content: 'Ever wondered how some graphic designers always manage to produce',
    time: '8:20PM'
  },
  {
    id: 4,
    sender: {
      name: 'System',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces'
    },
    content: 'Freelance Design Tricks',
    time: '8:20PM'
  },
  {
    id: 5,
    sender: {
      name: 'User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces'
    },
    content: 'Successful businesses have many things in common, today we\'l look',
    time: '8:00 PM'
  },
  {
    id: 6,
    sender: {
      name: 'System',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces'
    },
    content: 'Attending a trade show can be a very effective method',
    time: '8:20PM'
  },
  {
    id: 7,
    sender: {
      name: 'User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces'
    },
    content: 'Some graphic designers always manage to produce',
    time: '8:00 PM'
  },
  {
    id: 8,
    sender: {
      name: 'System',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces'
    },
    content: 'UI Design Tricks',
    time: '8:20PM'
  }
];

const Notifications = () => {
  const [newMessage, setNewMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState<Message>(messages[0]);

  return (
    <div className="lg:pl-64">
        <div className="lg:p-6">
      {/* Header */}
      <Header />

      <div className="bg-[#8895B3] bg-opacity-50 rounded-xl">
        <div className="text-xl font-medium p-6">Messages</div>
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Chat List */}
          <div className="w-full lg:w-96">
            {/* Controls */}
            <div className="p-4 flex items-center justify-between space-x-4">
              <button className="px-4 py-2 bg-[#EEF2FC] text-[#001242] rounded-lg text-sm flex items-center space-x-2">
                <span>NEW CONVERSATION</span>
              </button>
              <button className="px-4 py-2 bg-white/10 rounded-lg text-sm flex items-center space-x-2">
                <span>SORT: A-Z</span>
              </button>
            </div>

            {/* Chat List */}
            <div className="space-y-2 p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedChat(message)}
                  className={`flex items-start space-x-3 p-4 rounded-lg cursor-pointer ${
                    selectedChat.id === message.id ? 'bg-[#FAFAFB]' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="relative">
                    <img
                      src={message.sender.avatar}
                      alt={message.sender.name}
                      className="w-10 h-10 rounded-full"
                    />
                    {message.sender.starred && (
                      <Circle className="w-2 h-2 rounded-full text-green-400 bg-green-400 absolute top-8 -right-0" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium truncate text-gray-800">{message.sender.name}</h3>
                      <span className="text-xs text-gray-900 whitespace-nowrap ml-2">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 truncate">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Chat Window */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-medium text-lg text-[#000000] ">Where To Look For Cheap Brochure Printing Services</h2>
                  <p className="text-sm text-gray-100">Discussion from Dribbble Presentation project</p>
                </div>
                <button className="p-2 text-gray-900 flex gap-1 items-center hover:bg-white/10 rounded-lg">
                  <Search className="w-5 h-5" />
                Search in history
                </button>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <span className="text-sm">14Aug 2018</span>
                <span className="px-4 py-2 font-semibold bg-[#FDFDFD] text-[#25BE70] rounded-lg text-sm">
                  Spotify
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {chatMessages.map((message) => {
        const isUser = message.sender.name === 'User';
        
        return (
          <div 
            key={message.id} 
            className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <img
              src={message.sender.avatar}
              alt={message.sender.name}
              className="w-8 h-8 rounded-full"
            />
            <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[70%]`}>
              <div 
                className={`rounded-lg py-2 px-4 ${
                  isUser 
                    ? 'bg-[#001242] text-white ml-auto rounded-tl-lg rounded-bl-lg rounded-tr-2xl rounded-br-none' 
                    : 'bg-[#FAFAFB] text-gray-900 rounded-tl-2xl rounded-bl-[0px] rounded-tr-lg rounded-br-lg'
                }`}
              >
                <p>{message.content}</p>
              </div>
              <div className="text-xs text-gray-200 mt-1">{message.time}</div>
            </div>
          </div>
        );
      })}
    </div>

            {/* Message Input */}
            <div className="p-4 bg-[#FAFAFB] mx-4 mb-2 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-[#FAFAFB] rounded-lg flex items-center">
                  <input
                    type="text"
                    placeholder="Add your message"
                    className="flex-1 px-4 py-3 text-gray-900 bg-transparent focus:outline-none"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <div className="flex items-center">
                    <button className="hover:bg-white/10 rounded-full">
                      <Smile className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </div>
                    <button className="hover:bg-white/10 rounded-full">
                    <Paperclip className='w-5 h-5 text-black'/>
                    </button>
                
                <button className="px-4 py-3 bg-[#5F81F7] rounded-lg hover:bg-blue-700 text-black transition-colors flex items-center space-x-2">
                  <span>Send</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Notifications;