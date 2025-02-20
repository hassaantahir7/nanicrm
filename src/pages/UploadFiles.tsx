import React, { useState } from 'react';
import { ArrowRight, Upload as UploadIcon, LayoutGrid, List, ChevronDown } from 'lucide-react';
import Header from '../components/Header';

type ViewMode = 'list' | 'grid';
type SortOrder = 'a-z' | 'z-a' | 'newest' | 'oldest' | 'size';

interface FileItem {
  id: string;
  name: string;
  size: string;
  type: string;
  icon: string;
  assignedTo: string;
}

const files: FileItem[] = [
  {
    id: '1',
    name: 'JOtask web UI kit.sketch',
    size: '162 Mb',
    type: 'sketch',
    icon: 'https://cdn-icons-png.flaticon.com/512/5611/5611129.png',
    assignedTo: 'Designer'
  },
  {
    id: '2',
    name: 'User stories.docx',
    size: '1.2 Mb',
    type: 'word',
    icon: 'https://cdn-icons-png.flaticon.com/512/281/281760.png',
    assignedTo: 'Employee'
  },
  {
    id: '3',
    name: 'Budget estimates',
    size: '1.2Mb',
    type: 'pdf',
    icon: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
    assignedTo: 'Employee'
  },
  {
    id: '4',
    name: 'Additional materials',
    size: '24 Files',
    type: 'folder',
    icon: 'https://cdn-icons-png.flaticon.com/512/716/716784.png',
    assignedTo: 'Manager'
  },
  {
    id: '5',
    name: 'Web Presentation.pdf',
    size: '28.9 Mb',
    type: 'pdf',
    icon: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
    assignedTo: 'Employee'
  },
  {
    id: '6',
    name: 'Logo and branding.ai',
    size: '10.2 Mb',
    type: 'ai',
    icon: 'https://cdn-icons-png.flaticon.com/512/5611/5611016.png',
    assignedTo: 'Designer'
  },
  {
    id: '7',
    name: 'Converted files.psd',
    size: '16.2Gb',
    type: 'psd',
    icon: 'https://cdn-icons-png.flaticon.com/512/5611/5611024.png',
    assignedTo: 'Manager'
  },
  {
    id: '8',
    name: 'Presentation Invest.pptx',
    size: '3.6Mb',
    type: 'pptx',
    icon: 'https://cdn-icons-png.flaticon.com/512/281/281761.png',
    assignedTo: 'Employee'
  }
];

const UploadFiles = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortOrder, setSortOrder] = useState<SortOrder>('a-z');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop here
  };

  const sortedFiles = [...files].sort((a, b) => {
    switch (sortOrder) {
      case 'a-z':
        return a.name.localeCompare(b.name);
      case 'z-a':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="lg:pl-64">
        <div className="lg:p-6">
      {/* Header */}
     <Header />

      {/* Controls */}
      <div className="p-1">
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list' ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid' ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Upload Files
            </button>
            <div className="relative">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg">
                <span>SORT: {sortOrder.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Sort dropdown menu would go here */}
            </div>
          </div>
        </div>

        {/* Files Grid */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3' : 'space-y-4'}>
          {sortedFiles.map((file) => (
            <div
              key={file.id}
              className={`bg-[#001242] border rounded-xl p-6 ${
                viewMode === 'list' ? 'flex items-center justify-between' : ''
              }`}
            >
              <div className={viewMode === 'list' ? 'flex items-center space-x-4 flex-1' : ''}>
                <img src={file.icon} alt={file.type} className="w-12 h-12 mb-4" />
                <div>
                  <h3 className="font-medium mb-1">{file.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{file.size}</span>
                    <span className="text-sm text-gray-400">{file.assignedTo}</span>
                  </div>
                </div>
              </div>
              <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-xl p-12 w-[600px] text-center relative"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <div className={`border-2 border-dashed border-gray-300 rounded-lg p-12 ${
              isDragging ? 'bg-gray-50' : ''
            }`}>
              <div className="flex flex-col items-center">
                <UploadIcon className="w-16 h-16 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Drag your files here to upload</p>
                <p className="text-gray-400">or click to browse</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default UploadFiles;